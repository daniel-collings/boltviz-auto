import { PortableText } from "@portabletext/react";
import { getSanityImageUrl } from "../lib/sanityImageUrl";
import numberWithCommas from "../lib/commaSeperatedConversion";

export default function CarProductDetail({ props }: any) {
  return (
    <div>
      <section className="mx-auto px-4 pb-24 sm:px-6 sm:pb-32 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">


          <div className="mx-auto max-w-2xl col-span-12 xl:col-span-12 xl:row-span-2 xl:row-end-2 xl:mt-0 xl:max-w-none">
            <div className="flex flex-col-reverse">
              <div className="mt-4">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{props.metadata.title}</h2>

                <h2 id="information-heading" className="sr-only">Product information</h2>
              </div>

            </div>

            <p className="mt-6 text-gray-500">{props.blurb}</p>

            <div className=" grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              <button type="button" className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#22C55E] px-8 py-3 text-base font-medium text-white hover:bg-[#22C55E] focus:outline-none focus:ring-2 focus:ring-[#22C55E] focus:ring-offset-2 focus:ring-offset-gray-50">Buy Now £{numberWithCommas(props.price)}</button>
              <button type="button" className="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-50 px-8 py-3 text-base font-medium text-[#22C55E] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-50">Reserve</button>
            </div>

            <div className="border-t border-gray-200 pt-10">
              <h3 className="text-sm font-medium text-gray-900">Buy with confidence</h3>
              <div className="prose prose-sm mt-4 text-gray-500">
                <ul role="list">
                  <li>Free service on all imported motors</li>

                  <li>Ceramic coating before leaving the showroom</li>

                  <li>Quality backed by national extended warranty</li>
                </ul>
              </div>
            </div>

            <div className="flex xl:hidden lg:col-span-4 lg:row-end-1">
              <img src={getSanityImageUrl(props.metadata.openGraphImage.photo.asset._ref).url()} alt={props.metadata.openGraphImage.alt} className="object-cover object-center rounded-xl" />
            </div>


            <dl className="mx-auto mt-16 mb-16 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-y-16 lg:max-w-none lg:grid-cols-4 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Fuel</dt>
                <dd className="mt-2 text-sm text-gray-500">{props.veh.fuel}</dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Odo Reading</dt>
                <dd className="mt-2 text-sm text-gray-500">{numberWithCommas(props.veh.mileage)} {props.veh.odometerReading}</dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Engine</dt>
                <dd className="mt-2 text-sm text-gray-500">{props.veh.engine}</dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Year</dt>
                <dd className="mt-2 text-sm text-gray-500">{props.veh.year}</dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Colour</dt>
                <dd className="mt-2 text-sm text-gray-500">{props.veh.colour}</dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Registration</dt>
                <dd className="mt-2 text-sm text-gray-500">{props.veh.registration}</dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Imported</dt>
                <dd className="mt-2 text-sm text-gray-500">{props.veh.imported}</dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Modified</dt>
                <dd className="mt-2 text-sm text-gray-500">{props.veh.modified}</dd>
              </div>
            </dl>

            <PortableText
              value={props.content}
            />
            
          </div>
        </div>
      </section>


    </div>

  )
}