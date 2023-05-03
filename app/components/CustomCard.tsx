import Link from "next/link";
import numberWithCommas from "../lib/commaSeperatedConversion";

export default function CustomCard({ props, pathname }: any) {
  return (
    <article className="flex flex-col items-start justify-between">
      <Link href={`${pathname}/${props.slug}`}>
        <div className="relative w-full">
          <img src={props.image} alt={props.coverImage.alt} className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
        </div>
        <div className="max-w-xl">
          <div className="mt-8 flex items-center gap-x-4 text-xs">
            {props.publishedAt && <time dateTime={props.publishedAt.substring(0, 10)} className="text-gray-500">{props.publishedAt.substring(0, 10)}</time>}
            {props.price && <span className="relative z-10 rounded-full bg-[#e3ff46] px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">£{numberWithCommas(props.price)}</span>}
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <span className="absolute inset-0"></span>
              {props.title}
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{props.blurb}</p>
          </div>
        </div>
      </Link>
    </article>


  )
}