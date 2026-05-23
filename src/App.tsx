import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Stethoscope,
  Activity,
  HeartPulse,
  Bone,
  Baby,
  ClipboardList,
  Flame,
  Brain,
  Eye,
  Footprints,
  Smile,
  UserCheck,
  Apple,
  Accessibility,
  Sparkles,
  Scissors,
  Users,
  Zap,
  ShieldAlert,
  Search,
  CheckCircle,
  X,
  Phone,
  ShieldCheck,
  Award,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  ChevronRight
} from "lucide-react";
import { SPECIALTIES, FAQS, Specialty } from "./data";

export default function App() {
  // Theme State
  const [isDark, setIsDark] = useState(true);

  // Sync theme to HTML class list
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  // Page index filter & search state for the 21 specialties
  const [specialtyQuery, setSpecialtyQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(null);

  // Carousel/Pagination offsets for interactive view on specialties
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5; // Best matches md/lg density

  // Form Portal 1 states (Patient admission)
  const [patientName, setPatientName] = useState("");
  const [patientInsurance, setPatientInsurance] = useState("");
  const [patientError, setPatientError] = useState("");
  const [patientSuccess, setPatientSuccess] = useState(false);

  // Form Portal 2 states (Clinical message)
  const [proLicense, setProLicense] = useState("");
  const [proMessage, setProMessage] = useState("");
  const [proError, setProError] = useState("");
  const [proSuccess, setProSuccess] = useState(false);

  // Red Médica Residencia Modal State
  const [isResidenciaOpen, setIsResidenciaOpen] = useState(false);
  const [doctorName, setDoctorName] = useState("");
  const [doctorEmail, setDoctorEmail] = useState("");
  const [doctorLicenseInput, setDoctorLicenseInput] = useState("");
  const [doctorSpec, setDoctorSpec] = useState("Medicina General");
  const [doctorSuccess, setDoctorSuccess] = useState(false);

  // Form validation & submission handlers
  const handlePatientSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim()) {
      setPatientError("El nombre completo es requerido para iniciar la solicitud.");
      return;
    }
    setPatientError("");
    setPatientSuccess(true);
  };

  const handleProSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!proLicense.trim()) {
      setProError("Las credenciales o número de licencia son obligatorios.");
      return;
    }
    setProError("");
    setProSuccess(true);
  };

  const handleResidenciaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!doctorName.trim() || !doctorLicenseInput.trim()) {
      alert("Por favor rellene los campos obligatorios");
      return;
    }
    setDoctorSuccess(true);
  };

  const resetResidencia = () => {
    setDoctorName("");
    setDoctorEmail("");
    setDoctorLicenseInput("");
    setDoctorSuccess(false);
    setIsResidenciaOpen(false);
  };

  // Helper specialty icons
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Stethoscope": return Stethoscope;
      case "Activity": return Activity;
      case "HeartPulse": return HeartPulse;
      case "Bone": return Bone;
      case "Baby": return Baby;
      case "ClipboardList": return ClipboardList;
      case "Flame": return Flame;
      case "Brain": return Brain;
      case "Eye": return Eye;
      case "Footprints": return Footprints;
      case "Smile": return Smile;
      case "UserCheck": return UserCheck;
      case "Apple": return Apple;
      case "Accessibility": return Accessibility;
      case "Sparkles": return Sparkles;
      case "Scissors": return Scissors;
      case "Users": return Users;
      case "Zap": return Zap;
      case "ShieldAlert": return ShieldAlert;
      default: return Stethoscope;
    }
  };

  // Filter 21 specialties live matching
  const filteredSpecialties = SPECIALTIES.filter((s) =>
    s.name.toLowerCase().includes(specialtyQuery.toLowerCase()) ||
    s.description.toLowerCase().includes(specialtyQuery.toLowerCase())
  );

  // Pagination bounds
  const nextSlide = () => {
    if (currentIndex + itemsPerPage < filteredSpecialties.length) {
      setCurrentIndex((prev) => prev + itemsPerPage);
    } else {
      setCurrentIndex(0); // wrap-around
    }
  };

  const prevSlide = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex((prev) => prev - itemsPerPage);
    } else {
      const remainder = filteredSpecialties.length % itemsPerPage;
      const lastIndex = filteredSpecialties.length - (remainder === 0 ? itemsPerPage : remainder);
      setCurrentIndex(Math.max(0, lastIndex));
    }
  };

  // Safe slice for specialties carousel-grid view
  const paginatedSpecialties = filteredSpecialties.slice(currentIndex, currentIndex + itemsPerPage);

  // Framer motion animation configs for clean click & hover visual state alignment
  const buttonMotion = {
    hover: { 
      scale: 1.04, 
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      color: "#111415",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { 
      scale: 0.96,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  const genericButtonMotion = {
    hover: { scale: 1.03, transition: { duration: 0.2 } },
    tap: { scale: 0.97 }
  };

  return (
    <div className={`min-h-screen ${isDark ? "bg-[#111415] text-[#e1e3e4]" : "bg-[#f5f5f7] text-[#1a1a1a]"} font-sans transition-colors duration-300`}>
      
      {/* HEADER / TOP APP BAR */}
      <header className="fixed top-0 w-full h-20 bg-transparent backdrop-blur-md border-b border-black/5 dark:border-white/5 z-50">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 lg:px-12 h-full">

          {/* Logo Section */}
          <a href="#inicio" className="flex items-center gap-2 select-none group">
            <div className="w-8 h-8 rounded-none bg-[#e1e3e4] dark:bg-[#111415] text-[#111415] dark:text-[#e1e3e4] border border-black/10 dark:border-white/20 flex items-center justify-center font-bold text-lg transition-transform group-hover:rotate-90">
              +
            </div>
            <div className="text-sm font-extrabold tracking-widest uppercase text-slate-800 dark:text-[#e1e3e4] leading-tight">
              CLÍNICA MÉDICA <br />
              <span className="text-xs font-light text-[#4299e1] dark:text-[#c6c6cc]">BONFIL</span>
            </div>
          </a>

          {/* Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center space-x-12">
            <a href="#especialidades" className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-[#c6c6cb] hover:text-[#4299e1] dark:hover:text-[#e1e3e4] transition-colors">
              Especialidades
            </a>
            <a href="#profesionales" className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-[#c6c6cb] hover:text-[#4299e1] dark:hover:text-[#e1e3e4] transition-colors">
              Red Médica
            </a>
            <a href="#contacto" className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-[#c6c6cb] hover:text-[#4299e1] dark:hover:text-[#e1e3e4] transition-colors">
              Pacientes
            </a>
            <a href="#faq" className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-[#c6c6cb] hover:text-[#4299e1] dark:hover:text-[#e1e3e4] transition-colors">
              Preguntas
            </a>
          </nav>

          {/* Right Action Widgets (Theme-switch and Digital CTA click) */}
          <div className="flex items-center gap-6">
            
            {/* Custom Atmospheric Toggle Switch */}
            <div 
              id="theme-toggle" 
              onClick={() => setIsDark(!isDark)}
              className="theme-toggle-wrap" 
              role="button" 
              aria-label="Cambiar tema de la clínica"
            >
              <div 
                className="theme-toggle-thumb"
                style={{
                  transform: isDark ? "translateX(40px)" : "translateX(0px)",
                  backgroundColor: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)",
                }}
              >
                <span className="text-[14px] font-bold select-none text-slate-700 dark:text-amber-200">
                  {isDark ? "🔆" : "🌙"}
                </span>
              </div>
            </div>

            {/* Scale Animated Digital CTA */}
            <motion.a 
              href="#contacto"
              id="header-cta"
              variants={buttonMotion}
              whileHover="hover"
              whileTap="tap"
              className="hidden lg:inline-block bg-[#111415] dark:bg-[#e1e3e4] text-[#e1e3e4] dark:text-[#111415] font-bold text-[11px] uppercase tracking-widest px-6 py-3 border border-black/10 dark:border-white/10"
            >
              Agendar Consulta
            </motion.a>
          </div>

        </div>
      </header>

      {/* HERO SECTION */}
      <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-20">
        
        {/* Grayscale Background picture with Atmospheric overlay gradient */}
        <div className="absolute inset-0 z-0 select-none">
          <img
            alt="Profesionales de Clínica Médica Bonfil"
            className="w-full h-full object-cover grayscale brightness-100 dark:brightness-90 opacity-100 transition-all duration-300"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCre1kVwlex7NdQ4y2gbzfyju11I2P_gciRy8UFnykXeCTVRzjRO62CskV8XZtuPLCQYqlfNJSJHt7bICuK_ZJrVfgAl7LKNEfzgYnV4au0vsOBv7syTmTE6y0tg1hZsz61IDwnbigLxFAgYd2p25ThMW5FgdffjT114NUsPVRK1GSLc557Qxsks5Vyl-pPyXtm2P6k1BbV9-AdMuQDkvzop28uQOdOWBL56Y7RNunP9iKNtm1dq8Yaftzjc0Dnkr_pmBj0TqtT9g"
          />
          {/* Gradients to keep text incredibly high contrast and readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111415]/60 via-transparent to-[#111415]/30 dark:from-[#111415]/70 dark:to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#111415]/70 via-transparent to-transparent"></div>
        </div>

        {/* Content wrap */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full h-full flex flex-col justify-end pb-24 pt-12">
          <div className="max-w-2xl space-y-6">
            
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="tracking-[0.4em] text-slate-300 dark:text-[#c6c6cc] text-[11px] font-bold uppercase block"
            >
              [ Est. 2002 ] EXCELENCIA CLÍNICA DE ALTO NIVEL
            </motion.span>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-[clamp(32px,5vw,56px)] leading-[0.95] tracking-tight text-white font-black uppercase drop-shadow-2xl"
            >
              CUIDA TU <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4299e1] via-[#63b3ed] to-[#e2e8f0] dark:from-[#3182ce] dark:via-[#4299e1] dark:to-[#e2e8f0] text-glow underline decoration-3 decoration-[#4299e1]/50 underline-offset-8 inline-block pb-1">
                SALÚD
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white/80 dark:text-slate-300 text-sm sm:text-base font-light max-w-lg leading-relaxed pt-2"
            >
              Redefiniendo la medicina de precisión a través de una arquitectura atmosférica, tecnología de punta y maestría clínica. Cuidado exclusivo para el bienestar de Pachuca de Soto, Hidalgo.
            </motion.p>

            {/* Metrics and Stats triggers */}
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="glass-card px-6 py-4 flex flex-col justify-center min-w-[130px]"
              >
                <span className="font-extrabold text-2xl lg:text-3xl text-white">22</span>
                <span className="text-[9px] text-slate-300 uppercase tracking-widest mt-1">Años de Confianza</span>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="glass-card px-6 py-4 flex flex-col justify-center min-w-[130px]"
              >
                <span className="font-extrabold text-2xl lg:text-3xl text-white">490+</span>
                <span className="text-[9px] text-slate-300 uppercase tracking-widest mt-1">Hitos Clínicos</span>
              </motion.div>
            </div>

            {/* CTAs with animated interaction */}
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="#contacto"
                variants={buttonMotion}
                whileHover="hover"
                whileTap="tap"
                className="bg-[#e1e3e4] text-[#111415] hover:bg-white font-bold text-xs uppercase tracking-widest px-8 py-4 border border-transparent"
              >
                Ingreso de Pacientes
              </motion.a>
              <motion.a
                href="#especialidades"
                variants={genericButtonMotion}
                whileHover={{ scale: 1.04, borderColor: "#ffffff" }}
                whileTap="tap"
                className="bg-transparent text-white font-bold text-xs uppercase tracking-widest px-8 py-4 border border-white/20 hover:border-white transition-colors"
              >
                Especialidades (21)
              </motion.a>
            </div>

          </div>
        </div>

        {/* Exploratory blueprint indicator */}
        <div className="absolute bottom-10 right-6 lg:right-12 flex gap-4 items-center z-10 select-none">
          <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest hidden md:block">
            Estándar de Seguridad COFEPRIS
          </span>
          <div className="w-16 h-px bg-white/20"></div>
        </div>

      </section>

      {/* SPECIALTIES GRID SECTION WITH LIVE SEARCH */}
      <section id="especialidades" className="py-24 md:py-32 relative z-20 border-t border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[11px] font-bold text-[#4299e1] dark:text-[#c6c6cc] uppercase tracking-[0.3em] block">EL DIRECTORIO MÉDICO</span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mt-2 text-slate-800 dark:text-white">
                ESPECIALIDADES
              </h2>
            </div>
            
            {/* Live Search Inputs for high user interactivity */}
            <div className="w-full md:max-w-md relative">
              <label className="text-[10px] uppercase tracking-widest text-[#4299e1] dark:text-[#c6c6cc] font-semibold block mb-2">Filtrar por Área o Palabra Clave</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Escriba para filtrar las 21 especialidades..."
                  value={specialtyQuery}
                  onChange={(e) => {
                    setSpecialtyQuery(e.target.value);
                    setCurrentIndex(0); // reset page on filter change
                  }}
                  className="w-full bg-white/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-4 py-3 text-xs outline-none focus:border-[#4299e1] text-slate-800 dark:text-[#e1e3e4] rounded-none shadow-sm"
                />
                <Search className="w-4 h-4 absolute right-3 top-3.5 text-[#4299e1] dark:text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Specialties Grid System Header Controls */}
          {filteredSpecialties.length > 0 ? (
            <div className="space-y-12">
              <div className="flex justify-between items-center bg-white/5 dark:bg-white/5 p-4 border border-black/5 dark:border-white/10">
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                  Mostrando del {currentIndex + 1} al {Math.min(currentIndex + itemsPerPage, filteredSpecialties.length)} de <strong className="text-[#4299e1] dark:text-slate-200">{filteredSpecialties.length}</strong> áreas clínicas
                </span>
                
                {/* Previous & Next sliders layout from original HTML */}
                <div className="flex gap-2">
                  <motion.button 
                    onClick={prevSlide}
                    variants={genericButtonMotion}
                    whileHover="hover"
                    whileTap="tap"
                    className="glass-card p-3 hover:bg-black/5 dark:hover:bg-white/10 transition-all text-slate-800 dark:text-white"
                    aria-label="Anterior"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </motion.button>
                  <motion.button 
                    onClick={nextSlide}
                    variants={genericButtonMotion}
                    whileHover="hover"
                    whileTap="tap"
                    className="glass-card p-3 hover:bg-black/5 dark:hover:bg-white/10 transition-all text-slate-800 dark:text-white"
                    aria-label="Siguiente"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Slider Specialties Grid Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6" id="specialties-grid">
                {paginatedSpecialties.map((spec) => {
                  const IconComponent = getIconComponent(spec.iconName);
                  return (
                    <motion.div
                      key={spec.id}
                      onClick={() => setSelectedSpecialty(spec)}
                      whileHover={{ scale: 1.03, y: -4 }}
                      whileTap={{ scale: 0.97 }}
                      className="spec-card glass-card border-black/10 dark:border-white/5 p-8 h-[240px] flex flex-col justify-between cursor-pointer select-none"
                    >
                      <div>
                        <span className="font-bold text-[10px] text-[#4299e1] dark:text-slate-400 block mb-2 tracking-widest">{spec.number}</span>
                        <IconComponent className="w-5 h-5 text-slate-500 dark:text-[#c6c6cc] mb-3" />
                      </div>
                      <div>
                        <h3 className="font-extrabold text-[18px] text-slate-800 dark:text-white leading-snug uppercase mb-1">
                          {spec.name}
                        </h3>
                        <span className="text-[10px] font-semibold text-[#4299e1] dark:text-slate-400 tracking-wider inline-flex items-center gap-1 group-hover:underline">
                          SABER MÁS <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="py-12 text-center border border-black/10 dark:border-white/10 bg-white/5 rounded-none">
              <p className="font-bold text-lg">No se encontraron especialidades médicas.</p>
              <p className="text-xs text-slate-500 mt-2">Pruebe limpiando su buscador de texto para ver la lista completa.</p>
              <motion.button
                onClick={() => setSpecialtyQuery("")}
                variants={genericButtonMotion}
                whileHover="hover"
                whileTap="tap"
                className="mt-4 bg-[#111415] dark:bg-[#e1e3e4] text-[#e1e3e4] dark:text-[#111415] px-6 py-2 text-xs font-bold uppercase tracking-widest"
              >
                Limpiar Búsqueda
              </motion.button>
            </div>
          )}

        </div>
      </section>

      {/* SPECIALTY DETAIL MODAL POPUP */}
      <AnimatePresence>
        {selectedSpecialty && (
          <div className="fixed inset-0 bg-[#111415]/80 backdrop-blur-sm flex items-center justify-center p-6 z-50">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-[#111415] border border-black/10 dark:border-white/10 max-w-lg w-full p-8 relative shadow-2xl"
            >
              <button 
                onClick={() => setSelectedSpecialty(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-red-500 cursor-pointer p-1"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-bold text-[#4299e1] dark:text-[#c6c6cc] uppercase tracking-[0.2em]">Consultorio {selectedSpecialty.id}</span>
                  <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase mt-1">{selectedSpecialty.name}</h3>
                </div>

                <div className="divider-fade"></div>

                <p className="text-sm font-light leading-relaxed text-slate-600 dark:text-slate-300">
                  {selectedSpecialty.description}
                </p>

                <div className="bg-[#f5f5f7] dark:bg-white/5 p-4 border-l-2 border-[#4299e1] text-xs">
                  <p className="font-bold uppercase text-[#002045] dark:text-white mb-1">Información de Consulta</p>
                  <p className="text-slate-500 dark:text-slate-300 font-light leading-relaxed">
                    Nuestros especialistas de residencias cuentan con agendas programadas. La asignación se realiza bajo estricto orden de solicitud digital pre-admisión.
                  </p>
                </div>

                <div className="flex gap-4 pt-2">
                  <motion.a
                    href="#contacto"
                    onClick={() => setSelectedSpecialty(null)}
                    variants={buttonMotion}
                    whileHover="hover"
                    whileTap="tap"
                    className="flex-1 bg-[#111415] dark:bg-[#e1e3e4] text-[#e1e3e4] dark:text-[#111415] font-bold text-center py-3 text-xs uppercase tracking-widest"
                  >
                    Agendar para esta Especialidad
                  </motion.a>
                  <motion.button
                    onClick={() => setSelectedSpecialty(null)}
                    variants={genericButtonMotion}
                    whileHover="hover"
                    whileTap="tap"
                    className="bg-transparent border border-black/10 dark:border-white/10 text-slate-600 dark:text-white px-6 py-3 text-xs font-bold uppercase tracking-widest"
                  >
                    Regresar
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* RED MÉDICA / PROFESIONALES SECTION */}
      <section id="profesionales" className="py-24 md:py-32 bg-[#edf2f7]/50 dark:bg-black/10 relative overflow-hidden">
        
        {/* Fine background details */}
        <div className="divider-fade top-0 absolute w-full"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left image and Portal Floating Badge */}
          <div className="relative">
            <div className="aspect-[4/5] glass-panel p-4 overflow-hidden border border-black/10 dark:border-white/10">
              <img
                alt="Director Médico de la Clínica Médica Bonfil"
                className="w-full h-full object-cover opacity-90 grayscale shadow-inner"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3TueHLSoeY5WQ321-SgZCkO7bVlXCCt6NojYWyadx3yGiNjPpB_LB4f1uBHW1hvdcN4_vmJzl66gJ7nK5edeYaz97dBRq99gk4doSbFyEW9nZrKztLxY7uQGmF2auIubCnUu-AtG5kYCwwyDB7Tj1nVgUeIRz--REa1UaScdsbi9tpy2Ypz1GAmtk3lIGLKfoDVf6gCIu7LFGWlVQrtdXR1_ANw66VyZcEIN6dM7FfopfdECfH-ZRZpZ92-Eb2QWkA8znIPRqtw"
              />
            </div>

            {/* Floating Portal Card */}
            <div className="absolute -bottom-8 -right-8 glass-card p-8 max-w-xs hidden lg:block border border-black/10 dark:border-white/10">
              <span className="font-bold text-[9px] text-[#4299e1] dark:text-slate-400 block mb-3 tracking-widest uppercase">
                PORTAL RESIDENTE
              </span>
              <p className="font-extrabold text-lg leading-snug text-slate-800 dark:text-white uppercase">
                LLEVA TU PRÁCTICA MÉDICA AL SIGUIENTE NIVEL
              </p>
            </div>
          </div>

          {/* Right text details & advantages */}
          <div className="space-y-8">
            <div>
              <span className="text-[11px] font-bold text-[#4299e1] dark:text-[#c6c6cc] uppercase tracking-[0.3em] block mb-2">[ PROGRAMA EXCLUSIVO B2B ]</span>
              <h2 className="text-3xl md:text-5xl font-black uppercase text-slate-800 dark:text-white leading-tight">
                ÚNETE A NUESTRA RED DE ÉLITE
              </h2>
              <p className="text-slate-600 dark:text-slate-300 font-light text-sm sm:text-base leading-relaxed mt-4">
                Ofrecemos una plataforma integral para profesionales de la salud que exigen la excelencia en Pachuca. Equipe y consolide su consulta privada operando bajo altos estándares regulatorios.
              </p>
            </div>

            {/* List entries */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-[#4299e1]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase text-[#002045] dark:text-white">Cumplimiento Oficial COFEPRIS</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-light leading-relaxed">Infraestructura certificada para consultorios con tratamiento de residuos RPBI.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-[#4299e1]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase text-[#002045] dark:text-white">Laboratorios Propios</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-light leading-relaxed">Diagnóstico y obtención de análisis clínicos inmediatos para la evolución de sus pacientes.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-[#4299e1]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase text-[#002045] dark:text-white">Gestión Integral Secretarial</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-light leading-relaxed">Servicio de agenda digitalizada con cobros autorizados y facturación fiscal.</p>
                </div>
              </div>
            </div>

            {/* Modal trigger button with Smooth motion spring animations */}
            <div className="pt-2">
              <motion.button
                onClick={() => setIsResidenciaOpen(true)}
                variants={buttonMotion}
                whileHover="hover"
                whileTap="tap"
                className="bg-[#111415] dark:bg-[#e1e3e4] text-[#e1e3e4] dark:text-[#111415] px-10 py-4 text-xs font-bold uppercase tracking-widest border border-transparent rounded-none cursor-pointer inline-flex items-center gap-2"
              >
                Solicitar Residencia Médica
              </motion.button>
            </div>
          </div>

        </div>
      </section>

      {/* PORTALS FORM SECTION */}
      <section id="contacto" className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="divider-fade mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 dark:bg-white/10 glass-panel overflow-hidden">
            
            {/* PORTAL 01: ADMISIÓN DE PACIENTES */}
            <div className="p-10 lg:p-16 space-y-8 bg-[#111415]/10 dark:bg-transparent">
              <div>
                <span className="text-[10px] font-bold text-[#4299e1] uppercase tracking-widest">Portal 01</span>
                <h3 className="text-2xl lg:text-3xl font-black text-slate-800 dark:text-white uppercase mt-1">Admisión de Pacientes</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-1 font-light leading-normal">
                  Inicie su pre-registro digital clínico para una atención óptima en recepción.
                </p>
              </div>

              {patientSuccess ? (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="bg-emerald-500/10 border border-emerald-500/30 p-6 space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-500" />
                    <div>
                      <p className="font-bold text-slate-850 dark:text-white text-sm">¡Admisión Pre-registrada!</p>
                      <p className="text-slate-500 text-xs mt-0.5">Su cita de ingreso se encuentra asignada temporalmente.</p>
                    </div>
                  </div>
                  <motion.button 
                    onClick={() => {
                      setPatientSuccess(false);
                      setPatientName("");
                      setPatientInsurance("");
                    }}
                    variants={genericButtonMotion}
                    whileHover="hover"
                    whileTap="tap"
                    className="text-xs font-bold text-[#4299e1] hover:underline uppercase block cursor-pointer"
                  >
                    ← Registrar nuevo ingreso
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handlePatientSubmit} className="space-y-6">
                  {patientError && (
                    <p className="text-xs text-red-500 font-bold">{patientError}</p>
                  )}

                  <div className="field-wrap space-y-2 border-b border-black/10 dark:border-white/10 pb-3">
                    <label className="text-[10px] font-bold text-slate-500 dark:text-[#c6c6cb] uppercase tracking-wider block">
                      Nombre Completo del Paciente *
                    </label>
                    <input
                      type="text"
                      placeholder="Santiago Gutiérrez Alarcón"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full bg-transparent border-none text-slate-800 dark:text-white p-0 focus:ring-0 placeholder:text-black/20 dark:placeholder:text-white/20 text-sm font-medium outline-none"
                    />
                  </div>

                  <div className="field-wrap space-y-2 border-b border-black/10 dark:border-white/10 pb-3">
                    <label className="text-[10px] font-bold text-slate-500 dark:text-[#c6c6cb] uppercase tracking-wider block">
                      Referencia de Seguro Médico / Póliza (Opcional)
                    </label>
                    <input
                      type="text"
                      placeholder="Código de Proveedor o ID"
                      value={patientInsurance}
                      onChange={(e) => setPatientInsurance(e.target.value)}
                      className="w-full bg-transparent border-none text-slate-800 dark:text-white p-0 focus:ring-0 placeholder:text-black/20 dark:placeholder:text-white/20 text-sm font-medium outline-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    variants={buttonMotion}
                    whileHover="hover"
                    whileTap="tap"
                    className="w-full bg-[#111415] dark:bg-[#e1e3e4] text-[#e1e3e4] dark:text-[#111415] py-4 text-xs font-bold uppercase tracking-widest cursor-pointer"
                  >
                    Solicitar Acceso Clínico
                  </motion.button>
                </form>
              )}
            </div>

            {/* PORTAL 02: MENSAJE O CONSULTAS MÉDICAS */}
            <div className="p-10 lg:p-16 space-y-8 bg-[#111415]/5 dark:bg-transparent">
              <div>
                <span className="text-[10px] font-bold text-[#4299e1] uppercase tracking-widest">Portal 02</span>
                <h3 className="text-2xl lg:text-3xl font-black text-slate-800 dark:text-white uppercase mt-1">Consultas Profesionales</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-1 font-light leading-normal">
                  Comuníquese directamente con las coordinaciones de las residencias médicas.
                </p>
              </div>

              {proSuccess ? (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="bg-emerald-500/10 border border-emerald-500/30 p-6 space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-500" />
                    <div>
                      <p className="font-bold text-slate-850 dark:text-white text-sm">¡Mensaje Transmitido!</p>
                      <p className="text-slate-500 text-xs mt-0.5">La dirección clínica evaluará los datos de contacto y responderá.</p>
                    </div>
                  </div>
                  <motion.button 
                    onClick={() => {
                      setProSuccess(false);
                      setProLicense("");
                      setProMessage("");
                    }}
                    variants={genericButtonMotion}
                    whileHover="hover"
                    whileTap="tap"
                    className="text-xs font-bold text-[#4299e1] hover:underline uppercase block cursor-pointer"
                  >
                    ← Enviar nuevo mensaje
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleProSubmit} className="space-y-6">
                  {proError && (
                    <p className="text-xs text-red-500 font-bold">{proError}</p>
                  )}

                  <div className="field-wrap space-y-2 border-b border-black/10 dark:border-white/10 pb-3">
                    <label className="text-[10px] font-bold text-slate-500 dark:text-[#c6c6cb] uppercase tracking-wider block">
                      Cédula / Credenciales Clínicas *
                    </label>
                    <input
                      type="text"
                      placeholder="Número de cédula o ID en Pachuca"
                      value={proLicense}
                      onChange={(e) => setProLicense(e.target.value)}
                      className="w-full bg-transparent border-none text-slate-800 dark:text-white p-0 focus:ring-0 placeholder:text-black/20 dark:placeholder:text-white/20 text-sm font-medium outline-none"
                    />
                  </div>

                  <div className="field-wrap space-y-2 border-b border-black/10 dark:border-white/10 pb-3">
                    <label className="text-[10px] font-bold text-slate-500 dark:text-[#c6c6cb] uppercase tracking-wider block">
                      Segmento de Mensaje o Consulta Académica (Opcional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Escriba su propuesta de espacio corporativo, insumos clínicos..."
                      value={proMessage}
                      onChange={(e) => setProMessage(e.target.value)}
                      className="w-full bg-transparent border-none text-slate-800 dark:text-white p-0 focus:ring-0 placeholder:text-black/20 dark:placeholder:text-white/20 text-sm font-medium outline-none resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    variants={buttonMotion}
                    whileHover="hover"
                    whileTap="tap"
                    className="w-full bg-transparent border border-black/30 dark:border-white/30 text-slate-800 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 py-4 text-xs font-bold uppercase tracking-widest cursor-pointer"
                  >
                    Contactar Directorio
                  </motion.button>
                </form>
              )}
            </div>

          </div>

          <div className="divider-fade mt-16"></div>
        </div>
      </section>

      {/* FAQ TEXT ACCORDIONS */}
      <section id="faq" className="py-16 md:py-24 bg-white/5 dark:bg-transparent">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-4 mb-12">
            <span className="text-[10px] font-bold text-[#4299e1] uppercase tracking-widest">[ COBERTURA Y LOGÍSTICA ]</span>
            <h3 className="text-3xl font-black text-slate-805 dark:text-white uppercase">Preguntas Frecuentes</h3>
            <p className="text-slate-500 text-xs max-w-lg mx-auto font-light leading-relaxed">
              Consulte de manera inmediata las normas operativas, coberturas fiscales y facilidades de pago autorizadas en la clínica.
            </p>
          </div>

          {/* Accordion List */}
          <div className="border-t border-[#e2e8f0] dark:border-white/10 divide-y divide-[#e2e8f0] dark:divide-white/10">
            {FAQS.map((faq) => (
              <div key={faq.id} className="py-4">
                <details className="group cursor-pointer">
                  <summary className="flex justify-between items-center py-3 text-sm font-bold uppercase tracking-tight text-slate-800 dark:text-white select-none">
                    <span>{faq.question}</span>
                    <span className="text-lg font-mono text-[#4299e1] group-open:rotate-180 transition-transform duration-200">+</span>
                  </summary>
                  <p className="text-xs font-light text-slate-600 dark:text-slate-400 pl-1 pb-4 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              </div>
            ))}
          </div>

          {/* Direct dial numbers info */}
          <div className="mt-12 p-6 bg-[#edf2f7] dark:bg-white/5 border border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#002045] text-white flex items-center justify-center font-bold">
                📱
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-[#4299e1] uppercase tracking-widest">ATENCIÓN EN RECEPCIÓN</p>
                <p className="text-lg font-extrabold text-slate-800 dark:text-white">+52 (771) 123 4567</p>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center sm:text-right font-light italic max-w-xs leading-none">
              Respuesta clínica inmediata ante emergencias o traslados de ambulancia.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full py-16 bg-white dark:bg-[#0c0f10] border-t border-black/5 dark:border-white/5 relative overflow-hidden">
        
        {/* Ghost text from design guidelines */}
        <div className="text-[110px] opacity-[0.03] dark:opacity-[0.04] pointer-events-none absolute left-0 bottom-0 select-none uppercase font-black tracking-tighter text-slate-800 dark:text-white leading-none">
          BONFIL
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start max-w-7xl mx-auto px-6 lg:px-12 gap-12 relative z-10">
          
          {/* Brand block */}
          <div className="flex flex-col gap-4">
            <div className="text-lg font-black uppercase text-slate-800 dark:text-white tracking-widest">
              CLÍNICA MÉDICA BONFIL
            </div>
            <p className="text-xs font-light text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
              Elevando el estándar de excelencia clínica en Pachuca de Soto, Hidalgo, a través del orden, la asepsia y la maestría científica.
            </p>
          </div>

          {/* Quick links */}
          <div className="grid grid-cols-2 gap-8 text-xs font-bold uppercase tracking-widest">
            <nav className="flex flex-col gap-3">
              <a href="#inicio" className="text-slate-500 hover:text-[#4299e1] dark:hover:text-white transition-colors">Inicio</a>
              <a href="#especialidades" className="text-slate-500 hover:text-[#4299e1] dark:hover:text-white transition-colors">Especialidades</a>
            </nav>
            <nav className="flex flex-col gap-3">
              <a href="#faq" className="text-slate-500 hover:text-[#4299e1] dark:hover:text-white transition-colors">Normatividad</a>
              <a href="#contacto" className="text-slate-500 hover:text-[#4299e1] dark:hover:text-white transition-colors">Contacto</a>
            </nav>
          </div>

          {/* Social media badges with custom animated scale icons */}
          <div className="flex gap-3">
            <motion.a 
              href="#social-fb"
              variants={buttonMotion}
              className="w-10 h-10 bg-slate-100 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-xs font-bold text-slate-700 dark:text-slate-300"
            >
              FB
            </motion.a>
            <motion.a 
              href="#social-ig"
              variants={buttonMotion}
              className="w-10 h-10 bg-slate-100 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-xs font-bold text-slate-700 dark:text-slate-300"
            >
              IG
            </motion.a>
            <motion.a 
              href="#social-in"
              variants={buttonMotion}
              className="w-10 h-10 bg-slate-100 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-xs font-bold text-slate-700 dark:text-slate-300"
            >
              LN
            </motion.a>
          </div>

        </div>

        {/* Bottom copyright stamp */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-16 text-left border-t border-black/5 dark:border-white/5 pt-8 z-10 relative">
          <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            © 2026 CLÍNICA MÉDICA BONFIL. TODOS LOS DERECHOS RESERVADOS. CUMPLIMIENTO SANITARIO COFEPRIS AC-H-2026.
          </span>
        </div>

      </footer>

      {/* B2B RESIDENCIA REGISTRATION MODAL */}
      <AnimatePresence>
        {isResidenciaOpen && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 z-50">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-[#111415] border border-black/10 dark:border-white/10 max-w-md w-full p-8 relative shadow-2xl"
            >
              <button 
                onClick={resetResidencia}
                className="absolute top-4 right-4 text-slate-400 hover:text-red-500 cursor-pointer p-1"
                aria-label="Cerrar modal residencia"
              >
                <X className="w-5 h-5" />
              </button>

              {doctorSuccess ? (
                <div className="space-y-6 text-center py-6">
                  <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto text-2xl">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase text-slate-805 dark:text-white">¡Solicitud Registrada!</h3>
                    <p className="text-xs text-slate-500 mt-2 font-light leading-relaxed">
                      La dirección médica evaluará su cédula y credenciales para coordinar la renta o convenio de espacio en Pachuca.
                    </p>
                  </div>
                  <motion.button
                    onClick={resetResidencia}
                    variants={genericButtonMotion}
                    whileHover="hover"
                    whileTap="tap"
                    className="bg-[#111415] dark:bg-[#e1e3e4] text-[#e1e3e4] dark:text-[#111415] px-6 py-2.5 text-xs font-bold uppercase tracking-widest"
                  >
                    Entendido
                  </motion.button>
                </div>
              ) : (
                <form onSubmit={handleResidenciaSubmit} className="space-y-6">
                  <div>
                    <span className="text-[10px] font-bold text-[#4299e1] uppercase tracking-widest block">[ CONVOCATORIA DE RESIDENCIA ]</span>
                    <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase mt-1">Formulario de Ingreso B2B</h3>
                    <p className="text-xs text-slate-500 mt-1 font-light leading-normal">
                      Solicite un consultorio equipado bajo las normas regulatorias de Hidalgo.
                    </p>
                  </div>

                  <div className="divider-fade"></div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                      Nombre Completo del Especialista *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Dr. Mauricio Estrada"
                      value={doctorName}
                      onChange={(e) => setDoctorName(e.target.value)}
                      className="w-full bg-[#f5f5f7] dark:bg-white/5 border border-black/10 dark:border-white/10 px-4 py-3 text-xs outline-none focus:border-[#4299e1] rounded-none placeholder:text-slate-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                      Cédula / Licencia Profesional *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. CED-832910"
                      value={doctorLicenseInput}
                      onChange={(e) => setDoctorLicenseInput(e.target.value)}
                      className="w-full bg-[#f5f5f7] dark:bg-white/5 border border-black/10 dark:border-white/10 px-4 py-3 text-xs outline-none focus:border-[#4299e1] rounded-none placeholder:text-slate-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                      Correo Electrónico de Contacto
                    </label>
                    <input
                      type="email"
                      placeholder="Ej. doctor@correo.com"
                      value={doctorEmail}
                      onChange={(e) => setDoctorEmail(e.target.value)}
                      className="w-full bg-[#f5f5f7] dark:bg-white/5 border border-black/10 dark:border-white/10 px-4 py-3 text-xs outline-none focus:border-[#4299e1] rounded-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                      Especialidad de Postulación
                    </label>
                    <select
                      value={doctorSpec}
                      onChange={(e) => setDoctorSpec(e.target.value)}
                      className="w-full bg-[#f5f5f7] dark:bg-white/5 border border-black/10 dark:border-white/10 px-4 py-3 text-xs outline-none rounded-none cursor-pointer"
                    >
                      <option value="Medicina General">Medicina General</option>
                      <option value="Urología Quirúrgica">Urología Quirúrgica</option>
                      <option value="Gineco-Obstetricia">Gineco-Obstetricia</option>
                      <option value="Medicina Interna">Medicina Interna</option>
                      <option value="Cirugía de Laparoscopia">Cirugía de Laparoscopia</option>
                    </select>
                  </div>

                  <div className="bg-[#f5f5f7] dark:bg-white/5 p-4 text-[10px] text-slate-500 leading-normal">
                    La aprobación definitiva requiere la presentación física del dossier escolar y comprobantes de la Secretaría de Salud federal en las oficinas de administración central.
                  </div>

                  <div className="flex gap-4 pt-2">
                    <motion.button
                      type="submit"
                      variants={buttonMotion}
                      whileHover="hover"
                      whileTap="tap"
                      className="flex-1 bg-[#111415] dark:bg-[#e1e3e4] text-[#e1e3e4] dark:text-[#111415] py-3 text-xs font-bold uppercase tracking-widest"
                    >
                      Enviar Candidatura
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={resetResidencia}
                      variants={genericButtonMotion}
                      whileHover="hover"
                      whileTap="tap"
                      className="bg-transparent border border-black/10 dark:border-white/10 text-slate-600 dark:text-white px-4 py-3 text-xs font-bold uppercase tracking-widest"
                    >
                      Regresar
                    </motion.button>
                  </div>

                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
