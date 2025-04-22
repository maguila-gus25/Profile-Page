export interface Skill {
  name: string;
  category: 'Programming' | 'Web Development' | 'Tools' | 'Other';
}

export const skills: Skill[] = [
  { name: 'Python', category: 'Programming' },
  { name: 'JavaScript', category: 'Programming' },
  { name: 'TypeScript', category: 'Programming' },
  { name: 'React', category: 'Web Development' },
  { name: 'HTML/CSS', category: 'Web Development' },
  { name: 'MVC Pattern', category: 'Programming' },
  { name: 'Git', category: 'Tools' },
  { name: 'CLI Development', category: 'Tools' },
  { name: 'Problem Solving', category: 'Other' },
  { name: 'Team Collaboration', category: 'Other' }
]; 