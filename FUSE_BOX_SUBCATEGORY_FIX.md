# Fuse Box Subcategory Fix

## Issue
The "Fuse Boxes & Wiring" category showed 15 total products, but subcategories showed 0 products each.

## Root Cause
The subcategory filters in `products.config.ts` were looking for incorrect subcategory values:
- **Config was filtering for**: `"Fuse Box"` and `"Head Light Relay Wiring"`
- **Actual product subcategories**: `"Universal"`, `"Eicher"`, `"Ashok Leyland"`, `"Maruti"`, `"Glass Fuse"`, `"JCB"`, `"Tata"`, `"Mahindra"`

## Solution
Updated the subcategories in `products.config.ts` to match actual product data:

### New Subcategories (15 products total):
1. **Universal Fuse Box** (1 product)
   - fb-1: Square Fuse Box

2. **Tata Fuse Box** (5 products)
   - fb-8: Tata Indica Fuse Box
   - fb-10: Tata Sumo Fuse Box
   - fb-11: Tata ACE Fuse Box
   - fb-13: Tata 407/LPT Fuse Box
   - fb-15: Tata Sumo 207 DI Fuse Box

3. **Mahindra Fuse Box** (3 products)
   - fb-9: Mahindra Bolero Fuse Box
   - fb-12: Mahindra Maximo Fuse Box
   - fb-14: Mahindra Jeep Fuse Box

4. **Maruti Fuse Box** (2 products)
   - fb-4: Maruti Fuse Box - Car Type
   - fb-5: Maruti Fuse Box - Van Type

5. **Eicher Fuse Box** (1 product)
   - fb-2: Eicher Canter Fuse Box

6. **Ashok Leyland Fuse Box** (1 product)
   - fb-3: Ashok Leyland Fuse Box

7. **JCB Fuse Box** (1 product)
   - fb-7: JCB Fuse Box

8. **Glass Fuse Box** (1 product)
   - fb-6: Glass Fuse Box

## Result
✅ All 15 products are now properly distributed across subcategories
✅ Filter counts now display correctly
✅ Products are visible when subcategories are selected
