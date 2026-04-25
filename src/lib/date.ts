export function isPublished(date: string, published = true) {
  if (!published) return false;
  const publishDate = new Date(date);
  const now = new Date();
  return now >= publishDate;
}
