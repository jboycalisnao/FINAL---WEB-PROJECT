# Workspace Agent Guidelines

## UI & Frontend Standards (Anti AI-Slop)

When designing, building, or modifying any UI, HTML, CSS, or frontend components in this project or related web projects:

1. **Light Mode by Default**:
   - Always use a clean, professional, accessible light background by default (`#ffffff`, `#f8fafc`, `#f1f5f9`).
   - Do NOT default to dark backgrounds (`#0d1117`, `#000000`, etc.) unless the user explicitly asks for it.

2. **No Glowing Borders or Box Shadows**:
   - Do NOT use neon glow effects, `box-shadow: 0 0 ...`, glowing outlines, or gradient borders.
   - Use crisp, subtle 1px solid borders (`#e2e8f0`, `#cbd5e1`, `#d0d7de`).

3. **No Fake Status Pills & No Pills Above Text**:
   - Do NOT add decorative pills/capsules in headers (e.g., `API EXPLORER`, `AI POWERED`, `v1.0 BETA`).
   - Do NOT place pills, capsules, or chips above page titles or text blocks.
   - Only use tags/pills when they represent actual domain data attributes (e.g., table status labels).

4. **No Pulsing Green Dots**:
   - Do NOT use faux status dots (green pulsating dots with `box-shadow` glows).

5. **Strict Font Hierarchy (12, 16, 18, 24 px)**:
   - Use the `Segoe UI` font stack (`'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif`) with high-contrast text (`#0f172a` / `#1e293b`).
   - Strictly adhere to the 4-tier font scale:
     - **12px** (`text-xs`): Helper text, form hints/errors, small badges, metadata, captions.
     - **16px** (`text-base`): Default body copy, form inputs, standard buttons, table cell content.
     - **18px** (`text-lg`): Section titles, modal headers, card titles.
     - **24px** (`text-2xl`): Main page titles, top-level dashboard headings.

6. **Page Titles Without Subtitles**:
   - Webpage titles inside pages must NOT include subtitles or explanatory subtext underneath the title.
   - Keep page headers direct, clean, and self-explanatory without unnecessary filler text.

7. **Tailwind CSS Border Radius Standards**:
   - Use `rounded-md` (`border-radius: 0.375rem`) for all boxes, cards, containers, panels, modals, and tables.
   - Use `rounded-sm` (`border-radius: 0.125rem`) for smaller buttons, pills, tags, chips, and small badges.

8. **Notifications & Modals (No Native Browser Alerts)**:
   - Never use native browser dialogs (`window.alert()`, `window.confirm()`, `window.prompt()`).
   - Convert all alert interactions into toast notifications (for non-blocking status messages) or custom modal dialogs (for confirmations and critical prompts) designed according to project specifications.

9. **Design System & Branding Reference**:
   - Refer to [`design.md`](file:///c:/Users/Calisnao/Desktop/jboy/LOCAL-%20WEB%20DEV%20PROJECTS/RCY%20-%20UMR/design.md) for complete details on the color palette, typography tokens, notification patterns, and image/branding requirements.
