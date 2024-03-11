const visit = require('unist-util-visit');

function plugin() {
  return (tree) => {
    visit(tree, 'code', (node) => {
      node.type = 'html';
      node.value = `<span class="custom-code">${node.value}</span>`;
    });
  };
}

module.exports = plugin;
