# 35601

## Current behavior

The file renovate.json is an npm preset used by my config.js. This configuration currently works and updates deprecated packages in my package.json. However, my package-lock.json is never updated when a package is updated.

## Expected behavior

I want my package-lock.json to be updated whenever a package in package.json is updated.

## Link to the Renovate issue or Discussion

https://github.com/renovatebot/renovate/discussions/35601
