import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

const { PUBLIC_UIKIT_REMOTE_URL } = process.env;

export default createModuleFederationConfig({
  name: 'appbar',
  remotes: {
    uikit: `uikit@${PUBLIC_UIKIT_REMOTE_URL}/mf-manifest.json`,
  },
  exposes: {
    '.': './src/AppBar',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
    'react-router-dom': { singleton: true },
  },
});
