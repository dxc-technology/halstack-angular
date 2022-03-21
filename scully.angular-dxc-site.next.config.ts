import { ScullyConfig } from "@scullyio/scully";
import { baseHrefRewrite } from "@scullyio/scully-plugin-base-href-rewrite";

export const config: ScullyConfig = {
  projectRoot: "./projects/dxc-ngx-cdk-site/src",
  projectName: "angular-dxc-site",
  outDir: "./dist/static",
  routes: {
    "/": {
      type: "default",
      postRenderers: [baseHrefRewrite],
      baseHref: "/tools/angular/next/",
    },
  },
};
