import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import { PostType } from "../post-item";

export default function PostContent({ post }: { post: PostType }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <div style={{ direction: "rtl", textAlign: "right" }}>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}
