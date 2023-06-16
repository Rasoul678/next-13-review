"use client";

import React from "react";
import type { NextPage, NextPageContext } from "next";

interface IProps {
  statusCode?: number;
}

const Error: NextPage<IProps> = ({ statusCode }) => {
  return <div>{statusCode} Ooops! Something went wrong!</div>;
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
