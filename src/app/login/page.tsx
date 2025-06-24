"use client";

import { useState } from "react";
import Link from "next/link";

function LoginPage() {
  const [user, setUser] = useState({
    password: "",
    username: "",
  });

  const onLogin = async () => {};

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
