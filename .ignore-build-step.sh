#!/bin/bash

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

if [[ "$VERCEL_GIT_COMMIT_REF" == "main" ]]; then
    # Proceed with the build
    echo "Proceeding with build on main branch"
    exit 1
else
    # Don't build
    echo "Not building on $VERCEL_GIT_COMMIT_REF branch"
    exit 0
fi
