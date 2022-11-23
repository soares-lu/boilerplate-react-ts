<h1 align='center'>React + TS + NextJS + Redux + SWR</h1>

## **Features**

- NextJS
- SWR | Axios
- Storybook
- Styled Components
- PlopJS (file generator)
- React Context | Redux/toolkit
- NODE | v18.12.0

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

Builds the project

```
yarn build | npm run build
```

4. Svg to React Component

Command run along with `yarn dev` that converts vectors (SVGs) from the `public/svg/` folder to React components in the `src/components/icons/` folder

```
yarn svg-to-react | npm run svg-to-react
```

5. Storybook

Start storybook on http://localhost:6006/

```
yarn storybook | npm run storybook
```

## **Components Folder Structure 🗂**

We have 3 main folders for components:

- `atoms`
- `molecules`
- `organisms`

Each component folder has 4 main files:

- `index.tsx`: This file contains all the logic for a component and returns a JSX (HTML in React). The component function needs to be named exactly as the folder name.
- `styles.ts/tsx`: This file contains all styles for that specific component (styled-components) [(check docs)](https://styled-components.com/docs/basics#getting-started)
- `stories.tsx`: This file helps you document components for reuse and automatically visually test your components to prevent bugs and also is for development-only, and it won't be included in your production bundle
- `interfaces.ts`: This file contains all interfaces/types for that specific component (NOT REQUIRED)

## **Files Generator Scripts 📦**

- PlopJS [(check docs)](https://plopjs.com/documentation/)
- Random User API is used in the generated examples [(check docs)](https://randomuser.me/documentation)

To ease the development process and try to maintain a standard of the code, this boilerplate uses PlopJS to build some files as an example to follow. All the templates are stored in `generators/templates`. Here are all the available scripts for that:

1. To create a component (atom, molecule or organism) run:

```
yarn generate-component
```

2. To create the structure of a data fetching (axios or SWR) run:

```
yarn generate-data-fetching
```

This command will create an implementation example inside `src/example` and `src/api/GetUsers`. A config file inside `src/api` also will be created based on the chosen option.

3. To create the structure of a state management (redux or react context) run:

```
yarn generate-state-management
```

This command will just create a structure of data management inside of `src/redux` or `src/contexts` (or both) based on the chosen option. Feel free to implement it any way you wanted (hooks, directly on the component directory, etc).

If u want to apply providers globally, don't forget to set it on `src/pages/_app.tsx` like that:

React Context
![react context](/public/docs/context-ss.png "React Context")

React Redux
![react redux](/public/docs/redux-ss.png "Redux")

🚨🚨🚨
OBS: all theses generators are not mandatory, they were created to help the developer follow the project standards but feel free to not use them and create your own structure. Just remember to remove unnecessary packages to enhance the performance of your project.
🚨🚨🚨
