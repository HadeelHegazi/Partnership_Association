# Logo Images

This folder contains language-specific logos for the Partnership Association website.

## Required Logo Files:

### 1. Hebrew Logo
- **File:** `logo-hebrew.png` (or .jpg, .svg)
- **Language:** Hebrew (עברית)
- **Usage:** When user selects Hebrew language

### 2. Arabic Logo  
- **File:** `logo-arabic.png` (or .jpg, .svg)
- **Language:** Arabic (العربية)
- **Usage:** When user selects Arabic language

### 3. English Logo
- **File:** `logo-english.png` (or .jpg, .svg)
- **Language:** English
- **Usage:** When user selects English language

## Logo Specifications:

- **Format:** PNG, JPG, SVG, or WebP
- **Size:** Recommended minimum 200x200px
- **Aspect Ratio:** Square or rectangular (will scale proportionally)
- **Background:** Transparent or white background recommended
- **Quality:** High resolution for crisp display on all devices

## How It Works:

The Header component automatically switches logos based on the selected language:
- Hebrew (he) → Shows `logo-hebrew.png`
- Arabic (ar) → Shows `logo-arabic.png`  
- English (en) → Shows `logo-english.png`

## Fallback:

If a logo file is missing, the component will gracefully handle it without breaking the layout.
