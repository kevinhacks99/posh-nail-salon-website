import Image from "next/image";

export function Hero() {
  return (
    <section className="px-4 pb-6 lg:px-12">
      <div className="grid min-h-[calc(100vh-110px)] overflow-hidden rounded-[2rem] border border-white/70 bg-[#f5f1f3] lg:grid-cols-2">
        {/* Left side */}
        <div className="flex flex-col justify-between px-8 py-12 lg:px-14 lg:py-16">
          <div>
            {/* Eyebrow */}
            <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-white/80 bg-white/30 px-5 py-3 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#15ff00]" />

              <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#806672]">
                Booking open · Savannah, GA
              </span>
            </div>

            {/* Headline */}
            <h1 className="max-w-xl font-serif text-6xl leading-[0.95] tracking-[-0.04em] text-[#292329] sm:text-7xl lg:text-8xl">
              Nails that{" "}
              <span className="italic text-[#956675]">speak softly</span>{" "}
              and turn heads.
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-lg text-lg leading-8 text-[#70686f]">
              Precision manicures, spa pedicures and nail artistry in a calm,
              elevated space. Every set is designed around you.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="tel:+19127775013"
                className="rounded-full bg-[#292329] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#40363d]"
              >
                Book an appointment
              </a>

              <a
                href="#services"
                className="rounded-full border border-white/90 bg-white/30 px-7 py-4 text-sm font-medium text-[#292329] backdrop-blur-sm transition hover:bg-white/70"
              >
                View services
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="mt-16 flex flex-wrap gap-8 border-t border-[#292329]/10 pt-6">
            <div>
              <p className="font-serif text-3xl text-[#292329]">10–7</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#8a8087]">
                Mon–Sat
              </p>
            </div>

            <div className="border-l border-[#292329]/10 pl-8">
              <p className="font-serif text-3xl text-[#292329]">12–5</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#8a8087]">
                Sunday
              </p>
            </div>

            <div className="border-l border-[#292329]/10 pl-8">
              <p className="font-serif text-3xl text-[#292329]">Walk-ins</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#8a8087]">
                Welcome
              </p>
            </div>
          </div>
        </div>

        {/* Right side — image */}
        <div className="min-h-[500px] p-4 lg:p-6">
        <div className="relative h-full min-h-[500px] overflow-hidden rounded-[1.75rem]">
            <Image
            src="/images/posh-nail-salon-photo-1.jpg"
            alt="Nail manicure"
            fill
            priority
            className="object-cover"
            />
        </div>
        </div>
      </div>
    </section>
  );
}