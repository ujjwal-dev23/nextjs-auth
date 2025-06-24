"use client";

import { useState } from "react";
import Link from "next/link";

function LoginPage() {
  const [user, setUser] = useState({
    password:"",
    username:"",
  })

  const onLogin = async () => {}

  return (
    <div className="flex flex-col text-white justify-center items-center w-full h-screen">
      <h1>Login</h1>
      <label htmlFor="username">username</label>
      <input type="text" id="username" value={user.username} onChange={(e) => setUser({...user, username:e.target.value})} placeholder="Username" />
      <label htmlFor="password">password</label>
      <input type="text" id="password" value={user.password} onChange={(e) => setUser({...user, password:e.target.value})} placeholder="Password" />
      <button
      onClick={onLogin}
      >Login</button>
      <Link href="/signup">Sign Up</Link>
    </div>
  )
}

export default LoginPage
