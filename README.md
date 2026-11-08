# CheckYaar website preview

Interactive Persian RTL marketing mockup for property owners and tenants. It uses local copies of the logo and Vazirmatn fonts in `assets/brand/`, along with the blue accent, gray canvas, rounded controls, and locally embedded Lucide icons (v0.468.0; license included).

From the repository root, run:

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Open http://localhost:8080/website/ in a browser. All files used by the page are contained in this directory, so it can be served or deployed as a standalone static site.

The page includes responsive layouts, section reveals, reduced-motion support, expandable FAQs, and a sample-report dialog. The hero cycles through four transparent phone mockups built from real app screenshots: owner case overview, inspection entry, tenant overview, and owner inspection preview, switching every three seconds with a 600ms crossfade. A pause control stops playback; reduced-motion preferences keep the image still, and playback pauses in hidden tabs. Markup, styles, and interactions live in `index.html`, `styles.css`, and `script.js` respectively. The phone images use demo content; the sample-report dialog is illustrative. Download buttons explain that store URLs still need to be connected; they do not download the app.

Persian headings above the phone crossfade with their corresponding slides. The heading area reserves its height so changing text does not move the phone or surrounding layout. Pausing playback also keeps the current heading in place.

This is a design preview, not a deployed production website. Real store listings, report assets, and support details still need to be supplied before publication. The privacy page documents the current app behavior and should be reviewed when the app or its data-handling practices change.
