import {
  GraduationCap, Briefcase, HeartHandshake, BookOpen, Users, Target,
  ShieldCheck, Globe2, Zap, BarChart3, Award, Heart, TrendingUp,
  LockKeyhole, MapPin, Star,
} from "lucide-react";

export const programs = [
  { icon: GraduationCap, color: "from-amber-400 to-yellow-600",  title: "Training Pathways",       esTitle: "Rutas de Capacitación",           text: "Career readiness, certifications, apprenticeships, and skill-building mapped to real employer needs.",                    esText: "Preparación laboral, certificaciones, aprendizajes y habilidades conectadas con necesidades reales.",           tag: "Education"   },
  { icon: Briefcase,     color: "from-violet-400 to-purple-700", title: "Second-Chance Jobs",       esTitle: "Empleos de Segunda Oportunidad",   text: "Employer partnerships, job matching, retention support, and progress tracking after placement.",                        esText: "Alianzas con empleadores, matching laboral, apoyo de retención y seguimiento post-colocación.",                 tag: "Employment"  },
  { icon: HeartHandshake,color: "from-emerald-400 to-teal-700",  title: "Mentorship & Case Support",esTitle: "Mentoría y Apoyo de Caso",         text: "Mentor pairing, milestone tracking, SMS reminders, barriers support, and human guidance.",                             esText: "Parejas de mentoría, seguimiento de metas, recordatorios SMS, apoyo con barreras y guía humana.",               tag: "Mentorship"  },
  { icon: BookOpen,      color: "from-sky-400 to-blue-700",      title: "Scholarship Fund",         esTitle: "Fondo de Becas",                   text: "Merit and need-based scholarships connecting participants to higher education and credentialing.",                      esText: "Becas por mérito y necesidad conectando participantes con educación superior y acreditaciones.",                tag: "Education"   },
  { icon: Users,         color: "from-rose-400 to-red-700",      title: "Youth Empowerment",        esTitle: "Empoderamiento Juvenil",           text: "After-school programs, leadership development, and early intervention for underprivileged youth.",                     esText: "Programas extracurriculares, desarrollo de liderazgo e intervención temprana para jóvenes.",                   tag: "Youth"       },
  { icon: Target,        color: "from-orange-400 to-amber-700",  title: "Reentry Navigation",       esTitle: "Navegación de Reingreso",          text: "Housing, ID recovery, benefits access, family reunification, and comprehensive barrier removal.",                      esText: "Vivienda, recuperación de ID, acceso a beneficios, reunificación familiar y eliminación de barreras.",          tag: "Reentry"     },
];

export const platformFeatures = [
  { icon: ShieldCheck,   label: "Secure participant profiles"  },
  { icon: Globe2,        label: "Bilingual onboarding"         },
  { icon: Zap,           label: "Job & training matching"      },
  { icon: HeartHandshake,label: "Mentor pairing"               },
  { icon: BarChart3,     label: "Case management dashboard"    },
  { icon: Award,         label: "Scholarship workflow"         },
  { icon: Heart,         label: "Stripe donations"             },
  { icon: TrendingUp,    label: "Exportable funder reports"    },
  { icon: LockKeyhole,   label: "Encrypted PII"                },
  { icon: Users,         label: "Role-based access"            },
  { icon: MapPin,        label: "SMS reminders"                },
  { icon: Star,          label: "Offline-ready PWA"            },
];

export const impactMetrics = [
  { label: "Job Placements",       value: "500+",  sub: "and growing"          },
  { label: "Training Completions", value: "850+",  sub: "certifications issued" },
  { label: "Mentorship Hours",     value: "12K+",  sub: "logged this year"     },
  { label: "Scholarship Awards",   value: "$2.4M", sub: "disbursed"            },
  { label: "Barriers Resolved",    value: "3,200+",sub: "cases closed"         },
  { label: "Retention at 180 Days",value: "70%",   sub: "goal exceeded"        },
];

export const donationTiers = [
  { label: "Training Seat",        amount: "$250",   desc: "Covers skills assessment + first course"  },
  { label: "Certification Support",amount: "$750",   desc: "Full certification track + materials"     },
  { label: "Mentorship Track",     amount: "$1,500", desc: "6-month dedicated mentor pairing"         },
  { label: "Scholarship Fund",     amount: "$5,000+",desc: "Full tuition + living support"            },
];

