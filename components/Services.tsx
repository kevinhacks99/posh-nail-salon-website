"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type ServiceItem = {
  name: string;
  description: string;
  price: string;
};

type ServiceCategory = {
  category: string;
  duration: string;
  name: string;
  description: string;
  price: string;
  items: ServiceItem[];
};

const services: ServiceCategory[] = [
  {
    category: "Signature",
    duration: "45 min",
    name: "Manicure",
    description:
      "Shape, cuticle care and a polished finish tailored to you.",
    price: "from $35",
    items: [
      {
        name: "Classic Manicure",
        description: "Shape, cuticle care and your choice of polish.",
        price: "$35",
      },
      {
        name: "Gel Manicure",
        description: "A long-wear gel finish with meticulous nail prep.",
        price: "$45",
      },
      {
        name: "French Manicure",
        description: "A timeless French finish with clean, precise detailing.",
        price: "$50",
      },
    ],
  },
  {
    category: "Most Loved",
    duration: "90 min",
    name: "Spa Pedicure",
    description:
      "A relaxing soak, exfoliation and polish finished with a massage.",
    price: "from $45",
    items: [
      {
        name: "Classic Pedicure",
        description: "Soak, shape, cuticle care and polish.",
        price: "$45",
      },
      {
        name: "Spa Pedicure",
        description: "Exfoliation, extended massage and a polished finish.",
        price: "$60",
      },
      {
        name: "Gel Pedicure",
        description: "A long-wear gel finish with complete pedicure care.",
        price: "$65",
      },
    ],
  },
  {
    category: "Artistry",
    duration: "75 min",
    name: "Nail Enhancements",
    description:
      "Builder gel, extensions and hand-painted details for your signature look.",
    price: "from $60",
    items: [
      {
        name: "Builder Gel",
        description: "Structured natural nails with a durable gel finish.",
        price: "$60",
      },
      {
        name: "Gel Extensions",
        description: "Beautiful added length with a lightweight gel finish.",
        price: "$75",
      },
      {
        name: "Nail Art",
        description: "Custom hand-painted details designed for your look.",
        price: "from $15",
      },
    ],
  },
];

export function Services() {
  const [selectedService, setSelectedService] =
    useState<ServiceCategory | null>(null);

  return (
    <section id="services" className="px-6 py-24 lg:px-12 lg:py-32">
      <div className="mb-12 flex items-end justify-between">
        <h2 className="font-serif text-5xl tracking-[-0.03em] text-[#292329] sm:text-6xl">
          The menu
        </h2>

        <span className="hidden text-xs uppercase tracking-[0.3em] text-[#8a8087] sm:block">
          Prices from
        </span>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {services.map((service) => (
          <button
            key={service.category}
            type="button"
            onClick={() => setSelectedService(service)}
            className="group rounded-[2rem] border border-white/80 bg-white/35 p-8 text-left backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/60 lg:p-9"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#8a6370]">
                {service.category}
              </span>

              <span className="text-sm text-[#aaa1a7]">
                {service.duration}
              </span>
            </div>

            <h3 className="mt-10 font-serif text-3xl text-[#292329]">
              {service.name}
            </h3>

            <p className="mt-5 min-h-20 text-base leading-7 text-[#756d73]">
              {service.description}
            </p>

            <div className="mt-10 flex items-end justify-between">
              <span className="font-serif text-3xl text-[#292329]">
                {service.price}
              </span>

              <span className="text-sm font-medium text-[#815a68] transition group-hover:translate-x-1">
                View menu →
              </span>
            </div>
          </button>
        ))}
      </div>

      <Dialog
        open={selectedService !== null}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedService(null);
          }
        }}
      >
        <DialogContent className="max-h-[85vh] overflow-y-auto rounded-[2rem] border-white/80 bg-[#f8f5f6]/95 p-8 backdrop-blur-xl sm:max-w-lg sm:p-10">
          {selectedService && (
            <>
              <DialogHeader>
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8a6370]">
                  {selectedService.category}
                </p>

                <DialogTitle className="font-serif text-4xl font-normal text-[#292329]">
                  {selectedService.name}
                </DialogTitle>

                <p className="pt-2 text-sm leading-6 text-[#756d73]">
                  {selectedService.description}
                </p>
              </DialogHeader>

              <div className="mt-4 divide-y divide-[#ddd5d8]">
                {selectedService.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex gap-6 py-6 first:pt-2 last:pb-2"
                  >
                    <div className="flex-1">
                      <h4 className="font-serif text-xl text-[#292329]">
                        {item.name}
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-[#756d73]">
                        {item.description}
                      </p>
                    </div>

                    <span className="shrink-0 text-sm font-medium text-[#815a68]">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}