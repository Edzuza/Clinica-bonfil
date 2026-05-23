export interface Specialty {
  id: string;
  name: string;
  number: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const SPECIALTIES: Specialty[] = [
  {
    id: "01",
    number: "01",
    name: "Medicina general",
    description: "Atención médica primaria que abarca la prevención, diagnóstico, tratamiento y seguimiento integral de patologías comunes.",
    iconName: "Stethoscope"
  },
  {
    id: "02",
    number: "02",
    name: "Urología",
    description: "Especialidad quirúrgica que trata las vías urinarias tanto en hombres como en mujeres, y el sistema reproductor masculino.",
    iconName: "Activity"
  },
  {
    id: "03",
    number: "03",
    name: "Ginecología",
    description: "Cuidado integral de la salud del sistema reproductor femenino durante todas las etapas de la vida, incluyendo obstetricia avanzada.",
    iconName: "HeartPulse"
  },
  {
    id: "04",
    number: "04",
    name: "Traumatología",
    description: "Diagnóstico, tratamiento asistencial, quirúrgico y rehabilitación de lesiones del aparato locomotor y sistema esquelético.",
    iconName: "Bone"
  },
  {
    id: "05",
    number: "05",
    name: "Pediatría",
    description: "Atención integral del desarrollo, nutrición, prevención y tratamiento de enfermedades desde el nacimiento hasta la adolescencia.",
    iconName: "Baby"
  },
  {
    id: "06",
    number: "06",
    name: "Medicina interna",
    description: "Atención de patologías complejas del adulto que requieren un enfoque de diagnóstico multiorgánico o sistémico de precisión.",
    iconName: "ClipboardList"
  },
  {
    id: "07",
    number: "07",
    name: "Otorrinolaringología",
    description: "Estudio y tratamiento clínico quirúrgico de las enfermedades del oído, la nariz, la faringe y la laringe.",
    iconName: "Zap"
  },
  {
    id: "08",
    number: "08",
    name: "Coloproctología",
    description: "Especialidad para el de diagnóstico y tratamiento de enfermedades del colon, recto y ano mediante microcirugía.",
    iconName: "ShieldAlert"
  },
  {
    id: "09",
    number: "09",
    name: "Psicología",
    description: "Acompañamiento mental y psicoterapia clínica dirigida a regular estados emocionales y potenciar el bienestar del paciente.",
    iconName: "Brain"
  },
  {
    id: "10",
    number: "10",
    name: "Optometrista",
    description: "Evaluación refractiva y atención visual primaria para la detección de anomalías y adaptación de lentes de precisión.",
    iconName: "Eye"
  },
  {
    id: "11",
    number: "11",
    name: "Podología",
    description: "Cuidado clínico especializado de las afecciones físicas y dermatológicas del pie para mantener la movilidad sana.",
    iconName: "Footprints"
  },
  {
    id: "12",
    number: "12",
    name: "Gastroenterología",
    description: "Estudio y tratamiento del aparato digestivo y órganos asociados ante cuadros de colitis, gastritis y patologías hepáticas.",
    iconName: "Smile"
  },
  {
    id: "13",
    number: "13",
    name: "Uroginecología",
    description: "Diagnóstico y tratamiento de las disfunciones del suelo pélvico en mujeres, combinando urología y ginecología.",
    iconName: "UserCheck"
  },
  {
    id: "14",
    number: "14",
    name: "Nutrición",
    description: "Diseño de regímenes terapéuticos adaptados a metabologías específicas para la recuperación orgánica asistida.",
    iconName: "Apple"
  },
  {
    id: "15",
    number: "15",
    name: "Rehabilitación física",
    description: "Fisioterapia avanzada orientada a la recuperación kinésica tras intervenciones quirúrgicas o traumas neurológicos.",
    iconName: "Accessibility"
  },
  {
    id: "16",
    number: "16",
    name: "Fisioterapia estética",
    description: "Procedimientos terapéuticos no invasivos para la recuperación postquirúrgica estética y estimulación celular.",
    iconName: "Sparkles"
  },
  {
    id: "17",
    number: "17",
    name: "Cirugía general",
    description: "Intervenciones del aparato digestivo, sistema endocrino y urgencias de trauma general con altos estándares de seguridad.",
    iconName: "Scissors"
  },
  {
    id: "18",
    number: "18",
    name: "Cirugía laparoscópica",
    description: "Técnicas quirúrgicas mínimamente invasivas asistidas por video de alta definición que agilizan la recuperación del paciente.",
    iconName: "Flame"
  },
  {
    id: "19",
    number: "19",
    name: "Cosmiatra",
    description: "Cuidado de la dermis sana y envejecida empleando formulaciones biológicas bajo rigurosa supervisión clínica.",
    iconName: "Sparkles"
  },
  {
    id: "20",
    number: "20",
    name: "Gerontología",
    description: "Atención multidisciplinaria de la vejez, optimizando la salud física y funcional del adulto mayor en Pachuca.",
    iconName: "Users"
  },
  {
    id: "21",
    number: "21",
    name: "Taller de lactancia",
    description: "Asesorías individuales y técnicas de acoplamiento madre-hijo para fomentar una lactancia materna clínicamente segura.",
    iconName: "Smile"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos todas las tarjetas de crédito y débito (Visa, Mastercard, American Express), transferencias electrónicas interbancarias directas y pagos tradicionales en efectivo en nuestra recepción centralizada."
  },
  {
    id: "faq-2",
    question: "¿Cómo puedo agendar una cita de urgencia?",
    answer: "Para urgencias clínicas o de laboratorio inmediatas, por favor comuníquese por teléfono directo al +52 (771) 123 4567 para una priorización inmediata, o preséntese directamente en nuestro portal de admisiones."
  },
  {
    id: "faq-3",
    question: "¿Emiten facturas fiscales?",
    answer: "Sí, emitimos facturaciones fiscales mexicanas correspondientes (CFDI) válidas para deducciones de gastos médicos. Solo debe solicitarla en recepción al realizar su pago o enviarnos su constancia de situación fiscal."
  },
  {
    id: "faq-4",
    question: "¿Tienen convenios con aseguradoras?",
    answer: "Clínica Médica Bonfil tiene convenios nacionales e internacionales con las principales aseguradoras de gastos médicos mayores. Consúltenos para validar los alcances y copagos de su póliza en particular."
  },
  {
    id: "faq-5",
    question: "¿Cuáles son los requisitos de residencia para médicos?",
    answer: "Solicitamos título y cédula profesional de especialidad registrada, constancia de vigencia en consejos oficiales, seguro de responsabilidad civil vigente y compromiso con los protocolos clínicos de la institución."
  }
];