export const founderChapters = [
  {
    id: "01",
    color: "amber",
    location: "Queens, New York",
    esLocation: "Queens, Nueva York",
    heading: "Two Realities",
    esHeading: "Dos Realidades",
    body: "Born to Jamaican immigrant parents in Queens, Orville grew up watching his father build one of the largest recycling and junk operations in New York from nothing — an entrepreneur operating in the margins, proving that resourcefulness is its own form of capital. Success did not shield the family from hardship, but it showed Orville what relentless vision looks like.",
    esBody: "Criado por padres inmigrantes jamaicanos en Queens, Orville creció observando a su padre construir desde cero una de las operaciones de reciclaje más grandes de Nueva York — un emprendedor en los márgenes, demostrando que el ingenio es su propio capital. El éxito no protegió a la familia de las dificultades, pero le mostró a Orville cómo se ve la visión implacable.",
    pullQuote: "I saw my father build something from nothing. That was my first lesson in infrastructure.",
    esPullQuote: "Vi a mi padre construir algo de la nada. Esa fue mi primera lección sobre infraestructura.",
  },
  {
    id: "02",
    color: "emerald",
    location: "Rural Jamaica",
    esLocation: "Jamaica Rural",
    heading: "Humility & Grounding",
    esHeading: "Humildad y Arraigo",
    body: "Every summer, Orville was sent to rural Jamaica to live among extended family — learning humility, discipline, and cultural grounding in ways no classroom could teach. Two continents, two economic realities, one identity in formation. Those experiences planted the seed of a worldview that would later define everything: human potential exists everywhere, especially in environments the world overlooks.",
    esBody: "Cada verano, Orville era enviado a Jamaica rural para vivir con su familia extendida — aprendiendo humildad, disciplina y arraigo cultural de maneras que ningún aula podía enseñar. Dos continentes, dos realidades económicas, una identidad en formación. Esas experiencias plantaron la semilla de una visión del mundo que luego lo definiría todo.",
    pullQuote: "Jamaica taught me that dignity doesn't require abundance. That changed how I see everything.",
    esPullQuote: "Jamaica me enseñó que la dignidad no requiere abundancia. Eso cambió cómo veo todo.",
  },
  {
    id: "03",
    color: "violet",
    location: "Stony Brook University",
    esLocation: "Universidad Stony Brook",
    heading: "Education as Leverage",
    esHeading: "Educación como Palanca",
    body: "Orville pursued education relentlessly — degrees in Business and Computer Programming, then an MBA from Stony Brook University. Business competitions. Public talks. Teaching students. Building companies. Not accumulating credentials for their own sake, but studying systems: how business works, how technology scales, how human behavior can be shaped by the structures around it.",
    esBody: "Orville persiguió la educación sin descanso — títulos en Negocios y Programación de Computadoras, luego un MBA en Stony Brook. Competencias de negocios. Charlas públicas. Enseñar estudiantes. Construir empresas. No acumulando credenciales por sí mismas, sino estudiando sistemas: cómo funciona el negocio, cómo escala la tecnología, cómo el comportamiento humano puede ser moldeado por las estructuras a su alrededor.",
    pullQuote: "I didn't study business to get a job. I studied it to understand the machine — and eventually redesign it.",
    esPullQuote: "No estudié negocios para conseguir un trabajo. Lo estudié para entender la máquina — y eventualmente rediseñarla.",
  },
  {
    id: "04",
    color: "amber",
    location: "The Pressure",
    esLocation: "La Presión",
    heading: "Adversity & Identity",
    esHeading: "Adversidad e Identidad",
    body: "Anxiety. Leadership challenges. Navigating spaces that weren't built for someone who looked like him. Reinvention not once but repeatedly — the kind of pressure that either breaks people or clarifies their purpose. Orville became obsessed with a question: why do capable people fail? And the answer that kept emerging was never about the individual.",
    esBody: "Ansiedad. Desafíos de liderazgo. Navegar espacios que no fueron construidos para alguien con su apariencia. Reinvención no una sino repetidas veces — el tipo de presión que rompe a las personas o aclara su propósito. Orville se obsesionó con una pregunta: ¿por qué fracasan las personas capaces? Y la respuesta que seguía emergiendo nunca era sobre el individuo.",
    pullQuote: "The hardest part wasn't the systems I faced. It was deciding I wasn't going to accept them as permanent.",
    esPullQuote: "La parte más difícil no fueron los sistemas que enfrenté. Fue decidir que no los iba a aceptar como permanentes.",
  },
  {
    id: "05",
    color: "emerald",
    location: "The Workforce",
    esLocation: "La Fuerza Laboral",
    heading: "Seeing the Pattern",
    esHeading: "Viendo el Patrón",
    body: "Through workforce development, education, technology, and community work, Orville witnessed a painful pattern repeating itself: brilliant, determined people consistently failing — not because they lacked intelligence or drive, but because every system around them was designed to route them toward failure. Criminal records, missing IDs, no mentors, no income gap support, no belief.",
    esBody: "A través del desarrollo laboral, la educación, la tecnología y el trabajo comunitario, Orville fue testigo de un patrón doloroso que se repetía: personas brillantes y decididas fracasando constantemente — no porque les faltara inteligencia o determinación, sino porque cada sistema a su alrededor estaba diseñado para encaminarlas hacia el fracaso.",
    pullQuote: "I kept seeing the same story. Different faces, same broken infrastructure. That's when the mission became clear.",
    esPullQuote: "Seguí viendo la misma historia. Diferentes rostros, la misma infraestructura rota. Fue entonces cuando la misión se aclaró.",
  },
  {
    id: "06",
    color: "violet",
    location: "The Realization",
    esLocation: "La Revelación",
    heading: '"People Don\'t Fail. Systems Do."',
    esHeading: '"Las Personas No Fallan. Los Sistemas Sí."',
    body: "This was the turning point. Not a policy paper, not a grant report — a lived, witnessed truth. The question shifted from \"how do we help people?\" to \"how do we rebuild the infrastructure they deserve?\" Mentorship, healing, employment, technology, transparency, and belief — all coordinated into a single system designed to work.",
    esBody: 'Este fue el punto de inflexión. No un artículo de política, no un informe de subvención — una verdad vivida y presenciada. La pregunta cambió de "¿cómo ayudamos a las personas?" a "¿cómo reconstruimos la infraestructura que merecen?" Mentoría, sanación, empleo, tecnología, transparencia y fe — todo coordinado en un solo sistema diseñado para funcionar.',
    pullQuote: "People don't fail. Systems fail people. I decided to stop explaining the problem and start building the solution.",
    esPullQuote: "Las personas no fallan. Los sistemas fallan a las personas. Decidí dejar de explicar el problema y empezar a construir la solución.",
  },
  {
    id: "07",
    color: "amber",
    location: "Black Lotus Foundation",
    esLocation: "Fundación Black Lotus",
    heading: "Infrastructure for Human Potential",
    esHeading: "Infraestructura para el Potencial Humano",
    body: "Black Lotus was founded not as a charity but as infrastructure — training pathways, second-chance employment, mentorship pairing, scholarships, case management, and the technology to track every outcome with radical transparency. A national movement designed to redefine what redemption, opportunity, and transformation can look like in the modern world.",
    esBody: "Black Lotus fue fundada no como una organización benéfica sino como infraestructura — rutas de capacitación, empleo de segunda oportunidad, parejas de mentoría, becas, gestión de casos y la tecnología para rastrear cada resultado con transparencia radical. Un movimiento nacional diseñado para redefinir cómo puede verse la redención, la oportunidad y la transformación en el mundo moderno.",
    pullQuote: "This mission is deeply personal. I know what it feels like to come from a place where greatness exists long before the world recognizes it.",
    esPullQuote: "Esta misión es profundamente personal. Sé lo que se siente venir de un lugar donde la grandeza existe mucho antes de que el mundo la reconozca.",
  },
];

export const impactRates = {
  trainingSeat:    250,
  certification:   750,
  mentorshipPair:  1500,
  fullScholarship: 5000,
};
