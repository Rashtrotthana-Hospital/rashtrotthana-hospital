# Swasthya Bharati — Drugless Lifestyle Unit

Immersive landing page for the drugless lifestyle unit of Rashtrotthana Hospital. Built as a self-contained, lazy-loaded feature inside the existing Angular 17 site.

## Run

The page is mounted at the **`/swasthya-bharati`** route of the parent app. From the project root:

```bash
npm install --legacy-peer-deps   # if not already installed
npm start                        # ng serve, then visit http://localhost:4200/swasthya-bharati
npm run build                    # production build
```

The route lazy-loads — the 1.5MB chunk (Three.js + GSAP + sections) is fetched only when the user visits this URL.

## Architecture

This feature is fully isolated:

- **Standalone components** (Angular 17 standalone API) — no NgModule registration required.
- **Self-contained styles** — CSS custom properties applied on `:host(.sb-root)` of `LandingComponent`, inheriting through the entire subtree. None of the parent app's Bootstrap / PrimeNG styles bleed into this page.
- **Hidden global chrome** — the parent `app.component` checks for the `/swasthya-bharati` URL prefix and hides its navbar, footer, and chatbot so this page is fully immersive.
- **Procedural assets** — no `.glb`, no `.png`, no Lottie. The 3D lotus, flame shader, particle field, benefit orbs, DNA→tree morph, and doctor portraits are all generated in code.

```
src/app/swasthya-bharati/
├── swasthya-bharati.routes.ts        # default lazy route
├── landing/                          # the page shell
├── styles/                           # _tokens.scss, _mixins.scss
├── core/
│   ├── tokens/content.ts             # all copy in one typed module
│   ├── services/                     # three-scene, scroll (Lenis), animation (GSAP), device-tier, cursor
│   ├── directives/                   # parallax, magnetic, tilt-3d
│   └── three/                        # lotus, orb, dna-tree scene factories + flame shader
├── shared/                           # loader, navbar, footer, cursor, scroll-progress, easter-egg
└── sections/                         # hero, shloka, intro, vision-mission, services, why-us, benefits, testimonials, team, faq, contact
```

## 3D scenes

| Scene | File | Notes |
| --- | --- | --- |
| Hero lotus | `core/three/lotus-scene.ts` | Procedural petals (custom BufferGeometry), Lathe-built diya bowl + base, additive particle field, scroll-driven camera dolly. |
| Flame | `core/three/shaders/flame.ts` | Custom GLSL fragment with simplex-style flicker noise. Billboards toward the camera each frame. |
| Benefit orbs | `core/three/orb-scene.ts` | Icosahedron with per-frame surface warp + particle halo. One canvas per column. |
| DNA → tree | `core/three/dna-tree-scene.ts` | Two precomputed point clouds; ScrollTrigger drives a 0..1 progress that lerps between them. |

## Performance

- `SbDeviceService` detects tier (low / mid / high) from `hardwareConcurrency`, `deviceMemory`, and `innerWidth`. Particle counts scale automatically.
- Each canvas pauses its render loop when `document.hidden` is true.
- All `WebGLRenderer`, `BufferGeometry`, `Material`, and `Texture` instances are explicitly disposed on component destroy.
- `prefers-reduced-motion` disables Lenis, GSAP timelines, and SVG keyframe animations.
- Lenis is scoped — it starts on `LandingComponent.ngAfterViewInit` and stops on destroy, so the rest of the app keeps native scrolling.
- Pre-existing global Bootstrap/PrimeNG/Material styles add weight to the initial bundle but the Swasthya Bharati page itself is on a separate lazy chunk.

## Customising copy

All strings live in [`core/tokens/content.ts`](./core/tokens/content.ts) — services, FAQs, doctor bios, contact details, the hero shloka. Edit there; templates pick up the changes.

## Customising design

CSS variables on `:host(.sb-root)` (see `styles/_tokens.scss`) — change once, everything follows. The palette, type scale, spacing grid, motion easings, and z-index ladder are all there.

## Known integration points (replace before going live)

- `sections/contact/contact.component.ts` → the form `submit()` is a stub. Wire to EmailJS (already a project dep) or your hospital callback API.
- Map in the Contact section is an inline SVG placeholder — swap for an `<iframe>` Google Map embed if needed.
- Doctor portraits are gradient + initial placeholders — drop real photos into `src/assets/swasthya-bharati/team/<slug>.webp` and update `team.component.ts`.
- Newsletter form in the footer is a stub — wire to your subscription endpoint.
