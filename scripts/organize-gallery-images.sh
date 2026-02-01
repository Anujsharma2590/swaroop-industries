#!/bin/bash

# Script to organize gallery images

SOURCE_CERT="/Users/anujsharma/swaroop-industries/public/saroop/Certificate New 2026 PIC"
SOURCE_PROD="/Users/anujsharma/swaroop-industries/public/saroop/Top Pic"
DEST_CERT="/Users/anujsharma/swaroop-industries/public/gallery/certificates"
DEST_PROD="/Users/anujsharma/swaroop-industries/public/gallery/products"

echo "Copying and renaming certificate images..."
if [ -d "$SOURCE_CERT" ]; then
  counter=1
  for file in "$SOURCE_CERT"/*.{jpg,jpeg,JPG,JPEG,png,PNG} 2>/dev/null; do
    if [ -f "$file" ]; then
      ext="${file##*.}"
      cp "$file" "$DEST_CERT/certificate-$(printf "%02d" $counter).$ext"
      echo "Copied: $(basename "$file") -> certificate-$(printf "%02d" $counter).$ext"
      counter=$((counter + 1))
    fi
  done
  echo "Total certificates copied: $((counter - 1))"
else
  echo "Certificate source directory not found"
fi

echo ""
echo "Copying and renaming product images..."
if [ -d "$SOURCE_PROD" ]; then
  counter=1
  for file in "$SOURCE_PROD"/*.{jpg,jpeg,JPG,JPEG,png,PNG} 2>/dev/null; do
    if [ -f "$file" ]; then
      ext="${file##*.}"
      cp "$file" "$DEST_PROD/product-$(printf "%02d" $counter).$ext"
      echo "Copied: $(basename "$file") -> product-$(printf "%02d" $counter).$ext"
      counter=$((counter + 1))
    fi
  done
  echo "Total products copied: $((counter - 1))"
else
  echo "Product source directory not found"
fi

echo ""
echo "Gallery organization complete!"
