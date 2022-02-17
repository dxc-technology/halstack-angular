export const decorators = [
  (storyFunc) => {
    const story = storyFunc();

    return {
      ...story,
      template: `<div theme>${story.template}</div>`,
    };
  },
];
