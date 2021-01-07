import {
  ScullyConfig, setPluginConfig,
  getHandledRoutes
} from '@scullyio/scully';
import { baseHrefRewrite } from '@scullyio/scully-plugin-base-href-rewrite';
setPluginConfig('md', { enableSyntaxHighlighting: true });
const defaultPostRenderers = ['seoHrefOptimise'];

export const config: ScullyConfig = {
  projectRoot: "./projects/dxc-ngx-cdk-site/src",
  projectName: "angular-dxc-site",
  outDir: './dist/static',
  defaultPostRenderers,
  routes: {
    '/': {
      type: 'default',
      postRenderers: [baseHrefRewrite],
      baseHref: '/tools/angular/next/',
    },

  }
};