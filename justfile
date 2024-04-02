_default:
    just --list

build:
    npm install
    node assets/esbuild.config.mjs

serve:
    simple-http-server public --index
