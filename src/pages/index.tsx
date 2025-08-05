// import { useState, useEffect } from 'react';
import { GetStaticProps } from 'next';
import { Navigation } from '../components/layout/Navigation';
import { ThemeToggle } from '../components/layout/ThemeToggle';
import Hero from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Experience } from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import { Project, Experience as ExperienceType } from '../types';

interface HomeProps {
  projects: Project[];
  experiences: ExperienceType[];
}

export default function Home({ projects: _projects, experiences }: HomeProps) { // eslint-disable-line @typescript-eslint/no-unused-vars
  return (
    <main className="scroll-smooth-offset">
      <Navigation />
      <ThemeToggle />
      <Hero />
      <About />
      <Experience experiences={experiences} />
      <Projects />
      <Contact />
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const projectsData = await import('../data/projects.json');
    const experiencesData = await import('../data/experiences.json');

    return {
      props: {
        projects: projectsData.projects || [],
        experiences: experiencesData.experiences || [],
      },
    };
  } catch (error) {
    console.error('Error loading data:', error);
    return {
      props: {
        projects: [],
        experiences: [],
      },
    };
  }
};
