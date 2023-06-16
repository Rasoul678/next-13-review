import React from "react";

interface IProps {}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>{children}</div>
      <div>Go to Top</div>
    </>
  );
};

export default Layout;
