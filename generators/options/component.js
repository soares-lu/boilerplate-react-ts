const prompts = [
  {
    type: 'list',
    name: 'type',
    message: 'Which type of component?',
    choices: [
      { name: 'Atoms', value: 'atoms' },
      { name: 'Molecules', value: 'molecules' },
      { name: 'Organisms', value: 'organisms' },
    ],
    default: 0,
  },
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the component?',
  },
];

const actions = [
  {
    type: 'add',
    path: '../src/components/{{type}}/{{pascalCase name}}/index.tsx',
    templateFile: 'templates/component/index.ts.hbs',
  },
  {
    type: 'add',
    path: '../src/components/{{type}}/{{pascalCase name}}/styles.ts',
    templateFile: 'templates/component/styles.ts.hbs',
  },
  {
    type: 'add',
    path: '../src/components/{{type}}/{{pascalCase name}}/interfaces.ts',
    templateFile: 'templates/component/interfaces.ts.hbs',
  },
  {
    type: 'add',
    path: '../src/components/{{type}}/{{pascalCase name}}/stories.tsx',
    templateFile: 'templates/component/stories.tsx.hbs',
  },
  {
    type: 'modify',
    path: '../src/components/{{type}}/index.ts',
    pattern: /(\/\/ COMPONENT IMPORTS)/g,
    template: "import {{pascalCase name}} from './{{pascalCase name}}';\n$1",
  },
  {
    type: 'modify',
    path: '../src/components/{{type}}/index.ts',
    pattern: /(\/\/ COMPONENT EXPORTS)/g,
    template: '\t{{pascalCase name}},\n$1',
  },
];

const OPTIONS = {
  actions: () => actions,
  description: 'Create a new component',
  prompts,
};

module.exports = OPTIONS;
