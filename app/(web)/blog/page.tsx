import client from '@/client'
import { getSanityImageUrl } from '../../lib/sanityImageUrl'
import CustomCard from '../../components/CustomCard'
import SectionLayout from '../../components/SectionLayout'
import { IBlogs } from '@/app/components/FeaturedBlogs'
import { blogQuery } from '@/app/queries/blog'

  export async function getAllBlogData() {
    const res = await client.fetch(blogQuery, { next: { revalidate: 60 } })
    .then((res: IBlogs[]) => {
        const modifiedData = res.map((blog: IBlogs) => (
            {
                ...blog,
                image: getSanityImageUrl(blog?.coverImage?.photo).url(),
            }
        ))
        return modifiedData
    })
    return res
  }

export default async function Blog() {
  const data = await getAllBlogData()

  return (

    <SectionLayout title="Blog" description="Take a look at the array of amazing AI assisted content around the automotive world.">
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {data && data.slice(0, 9).map((o: any) => (
          <CustomCard key={o._id} props={o} pathname="blog" />
        ))}
      </div>
    </SectionLayout>

  )
}

export const metadata = {
  title: 'Blog',
  openGraph: {
    title: 'Blog',
    url: 'https://boltviz-auto.netlify.app/blog',
    images: 'https://boltviz-auto.netlify.app/openGraphImage.png',
    siteName: 'Boltviz Auto',
    locale: 'en-GB',
    type: 'website',
  },
}