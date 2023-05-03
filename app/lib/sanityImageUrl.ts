import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string
})

export function getSanityImageUrl(source: string) {
  return builder.image(source)
}
