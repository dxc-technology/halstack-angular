import '!style-loader!css-loader!sass-loader!./styles.scss';

export const decorators = [
  (storyFunc) => {
    const story = storyFunc();

    return {
      ...story,
      template: `<div theme>${story.template}</div>`,
    };
  },
];
