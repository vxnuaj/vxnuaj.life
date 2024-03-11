const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [require('./remark-code-plugin')],
    },
  });
  
  module.exports = withMDX();
  