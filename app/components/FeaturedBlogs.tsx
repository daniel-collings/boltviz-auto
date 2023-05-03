import client from "@/client"
import { getSanityImageUrl } from "../lib/sanityImageUrl"
import CustomCard from "./CustomCard"
import { featuredBlogQuery } from "../queries/blog"

export interface IBlogs {
    _id: string
    publishedAt: string
    title: string
    blurb: string
    slug: string
    coverImage: { photo: string }
    image?: string
}

  async function getData() {
    const res = await client.fetch(featuredBlogQuery, { next: { revalidate: 60 } })
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

export default async function FeaturedBlogs() {
    const data = await getData()

        return (
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">

                <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 rounded-2xl">
                    <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
                        <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#e3ff46] to-[#22C55E] opacity-20" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
                    </div>
                    <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
                        <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#e3ff46] to-[#22C55E] opacity-20" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
                    </div>

                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">Featured Blogs</h2>
                    </div>
                </div>

                {data && data.map((o: any) => (
                    <CustomCard key={o._id} props={o} pathname="blog" />
                ))}
            </div>
        )
    }