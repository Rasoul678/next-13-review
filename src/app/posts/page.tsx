import React from "react";

interface IProps {}

const Page: React.FC<IProps> = async (props) => {
  //! Next default behaviour is Static Site Generation(SSG)
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store", //! Server Side Rendering(SSR)
    // next: { revalidate: 10 }, //! Incremental Static Regeneration (ISR)
  });

  const posts = await response.json();

  return (
    <div>
      {posts.map((post: any) => (
        <div key={post.id}>
          {post.id}: {post.title}
        </div>
      ))}
    </div>
  );
};

export default Page;
