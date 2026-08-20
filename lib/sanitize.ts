import sanitizeHtml from 'sanitize-html';

// Tiptap's Color/Highlight extensions round-trip a picked hex value through
// the browser and re-serialize it as rgb(...), and Highlight also emits
// `color: inherit` alongside background-color - all three forms must be
// allowed or the color/highlight silently vanishes on save despite looking
// fine in the live editor.
const SAFE_COLOR = /^(#(?:[0-9a-fA-F]{3}){1,2}|rgb\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*\)|inherit)$/;

// Allowlist matches exactly what the Tiptap toolbar can produce (StarterKit +
// Link + Underline + Image + Table + text color + highlight). Anything else -
// especially <script>, event handlers, javascript: URLs, or a style property
// beyond color/background-color - is stripped, both on save and again right
// before the content is injected into the public page.
export function sanitizePostContent(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: [
      'h1', 'h2', 'h3', 'p', 'br', 'hr',
      'strong', 'em', 'u', 's', 'code', 'pre',
      'ul', 'ol', 'li', 'blockquote',
      'a', 'img',
      'span', 'mark',
      'table', 'thead', 'tbody', 'tr', 'th', 'td',
    ],
    allowedAttributes: {
      a: ['href', 'target', 'rel'],
      img: ['src', 'alt', 'title'],
      span: ['style'],
      mark: ['style', 'data-color'],
      th: ['colspan', 'rowspan'],
      td: ['colspan', 'rowspan'],
    },
    allowedStyles: {
      span: { color: [SAFE_COLOR] },
      mark: { 'background-color': [SAFE_COLOR], color: [SAFE_COLOR] },
    },
    allowedSchemes: ['http', 'https', 'mailto'],
    transformTags: {
      a: sanitizeHtml.simpleTransform('a', { rel: 'noopener noreferrer', target: '_blank' }),
    },
  });
}
