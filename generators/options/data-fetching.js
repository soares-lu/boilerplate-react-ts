const prompts = [
  {
    type: 'list',
    name: 'type',
    message: 'Which data fetching tool will you use?',
    choices: [
      { name: 'Axios', value: 'axios' },
      { name: 'SWR', value: 'swr' },
    ],
    default: 0,
  },
];

const actions = [
  {
    type: 'add',
    force: true,
    path: '../src/api/config.ts',
    templateFile: 'templates/data-fetching/{{type}}/config.ts.hbs',
  },
  {
    type: 'add',
    force: true,
    path: '../src/api/GetUsers/index.ts',
    templateFile: 'templates/data-fetching/{{type}}/getUsers.ts.hbs',
  },
  {
    type: 'add',
    force: true,
    path: '../src/example/index.tsx',
    templateFile: 'templates/data-fetching/{{type}}/example.tsx.hbs',
  },
];

const OPTIONS = {
  actions: () => actions,
  description: '',
  prompts,
};

module.exports = OPTIONS;
