import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';


const projDirectory = path.join(process.cwd(), 'projects');

export function getSortedProjData() {
  // Get file names under /projects
  const fileNames = fs.readdirSync(projDirectory);
  const allProjData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const projid = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(projDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the project metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      projid,
      ...matterResult.data,
    };
  });
  // Sort project by date
  return allProjData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllProjIds() {
  const fileNames = fs.readdirSync(projDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        projid: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getProjData(projid) {
  const fullPath = path.join(projDirectory, `${projid}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the project metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    projid,
    contentHtml,
    ...matterResult.data,
  };
}