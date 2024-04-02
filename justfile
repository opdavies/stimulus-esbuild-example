_default:
    just --list

build:
    npm install
    node assets/esbuild.config.mjs

clean:
    rm -fr node_modules public/build

serve:
    simple-http-server public --index
