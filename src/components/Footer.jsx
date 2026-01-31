import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-base-300 border-t border-base-300 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-2 text-sm">
        <span>© {new Date().getFullYear()} Autoservis</span>
        <span className="hidden sm:inline">•</span>
        <a
          href="https://www.djech.cz"
          target="_blank"
          rel="noreferrer"
          className="var1 hover:underline transition font-semibold"
        >
          Vytvořil: <span className='italic'>Daniel Jech</span>
        </a>
      </div>
    </footer>
  )
}

export default Footer

