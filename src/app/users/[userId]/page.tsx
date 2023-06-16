import React from "react";
import type { NextPage } from "next";
import User from "./User";

interface IProps {}

export async function generateMetadata({
  params,
}: {
  params: { userId: string };
}) {
  const response = await fetch(
    `http://localhost:3000/api/users/${params.userId}`,
    {
      cache: "no-store",
    }
  );

  const user = await response.json();
  return { title: user.name };
}

const Page: NextPage<IProps> = async (props) => {
  return <User />;
};

export default Page;
