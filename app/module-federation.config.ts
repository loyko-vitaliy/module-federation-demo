import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

const { PUBLIC_APPBAR_REMOTE_URL, PUBLIC_FEED_REMOTE_URL, PUBLIC_UIKIT_REMOTE_URL } = import.meta.env;

export default createModuleFederationConfig({
  name: 'app',
  remotes: {
    appbar: `appbar@${PUBLIC_APPBAR_REMOTE_URL}/mf-manifest.json`,
    feed: `feed@${PUBLIC_FEED_REMOTE_URL}/mf-manifest.json`,
    uikit: `uikit@${PUBLIC_UIKIT_REMOTE_URL}/mf-manifest.json`,
  },
  shareStrategy: 'loaded-first',
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
    'react-router-dom': { singleton: true },
  },
});
