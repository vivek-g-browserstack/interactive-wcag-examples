#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

if [ -z "$1" ]; then
  echo "Error: Commit message required."
  echo "Usage: $0 \"Your commit message here\""
  exit 1
fi

COMMIT_MSG="$1"

# Run yarn build
if yarn build; then
  echo "Build succeeded. Proceeding to commit and push."
else
  echo "Build failed. Aborting commit and push."
  exit 1
fi

# Stage all changes
git add .

# Commit with the provided message
git commit -m "$COMMIT_MSG"

# Push to the current branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
git push origin "$CURRENT_BRANCH" 