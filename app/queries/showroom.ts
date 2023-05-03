export const carSlugQuery = (id:string ):string => `*[ _type=="car" && slug.current == '${id}'][0]`

export const showroomQuery = `
*[ _type == "car" ]
{
  _id,
  price,
  "title": metadata.title,
  "blurb": metadata.description,
  "slug": slug.current,
  "coverImage": metadata.openGraphImage{alt, "photo": photo.asset._ref}
}[0...10]
`