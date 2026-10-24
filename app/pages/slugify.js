import { slug as githubSlug } from 'github-slugger'

// GitHub-compatible heading slugs.
//
// The value handed to this slugify is not always the raw heading text:
// markdown-it-anchor (permalinkBefore: true) injects the permalink token into
// the heading before markdown-it-toc-done-right derives its own slug from the
// heading's remaining text children, so what the TOC sees starts with the
// whitespace left behind by the permalink. Without trimming, github-slugger
// turns that leading whitespace into a leading '-' and every TOC link points
// at a non-existent id (e.g. href="#-hello-world" for id="hello-world").
export function createGithubSlugify() {
  return (value) => githubSlug(String(value).trim())
}
