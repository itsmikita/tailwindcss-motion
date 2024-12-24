import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import resolveConfig from "tailwindcss/resolveConfig";
import clsx from "clsx";

export { motion } from "./react";

const config = resolveConfig({
  content: [],
  ...require("../../tailwind.config")
}) as Config;

export const resolveStyles = (classes: string) => {
  const stylesheet = {};
  const classList = clsx(classes).split(" ");
  for (const c of classList) {
    if ("theme" in config) {
      const rules = config.theme?.[c];
      if (rules) Object.assign(stylesheet, rules);
    }
    return stylesheet;
  }
};

export default plugin(({ addUtilities }) => {
  addUtilities({
    ".motion-fade-in": {
      opacity: "0",
      transition: "opacity 0.5s ease-in-out",
      "&.in-view": {
        opacity: "1"
      }
    },
    ".motion-fade-out": {
      opacity: "1",
      transition: "opacity 0.5s ease-in-out",
      "&.in-view": {
        opacity: "1"
      }
    }
  });
});