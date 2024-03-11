const visit = require('unist-util-visit');

function plugin() {
  return (tree) => {
    visit(tree, 'inlineCode', (node) => {
      // Modify the inline code node here
      node.value = `<span class="custom-code">${node.value}</span>`;
    });
  };
}

module.exports = plugin;