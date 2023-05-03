import Link from "next/link";

export default function IncentiveCTA() {
    return (
        <div className="text-center">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    <span className='text-[#22C55E]'>Boltviz Auto</span> with integrated CMS developed by <Link href="https://boltviz.com" className='text-[#22C55E]'>Boltviz</Link>
                </h2>
                <div className="mt-16 flex justify-center">
                    <p className="relative rounded-full bg-gray-50 px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/5">
                        <span className="hidden md:inline">Read more about Boltviz developments over at the</span>
                        <Link href="https://boltviz.com/blog" className="font-semibold text-[#22C55E]"><span className="absolute inset-0" aria-hidden="true"></span> Boltviz blog<span aria-hidden="true">&rarr;</span></Link>
                    </p>
                </div>
            </div>
        </div>
    )
}