import React from 'react'
import backgroundImage from "../assets/autofix.jpg"

const Home = () => {
  return (
    <section
      id='home'
      className="hero"
      style={{
        height: "calc(100vh - 76px)",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-80"></div>

      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            AutoFix servis
          </h1>

          <p className="mb-6 text-lg">
            Spolehlivý autoservis ve vašem městě.  
            Rychlá diagnostika, férové ceny a profesionální přístup.
          </p>

          <a
            href="tel:+420777888999"
            className="
              cta-button
              btn btn-primary
              text-lg
              px-10
              font-semibold
              tracking-wide
              hover:scale-105
              active:scale-95
              transition-all
              duration-200
              shadow-xl
            "
          >
            Zavolat +420 777 888 999
          </a>

          <p className="mt-3 text-sm opacity-80">
            Po–Pá 8:00–17:00 <span className="mx-2 nav-link">•</span> U Servisu 12, Praha 8
          </p>
        </div>
      </div>
    </section>
  )
}

export default Home


