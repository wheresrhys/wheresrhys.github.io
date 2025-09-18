function getDateUrl (date) {
  const newDate = new Date(date)
  const year = newDate.getFullYear()
  const month = String(newDate.getMonth() + 1).padStart(2, '0');
  const day = String(newDate.getDate()).padStart(2, '0');
  return `${year}/${month}/${day}`
}

export function generateBlogPostURL(post) {
  const slug = post.id;
  const date = post.data.date;
  return `${getDateUrl(date)}/${slug.replace(/([\d]{4})-([\d]{2})-([\d]{2})-(.*)/g, "$4")}`
}
