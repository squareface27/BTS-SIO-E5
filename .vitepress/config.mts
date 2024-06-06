import { defineConfig } from "vitepress";
import sidebar from "./sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/BTS-SIO-E5/",
  lang: "fr-FR",
  title: "Documentation BTS SIO E5",
  description: "L'épreuve E5 n'est pas simple ...",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Accueil", link: "/" },
      {
        text: "Référentiel",
        link: "https://squareface.fr/Référentiel-E5.pdf",
      },
    ],

    sidebar: sidebar,

    search: {
      provider: "local",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/squareface27/BTS-SIO-E5" },
    ],

    lastUpdatedText: "Dernière mise à jour",
    editLink: {
      text: "Modifier cette page",
      pattern: "https://github.com/squareface27/IA-Cours/tree/master/:path",
    },
  },
});
