import { Metadata } from "next";
import Link from "next/link";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });
  return response.json();
}

export const metadata: Metadata = {
  title: "Blog | Next App",
};

export default async function About() {
  const posts = await getData();
  //  console.log(posts);

  return (
    <>
      <h1>blog</h1>
      <ul>
        {posts.map((post: any) => {
          return (
            <li key={post.id}>
              <Link href={`blog/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

// interface User{
//     id: number,
//     name: string,
//     avatar_url: string
// }

// interface UserAvatar {
//     id: number | undefined,
//     name: string,
//     avatar_url: string
// }

// const UserAvatar = (props: UserAvatar) => {

// }
