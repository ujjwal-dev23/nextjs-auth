"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const onLogin = async () => {
    try {
      const response = await axios.post("/api/users/login", user);
      if (response.status === 200) {
        toast.success("Logged in successfully");
        router.push("/");
      }
    } catch (error: any) {
      toast.error("Login failed");
    }
  };

  useEffect(() => {
    if (user.password.length > 0 && user.username.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col text-gray-100 justify-center items-center w-full h-screen">
      <h1 className="text-3xl font-bold mb-4 text-gray-300">Login</h1>
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
          disabled={buttonDisabled}
          className="cursor-pointer p-2 mt-2 bg-gray-400 text-gray-900 rounded-md"
          onClick={onLogin}
        >
          Login
        </button>
      </div>
      <Link
        href="/signup"
        className="my-4 bg-gray-900 px-3 py-1 rounded-md border border-gray-800 border-t-gray-700"
      >
        Sign Up
      </Link>
    </div>
  );
}

export default LoginPage;
