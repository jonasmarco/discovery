#!/usr/bin/env bash

yarn install

if [[ $OSTYPE == 'darwin'* ]]; then
  cd ios
  pod install
fi