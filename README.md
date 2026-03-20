# EVLF Paper Site

Static academic-style project page for **EVLF: Early Vision-Language Fusion for Generative Dataset Distillation**.

## What is included

- `index.html` — single-page project site with centered hero, sectioned layout, results, and analysis blocks
- `styles.css` — restrained white-background academic styling
- `script.js` — copy-to-clipboard interaction for the BibTeX block
- `assets/pdfs/` — bundled local copies of the supplied EVLF figures / supplementary PDFs
- `assets/images/` — PNG preview renders generated from the PDFs for reliable in-page display

## Source materials wired into the page

### Results / qualitative comparisons

- `assets/pdfs/idc.pdf`
- `assets/pdfs/nette.pdf`
- `assets/pdfs/woof.pdf`

### Analysis

- `assets/pdfs/tsne.pdf`
- `assets/pdfs/gradcam.pdf`
- `assets/pdfs/lineChart.pdf`

### Additional teaser / method / visualization figures

- `assets/pdfs/illustration.pdf`
- `assets/pdfs/pipline.pdf`
- `assets/pdfs/visualization.pdf`

## Local preview

### Option 1: Python HTTP server

```bash
cd projects/evlf-paper-site
python -m http.server 8000
```

Then open <http://localhost:8000>.

### Option 2: Open `index.html` directly

Because the site is fully static and all assets are local, you can also open `index.html` directly in a browser. A local HTTP server is still recommended for the most consistent PDF / asset behavior.

### Option 3: VS Code Live Server

If you already use Live Server, open this folder and serve `index.html`.

## Notes

- No video section is included.
- The page intentionally uses **PNG previews** inside the layout for stability and quick scanning.
- The **original PDFs are kept** and linked from each card, which is the better way to inspect fine text, tiny labels, or high-resolution comparison details.
- If you want to replace or refresh the previews later, regenerate them from the PDFs and overwrite the files in `assets/images/`.
