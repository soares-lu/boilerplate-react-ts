const path = require('path');


module.exports = {
  stories: [
    "../src/components/atoms/**/stories.tsx",
    "../src/components/molecules/**/stories.tsx",
    "../src/components/organisms/**/stories.tsx",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  features: {
    storyStoreV7: true,
  },
  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, "../src"),
    ];

    return config;
  },
};
