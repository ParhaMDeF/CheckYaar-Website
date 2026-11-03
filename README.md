# CheckYaar website preview

Interactive Persian RTL marketing mockup for property owners and tenants. It uses the mobile app's logo, blue accent, gray canvas, Vazirmatn font, rounded controls, and locally embedded Lucide icons (v0.468.0; license included).

From the repository root, run:

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Open http://localhost:8080/website/ in a browser. The logo and fonts load from the existing mobile assets, so serve the repository root rather than the website directory alone.

The page includes responsive layouts, section reveals, reduced-motion support, expandable FAQs, and a sample-report dialog. Markup, styles, and interactions live in `index.html`, `styles.css`, and `script.js` respectively. The phone interface and report are illustrative. Download buttons explain that store URLs still need to be connected; they do not download the app.

This is a design preview, not a deployed production website. Real store listings, app screenshots, report assets, privacy information, and support details still need to be supplied before publication.
