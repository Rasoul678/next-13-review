"use client";

import React from "react";
import { useParams } from "next/navigation";
import type { Metadata, NextPage } from "next";

interface IProps {}

const User: NextPage<IProps> = async (props) => {
  const { userId } = useParams();

  const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
    cache: "no-store",
  });

  const user = await response.json();

  return (
    <div>
      {user.id}: {user.name}
    </div>
  );
};

export default User;
