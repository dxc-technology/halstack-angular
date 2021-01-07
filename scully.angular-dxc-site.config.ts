import {
  ScullyConfig, setPluginConfig,
  getHandledRoutes
} from '@scullyio/scully';
setPluginConfig('md', { enableSyntaxHighlighting: true });
const defaultPostRenderers = ['seoHrefOptimise'];

export const config: ScullyConfig = {
  projectRoot: "./projects/dxc-ngx-cdk-site/src",
  projectName: "angular-dxc-site",
  outDir: './dist/static',
  defaultPostRenderers
};