"use client"

import { useState } from "react"
import { ChevronDown, X } from "lucide-react"

// Timeline data
const timelineEvents = [
  {
    year: "1950",
    title: "Declaração de Robert Schuman",
    description: "O Ministro dos Negócios Estrangeiros francês, Robert Schuman, propõe um plano de transformação da Europa, através de um processo lento e com vários passos com o objetivo de impossibilitar uma guerra futura, ao mesmo tempo que une todo o continente.",
  },
  {
    year: "1951",
    title: "Tratado de Paris (CECA – Benelux, França, Itália e Alemanha)",
    description: "Acontecimento inaugural da história do Parlamento Europeu que institui a ComunidadeEuropeia do Carvão e do Aço.",
  },
  { year: "1957", title: "Tratado de Roma", description: "Tratado composto pelos Tratado que institui a CE e o Tratado que institui a EURATOM." },
  { year: "1965", title: "Tratado de Fusão", description: "Tratado de fusão das três comunidades, que institui, para além da assembleia parlamentar comum já existente, um Conselho e uma Comissão únicos para as Comunidades Europeias." },
  {
    year: "1973",
    title: "Primeiro alargamento",
    description: "Adesão da Grã-Bretanha, Irlanda e Dinamarca.",
  },
  {
    year: "1979",
    title: "Primeiras eleições diretas",
    description: "As primeiras eleições por sufrágio universal direto para o Parlamento Europeu são realizadas,sendo consideradas as primeiras eleições internacionais. Simone Veil, anterior Ministra da Saúde de França, e sobrevivente do campo de concentração de Auschwitz, torna-se a primeira Presidente eleita do Parlamento Europeu e a primeira candidata eleita por sufrágio universal direto.",
  },
  {
    year: "1981",
    title: "Segundo alargamento",
    description: "Adesão da Grécia.",
  },
  {
    year: "1985",
    title: "Assinatura do Acordo Schengen",
    description: "Assinatura do acordo que eliminou os controlos fronteiriços internos entre vários países europeus, permitindo a livre circulação de pessoas no espaço Schengen.",
  },
  {
    year: "1986",
    title: "Terceiro alargamento",
    description: "Adesão de Portugal e Espanha.",
  },
  {
    year: "1987",
    title: "Acto Único Europeu",
    description: "A entrada em vigor deste Tratado criou novos procedimentos de cooperação, que privilegiaram o papel do Parlamento Europeu no processo de decisão, vendo ampliados os seus poderes e autoridade, visto que a conclusão dos acordos de alargamento e de associação ficavam sujeitos ao seu parecer favorável. É, igualmente, estabelecida uma norma de cooperação entre o Parlamento e o Conselho, onde lhe eram atribuídos autênticos poderes legislativos, mas limitados.",
  },
  {
    year: "1992",
    title: "Tratado de Maastricht",
    description: "Tratado que estabeleceu uma União Europeia assente em três pilares: as Comunidades Europeias, a política externa e de segurança comum (PESC) e a cooperação nos domínios da justiça e dos assuntos internos (JAI). É neste Tratado que fica convencionado o estatuto de cidadão europeu, que compreende um conjunto de direitos e deveres que determinam a cidadania europeia.",
  },
  {
    year: "1995",
    title: "Quarto alargamento",
    description: "Adesão da Áustria, Finlândia e Suécia.",
  },
  {
    year: "1997",
    title: "Tratado de Amesterdão",
    description: "Tratado que introduziu ajustes a um funcionamento mais eficaz e democrático da União.",
  },
  {
    year: "2000",
    title: "Carta dos Direitos Fundamentais",
    description: "A Carta é proclamada, após ter sido elaborada por uma convenção europeia, com a participação ativa dos deputados do Parlamento Europeu.",
  },
  { year: "2001", title: "Tratado de Nice", description: "Reforma institucional destinada a preparar a União Europeia para os sucessivos alargamentos, ajustando a composição e o funcionamento das suas instituições." },
  {
    year: "2002",
    title: "Entrada em vigor do EURO",
    description: "Moedas e notas da Moeda Única entram em circulação, um passo crucial para a construção de uma União Económica e Monetária na Europa.",
  },
  {
    year: "2004",
    title: "Quinto alargamento",
    description: "Adesão da Letónia, Lituânia, Estónia, Polónia, República Checa, Hungria, Eslováquia, Eslovénia, Malta e Chipre.",
  },
  { year: "2007", title: "Sexto alargamento", description: "Adesão da Roménia e da Bulgária." },
  { year: "2009", title: "Tratado de Lisboa", description: "Tratado que reforma o Tratado da União Europeia e o Tratado que institui a Comunidade Europeia, passando a intitular-se «Tratado sobre o Funcionamento da União Europeia». Apesar de não deslocar para a União mais competências exclusivas, modifica a configuração dos seus poderes, ao estabelecer uma nova arquitetura institucional e ao alterar os processos de decisão, com vista a uma maior eficiência e transparência, garantindo um nível acrescentado de controlo parlamentar e de responsabilidade democrática. O Parlamento Europeu passa a ser constituído por «representantes dos cidadãos da União Europeia», e não «por representantes dos povos dos Estados». Os seus poderes legislativos foram aumentados por um novo processo legislativo ordinário, que substituiu o prévio sistema de codecisão." },
  {
    year: "2013",
    title: "Sétimo alargamento",
    description: "Adesão da Croácia.",
  },
  {
    year: "2021",
    title: '"Brexit" – saída do Reino Unido da UE',
    description: "O período de transição está oficialmente concluído e o Reino Unido sai totalmente da EU.",
  },
]

