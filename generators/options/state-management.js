const prompts = [
  {
    type: 'list',
    name: 'type',
    message: 'Which data management tool will you use?',
    choices: [
      { name: 'React Context', value: 'contexts' },
      { name: 'Redux', value: 'redux' },
    ],
    default: 0,
  },
];

const actions = (data) => {
  if (data.type === 'contexts') {
    return [
      {
        type: 'add',
        path: '../src/{{type}}/Users/index.tsx',
        templateFile: 'templates/state-management/{{type}}/index.tsx.hbs',
      },
    ];
  } else {
    return [
      {
        type: 'add',
        path: '../src/{{type}}/slices/users/index.tsx',
        templateFile: 'templates/state-management/{{type}}/slice-example.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/{{type}}/slices/index.tsx',
        templateFile: 'templates/state-management/{{type}}/index.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/{{type}}/store.tsx',
        templateFile: 'templates/state-management/{{type}}/store.ts.hbs',
      },
    ];
  }
};

const OPTIONS = {
  actions: actions,
  description: '',
  prompts,
};

module.exports = OPTIONS;
