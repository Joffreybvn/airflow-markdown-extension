#!/bin/bash

patch_directory="airflow_markdown_extension/js/patches"
patch_files=()

# Load patch files from the directory
while IFS= read -r -d '' file; do
    patch_files+=("$file")
done < <(find "$patch_directory" -type f -name "*.patch" -print0)

# Apply each patch file
for patch_file in "${patch_files[@]}"; do
    echo "Applying patch: $patch_file"
    git apply --stat "$patch_file"
    if git apply --check "$patch_file"; then
        git apply "$patch_file"
    else
        echo "Patch application failed for $patch_file. Please check the patch file."
    fi
done