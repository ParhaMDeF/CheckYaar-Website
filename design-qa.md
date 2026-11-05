# Website hero artwork QA

**Original implementation target:** The image supplied in the user message, 1264 × 1402. It is copied unchanged to `assets/hero/handover-phone-illustration.png` and used as the complete hero illustration.

**Rendered implementation:** `http://127.0.0.1:8080/website/index.html`. The supplied art and rendered page were viewed side by side in Chrome at a 1440 × 1024 CSS viewport. The page constrains the illustration to the existing hero column and preserves its intrinsic aspect ratio.

## Findings

- **P0–P2:** None. The supplied artwork appears as-is in the hero, without the former phone mockup or duplicate badges behind it. The Persian RTL headline, calls to action, site palette, and lower page sections remain intact.
- **P3 — Background blend:** The supplied image includes its own pale lavender background, which is slightly different from the site's gray page canvas and can read as a subtle rectangular edge. The file is kept unchanged as requested. If a seamless blend is desired later, the artwork background can be matched to the page canvas.

## Required fidelity surfaces

- **Typography:** Website headline and body typography remain in the existing local Vazirmatn styles. Text inside the supplied artwork is preserved as part of the image.
- **Spacing and layout:** The illustration is responsive, uses `width: 100%`, `max-width: 560px`, and `height: auto`, and keeps the source's 1264:1402 ratio. Existing desktop and mobile hero flow is retained.
- **Color and tokens:** The website's existing palette remains unchanged; the illustration retains its original included background, orbit, and blue/green accents.
- **Image quality and assets:** The supplied PNG is used without editing or cropping. At desktop size it fits within the hero column; mobile rules constrain it to the available width. The image has Persian alt text.
- **Copy and content:** Existing website copy and CTAs are unchanged. Image text stays embedded in the supplied artwork.

## Checklist

- [x] Compare the supplied art with the rendered website in one browser view.
- [x] Review typography, spacing/layout, colors, image treatment, and Persian content.
- [x] Confirm the image loads and the standalone phone/CSS badges are removed.
- [x] Preserve desktop float motion, mobile motion behavior, and reduced-motion handling.

**final result: passed**

## Hero artwork revision — 2026-11-05

Replaced the hero PNG using the built-in image generation tool. The final image is 1190 × 1322, retains the original near-square portrait composition and living-room scene, and displays above 2× the 560px desktop width. The tool did not deliver the requested 2528 × 2804 resolution.

Visually checked the horizontal PDF card, blue house/check app icon, چک‌یار name, ۷ از ۱۰ progress label with partial blue track, پذیرایی / آشپزخانه / اتاق‌ خواب rows, and red ایراد داره kitchen badge. Updated the HTML intrinsic dimensions. Earlier browser checks above describe the original implementation; this revision was checked as an image, without another browser pass.
