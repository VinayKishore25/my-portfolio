import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Extend the configuration with additional rules or plugins if needed
const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    files: ["**/*.js", "**/*.jsx"],
    rules: {
      "no-console": "warn", // Example: Warn for console.log
      "react/react-in-jsx-scope": "off", // Example: Disable React-in-scope rule for JSX
    },
  },
];

export default eslintConfig;
