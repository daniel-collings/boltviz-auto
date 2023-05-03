import client from '@/client'
import { PortableText } from '@portabletext/react'
import SectionLayout from '../../../components/SectionLayout'
import { getAllBlogData } from '../page'
import { getSanityImageUrl } from '@/app/lib/sanityImageUrl'
import { notFound } from 'next/navigation'
import { blogSlugQuery } from '@/app/queries/blog'

async function getData(id: string) {
  const res = await client.fetch(blogSlugQuery(id), { next: { revalidate: 60 } })
    .then((res) => res)

    if(!res) return undefined

  return res
}

type Params = {
  params: {
    slug: string
  }
}

export default async function BlogPost({ params }: any) {
  const data = await getData(params.slug)

  if(!data) return notFound()

  return (
    <SectionLayout metadata={data.metadata}>
      <article className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 lg:mx-0 lg:max-w-none prose'>

        <section className="mx-auto px-4 pb-24 sm:px-6 sm:pb-32 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">

            <div className="mx-auto max-w-2xl col-span-12 xl:col-span-12 xl:row-span-2 xl:row-end-2 xl:mt-0 xl:max-w-none">
              <div className="flex flex-col-reverse">
                <div className="mt-4">
                  <PortableText
                    value={data.content}
                  />
                </div>
              </div>
            </div>

          </div>
        </section>
      </article>
    </SectionLayout>
  )
}

export async function generateStaticParams() {
  const data = await getAllBlogData()
  const blogs = await data
  return blogs.map((blog: any) => (
    { slug: blog.slug }
  ))
}

export async function generateMetadata({ params : { slug }}: Params){
  const blogData = getData(slug)
  const blog = await blogData

  if(!blog){
    return {
      title: 'No Blog Here - 404'
    }
  }

  return {
    title: blog.metadata.title,
    openGraph: {
      title: blog.metadata.title,
      description: blog.metadata.description,
      url: `https://boltviz-auto.netlify.app/blog/${blog.slug.current}`,
      siteName: 'Boltviz Auto',
      images: `${getSanityImageUrl(blog.metadata.openGraphImage.photo.asset._ref).url()}`,
      locale: 'en-GB',
      type: 'website',
    },
  }
}