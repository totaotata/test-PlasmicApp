
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['5K8sg3MNrrxWhx3H4we5Fb'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  