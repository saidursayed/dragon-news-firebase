import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const ForgetPassword = () => {
  const { resetEmailPassword } = use(AuthContext);
  const handleForgotPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    resetEmailPassword(email)
      .then(() => {
        // Password reset email sent!
        // ..
        alert("Reset link sent to your email");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl px-3 py-6">
        <h2 className="font-semibold text-2xl text-center">Reset Password</h2>
        <form onSubmit={handleForgotPassword} className="card-body">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email Address</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Enter your registered email"
              required
            />

            {/* {error && <p className="text-red-400 text-xs">{error}</p>} */}
            <button type="submit" className="btn btn-neutral mt-4">
              Reset Your Password
            </button>
            <p className="font-semibold text-center pt-5">
              Already Have An Account?{" "}
              <Link className="text-secondary" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
