import React from "react";
import { Droplet, SearchCheck, Drill, Bubbles } from "lucide-react";

const services = [
  {
    id: 1,
    title: "výměna oleje",
    price: "od 1 490 Kč",
    description:
      "Kompletní výměna motorového oleje včetně filtru. Rychlý a spolehlivý servis s použitím kvalitních olejů dle specifikace výrobce.",
    icon: Droplet,
  },
  {
    id: 2,
    title: "technická prohlídka",
    price: "od 990 Kč",
    description:
      "Základní technická kontrola vozu a příprava na STK. Prověříme brzdy, podvozek, osvětlení i bezpečnostní prvky.",
    icon: SearchCheck,
  },
  {
    id: 3,
    title: "pneuservis",
    price: "od 790 Kč",
    description:
      "Přezutí pneumatik, vyvážení kol a kontrola tlaku. Rychlé a profesionální řešení pro letní i zimní sezónu.",
    icon: Drill,
  },
  {
    id: 4,
    title: "čištění vozu",
    price: "od 590 Kč",
    description:
      "Důkladné ruční mytí exteriéru a úklid interiéru. Postaráme se o čistotu, lesk a svěží vzhled vašeho vozu.",
    icon: Bubbles,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="services bg-base-300"
      style={{ minHeight: "calc(100vh - 76px)" }}
    >
      <h2 className="var1 text-5xl font-bold text-center mb-28 pt-24">
        Naše služby
      </h2>

      <div className="flex justify-evenly flex-wrap gap-18 md:gap-8">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.id}
              className="service-card border border-dashed relative max-w-xs p-8 mb-20 bg-base-300 lg:p-10 rounded-xl hover:-translate-y-2 duration-300"
            >
              <section className="flex flex-col justify-between w-full h-full">
                {/* Icon */}
                <div className="absolute service-icon duration-500 p-3 rounded-full -top-7 left-1/2 -translate-x-1/2">
                  <Icon className="text-base-300 size-10" />
                </div>

                {/* Content */}
                <div>
                  <div className="flex flex-col w-full">
                    <div className="flex flex-col mt-8">
                      <p className="text-lg font-medium tracking-tight uppercase var1">
                        {service.title}
                      </p>
                      <p className="mt-4 text-4xl font-medium tracking-tighter var1">
                        {service.price}
                      </p>
                    </div>

                    <p className="mt-4 text-sm text-[15191e]">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Button */}
                <div className="flex w-full mt-8">
                  <a
                    href=""
                    className="cta-button text-base-300 flex items-center justify-center w-full h-12 px-8 py-2 text-sm font-medium rounded-full hover:opacity-80 transition"
                  >
                    Objednat
                  </a>
                </div>
              </section>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
