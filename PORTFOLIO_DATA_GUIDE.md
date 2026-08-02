# Portfolio data guide

Every card in `src/data/portfolioData.js` has a matching detail configuration in:

`src/data/portfolioDetails/projects/`

Each project has its own file. The file is registered in:

`src/data/portfolioDetails/index.js`

The detail page route is:

`/portfolio/:slug`

Each normal project uses these images:

```text
public/images/portfolio/<image-folder>/
├── hero.png
├── about-1.png
├── about-2.png
├── goals.png
└── solution.png
```

Rosetta intentionally keeps its original custom images and custom hero composition.
M&S uses slug `ms-marketing`, while its image folder is `ms-marketing-website`.

To add a project:

1. Add its card to `src/data/portfolioData.js`.
2. Add a project details file under `src/data/portfolioDetails/projects/`.
3. Register it in `src/data/portfolioDetails/index.js` using the exact same slug.
4. Add the five images in its public image folder.
