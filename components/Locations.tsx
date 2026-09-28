"use client";

import { useState } from "react";

type LocationKey = "eisenhower" | "victory";

export function Locations() {
  const [location, setLocation] = useState<LocationKey>("eisenhower");

  const locations = {
    eisenhower: {
      name: "Eisenhower",
      address: (
        <>
          201 Eisenhower Dr
          <br />
          Savannah, GA 31406
        </>
      ),
      mapUrl:
        "https://www.google.com/maps?q=201+Eisenhower+Dr,+Savannah,+GA+31406&output=embed",
      directions:
        "https://www.google.com/maps/dir/?api=1&destination=201+Eisenhower+Dr,+Savannah,+GA+31406",
    },

    victory: {
      name: "Victory Drive",
      address: (
        <>
          1801 E Victory Dr #105
          <br />
          Savannah, GA 31404
        </>
      ),
      mapUrl:
        "https://www.google.com/maps?q=1801+E+Victory+Dr+%23105,+Savannah,+GA+31404&output=embed",
      directions:
        "https://www.google.com/maps/dir/?api=1&destination=1801+E+Victory+Dr+%23105,+Savannah,+GA+31404",
    },
  };

  const activeLocation = locations[location];

  return (
    <section
      id="locations"
      className="px-6 py-24 lg:px-12 lg:py-32"
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        {/* Map + location switcher */}
      <div>
      {/* Location switcher */}
      <div className="mb-4 flex rounded-full border border-white/80 bg-white/40 p-1 backdrop-blur-md">
        <button
          onClick={() => setLocation("eisenhower")}
          className={`flex-1 rounded-full px-5 py-3 text-sm transition ${
            location === "eisenhower"
              ? "bg-white font-medium text-[#292329] shadow-sm"
              : "text-[#6f666d] hover:text-[#292329]"
          }`}
        >
          Eisenhower
        </button>

        <button
          onClick={() => setLocation("victory")}
          className={`flex-1 rounded-full px-5 py-3 text-sm transition ${
            location === "victory"
              ? "bg-white font-medium text-[#292329] shadow-sm"
              : "text-[#6f666d] hover:text-[#292329]"
          }`}
        >
          Victory Drive
        </button>
      </div>

      {/* Map */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
        <iframe
          title={`${activeLocation.name} location`}
          src={activeLocation.mapUrl}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>

        {/* Location information */}
        <div className="max-w-xl lg:pl-8">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8a6370]">
            Visit Posh
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-[1.05] tracking-[-0.03em] text-[#292329] sm:text-6xl">
            Two locations.
            <br />
            One Posh experience.
          </h2>

          <p className="mt-8 text-lg leading-8 text-[#756d73]">
            Choose the Posh location that's most convenient for you.
            We can't wait to see you.
          </p>

          {/* Active location */}
          <div className="mt-10 border-t border-[#ddd5d8] pt-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#8a6370]">
              Current location
            </p>

            <h3 className="mt-2 font-serif text-2xl text-[#292329]">
              {activeLocation.name}
            </h3>

            <p className="mt-2 text-base leading-7 text-[#756d73]">
              {activeLocation.address}
            </p>

            <a
              href={activeLocation.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex rounded-full bg-[#292329] px-6 py-3 text-sm font-medium text-white transition hover:opacity-80"
            >
              Get directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}