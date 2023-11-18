import Head from "next/head";
import FeaturedPosts from "../components/home-page/featured-post";
import Hero from "../components/home-page/hero";
import { PostType } from "../components/posts/post-item";
import { getFeaturedPosts } from "../helpers/posts-util";

export default function Home({ posts }: { posts: PostType[] }) {
  return (
    <>
      <Head>
        <title>Yarin's tech blog</title>
        <meta
          name="description"
          content="I post about technologies and web development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
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
