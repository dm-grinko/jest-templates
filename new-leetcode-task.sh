#!/bin/bash

# Check if filename argument is provided
if [ -z "$1" ]; then
    echo "Please provide a filename as an argument"
    echo "Usage: ./new-leetcode-task.sh taskName"
    exit 1
fi

# Convert filename to camelCase
filename=$1

# Create source file
src_dir="nodejs/src/leetcode"
src_file="$src_dir/$filename.ts"

# Create test file
test_dir="nodejs/tests/leetcode"
test_file="$test_dir/$filename.test.ts"

# Create source file with basic export
echo "export function $filename() {
    
}" > "$src_file"

# Create test file with basic structure
echo "import { $filename } from '../../src/leetcode/$filename';

describe('$filename', () => {
    
});" > "$test_file"

echo "Created files:"
echo "- $src_file"
echo "- $test_file"
