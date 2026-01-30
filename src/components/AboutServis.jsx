import React, { useEffect, useRef, useState } from 'react'
import CarBlue from '../assets/car-accesories-animate.svg?react'
import CarYellow from '../assets/car-accesories-animate-2.svg?react'
import CustomerBlue from "../assets/customer-blue.svg?react"
import CustomerYellow from "../assets/customer-yellow.svg?react"


const AboutServis = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const [theme, setTheme] = useState(
    document.documentElement.getAttribute('data-theme')
  )

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.getAttribute('data-theme'))
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.3,
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className='bg-base-300 relative overflow-hidden'
      style={{ minHeight: 'calc(100vh - 76px)' }}
    >
      <div className='flex flex-col-reverse lg:flex-row justify-evenly pt-16'>
        <div className='max-w-xl'>
          <h2 className='var1 text-6xl text-start font-bold mb-8 lg:mb-14 ml-6 lg:ml-0 mt-20 lg:mt-0'>O servisu</h2>
          <p className='text-lg px-6 lg:px-0'>
            AutoFix je moderní lokální autoservis zaměřený na kvalitní, rychlé a férové služby pro všechny typy osobních vozů. 
            Díky dlouholetým zkušenostem a neustálému vzdělávání našeho týmu dokážeme řešit běžnou údržbu i složitější technické problémy.
            Pracujeme s ověřenými postupy, kvalitními díly a klademe důraz na bezpečnost i dlouhou životnost vašeho vozu.
          </p>

          <p className="mt-4 text-lg px-6 lg:px-0">
            Věříme v otevřenou komunikaci se zákazníky – před každým zásahem vás vždy informujeme o rozsahu práce, ceně a doporučeném řešení.
            Naším cílem není jen oprava auta, ale dlouhodobá spolupráce založená na důvěře, spolehlivosti a osobním přístupu.
            Ať už přijedete na pravidelný servis nebo rychlou kontrolu, postaráme se o váš vůz, jako by byl náš vlastní.
          </p>
        </div>
        {/* Auto */}
        <div className="relative flex justify-center z-10">
          {theme === 'dark' ? (
            <CarYellow className={`size-96 ${isVisible ? 'animated' : ''} duration-500`} />
          ) : (
            <CarBlue className={`w-[500px] ${isVisible ? 'animated' : ''} duration-500`} />
          )}
        </div>
      </div>
      <div>
        {/* Customer */}
        <div className="relative flex justify-center z-10">
          {theme === 'dark' ? (
            <CustomerYellow className={`size-96 ${isVisible ? 'animated' : ''}`} />
          ) : (
            <CustomerBlue className={`w-[500px] ${isVisible ? 'animated' : ''}`} />
          )}
        </div>
        <div>
          <ul>
            <li>Individuální přístup ke každému vozu a zákazníkovi</li>
            <li>Transparentní ceny a žádné skryté poplatky</li>
            <li>Rychlý servis bez dlouhého čekání</li>
            <li>Profesionální tým s více než 10 lety zkušeností</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutServis
