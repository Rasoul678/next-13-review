import Link from "next/link";
import React from "react";

interface IProps {}

export const metadata = {
  title: "Users",
};

const Page: React.FC<IProps> = async (props) => {
  const response = await fetch("http://localhost:3000/api/users", {
    cache: "no-store",
  });

  const users = await response.json();

  return (
    <div>
      {users.map((user: any) => (
        <div key={user.id}>
          <Link href={`/users/${user.id}`}>
            {user.id}: {user.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Page;
