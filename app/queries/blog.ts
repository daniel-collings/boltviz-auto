export const blogSlugQuery = (id:string ):string => `*[ _type=="blog" && slug.current == '${id}'][0]`

export const blogQuery = `
*[ _type == "blog" ]
{
  _id,
  publishedAt,
  "title": metadata.title,
  "blurb": metadata.description,
  "slug": slug.current,
  "coverImage": metadata.openGraphImage{alt, "photo": photo.asset._ref}
}[0...10]
`

export const featuredBlogQuery = `*[ _type == "blog" ]
{
  _id,
  publishedAt,
  "title": metadata.title,
  "blurb": metadata.description,
  "slug": slug.current,
  "coverImage": metadata.openGraphImage{alt, "photo": photo.asset._ref}
}[0...2]`