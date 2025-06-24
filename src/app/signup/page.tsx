"use client";

import { useState } from "react";
import Link from "next/link";

function SignupPage() {
  const [user, setUser] = useState({
    email:"",
    password:"",
    username:"",
  })

  const onSignup = async () => {}

  return (
    <div className="flex flex-col text-white justify-center items-center w-full h-screen">
      <h1>Signup</h1>
      <label htmlFor="username">username</label>
      <input type="text" id="username" value={user.username} onChange={(e) => setUser({...user, username:e.target.value})} placeholder="Username" />
      <label htmlFor="email">email</label>
      <input type="text" id="email" value={user.email} onChange={(e) => setUser({...user, email:e.target.value})} placeholder="Email" />
      <label htmlFor="password">password</label>
      <input type="text" id="password" value={user.password} onChange={(e) => setUser({...user, password:e.target.value})} placeholder="Password" />
      <button
      onClick={onSignup}
      >Sign Up</button>
      <Link href="/login">Login</Link>
    </div>
  )
}

export default SignupPage
