# CheckYaar website

Persian RTL marketing site for property owners and tenants. It uses local copies of the CheckYaar icon and Vazirmatn fonts in `assets/brand/`, along with local Lucide icons (v0.468.0; license included). The public site is served at <https://checkyaar.ir/>; this directory contains its static HTML, CSS, JavaScript, guides, and search-engine files.

From the repository root, run:

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Open <http://localhost:8080/website/> in a browser. The directory can be served as a standalone static site. Deploy the whole `website/` directory so the pages, assets, `.well-known` app-link association files, `robots.txt`, `sitemap.xml`, and `_redirects` are all published together.

The homepage includes responsive layouts, section reveals, reduced-motion support, expandable FAQs, a four-slide phone showcase, and a sample kitchen inspection card. The initial slide is loaded immediately; later slides load when needed. The repository's seeded store records have no download URLs, and no verified listing URLs are configured on the website, so the page states this instead of presenting nonfunctional download buttons. Update the homepage when official listing URLs are available.

Persian headings above the phone crossfade with their corresponding slides. The heading area reserves its height so changing text does not move the phone or surrounding layout.

Search metadata and structured data live in each HTML page. `robots.txt` points to `sitemap.xml`; `_redirects` sends `/index.html` to the canonical homepage. The redirect file uses Cloudflare Pages-compatible syntax. Its rules apply to paths only; Cloudflare Pages does not support host-wide or protocol-wide redirects in this file ([Cloudflare Pages redirect documentation](https://developers.cloudflare.com/pages/configuration/redirects/)). The canonical host is `https://checkyaar.ir`. The audit found that plain HTTP currently returns a page instead of redirecting to HTTPS, so enable **Always Use HTTPS** or an equivalent edge redirect before deployment. The `www` hostname did not resolve during this review; only add a `www` redirect if a DNS record for it is configured.

After deployment, confirm `https://checkyaar.ir/robots.txt`, `/sitemap.xml`, `/guides/`, each guide, and `/.well-known/assetlinks.json` and `/.well-known/apple-app-site-association` return the intended content without a CDN or firewall challenge. The audit client received 403 responses for robots, sitemap, and privacy URLs from Cloudflare; check Search Console URL inspection and edge logs to determine whether search crawlers can fetch them. Submit the sitemap in Search Console and monitor index coverage and Core Web Vitals.

The privacy page documents the current app behavior and should be reviewed whenever data handling changes. Guide articles explain practical record-keeping and do not replace a contract or legal advice.
