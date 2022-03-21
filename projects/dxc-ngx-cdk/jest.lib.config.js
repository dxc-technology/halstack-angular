module.exports = {
  name: 'Halstack DXC angular Testing Library',
  displayName: {
    name: 'ATL',
    color: 'magenta',
  },
  preset: './jest.base.config.js',
  setupFilesAfterEnv: ['./test-import.ts'],
};
