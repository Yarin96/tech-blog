import Image from "next/legacy/image";
import Link from "next/link";
import classes from "./post-item.module.css";

export type PostType = {
  title: string;
  image: string;
  info: string;
  date: string;
  slug: string;
  content?: string;
};

export default function PostItem({ post }: { post: PostType }) {
  const { title, image, info, date, slug } = post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <Image
          src={imagePath}
          alt={title}
          width={500}
          height={270}
          className={classes.image}
          unoptimized
        />
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{info}</p>
        </div>
      </Link>
    </li>
  );
}
