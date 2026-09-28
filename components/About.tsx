import Image from "next/image";

export function About() {
  return (
    <section id="about" className="px-6 py-24 lg:px-12 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
            src="/images/posh-worker-photo.jpg"
            alt="Nail manicure"
            fill
            priority
            className="object-cover"
            />
        </div>

        {/* Content */}
        <div className="max-w-2xl lg:pl-12">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8a6370]">
            The Posh experience
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-[1.05] tracking-[-0.03em] text-[#292329] sm:text-6xl">
            Beauty is in the details.
          </h2>

          <p className="mt-8 text-lg leading-8 text-[#756d73]">
            Posh is a space for beautifully done nails, thoughtful details,
            and a little time to slow down. Every appointment is designed to
            feel personal, polished, and unhurried.
          </p>

          <p className="mt-5 text-lg leading-8 text-[#756d73]">
            From your first consultation to the final coat of polish, we
            believe the experience should feel just as beautiful as the
            finished set.
          </p>

          <a
            href="tel:+19127775013"
            className="mt-8 inline-flex rounded-full bg-[#292329] px-7 py-4 text-sm font-medium text-white transition hover:opacity-80"
          >
            Book your visit
          </a>
        </div>
      </div>
    </section>
  );
}