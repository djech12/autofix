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

          <button className="btn btn-primary">
            Objednat servis
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home


