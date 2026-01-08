import React, { use } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router";

const SocialLogin = () => {
  const { user, googleSignIn, githubSignIn } = use(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    console.log("sing in with google");
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert("Google Sign In Successful");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
  };


  const handleGithubSignIn = () => {
    console.log("sing in with Github");
    githubSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert("Github Sign In Successful");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
  };


  return (
    <div>
      <h2 className="font-bold mb-5">Login With</h2>
      {user ? (
        <div className="flex items-center gap-2">
          <img src={user.photoURL} className="w-8 rounded-full" />
          <span>{user.displayName}</span>
        </div>
      ) : (
        <div className="space-y-3">
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-secondary btn-outline w-full"
          >
            <FcGoogle size={24} /> Login with Google
          </button>
          <button onClick={handleGithubSignIn} className="btn btn-outline btn-primary w-full">
            <FaGithub size={24} /> Login with Github
          </button>
        </div>
      )}
    </div>
  );
};

export default SocialLogin;
