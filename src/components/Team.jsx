import React from 'react'
import zam1 from "../assets/zam1.jpg"
import zam2 from "../assets/zam2.jpg"
import zam3 from "../assets/zam3.jpg"
import zam4 from "../assets/zam4.jpg"
import zam5 from "../assets/zam5.jpg"
import zam6 from "../assets/zam6.jpg"


import { Van, Motorbike, BrushCleaning, Wrench, Drill, PaintRoller, Cable } from 'lucide-react' 

const Team = () => {
  const teamData = [
    {
      id: 1,
      name: "Jan Novák",
      nickname: "Jenda",
      img: zam1,
      skills: ["drill", "motorbike"],
      question: "Jaký byl nejhorší problém, co jsi kdy na autě řešil?",
      answer: "Zaseklý šroub, který nechtěl ven ani po třech hodinách. Nakonec vyhrál."
    },
    {
      id: 2,
      name: "Petr Svoboda",
      nickname: "MotoPete",
      img: zam2,
      skills: ["motorbike", "wrench", "cable"],
      question: "Co tě na práci v autoservisu nejvíc baví?",
      answer: "Ten moment, kdy auto konečně nastartuje a zákazník se usměje."
    },
    {
      id: 3,
      name: "Tomáš Dvořák",
      nickname: "Detailer Tom",
      img: zam3,
      skills: ["brush", "paint", "wrench", "van"],
      question: "Jak poznáš dobře odvedenou práci?",
      answer: "Když je auto čistší než když přijelo a všechno funguje jak má."
    },
    {
      id: 4,
      name: "Martin Král",
      nickname: "Dr. Elektrika",
      img: zam4,
      skills: ["cable", "drill", "wrench"],
      question: "Elektrika nebo mechanika?",
      answer: "Elektrika. Když víš kam sáhnout, je to radost. Když ne… tak výzva."
    },
    {
      id: 5,
      name: "Lukáš Beneš",
      nickname: "Vanman",
      img: zam5,
      skills: ["van", "wrench"],
      question: "Jaké auto by sis opravil jen tak pro radost?",
      answer: "Starou dodávku – žádná elektronika, jen poctivá mechanika."
    },
    {
      id: 6,
      name: "David Horák",
      nickname: "Dave",
      img: zam6,
      skills: ["wrench", "brush", "paint", "cable"],
      question: "Co by měl každý řidič vědět o svém autě?",
      answer: "Že servis není nepřítel, ale prevence proti větším průšvihům."
    }
  ]

  const renderIcon = (skill) => {
    switch (skill) {
      case "van": return <Van />
      case "motorbike": return <Motorbike />
      case "brush": return <BrushCleaning />
      case "wrench": return <Wrench />
      case "drill": return <Drill />
      case "paint": return <PaintRoller />
      case "cable": return <Cable />
      default: return null
    }
  }

  return (
    <section
      id="team"
      className="team bg-base-300"
      style={{ minHeight: "calc(100vh - 76px)" }}
    >
      <h2 className="var1 text-5xl font-bold text-center mb-28 pt-24">
        Náš tým
      </h2>

      <div className="flex flex-wrap justify-center gap-10 px-6 pb-24">
        {teamData.map((member) => (
          <div key={member.id} className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img src={member.img} alt={member.name} />
            </figure>

            <div className="card-body">
              <h2 className="card-title mx-auto mt-2 text-lg">{member.name}</h2>
              <span className="var3 italic font-bold mx-auto my-4 text-2xl">"{member.nickname}"</span>

              <div className="var1 flex mx-auto gap-3">
                {member.skills.map((skill, i) => (
                  <span key={i}>{renderIcon(skill)}</span>
                ))}
              </div>

              <div className="collapse collapse-arrow bg-base-100 border border-base-300 mt-6">
                <input type="checkbox" />
                <div className="collapse-title font-semibold">
                  {member.question}
                </div>
                <div className="collapse-content text-sm">
                  {member.answer}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Team

