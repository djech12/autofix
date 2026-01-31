import React, { useState } from "react"
import { PhoneCall, Facebook, Instagram, Mail, Copy, Check } from "lucide-react"

const Contact = () => {
  const serviceEmail = "info@autoservis.cz"
  const servicePhone = "+420777888999"

  const [copied, setCopied] = useState("")

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text)
    setCopied(label)

    setTimeout(() => {
      setCopied("")
    }, 1800)
  }

  return (
    <section
      id="contact"
      className="contact bg-base-300 relative"
      style={{ minHeight: "calc(100vh - 76px)" }}
    >
      <h2 className="var1 text-5xl font-bold text-center pt-24 mb-20">
        Kontaktujte nás
      </h2>

      <div className="flex flex-col lg:flex-row gap-16 justify-center px-6 pb-24">

        {/* FORMULÁŘ */}
        <div className="card bg-base-100 w-full max-w-md shadow-md">
          <div className="card-body gap-4">

            <h3 className="text-2xl font-bold text-center mb-4">
              Napište nám
            </h3>

            <input
              type="text"
              placeholder="Vaše jméno"
              className="input w-full"
            />

            <input
              type="email"
              placeholder="Váš e-mail"
              className="input w-full"
            />

            <div className="flex gap-6 justify-center">
              <label className="label cursor-pointer gap-2">
                <input type="radio" name="type" className="radio var1" defaultChecked />
                <span className="label-text">Dotaz</span>
              </label>

              <label className="label cursor-pointer gap-2">
                <input type="radio" name="type" className="radio var1" />
                <span className="label-text">Komentář</span>
              </label>
            </div>

            <textarea
              className="textarea textarea-bordered w-full h-32"
              placeholder="Vaše zpráva"
            />

            <button className="cta-button text-base-300 flex items-center justify-center w-full h-12 px-8 py-2 text-sm font-medium rounded-full hover:opacity-80 transition">
              Odeslat zprávu
            </button>
          </div>
        </div>

        {/* KONTAKTY + SOCIÁLNÍ SÍTĚ */}
        <div className="flex flex-col gap-10 justify-center">

          {/* Email */}
          <div
            onClick={() => copyToClipboard(serviceEmail, "E-mail zkopírován")}
            className="flex items-center gap-4 cursor-pointer group"
          >
            <Mail className="group-hover:scale-110 transition" />
            <span className="font-semibold">{serviceEmail}</span>
            <Copy className="opacity-50 group-hover:opacity-100 transition" />
          </div>

          {/* Telefon */}
          <div
            onClick={() => copyToClipboard(servicePhone, "Telefon zkopírován")}
            className="flex items-center gap-4 cursor-pointer group"
          >
            <PhoneCall className="group-hover:scale-110 transition" />
            <span className="font-semibold">+420 777 888 999</span>
            <Copy className="opacity-50 group-hover:opacity-100 transition" />
          </div>

          {/* Sociální sítě */}
          <div className="flex gap-6 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            >
              <Facebook size={28} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            >
              <Instagram size={28} />
            </a>
          </div>

        </div>
      </div>

      {/* TOAST ALERT */}
      {copied && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="flex items-center gap-2 bg-neutral text-neutral-content px-5 py-3 rounded-xl shadow-lg animate-fade-in">
            <Check size={18} />
            <span>{copied}</span>
          </div>
        </div>
      )}
    </section>
  )
}

export default Contact
