import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignInUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        const lastSignInTime = result.user.metadata.lastSignInTime;
        const updateInfo = { email, lastSignInTime };
        fetch(`http://localhost:5000/users`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: "Congratulations!",
                text: "User sign in successfully.",
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
            <h1 className="text-5xl font-bold">Login Now!</h1>
            <p className="py-6">
              Already part of our coffee family? Sign in to pick up right where
              you left off—whether it&apos;s your morning latte order or
              browsing our fresh roast arrivals. Secure, fast, and hassle-free,
              logging in gets you closer to your perfect cup. Your coffee
              journey starts here, one sip at a time.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignInUser} className="card-body">
              <fieldset className="fieldset">
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
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
              <p className="text-sm text-center">
                Already have an account ? Please{" "}
                <Link to={"/register"} className="underline text-red-500">
                  Register
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

export default Login;
