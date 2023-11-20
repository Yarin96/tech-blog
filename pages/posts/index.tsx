import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../helpers/posts-util";
import Head from "next/head";

export default function AllPostsPage(props: any) {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming guides and posts I have written."
        />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
