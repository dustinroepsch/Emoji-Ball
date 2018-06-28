#!/bin/bash
set -x
rm -rf docs
parcel build index.html --public-url /Emoji-Ball/ --out-dir docs --experimental-scope-hoisting