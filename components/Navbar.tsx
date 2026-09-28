export function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-6 lg:px-12">
      {/* Logo */}
      <a
        href="/"
        className="font-serif text-2xl tracking-[0.25em] text-[#292329]"
      >
        Posh Nail Salon
      </a>

      {/* Navigation */}
      <nav className="hidden items-center rounded-full border border-white/70 bg-white/40 p-1 backdrop-blur-md md:flex">
        <a
          href="#services"
          className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#292329] shadow-sm"
        >
          Services
        </a>

        <a
          href="#lookbook"
          className="rounded-full px-6 py-3 text-sm text-[#6f666d] transition hover:text-[#292329]"
        >
          Lookbook
        </a>

        <a
          href="#locations"
          className="rounded-full px-6 py-3 text-sm text-[#6f666d] transition hover:text-[#292329]"
        >
          Locations
        </a>

        <a
        href="#about"
        className="rounded-full px-6 py-3 text-sm text-[#6f666d] transition hover:text-[#292329]"
        >
        About
        </a>

      </nav>

      {/* Booking button */}
      <a
        href="tel:+19127775013"
        className="rounded-full border border-white/80 bg-white/30 px-6 py-3 text-sm font-medium text-[#292329] backdrop-blur-md transition hover:bg-white/70"
      >
        Book now
      </a>
    </header>
  );
}