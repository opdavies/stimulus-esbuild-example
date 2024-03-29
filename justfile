_default:
    just --list

build:
    node assets/esbuild.config.mjs

serve:
    simple-http-server public --index
