<h1 align='center'>Boilerplate | React + TS + NextJS + Redux +SWR</h1>

## **Features**
- NextJS
- SWR | Axios
- Storybook
- Styled Components
- PlopJS (file generator)
- React Context | Redux/toolkit
- NODE | v16.18.0

## **IDE Setup**

To maintain code quality and to have a standard among all team members the project has defined rules for Typescript.

Integration of these rules with your favorite IDE is required.
I recommend using Visual Studio Code with the following plugins:

`| ESlint |` [check plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) |

`| Prettier |` [check plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) |

## **Basic Scripts 📦**

1. Install Packages

```
yarn | npm install
```

2. Start Project

```
yarn dev | npm run dev
```

3. Build Project

Builds the project, and outputs to the folder ./dist

```
yarn build | npm run build
```

5. Svg to React

Command run along with `yarn dev` that converts vectors (SVGs) from the `public/svg/` folder to React components in the `src/components/icons/` folder

```
yarn svg-to-react | npm run svg-to-react
```

## **Files Generator Scripts 📦**

PlopJS [check documentation](https://plopjs.com/documentation/)

To ease the development process and try to maintain a standard of the code, this boilerplate uses PlopJS to build some files as an example to follow. All the templates are stored in `generators/templates`. Here are the available scripts for that:

1. To create a component (atom, molecule or organism) run:

```
yarn generate-component
```

2. To create the structure of a data fetching (axios or SWR) run:

```
yarn generate-data-fetching
```

This command will create an implementation example inside `src/example` and `src/api/GetUsers`. A config file inside `src/apis` also will be created based on the chosen option.

3. To create the structure of a data management (redux or react context) run:

```
yarn generate-data-management
```

This command will just create a structure of data management inside of `src/redux` or `src/contexts` (or both) based on the chosen option. Feel free to implement it any way you wanted (hooks, directly on the component directory, etc).

If u want to apply providers globally, don't forget to set it on `src/pages/_app.tsx` like that:

React Context
![react context](/public/docs/context-ss.png 'React Context')

React Redux
![react redux](/public/docs/redux-ss.png 'Redux')

🚨🚨🚨
OBS: all theses generators are not mandatory, they were created to help the developer follow the project standards but feel free to not use them and create your own structure. Just remember to remove unnecessary packages to enhance the performance of your project.
🚨🚨🚨

## **Components Folder Structure 🗂**

We have 3 main folders for components:

- `atoms`
- `molecules`
- `organisms`

Each component folder has 4 main files:

- `index.tsx`: This file contains all the logic for a component and returns a JSX (HTML in React). The component function needs to be named exactly as the folder name.
- `styles.ts/tsx`: This file contains all styles for that specific component (styled-components) [check](https://styled-components.com/docs/basics#getting-started)
- `stories.tsx`: This file helps you document components for reuse and automatically visually test your components to prevent bugs and also is for development-only, and it won't be included in your production bundle
- `interfaces.ts`: This file contains all interfaces/types for that specific component (NOT REQUIRED)
