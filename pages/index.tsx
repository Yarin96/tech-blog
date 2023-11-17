import FeaturedPosts from "../components/home-page/featured-post";
import Hero from "../components/home-page/hero";
import { PostType } from "../components/posts/post-item";
import { getFeaturedPosts } from "../helpers/posts-util";

export default function Home({ posts }: { posts: PostType[] }) {
  return (
    <>
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
