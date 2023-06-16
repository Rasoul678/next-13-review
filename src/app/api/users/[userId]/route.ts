import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const userId = req.url?.split("/").at(-1);

  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Jack" },
  ];

  const user = users.find((user) => user.id === Number(userId));

  return new NextResponse(JSON.stringify(user));
}
