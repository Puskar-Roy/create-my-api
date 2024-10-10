import { parseArgs } from "node:util";
import * as esbuild from "esbuild";

const {
  values: { watch },
} = parseArgs({
  options: {
    watch: { type: "boolean", default: false },
  },
});

const options = {
  logLevel: "info",
  color: true,

  entryPoints: ["src/**"],
  outdir: "dist",
  outbase: "src",

  platform: "node",
  target: ["node20.9"],
  format: "esm",
  packages: "external",

  sourcemap: true,
};

if (watch) {
  const ctx = await esbuild.context(options);
  await ctx.watch();
} else {
  await esbuild.build(options);
}
