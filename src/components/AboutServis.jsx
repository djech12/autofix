import React, { useEffect, useRef, useState } from 'react'
import CarBlue from '../assets/car-accesories-animate.svg?react'
import CarYellow from '../assets/car-accesories-animate-2.svg?react'
import BlueTire from "../assets/tire-blue.svg"
import YellowTire from "../assets/tire-yellow.svg"

const AboutServis = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const [theme, setTheme] = useState(
    document.documentElement.getAttribute('data-theme')
  )

  // sleduje změnu theme
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

  // sleduje scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // animace jen jednou
        }
      },
      {
        threshold: 0.3, // kolik % musí být vidět
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
      className='bg-base-300'
      style={{ minHeight: 'calc(100vh - 76px)' }}
    >
      <div className="absolute w-full">
        {theme === 'dark' ? (
          <img src={YellowTire} alt="Tire Yellow" className="w-full" />
        ) : (
          <img src={BlueTire} alt="Tire Blue" className="size-24" />
        )}
      </div>
      <div className="flex justify-center">
        {theme === 'dark' ? (
          <CarYellow className={`size-96 ${isVisible ? 'animated' : ''}`} />
        ) : (
          <CarBlue className={`size-96 ${isVisible ? 'animated' : ''}`} />
        )}
      </div>
    </section>
  )
}

export default AboutServis
