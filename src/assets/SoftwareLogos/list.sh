#!/bin/bash

# Directory containing the SVG files
DIRECTORY="/Users/ajgrant/GitHub/Portfolio-Site/src/assets/softwarelogos"

# Loop through each SVG file in the directory
for file in "$DIRECTORY"/*.svg; do
    # Extract the filename without the path and extension
    filename=$(basename "$file" .svg)
    # Print the filename
    echo "$filename"
done
