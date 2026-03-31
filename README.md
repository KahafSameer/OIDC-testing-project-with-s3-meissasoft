# OIDC Deployment Demo (Static Site)

This is a **very simple, beginner-friendly static website** created for testing DevOps deployment pipelines (for example: GitHub Actions + AWS OIDC deployments to S3 or static hosting).

There is **no backend, database, or API** – it is just HTML, CSS, and a small amount of JavaScript.

## Features

- **Static single page** with a clean, centered layout.
- **Headline**: "OIDC Deployment Demo".
- **Message** showing: "Deployed using GitHub Actions and AWS OIDC".
- **Interactive button** that updates the status text when clicked.
- **Beginner-friendly structure** that is easy to understand and extend.

## Technologies Used
hgghhg
- **HTML5**: Page structure and content.
- **CSS3**: Simple, modern styling (centered card, responsive spacing).
- **Vanilla JavaScript**: Small script to handle button click interaction.

## Project Structure

- `app/`
  - `index.html` – main HTML page for the static site.
  - `style.css` – styling for the page layout and button.
  - `script.js` – small script that updates the text when the button is clicked.
- `README.md` – this documentation file.

## How It Works

1. Open `app/index.html` in a browser (double-click or drag into a browser window).
2. You will see the `OIDC Deployment Demo` heading and the deployment message.
3. Click the button:
   - The status text changes to a success message.
   - The button text updates and becomes disabled.

This small interaction is helpful for verifying that static assets (HTML, CSS, JS) are being served correctly after deployment.

## Typical Use Case (DevOps / CI/CD)

You can use this project to:

- Test **GitHub Actions** workflows for building and deploying static content.
- Verify **AWS OIDC**–based deployments to:
  - An **S3 bucket** configured for static website hosting.
  - Other static hosting targets that serve `index.html`, `style.css`, and `script.js`.
- Confirm that:
  - All static files are uploaded.
  - CSS and JS are properly linked and loaded.
  - Simple JavaScript runs in the browser after deployment.

## Future Improvements

These are optional ideas you can add later:

- **Environment banner**: Show whether this is "dev", "staging", or "production" (still purely static text, no backend).
- **Deployment metadata**: Add a small section that displays:
  - Build date (hard-coded in HTML or JavaScript).
  - Git commit hash (manually inserted for now).
- **More styling**: Add light/dark mode toggle using only CSS + JS.
- **Accessibility refinements**: Further ARIA attributes and keyboard interaction tweaks.

## Notes

- This project is intentionally **minimal** and **static**.
- There is **no server-side code**, **no database**, and **no external API calls**.
- This makes it perfect for learning and testing **static deployments with CI/CD** without worrying about backend configuration.

