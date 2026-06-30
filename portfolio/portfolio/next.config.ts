import type { NextConfig } from "next";

// NOTE: When deploying to GitHub Pages under a project repo
// (i.e. https://<username>.github.io/<repo-name>/), GitHub serves the
// site from a sub-path, not the domain root. basePath/assetPrefix below
// handle that. If you deploy to a USER/ORG page repo named
// "<username>.github.io" (served at the domain root), set
// REPO_NAME to "" instead — see README for details.
const REPO_NAME = "portfolio"; // <-- change this to your actual GitHub repo name

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export", // produces a static `out/` folder — required for GitHub Pages
  trailingSlash: true, // ensures /projects/foo/ resolves correctly as a static folder route
  images: {
    unoptimized: true, // next/image optimization needs a server; GitHub Pages is static-only
  },
  basePath: isGithubPages ? `/${REPO_NAME}` : "",
  assetPrefix: isGithubPages ? `/${REPO_NAME}/` : "",
};

export default nextConfig;
