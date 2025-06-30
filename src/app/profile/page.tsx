"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function ProfilePage() {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success(`Logged Out`);
      router.push("/login");
    } catch (error: any) {
      toast.error(`Error while logging out`);
    }
  };

  return (
    <div className="flex flex-col text-gray-100 justify-center items-center w-full h-screen">
      <h1 className="text-3xl font-bold mb-4 text-gray-300">Profile</h1>
      <div className="flex flex-col p-4 bg-gray-900 rounded-md border border-gray-800 border-t-gray-700">
        Test
        <button
          onClick={logout}
          className="cursor-pointer p-2 mt-2 bg-gray-400 text-gray-900 rounded-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