// Institutions data
type Institution = {
  id: string
  name: string
  image: string
  shortDescription: string
  details: string
}

const institutions: Institution[] = [
  {
    id: "parlamento-europeu",
    name: "Parlamento Europeu",
    image: "/parlamento_europeu.jpg",
    shortDescription:
      "Representa diretamente os cidadãos da União Europeia e participa no processo legislativo e orçamental.",
    details: "Com sede no Luxemburgo, O Parlamento Europeu representa os cidadãos dos países da UE e é por eles eleito diretamente. Toma decisões sobre leis europeias em conjunto com o Conselho da União Europeia. Aprova igualmente o orçamento da UE. Gere uma rede de gabinetes de ligação nas capitais da UE, Londres, Edimburgo e Washington D.C. A atual Presidente do Parlamento Europeu é Roberta Metsola, reeleita em julho de 2024.",
  },
  {
    id: "conselho-europeu",
    name: "Conselho Europeu",
    image: "/conselho_europeu_uniao.jpg",
    shortDescription:
      "Reúne os Chefes de Estado ou de Governo da UE e define a orientação política geral e as prioridades da União.",
    details: "Os Chefes de Estado ou de Governo dos países da UE reúnem-se, como Conselho Europeu, para definir a orientação política geral e as prioridades da União Europeia. O Conselho Europeu é presidido por um presidente eleito por um mandato de dois anos e meio, renovável uma vez. Não adota legislação, exceto no que se refere a eventuais alterações ao Tratado da UE. O atual Presidente é António Costa, eleito em 2024.",
  },
  {
    id: "conselho-da-uniao-europeia",
    name: "Conselho da União Europeia",
    image: "/conselho_uniao_europeia.png",
    shortDescription:
      "Representa os governos dos Estados-Membros e, juntamente com o Parlamento, adota legislação e coordena políticas.",
    details: "Representa os governos dos Estados-Membros da UE. O Conselho da UE é onde os ministros nacionais de cada governo se reúnem para adotar legislação e coordenar políticas. Os ministros reúnem-se em diferentes formações, em função do tema a debater. O Conselho da UE toma decisões sobre a legislação europeia em conjunto com o Parlamento Europeu.O Conselho reúne-se em diversas formações cuja composição depende do tema discutido. Por exemplo, o Conselho da Agricultura é composto pelos ministros nacionais responsáveis ​​pela Agricultura. A Presidência das configurações do Conselho será exercida pelos representantes dos Estados- Membros no Conselho, por seis meses, numa base de rotação igualitária, de acordo com as condições estabelecidas de acordo com Artigo 236 do Tratado sobre o Funcionamento da União Europeia.",
  },
  {
    id: "comissao-europeia",
    name: "Comissão Europeia",
    image: "/comissao_europeia.png",
    shortDescription: "Órgão executivo da UE, com iniciativa legislativa e supervisão do orçamento.",
    details: "A Comissão Europeia representa os interesses comuns da UE e é o principal órgão executivo da UE. Utiliza o seu «direito de iniciativa» para apresentar propostas de nova legislação, que são analisadas e adotadas pelo Parlamento Europeu e pelo Conselho da União Europeia. Além disso, gere as políticas da UE (com exceção da Política Externa e de Segurança Comum, que é conduzida pelo Alto Representante para a PESC, Vice-Presidente da Comissão Europeia) e o orçamento da UE, e assegura que os países aplicam corretamente a legislação da UE. Os gabinetes de ligação são a voz da Comissão em toda a UE. Acompanham e analisam a opinião pública no país de acolhimento, fornecem informações sobre as políticas da UE e a forma como a UE funciona e facilitam a cooperação da Comissão com o país de acolhimento. O trabalho destas quatro principais instituições da UE, que abrange as tarefas legislativas e executivas da UE, é complementado pelo trabalho de outras três instituições da UE: o Tribunal de Justiça da União Europeia, o Banco Central Europeu e o Tribunal de Contas Europeu. Estas três instituições são responsáveis pela gestão dos aspetos de auditoria judicial, financeira e externa da União Europeia.",
  },
  {
    id: "tribunal-de-justica-da-ue",
    name: "Tribunal de Justiça da União Europeia",
    image: "/tribunal_justica_UE.jpg",
    shortDescription: "Garante o respeito pelo direito da UE através da interpretação e aplicação dos Tratados.",
    details: "O Tribunal de Justiça assegura a observância do direito da UE e a correta interpretação e aplicação dos Tratados: fiscaliza a legalidade dos atos das instituições da UE, assegura que os países da UE cumprem as obrigações que lhes incumbem por força dos Tratados e interpreta o direito da UE a pedido dos tribunais nacionais.",
  },
  {
    id: "banco-central-europeu",
    name: "Banco Central Europeu",
    image: "/bce.jpg",
    shortDescription: "Responsável pela política monetária na zona euro.",
    details: "O BCE e o Sistema Europeu de Bancos Centrais são responsáveis por manter os preços estáveis na área do euro. São também responsáveis pela política monetária e cambial na área do euro e apoiam as políticas económicas da UE.",
  },
  {
    id: "tribunal-de-contas-europeu",
    name: "Tribunal de Contas Europeu",
    image: "/tribunal_contas.png",
    shortDescription: "Audita as finanças da UE garantindo transparência e boa gestão dos fundos.",
    details: "O TCE contribui para melhorar a gestão financeira da UE e promover a responsabilização e a transparência, e atua como guardião independente dos interesses financeiros dos cidadãos da UE. Verifica se os fundos da UE são corretamente contabilizados, se são mobilizados e despendidos em conformidade com as regras e regulamentos pertinentes e se proporcionam uma boa relação custo-benefício.",
  },
]

