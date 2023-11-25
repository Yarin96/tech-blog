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
        <title>Yarin Bar - Tech Blog</title>
        <meta
          name="description"
          content="I am a passionate full-stack developer with a deep-rooted connection to the field of web development, and I post about technologies and web development."
        />
      </Head>
      {isClient && (
        <>
          <Hero />
          <FeaturedPosts posts={posts} />
        </>
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
