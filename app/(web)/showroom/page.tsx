import client from '@/client'
import { getSanityImageUrl } from '../../lib/sanityImageUrl'
import CustomCard from '../../components/CustomCard'
import SectionLayout from '../../components/SectionLayout'
import { showroomQuery } from '@/app/queries/showroom'

  export async function getShowroomData() {
    const res = await client.fetch(showroomQuery, { next: { revalidate: 60 } })
    .then((res: any) => {
      const modifiedData = res.map((car: any) => (
        {
          ...car,
          image: getSanityImageUrl(car?.coverImage?.photo).url(), 
        }
      ))
      return modifiedData
    })

    return res
  }

  
export default async function Showroom() {
  const data = await getShowroomData()

  return (
    <SectionLayout title="Showroom" description="Find your dream motor here.">
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {data && data.slice(0, 9).map((o: any) => (
          <CustomCard key={o._id} props={o} pathname="showroom"/>
        ))}
      </div>
    </SectionLayout>
  )
}

export const metadata = {
  title: 'Showroom',
  openGraph: {
    title: 'Showroom',
    url: 'https://boltviz-auto.netlify.app/showroom',
    images: 'https://boltviz-auto.netlify.app/openGraphImage.png',
    siteName: 'Boltviz Auto',
    locale: 'en-GB',
    type: 'website',
  },
}