import * as esbuild from 'esbuild';
import { stimulusPlugin } from 'esbuild-plugin-stimulus';

let minify = false;
let sourcemap = true;
let watch = true;

if (process.env.NODE_ENV === 'production') {
  minify = true;
  sourcemap = false;
  watch = false;
}

const config = {
  bundle: true,
  entryPoints: ['./assets/js/app.js'],
  minify,
  outdir: './public/build',
  plugins: [stimulusPlugin()],
  sourcemap,
}

if (watch) {
  let context = await esbuild.context({
    ...config,
    logLevel: 'info',
  });

  await context.watch()
} else {
  esbuild.build(config)
}
