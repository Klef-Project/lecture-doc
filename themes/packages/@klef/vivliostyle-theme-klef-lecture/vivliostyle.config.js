module.exports = {
  language: 'jp',
  theme: ['node_modules/@vivliostyle/theme-base', '.'],
  entry: ['example/default.md'],
  workspaceDir: '.vivliostyle',
  output: [
    'book.pdf',
    {
      path: './book',
      format: 'webpub',
    },
  ],
};
