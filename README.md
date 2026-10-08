# Channel Island Rainbow Services website

A simple static website. No build step, no installs: just upload the folder.

## Files
| File | What it is |
|---|---|
| `index.html` | Home page |
| `services.html` | Services page |
| `about.html` | About page |
| `contact.html` | Contact page and quote form |
| `css/styles.css` | Brand styles (rainbow, buttons, cards, animations) |
| `js/main.js` | Mobile menu, scroll animations, quote form sending |
| `images/` | Logo, van photo, favicons and any new photos |

## Common edits
- **Phone number**: search all four `.html` files for `231009` and replace (appears as `01481 231009` and `+441481231009`).
- **Email**: search for `info@cirs.gg`. The quote form address is in `contact.html` (the `action=""` line).
- **Add photos**: drop JPGs into `images/` using these exact names and they replace the dashed boxes automatically (no code edits):
  `team.jpg` and `kitchen.jpg` (Home), `regular-cleans.jpg`, `one-off-cleans.jpg`, `end-of-tenancy.jpg`, `commercial.jpg` (Services), `about-team.jpg` (About). Portrait-ish for Home, landscape for Services, square for About. Photos are cropped to fit. For PNG/WebP, change the extension in the `<img src="">` next to the `PHOTO SLOT` comment.
- **Change the van or logo**: replace `images/car.png` / `images/logo.png` with new files using the same names.
- **Reviews**: edit the three review cards on `index.html` (marked `<!-- Review -->`). They are sample text.
- **Opening times / areas / extra wording**: edit the text between tags. Each section has a comment above it.

## Hosting
Works on GitHub Pages (Settings > Pages > deploy from `main`, root folder) or any normal web host: upload everything, keeping the folder structure. `index.html` must stay in the top level.

## Notes
- Layout uses the Tailwind CSS CDN script in each page's `<head>`, so visitors need an internet connection (normal for any website).

## Quote form (FormSubmit): one-time setup
The form emails enquiries straight to `info@cirs.gg` using the free FormSubmit service. No account needed.
1. Upload the site to the live domain.
2. Fill in and send the form once yourself on the live Contact page.
3. FormSubmit emails `info@cirs.gg` an **activation** message. Click the confirm button in it (check junk/spam).
4. Done. Every enquiry after that arrives in the inbox as a tidy table, and the visitor sees a thank-you message.

Notes: the form will not work when the file is just double-clicked on a computer (it needs the live site). To send enquiries to a different address, change the email in the `action="https://formsubmit.co/ajax/..."` line in `contact.html`, then repeat the activation step. To hide the email from bots, FormSubmit sends a private alias code in the activation email that can replace the address in that line.
