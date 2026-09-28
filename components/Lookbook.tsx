import Image from "next/image";

const photos = [
  {
    src: "/images/lookbook/posh-nail-salon-lookbook-2.jpg",
    alt: "Nude manicure",
  },
  {
    src: "/images/lookbook/posh-nail-salon-lookbook-3.jpg",
    alt: "Pink manicure",
  },
  {
    src: "/images/lookbook/posh-nail-salon-lookbook-4.jpg",
    alt: "Elegant nail design",
  },
  {
    src: "/images/lookbook/posh-nail-salon-lookbook-5.jpg",
    alt: "French manicure",
  },
  {
    src: "/images/lookbook/posh-nail-salon-lookbook-6.jpg",
    alt: "Nail art",
  },
  {
    src: "/images/lookbook/posh-nail-salon-lookbook-7.jpg",
    alt: "Luxury manicure",
  },
];

export function Lookbook() {
  return (
    <section id="lookbook" className="px-6 py-24 lg:px-12 lg:py-32">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8a6370]">
            Our work
          </p>

          <h2 className="mt-4 font-serif text-5xl tracking-[-0.03em] text-[#292329] sm:text-6xl">
            Lookbook
          </h2>
        </div>

        <span className="hidden text-sm text-[#8a8087] sm:block">
          A little inspiration
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {photos.map((photo) => (
          <div
            key={photo.src}
            className="group relative aspect-[4/5] overflow-hidden rounded-[1.5rem]"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}