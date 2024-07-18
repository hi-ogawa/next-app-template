import next from "next/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [next()],
  ssr: {
    // TODO: not sure build breaks without this
    noExternal: ["@mantine/**"],
  }
});
