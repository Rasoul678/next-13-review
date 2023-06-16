"use client";

import React from "react";
import { useParams } from "next/navigation";
import type { NextPage } from "next";

interface IProps {}

const Page: NextPage<IProps> = (props) => {
  const { postId } = useParams();

  return <div>{postId}</div>;
};

export default Page;
