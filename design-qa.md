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

## Transparent phone slideshow — 2026-11-08

The current hero replaces the previous illustration with the approved inspection, tenant-review, and report PNGs built from app screenshots. All three images are 1086 × 1448 and share one grid cell, preserving the phone's position and the section's dimensions during a 600ms opacity crossfade every three seconds.

Verified in Chrome at desktop 1280 × 1319 and mobile 390 × 844:

- All three images loaded, with no horizontal page overflow and identical rendered image dimensions.
- Observed inspection → review → report and wraparound during autoplay; computed opacity transition duration is 0.6 seconds.
- Pause kept the active image unchanged beyond the three-second interval; resume restored autoplay.
- The phone remains fully contained on mobile, with its existing floating animation disabled at the mobile breakpoint.
- Inactive images are excluded from the accessibility tree. The pause control has a keyboard focus outline.

The implementation also stops playback in hidden tabs, retains a static image for reduced-motion preferences, and waits for image decoding before rotation. These fallback branches were reviewed in code; reduced motion was not emulated during the visual browser check. The first image remains visible if JavaScript is unavailable.

### Inspection flow screenshot

Replaced the initial case-overview slide with the supplied cabinet inspection screen. It shows the selected defect condition, a written note, the attached kitchen photo, and the save action. The actual screenshot is composited into the same approved frame, with an identical 9:41 status strip across all three sources and verified transparent corners. The previous overview asset is retained separately.

Reloaded the website and visually checked the new first slide in Chrome. All three 1086 × 1448 images load, the computed fade remains 0.6 seconds, and the page has no horizontal overflow. Playback was restored after capturing the preview; the three-second rotation code is unchanged.

### Final requested slide order

Restored the owner's case overview and set the slideshow order to owner case overview → cabinet inspection → tenant overview. The report image is retained as an asset but is no longer part of the hero rotation. Verified the three source URLs in that order after reloading Chrome, all images loaded, and the owner overview was the initial active slide. The three-second interval and 600ms fade remain unchanged.

### Owner inspection preview as the fourth slide

Added the supplied read-only cabinet detail screenshot after tenant overview. The current order is owner case overview → inspection entry → tenant overview → owner inspection preview. The new transparent 1086 × 1448 phone uses the same frame, perspective, and normalized 9:41 status bar. Verified all four images loaded in Chrome and observed the new fourth slide active during autoplay, with the same 0.6-second fade and no horizontal overflow. The three-second playback interval is unchanged.

### Synchronized Persian slide headings

Added the four approved headings above the phone in an 88px reserved area. Each heading is associated with its image and switches its active/accessibility state in the same update; both use a 600ms opacity transition. The heading stays still while the phone retains its existing float motion.

Observed a complete autoplay cycle in Chrome: all four headings matched their images, both fade durations were 0.6 seconds, and the heading-area and overall scene heights stayed constant. At a 320px mobile viewport, all four headings fit within the reserved area and the page had no horizontal overflow. Pause/resume was preserved, and playback was restored after capturing desktop and mobile screenshots. Existing reduced-motion CSS also disables heading transitions.

### Simplified hero slideshow controls

Removed the playback button so no pause or “continue autoplay” control appears below the phone. Automatic rotation still runs every three seconds, pauses while the tab is hidden, and stays static when reduced motion is enabled.

### Kitchen inspection report card

Removed the sample-report button and updated the report card to show the kitchen as “ایراد دارد,” with the matching cabinet-damage photo and the inspection note “روکش گوشه بالای در کابینت کنار سینک لب‌پر شده.” The sample-report-only modal handler was removed; store notice dialogs remain available.
