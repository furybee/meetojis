# Meetojis

Meetojis is a chrome extension that allows users to send emojis in Google Meet (Messages area).

## How it works ?

The extension injects a button in the Messages area of Google Meet. When clicked, it opens a popup that allows the user to select an emoji from a list of emojis. The selected emoji is then sent to the Messages area.

## Installation

To install the extension, you need to load it in Chrome.

1. Open Chrome and navigate to chrome://extensions/
2. Enable Developer mode by clicking the toggle switch in the top right corner
3. Click the "Load unpacked" button and select the directory containing the extension files

## Usage

1. Open Google Meet and navigate to the Messages area
2. Click the "Meetojis" button
3. Select an emoji from the list
4. Click the "Send" button

## License

MIT

## Contributing

### Project Structure

- `js/data/categories/`: one file per emoji category exporting `window.EmojiCategory<Name>` (e.g., `flags.js`).
- `js/data/emoji-data.js`: aggregator with icons and `CATEGORIES` referencing those globals.
- `js/services/`, `js/components/`, `js/meetojis-controller.js`, `js/content.js`: app code.

### Dev Workflow

- Load unpacked: `chrome://extensions` → Dev Mode → Load unpacked → repo folder. Click Reload after changes; refresh Meet.
- No build step. Keep files small and single‑responsibility.

### Useful Scripts

- `node scripts/check-duplicates.js` — detect duplicate emojis (non‑zero exit on duplicates).
- `node scripts/find-missing-flags.js` — compare `flags` with `scripts/flags-by-code.json` and generate a snippet of missing ones.
- `node scripts/split-categories.js` — split inline categories into `js/data/categories/` and update the manifest.

### Build Extension

- `scripts/build.sh` — create a clean zip in `dist/` with only required files.

### Code Style

- Prettier is used for formatting:
  - Install once: `npm install`
  - Check: `npm run format:check`
  - Fix: `npm run format`

### Guidelines

- Style: ES6, 2‑space indent, kebab‑case filenames, PascalCase classes; expose constructs on `window`.
- Commits: small, imperative; prefer Conventional Commits (`feat:`, `fix:`, `refactor:`).
- PRs: include a clear description, linked issues, and a short screen recording or screenshots showing the picker behavior.

### Report Issues

- Found a bug? Open an issue at: https://github.com/furybee/meetojis

### Support Us

- Buy Me a Coffee: https://www.buymeacoffee.com/xyugxh7bk
- Credit Card (Stripe): https://donate.stripe.com/fZeg1Sgml971dbieUU
- PayPal: https://www.paypal.com/donate/?hosted_button_id=T7KZA4MLT5XTU
