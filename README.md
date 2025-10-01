# Wireframe -to-> Production - Renaissance Construction 

This project is a responsive, modern website for Renaissance Construction, a UK-based construction company offering services such as new builds, refurbishments, extensions, and property maintenance. The website is designed to showcase the company's services, provide information about their work, and allow users to contact them easily. The project began with a wireframe of a multi-page website, which was then built out to adhere to the wireframe specifications, ensuring a structured and spec-compliant development process.

---

## Features

- **Responsive layout** across mobile, tablet, and desktop.
- **Light/Dark theme** toggle with preference persisted in `localStorage`.
  - Auto-detects OS preference on first visit; user choice overrides thereafter.
- **Sticky header** with standard navigation on desktop and an animated **dropdown menu** on smaller screens.
- **Hero sections** with gradient overlays and animated “scroll down” chevron.
- **Services overlays** revealing detailed copy on hover/focus.
- **Reusable components**: buttons, animated link underline, grid cards, CSS variables.
- **Vanilla JS only**: no frameworks, minimal footprint.

---

## Pages

- `index.html` – Home (hero, value proposition, featured services).
- `services.html` – Detailed services with interactive overlay cards.
- `about.html` – Company overview with image/text grid.
- `contact.html` – Contact details and a simple (non-functional) enquiry form.

All pages share a consistent header, footer, theme toggle, and dropdown menu.

---

## Tech stack

- **HTML5** – semantic structure.
- **CSS3** – custom properties (CSS variables), responsive media queries, transitions, and animations.
- **JavaScript (ES6)** – theme persistence; dropdown and icon state management.
- **Fonts & Icons** – Google Fonts (*Sansation*) and Font Awesome 6 via CDN.

---

## Project structure 
├── assets/
│ ├── images/                 # Image assets for hero sections, services, and about page
│ └── videos/                 # Video assets (if used)
├── wireframe/
│ ├── initial-wireframe-pdf.pdf   # Initial wireframe specification (PDF)
│ └── initial-wireframe.xlsx   # Initial wireframe specification (Excel)
├── .gitignore                # Git ignore file
├── about.html                # About page
├── contact.html              # Contact page
├── index.html                # Homepage with hero and services preview
├── main.js                   # JavaScript for theme toggle and dropdown menu functionality
├── services.html             # Services page
├── style.css                 # CSS styles with theme variables and responsive design
└── README.md                 # Project documentation
