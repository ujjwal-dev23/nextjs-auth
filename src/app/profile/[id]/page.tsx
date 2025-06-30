"use client";
import { useParams } from "next/navigation";

function ProfileParamsPage() {
  const params = useParams<{ id: string }>();
  return (
    <div className="flex flex-col text-gray-100 justify-center items-center w-full h-screen">
      <h1 className="text-3xl font-bold mb-4 text-gray-300">Profile</h1>
      <div className="flex flex-col p-4 bg-gray-900 rounded-md border border-gray-800 border-t-gray-700">
        {params.id}
      </div>
    </div>
  );
}

export default ProfileParamsPage;
