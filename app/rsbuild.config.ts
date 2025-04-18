import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginTypedCSSModules } from '@rsbuild/plugin-typed-css-modules';
import moduleFederationConfig from './module-federation.config';

export default defineConfig(({ envMode }) => ({
  plugins: [pluginReact(), pluginTypedCSSModules(), pluginModuleFederation(moduleFederationConfig)],
  output: {
    cssModules: {
      namedExport: true,
    },
    assetPrefix: envMode === 'production' ? '/app/latest' : '',
  },
}));
