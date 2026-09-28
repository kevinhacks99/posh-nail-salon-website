const services = [
  {
    category: "Signature",
    duration: "45 min",
    name: "Classic Manicure",
    description:
      "Shape, cuticle care and a long-wear polish or gel finish in any shade.",
    price: "$35",
  },
  {
    category: "Most Loved",
    duration: "90 min",
    name: "Spa Pedicure",
    description:
      "Soak, exfoliation and polish with a meticulous, unhurried massage.",
    price: "$45",
  },
  {
    category: "Artistry",
    duration: "75 min",
    name: "Nail Enhancements",
    description:
      "Builder gel, extensions and hand-painted art for your signature look.",
    price: "$60",
  },
];

export function Services() {
  return (
    <section id="services" className="px-6 py-24 lg:px-12 lg:py-32">
      {/* Section heading */}
      <div className="mb-12 flex items-end justify-between">
        <h2 className="font-serif text-5xl tracking-[-0.03em] text-[#292329] sm:text-6xl">
          Services
        </h2>

        <span className="hidden text-xs uppercase tracking-[0.3em] text-[#8a8087] sm:block">
          Prices from
        </span>
      </div>

      {/* Service cards */}
      <div className="grid gap-5 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.name}
            className="group rounded-[2rem] border border-white/80 bg-white/35 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/60 lg:p-9"
          >
            {/* Top row */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#8a6370]">
                {service.category}
              </span>

              <span className="text-sm text-[#aaa1a7]">
                {service.duration}
              </span>
            </div>

            {/* Service */}
            <h3 className="mt-10 font-serif text-3xl text-[#292329]">
              {service.name}
            </h3>

            <p className="mt-5 min-h-20 text-base leading-7 text-[#756d73]">
              {service.description}
            </p>

            {/* Bottom row */}
            <div className="mt-10 flex items-end justify-between">
              <span className="font-serif text-3xl text-[#292329]">
                from {service.price}
              </span>

              <a
                href="#book"
                className="text-sm font-medium text-[#815a68] transition group-hover:translate-x-1"
              >
                Book →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}