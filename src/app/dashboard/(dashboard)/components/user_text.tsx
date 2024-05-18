"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";

const UserText = ({text}: {text: string}) => {
  const user = useUser();
  return (
    <div>
      <h1 className="text-[30px] font-semibold">
        Good Morning, {user.user?.firstName}
      </h1>
        <p className="text-[13px] text-gray-500">
            {text}
        </p>
    </div>
  );
};

export default UserText;
