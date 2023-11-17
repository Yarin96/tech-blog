import classes from "./all-posts.module.css";
import { PostType } from "./post-item";
import PostsGrid from "./posts-grid";

export default function AllPosts({ posts }: { posts: PostType[] }) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
}
