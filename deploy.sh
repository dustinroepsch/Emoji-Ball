#!/bin/bash
set -x
rm -rf dist
parcel build index.html --public-url /Emoji-Ball/ --out-dir docs