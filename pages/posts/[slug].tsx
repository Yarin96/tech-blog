import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "../../helpers/posts-util";
import Head from "next/head";

export default function SinglePostPageDetails(props: any) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.post.info} />
      </Head>
      <PostContent post={props.post} />
    </>
  );
}

export function getStaticProps(context: any) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostFiles();

  const slugs = postFileNames.map((fileName: string) =>
    fileName.replace(/\.md$/, "")
  );

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
