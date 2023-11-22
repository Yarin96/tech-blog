import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import { PostType } from "../post-item";
import Image from "next/image";
import { PrismLight as CodeHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import ts from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";

CodeHighlighter.registerLanguage("js", js);
CodeHighlighter.registerLanguage("ts", ts);

export default function PostContent({ post }: { post: PostType }) {
  const imageHeaderPath = `/images/posts/${post.slug}/${post.image}`;

  const customComponents = {
    p: (paragraph: any) => {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        const imageUrl = `/images/posts/${post.slug}/${image.properties.src}`;

        return (
          <Image
            src={imageUrl}
            alt={image.properties.alt}
            width={600}
            height={300}
            className={classes.image}
            unoptimized
          />
        );
      }

      return <p>{paragraph.children}</p>;
    },
    code(code: any) {
      const { className, children } = code;
      const language = className.split("-")[1];

      return (
        <CodeHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imageHeaderPath} />
      <ReactMarkdown components={customComponents}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
}
