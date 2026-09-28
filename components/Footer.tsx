export function Footer() {
  return (
    <footer className="border-t border-[#ddd5d8] px-6 py-10 lg:px-12">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        {/* Brand */}
        <div>
          <a
            href="/"
            className="font-serif text-3xl tracking-[0.25em] text-[#292329]"
          >
            POSH
          </a>

          <p className="mt-3 max-w-sm text-sm leading-6 text-[#756d73]">
            Beautiful nails, thoughtful service, and a little time for
            yourself.
          </p>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#6f666d]">
          <a
            href="#services"
            className="transition hover:text-[#292329]"
          >
            Services
          </a>

          <a
            href="#lookbook"
            className="transition hover:text-[#292329]"
          >
            Lookbook
          </a>

          <a
            href="#locations"
            className="transition hover:text-[#292329]"
          >
            Visit
          </a>

          <a
            href="tel:+19127775013"
            className="transition hover:text-[#292329]"
          >
            Book now
          </a>
        </nav>
      </div>

      {/* Bottom row */}
      <div className="mt-10 flex flex-col gap-3 border-t border-[#ddd5d8] pt-5 text-xs text-[#9a9197] sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Posh Nail Salon. All rights reserved.</p>

        <p>Savannah, Georgia</p>
      </div>
    </footer>
  );
}