// Navbar component
function Navbar({ scrolled }: { scrolled: boolean }) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">União Europeia</div>
        <div className="hidden md:flex gap-8">
          <button
            onClick={() => scrollToSection("timeline")}
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            Cronologia
          </button>
          <button
            onClick={() => scrollToSection("institutions")}
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            Instituições
          </button>
         
          <button
            onClick={() => scrollToSection("sources")}
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            Fontes
          </button>
        </div>
      </div>
    </nav>
  )
}

// Hero section component
function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen pt-32 flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">A União Europeia</h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
          Breve introdução e instituições da União Europeia
        </p>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          A União Europeia é uma organização política e económica única formada por 27 Estados-Membros independentes.
          Desde a sua fundação em 1950, tem promovido a paz, a estabilidade e a prosperidade no continente europeu.
        </p>
        <button
          onClick={() => scrollToSection("timeline")}
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105"
        >
          Ver cronologia
          <ChevronDown size={20} />
        </button>
      </div>
    </section>
  )
}

// Timeline section component
function TimelineSection() {
  return (
    <section id="timeline" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-4 text-gray-900">Breve cronologia</h2>
        <p className="text-center text-gray-600 mb-20 text-lg">Os marcos principais da história da União Europeia</p>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 to-blue-600" />

          <div className="space-y-12 md:space-y-0">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`md:flex md:mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                <div className="md:w-1/2 md:px-8">
                  <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-2xl font-bold text-blue-600 mb-2">{event.year}</h3>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
                  </div>
                </div>

                {/* Dot on timeline */}
                <div className="hidden md:flex md:w-0 justify-center">
                  <div className="w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-lg" />
                </div>

                {/* Mobile dot */}
                <div className="md:hidden flex items-start mb-8">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mt-2 mr-6 flex-shrink-0" />
                  <div className="flex-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Modal component
function InstitutionModal({
  institution,
  onClose,
}: {
  institution: Institution | null
  onClose: () => void
}) {
  if (!institution) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="text-3xl font-bold text-gray-900">{institution.name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition-colors">
            <X size={28} />
          </button>
        </div>

        <div className="p-6">
          <img
            src={institution.image || "/placeholder.svg"}
            alt={institution.name}
            className="w-full max-h-96 object-contain rounded-lg mb-6 bg-gray-50"
          />
          <p className="text-lg text-gray-700 leading-relaxed mb-6">{institution.details}</p>
          <button
            onClick={onClose}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  )
}

// Institutions section component
function InstitutionsSection() {
  const [selectedInstitution, setSelectedInstitution] = useState<Institution | null>(null)

  return (
    <section id="institutions" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-4 text-gray-900">Instituições da União Europeia</h2>
        <p className="text-center text-gray-600 mb-20 text-lg">Principais instituições e o seu papel na UE</p>

        <div className="space-y-8">
          {/* First institution - same size as others, centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-2 flex justify-center">
              <div
                key={institutions[0].id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer h-80 w-full md:w-[calc((100%-2rem)/2)]"
                onClick={() => setSelectedInstitution(institutions[0])}
              >
                {/* Figure number badge */}
                <div className="absolute top-4 right-4 z-10 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  Figura 1
                </div>

                {/* Background image */}
                <img
                  src={institutions[0].image || "/placeholder.svg"}
                  alt={institutions[0].name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-300 transition-colors">
                    {institutions[0].name}
                  </h3>
                  <p className="text-sm text-gray-200 mb-4 line-clamp-2">{institutions[0].shortDescription}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedInstitution(institutions[0])
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 w-full"
                  >
                    Ver mais
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Remaining 6 institutions - 2 columns grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {institutions.slice(1).map((institution, index) => {
              // Map institution index to figure number (index 1 = Figure 2, index 2 = Figure 2, index 3 = Figure 4, etc.)
              const figureNumbers = [2, 3, 4, 5, 6, 7] // Conselho Europeu e Conselho da União são ambos Figura 2, depois salta para 4
              const figureNumber = figureNumbers[index]
              
              return (
                <div
                  key={institution.id}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer h-80"
                  onClick={() => setSelectedInstitution(institution)}
                >
                  {/* Figure number badge */}
                  <div className="absolute top-4 right-4 z-10 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    Figura {figureNumber}
                  </div>

                  {/* Background image */}
                  <img
                    src={institution.image || "/placeholder.svg"}
                    alt={institution.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-300 transition-colors">
                    {institution.name}
                  </h3>
                  <p className="text-sm text-gray-200 mb-4 line-clamp-2">{institution.shortDescription}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedInstitution(institution)
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 w-full"
                  >
                    Ver mais
                  </button>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </div>

      <InstitutionModal institution={selectedInstitution} onClose={() => setSelectedInstitution(null)} />
    </section>
  )
}


// Sources section component
function SourcesSection() {
  const sources = [
    {
      label: "Fonte principal",
      url: "https://european-union.europa.eu/institutions-law-budget/institutions-and-bodies/types-institutions-and-bodies_pt#paragraph_1266",
    },
    {
      label: "Figura 1 - Parlamento Europeu",
      url: "https://vozoperario.pt/jornal/2019/02/06/parlamento-europeu-2019%EF%BB%BF/",
    },
    {
      label: "Figura 2 - Conselho Europeu",
      url: "https://www.archdaily.com.br/br/948855/conselho-europeu-e-da-uniao-europeia-samyn-and-partners",
    },
    { label: "Figura 3 - Conselho da União Europeia", url: "https://www.cm-paredes.pt/pages/1729" },
    {
      label: "Figura 4 - Comissão Europeia",
      url: "https://www.rtp.pt/noticias/economia/comissao-europeia-atualiza-previsoes-economicas-em-tempo-de-pandemia_n1333537",
    },
    {
      label: "Figura 5 - Tribunal de Justiça",
      url: "https://redepenal.csm.org.pt/2020/07/29/conceito-de-autoridade-judiciaria-de-execucao-conclusoes-do-advogado-geral-manuel-campos-sanchez-bordona-no-processo-c-510-19-do-tribunal-de-justica-da-ue/",
    },
    {
      label: "Figura 6 - Banco Central Europeu",
      url: "https://executivedigest.sapo.pt/a-nova-taxa-do-banco-central-europeu/",
    },
    {
      label: "Figura 7 - Tribunal de Contas Europeu",
      url: "https://www.eca.europa.eu/pt/Pages/VisitingTheCourt.aspx",
    },
  ]

  return (
    <section id="sources" className="bg-gray-50 py-24 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-4 text-gray-900">Fontes</h2>
        <p className="text-center text-gray-600 mb-20 text-lg">Referências utilizadas</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sources.map((source, index) => (
            <a
              key={index}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-white rounded-lg border border-gray-300 shadow-md hover:border-blue-500 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-blue-600 group-hover:text-blue-700 mb-2 break-words">
                {source.label}
              </h3>
              <p className="text-sm text-gray-600 truncate group-hover:text-gray-800 transition-colors">{source.url}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

// Footer component
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="space-y-2">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Unidade Curricular</h3>
            <p className="text-gray-400">Introdução aos Estudos Europeus</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Código</h3>
            <p className="text-gray-400">51208</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Professor</h3>
            <p className="text-gray-400">André Pereira Matos</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Nome</h3>
            <p className="text-gray-400">Luís Carlos Lourenço de Matos</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">N.º de Estudante</h3>
            <p className="text-gray-400">2405692</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Curso</h3>
            <p className="text-gray-400">Licenciatura em Estudos Europeus</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
         
        </div>
      </div>
    </footer>
  )
}

// Main page component
export default function HomePage() {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => {
    setScrolled(window.scrollY > 50)
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll, { passive: true })
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrolled={scrolled} />
      <HeroSection />
      <TimelineSection />
      <InstitutionsSection />
      <SourcesSection />
      <Footer />
    </div>
  )
}
