import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const creationTime = result.user.metadata.creationTime;
        const newUser = { name, email, creationTime };

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: "Congratulations!",
                text: "User sign up successfully.",
                icon: "success",
                confirmButtonText: "Ok",
              });
              form.reset();
              navigate('/')
            }
          });
      })
      .catch((Error) => {
        console.log(Error.code);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero bg-base-100 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Welcome to Espresso Emporium! Create your personal account to
              unlock member-only perks—exclusive deals, early access to new
              brews, and a faster checkout experience. Whether you&apos;re a
              cappuccino connoisseur or an espresso enthusiast, your profile
              keeps your favorite drinks just a click away. Signing up is quick,
              simple, and deliciously rewarding.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="UserName"
                  name="name"
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  name="email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
              <p className="text-sm text-center">
                Already have an account ? Please{" "}
                <Link to={"/login"} className="underline text-red-500">
                  Login
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
