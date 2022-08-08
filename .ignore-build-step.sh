#!/bin/bash

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

if [[ "$VERCEL_GIT_COMMIT_REF" == "main" ]]; then

    git diff HEAD^ HEAD --name-only '!*.md' '!.husky' '!.vscode'

    if [[ $(git diff HEAD^ HEAD --name-only '!*.md' '!.husky' '!.vscode') != "" ]]; then
        exit 1
    else
        :
    fi

    # Proceed with the build
    echo "Proceeding with build on main branch"
    exit 1
else
    # Don't build
    echo "Not building on $VERCEL_GIT_COMMIT_REF branch"
    exit 0
fi
