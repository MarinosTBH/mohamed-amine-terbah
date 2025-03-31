import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data/projects.json');

export function getSortedProjectsData() {
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const projects = JSON.parse(jsonData);

  // Sort posts by date
  return projects.sort((a, b) => {
    if (a.createdAt < b.createdAt) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllProjectsIds() {
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const projects = JSON.parse(jsonData);
  return projects.map(project => {
    return {
      params: {
        id: project.id
      }
    }
  })
}

export async function getProjectData(id) {
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const projects = JSON.parse(jsonData);

  return projects.find(project => project.id === id)
}

export async function getPaginatedPosts(page = 1, limit = 5) {
  const allPosts = getSortedPostsData();
  const totalPages = Math.ceil(allPosts.length / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  return {
    posts: allPosts.slice(startIndex, endIndex),
    totalPages,
  };
}