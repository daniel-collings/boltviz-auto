import client from '@/client'
import SectionLayout from '../../../components/SectionLayout'
import CarProductDetail from '@/app/components/CarProductDetail'
import { getShowroomData } from '../page'
import { getSanityImageUrl } from '@/app/lib/sanityImageUrl'
import { carSlugQuery } from '@/app/queries/showroom'

async function getData(id: string) {
  const res = await client.fetch(carSlugQuery(id), { next: { revalidate: 60 } })
    .then((res) => res)

  return res
}

type Params = {
  params: {
    slug: string
  }
}

export default async function CarForSalePost({ params }: any) {
  const data = await getData(params.slug)

  return (
    <SectionLayout metadata={data.metadata}>
      <article className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 lg:mx-0 lg:max-w-none prose'>
        <CarProductDetail props={data} />
      </article>
    </SectionLayout>

  )
}

export async function generateStaticParams() {
  const data = await getShowroomData()
  const showroom = await data
  return showroom.map((car: any) => (
    { slug: car.slug }
  ))
}

export async function generateMetadata({ params : { slug }}: Params){
  const carData = getData(slug)
  const carDetails = await carData

  if(!carDetails){
    return {
      title: 'No Blog Here - 404'
    }
  }

  return {
    title: carDetails.metadata.title,
    openGraph: {
      title: carDetails.metadata.title,
      description: carDetails.metadata.description,
      url: `https://boltviz-auto.netlify.app/showroom/${carDetails.slug.current}`,
      siteName: 'Boltviz Auto',
      images: `${getSanityImageUrl(carDetails.metadata.openGraphImage.photo.asset._ref).url()}`,
      locale: 'en-GB',
      type: 'website',
    },
  }
}