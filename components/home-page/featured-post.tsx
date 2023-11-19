import PostsGrid from "../posts/posts-grid";
import classes from "./featured-posts.module.css";
import { PostType } from "../posts/post-item";

export default function FeaturedPosts({ posts }: { posts: PostType[] }) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
