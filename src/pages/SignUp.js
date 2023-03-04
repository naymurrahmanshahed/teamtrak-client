import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { useSignup } from "../hooks/useSignup";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { Signup, loading, error } = useSignup();

  const handleSignup = async (e) => {
    e.preventDefault();

    // user signup

    await Signup(email, password);
  };
  return (
    <form
      onSubmit={handleSignup}
      className="login-form flex flex-col gap-5 py-20  mx-auto max-w-sm "
    >
      <span className="text-center">
        <SectionTitle SectionTitle={"Sign up"} />
      </span>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="email"
          className=" cursor-pointer hover:text-teal-400 duration-300 "
        >
          Enter Your Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="hello@react.dev"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=" bg-transparent border border-gray-500 py-3 px-5 outline-none rounded-xl focus:border-teal-400 duration-300"
        />
      </div>
      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="password"
          className=" cursor-pointer hover:text-teal-400 duration-300 "
        >
          Enter Your Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className=" bg-transparent border border-gray-500 py-3 px-5 outline-none rounded-xl focus:border-teal-400 duration-300"
        />
      </div>
      <button
        disabled={loading}
        type="submit"
        className="bg-teal-400 text-gray-900 py-3 rounded-xl hover:bg-teal-600 duration-300   "
      >
        Sign up
      </button>
      {error && <p className="text-rose-500">*{error}</p>}
    </form>
  );
};

export default SignUp;
