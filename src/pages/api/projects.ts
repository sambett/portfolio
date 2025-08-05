import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs/promises';
import path from 'path';
import { Project } from '../../types';

const PROJECTS_FILE = path.join(process.cwd(), 'src/data/projects.json');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'GET':
        await handleGet(req, res);
        break;
      case 'POST':
        await handlePost(req, res);
        break;
      case 'PUT':
        await handlePut(req, res);
        break;
      case 'DELETE':
        await handleDelete(req, res);
        break;
      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  const { category, technology, published = 'true' } = req.query;
  
  const data = await fs.readFile(PROJECTS_FILE, 'utf8');
  const { projects } = JSON.parse(data);
  
  let filteredProjects = projects.filter((project: Project) => 
    published === 'false' || project.published
  );
  
  if (category && category !== 'all') {
    filteredProjects = filteredProjects.filter((project: Project) => 
      project.category === category
    );
  }
  
  if (technology) {
    const techQuery = String(technology).toLowerCase();
    filteredProjects = filteredProjects.filter((project: Project) =>
      project.techStack.some(tech => tech.toLowerCase().includes(techQuery))
    );
  }
  
  res.status(200).json({ projects: filteredProjects });
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const newProject: Omit<Project, 'id' | 'createdAt' | 'updatedAt'> = req.body;
  
  const data = await fs.readFile(PROJECTS_FILE, 'utf8');
  const { projects } = JSON.parse(data);
  
  const project: Project = {
    ...newProject,
    id: generateId(),
    createdAt: new Date().toISOString().split('T')[0],
    updatedAt: new Date().toISOString().split('T')[0],
  };
  
  projects.push(project);
  
  await fs.writeFile(PROJECTS_FILE, JSON.stringify({ projects }, null, 2));
  
  res.status(201).json({ project });
}

async function handlePut(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const updates = req.body;
  
  const data = await fs.readFile(PROJECTS_FILE, 'utf8');
  const { projects } = JSON.parse(data);
  
  const projectIndex = projects.findIndex((p: Project) => p.id === id);
  
  if (projectIndex === -1) {
    return res.status(404).json({ message: 'Project not found' });
  }
  
  projects[projectIndex] = {
    ...projects[projectIndex],
    ...updates,
    updatedAt: new Date().toISOString().split('T')[0],
  };
  
  await fs.writeFile(PROJECTS_FILE, JSON.stringify({ projects }, null, 2));
  
  res.status(200).json({ project: projects[projectIndex] });
}

async function handleDelete(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  
  const data = await fs.readFile(PROJECTS_FILE, 'utf8');
  const { projects } = JSON.parse(data);
  
  const filteredProjects = projects.filter((p: Project) => p.id !== id);
  
  if (filteredProjects.length === projects.length) {
    return res.status(404).json({ message: 'Project not found' });
  }
  
  await fs.writeFile(PROJECTS_FILE, JSON.stringify({ projects: filteredProjects }, null, 2));
  
  res.status(200).json({ message: 'Project deleted successfully' });
}

function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}
