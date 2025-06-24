"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

function SignupPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const router = useRouter();

  const onSignup = async () => {
    try {
      if (buttonDisabled) return;
      await axios.post("/api/users/signup", user);
      toast.success("Signed up successfully");
      router.push("/login");
    } catch (error: any) {
      toast.error("Error while signing up");
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col text-gray-100 justify-center items-center w-full h-screen">
      <h1 className="text-3xl font-bold mb-4 text-gray-300">Signup</h1>
      <div className="flex flex-col p-4 bg-gray-900 rounded-md border border-gray-800 border-t-gray-700">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="p-2 my-2 outline-solid outline-gray-700 rounded-md"
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="Username"
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          className="p-2 my-2 outline-solid outline-gray-700 rounded-md"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          className="p-2 my-2 outline-solid outline-gray-700 rounded-md"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
        />
        <button
          className="cursor-pointer p-2 mt-2 bg-gray-400 text-gray-900 rounded-md"
          onClick={onSignup}
        >
          {buttonDisabled ? "Enter fields" : "Sign Up"}
        </button>
      </div>
      <Link
        href="/login"
        className="my-4 bg-gray-900 px-3 py-1 rounded-md border border-gray-800 border-t-gray-700"
      >
        Login
      </Link>
    </div>
  );
}

export default SignupPage;
