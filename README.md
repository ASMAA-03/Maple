# Maple & Bean – Coffee Shop Website

A multi-page, responsive website for a neighborhood coffee shop, built with **HTML5**, **CSS3** and a little **vanilla JavaScript**.

🔗 **Live demo:** https://asmaa-03.github.io/Maple/

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero section, featured drinks and pastries, footer with address and hours |
| Menu | `menu.html` | Full menu: hot drinks, brewed & iced drinks, seasonal creations, pastries |
| About | `about.html` | The story of the shop and what it cares about |
| Contact | `contact.html` | Opening hours and a "Send a note" form |

## Features

- Responsive layout with breakpoints for phones (`max-width: 767px`) and tablets (`768px – 1024px`)
- Mobile navigation menu (hamburger button) that opens and closes with JavaScript
- Custom typography using the *Playfair Display* font from Google Fonts
- Styled menu sections with images, item names and short descriptions
- Contact form layout that adapts to small screens

## Built With

- HTML5
- CSS3 (Flexbox, media queries)
- JavaScript (vanilla) – used for the mobile menu toggle
- [Google Fonts](https://fonts.google.com/) – Playfair Display

## Project Structure

```
.
├── index.html
├── menu.html
├── about.html
├── contact.html
├── style.css          # all styles
├── script.js          
└── images/
    ├── coffee-shop-interior.jpg
    ├── latte.jpg
    └── pastries.jpg
```

## Getting Started

No build step is needed.

```bash
git clone https://github.com/ASMAA-03/Maple.git
cd Maple
```

Then open `index.html` in your browser.

## Future Improvements

- Connect the contact form to a backend or a form service so messages can actually be sent
- Move inline styles into `style.css`
- Add a dark mode
