// Escapes '<' so a string value in the payload (e.g. "</script><script>...")
// can never break out of the surrounding <script> tag when injected via
// dangerouslySetInnerHTML. JSON.stringify alone does not escape this.
export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
