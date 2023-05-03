import HeroVideo from './components/HeroVideo'
import FeaturedBlogs from './components/FeaturedBlogs'
import StocklistCTA from './components/StocklistCTA'
import IncentiveCTA from './components/IncentiveCTA'

export const revalidate = 60;

export default function Home() {
  return (
    <div>
      <HeroVideo />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -bottom-1/3 -mt-[30vh]">
        {/* @ts-expect-error Server Component */}
        <FeaturedBlogs />
        <StocklistCTA />
        <IncentiveCTA />
      </div>
    </div>

  )
}

export const metadata = {
  title: 'Home',
  openGraph: {
    title: 'Home',
    description: 'Boltviz Auto with integrated CMS developed by Boltviz',
    url: `https://boltviz-auto.netlify.app/`,
    siteName: 'Boltviz Auto',
    images: 'https://boltviz-auto.netlify.app/openGraphImage.png',
    locale: 'en-GB',
    type: 'website',
  },
}