// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export interface SkillList {
  _id: string;
  name: string;
  categories: SkillCategory[];
}

export interface SkillCategory {
  _id: string;
  name: string;
  skills: Skill[];
}

export interface Skill {
  text: string;
}

export const skillsList: SkillList = {
  _id: '/skills',
  name: 'Skills',
  categories: [
    {
      _id: '/skills/quality',
      name: 'Quality',
      skills: [
        { text: 'Over <strong>3500</strong> code reviews' },
        { text: 'Concise and linear commits' },
        { text: 'Linting as git hook and CI step' },
        { text: 'Automates tasks when feasible' },
        { text: 'Agile development' },
      ],
    },
    {
      _id: '/skills/languages',
      name: 'Languages',
      skills: [
        { text: '<strong>TypeScript</strong> - 5+ years - Expert' },
        { text: '<strong>JavaScript</strong> - 10+ years - Expert' },
        { text: '<strong>Kotlin</strong> - 3+ years - Advanced' },
        { text: '<strong>Ruby</strong> - 10+ years - Expert' },
        { text: '<strong>Rust</strong> - 1 year - Intermediate' },
      ],
    },
    {
      _id: '/skills/technology',
      name: 'Major technologies',
      skills: [
        { text: '<strong>React</strong> - 7+ years - Expert' },
        { text: '<strong>NodeJS</strong> / V8 - 5+ years - Advanced' },
        { text: '<strong>Ktor</strong> - 2+ years - Advanced' },
        { text: '<strong>Ruby</strong> on Rails - 10+ years - Expert' },
      ],
    },
    {
      _id: '/skills/databases',
      name: 'Databases',
      skills: [
        { text: '<strong>PostgreSQL</strong> - 10+ jaar - Intermediate' },
        { text: '<strong>Redis</strong> - 5+ years - Advanced' },
        { text: '<strong>RabbitMQ</strong> - 3+ years - Intermediate' },
        { text: '<strong>Mongo</strong> - 1+ years - Intermediate' },
      ],
    },
  ],
};
