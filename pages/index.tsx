import Head from "next/head";
import FeaturedPosts from "../components/home-page/featured-post";
import Hero from "../components/home-page/hero";
import { PostType } from "../components/posts/post-item";
import { getFeaturedPosts } from "../helpers/posts-util";
import { useEffect, useState } from "react";

export default function Home({ posts }: { posts: PostType[] }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <Head>
        <title>Yarin Tech Blog</title>
        <meta
          name="description"
          content="I am a passionate full-stack developer, and I post about technologies and web development."
        />
      </Head>
      {isClient ? (
        <>
          <Hero />
          <FeaturedPosts posts={posts} />
        </>
      ) : (
        <h1>'Hydrating...'</h1>
      )}
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
