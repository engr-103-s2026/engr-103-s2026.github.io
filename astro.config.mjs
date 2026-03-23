// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import mermaid from 'astro-mermaid';
import svelte from "@astrojs/svelte";
import starlightPageActions from 'starlight-page-actions'
import starlightLinksValidator from 'starlight-links-validator'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://engr-103-s2026.github.io",
  integrations: [
    mermaid({
      theme: 'dark',
      autoTheme: true
    }),
    sitemap(),
    starlight({
      plugins: [
        starlightLinksValidator(),
        starlightPageActions({
          baseUrl: "https://engr-103-s2026.github.io",
        })
      ],
      title: "ENGR 103 Engineering Computation and Algorithmic Thinking",
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/engr-103-s2026/engr103" },
      ],
      lastUpdated: true,
      head: [
      ],
      sidebar: [
        {
          label: "Overview",
          autogenerate: { directory: "overview" },
        },
        {
          label: "Practicalities",
          autogenerate: { directory: "practicalities" },
        },
        {
          label: "Lecture Notes",
          autogenerate: { directory: "lectures" },
        },
        {
          label: "Studios",
          autogenerate: { directory: "studios" },
        },
        {
          label: "Assignments",
          autogenerate: { directory: "assignments" },
        },
        {
          label: "About",
          autogenerate: { directory: "about" },
        },
      ],
      customCss: ["./src/styles/global.css"],
    }),
    svelte(),
  ],
});
