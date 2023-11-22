import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "content");

export function getPostData(postIdentifier: string) {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDir, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    isFeatured: data.isFeatured,
    ...data,
    content: content,
  };

  return postData;
}

export function getPostFiles() {
  return fs.readdirSync(postsDir);
}

export function getAllPosts() {
  const postFiles = getPostFiles();

  return postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  // return allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
}

export function getFeaturedPosts() {
  return getAllPosts().filter((post) => post.isFeatured === true);
}
