
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['Ru8dzhZqTXa37htjZgdRZ'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  