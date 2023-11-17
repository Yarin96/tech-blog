import PostItem from "./post-item";
import classes from "./posts-grid.module.css";
import { PostType } from "./post-item";

export default function PostsGrid({ posts }: { posts: PostType[] }) {
  return (
    <ul className={classes.grid}>
      {posts.map((post: PostType) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}
