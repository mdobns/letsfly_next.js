# Images Folder

Place your images here:

- `logo.png` - Your company logo (used in header)
- `hero-bg.jpg` - Hero section background image
- Any other images you need for the website

## Image Guidelines

- Use WebP format for best performance
- Optimize images before uploading (compress them)
- Recommended sizes:
  - Logo: 200x200px (or similar square/rectangle)
  - Hero background: 1920x800px or larger

## Usage in Code

Images in this folder can be referenced as:
- `/images/logo.png`
- `/images/hero-bg.jpg`

Example:
```jsx
<Image src="/images/logo.png" alt="Logo" width={50} height={50} />
```

or

```jsx
<img src="/images/logo.png" alt="Logo" />
```
