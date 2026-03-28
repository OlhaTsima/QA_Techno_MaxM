function findWords(text) {
  const pattern = /\b[^aA\s]{6,}\b/g;
  return text.match(pattern) || [];
}