export default function HeroVideo() {
    return (
        <section className="relative h-screen px-4 flex flex-col items-center justify-center text-center text-white">
            <div className="absolute top-0 left-0 w-screen h-full overflow-hidden">
                <video className="min-w-full h-2/3 absolute object-cover" src="/SnowDriftWrxSti.mov" itemType="video/mp4" autoPlay playsInline muted loop preload="auto"></video>
            </div>

            <div className="relative isolate overflow-hidden bg-gray-900 rounded-2xl p-6 opacity-90">
                <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
                    <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#e3ff46] to-[#22C55E] opacity-20" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
                </div>
                <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
                    <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#e3ff46] to-[#22C55E] opacity-20" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
                </div>

                <div className="mx-auto max-w-2xl text-center pl-6 pr-6">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">Boltviz Auto</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-100 italic">Demo website with integrated headless CMS showcasing technical skills with Next.js v13 and TailwindCSS.</p>

                </div>
            </div>
        </section>

    )
}