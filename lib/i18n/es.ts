import { catalogEs } from "./catalog.es";
import type { Dictionary } from "./en";

export const es: Dictionary = {
  skip: "Saltar al contenido",
  menu: "Menú",
  close: "Cerrar",
  language: "Idioma",
  brand: {
    psychiatry: "Psiquiatría",
  },
  notFound: {
    title: "Esta página no existe.",
    lede: "La dirección puede ser incorrecta, o la página puede haberse retirado.",
    home: "Volver al inicio",
  },
  nav: {
    about: "Acerca de",
    care: "Cuidado",
    billing: "Honorarios",
    contact: "Contacto",
    become: "Hacerse paciente",
    login: "Acceso de pacientes",
    conditions: "Condiciones",
    telehealth: "Telesalud",
    approach: "Enfoque",
    resources: "Recursos",
    privacy: "Privacidad",
    npp: "Aviso HIPAA",
    healthData: "Datos de salud",
    terms: "Términos",
    nondiscrimination: "No discriminación",
  },
  footer: {
    hours: "telesalud en Washington e Idaho",
    crisis:
      "Si es una emergencia, llame al {emergency}. Para apoyo en crisis de salud mental en Estados Unidos, llame o envíe un mensaje al {line}.",
    photos:
      "Fotografías de Riverside State Park, Spokane. Puente colgante de Dsdugan; Bowl and Pitcher de Benjamin Cody. CC BY-SA 3.0.",
  },
  banner: {
    aria: "Recursos de crisis",
    emergency: "Emergencia",
    crisisBefore: "Crisis de salud mental: llame o envíe un mensaje al ",
    crisisAfter: ", las 24 horas",
    dismiss: "Cerrar",
  },
  crisis:
    "Si es una emergencia, llame al {emergency}. Para apoyo en crisis de salud mental en Estados Unidos, llame o envíe un mensaje al {line}. Este sitio no es un servicio de crisis.",
  credentials: {
    telehealth: "Telesalud en Washington e Idaho",
    npiSoon: "NPI próximamente",
  },
  hero: {
    tagline: "Sesenta minutos. Un nombre. Un plan.",
    h1: "Cuidado psiquiátrico con tiempo para verle.",
    lede: "Evaluación, prescripción y psicoterapia en la misma hora sin prisas — guiadas por la farmacogenómica, con un enfermero practicante psiquiátrico en Spokane.",
    facts: [
      { label: "Primera visita", value: "75–90 minutos" },
      { label: "Cada seguimiento", value: "Sesenta minutos" },
      { label: "Dónde", value: "Spokane · telesalud en Washington e Idaho" },
      { label: "Pago", value: "Pago particular · Superbill" },
    ],
    treat: "Qué tratamos",
    spokane: "Spokane",
    telehealth: "Telesalud en Washington e Idaho",
  },
  treat: {
    titleBefore: "Qué",
    titleMark: "tratamos",
    intro:
      "Plena autoridad para prescribir y un diagnóstico formal, con visitas de sesenta minutos como base.",
    named: "Condiciones nombradas, en detalle →",
    what: "Qué es",
    how: "Cómo lo tratamos",
    cells: {
      "mood-attention": {
        title: "TDAH, depresión y ansiedad",
        kicker: "Adultos · Universidad",
        what: "Atención, ánimo, sueño y energía que ya no sostienen el día — en adultos y estudiantes.",
        how: "Un nombre cuidadoso cuando es exacto, luego medicación, estructura, farmacogenómica y suplementos en la misma hora de sesenta minutos. No un sello y una recarga.",
        link: "Condiciones nombradas",
      },
      trauma: {
        title: "Trauma y reintegración",
        kicker: "Ocupacional · Social · Cultural",
        what: "Lo que queda después del suceso: un trabajo que rompió la confianza, una unidad sin personal suficiente, el regreso del extranjero, el desplazamiento cultural.",
        how: "Psicoterapia, sueño, pistas genómicas y medicación orientada a la función — un trabajo, un hogar, un amigo — no solo el flashback.",
        link: "TEPT y trauma",
      },
      identity: {
        title: "Identidad y valía",
        kicker: "Centrada en el sentido",
        what: "Pesadillas, culpa, vergüenza, miedo, y la pregunta de quién es usted después de la ruptura.",
        how: "El objetivo no es discutir una creencia. Conversar, regular, y medicina cuando hace falta — suficiente calma para vivir una vida dentro.",
        link: "El enfoque",
      },
      sleep: {
        title: "Sueño y turnos",
        kicker: "Noches · Rotaciones",
        what: "Noches, horarios rotativos, y un sistema nervioso que no baja.",
        how: "El sueño se trata en la misma hora que el ánimo y la atención — no como un boutique aparte. La prescripción sigue el turno, no un horario de oficina imaginario.",
        link: "Cuidado",
      },
      occupational: {
        title: "Trabajo, baja y retorno",
        kicker: "Psiquiatría ocupacional",
        what: "La baja, el retorno al trabajo, y el papeleo que una carrera y un sistema nervioso necesitan.",
        how: "Evaluación por preocupaciones laborales. Informes y formularios facturados por hora cuando se alargan. Lenguaje FMLA cuando hay que proteger un puesto.",
        link: "FMLA y el trabajo",
      },
      foster: {
        title: "Acogida y juventud",
        kicker: "Escala móvil",
        what: "Jóvenes, incluidos quienes están en acogida, y los adultos que los sostienen.",
        how: "Pago privado, con escala incluida. Evaluación, medicación y tiempo suficiente. Esa conversación ocurre de frente — no como un código de descuento.",
        link: "Niños y adolescentes",
      },
      colleagues: {
        title: "Cuidado para quien cuida",
        kicker: "Confidencial",
        what: "Profesionales de la salud y primeros respondedores que no pueden permitirse una sala de espera pública.",
        how: "La misma psiquiatría de sesenta minutos, con la discreción incluida. El tratamiento asistido con medicación abre en enero de 2027.",
        link: "Hacerse paciente",
      },
      "service-animal": {
        title: "Evaluaciones de animal de servicio",
        kicker: "A petición",
        what: "Una evaluación psiquiátrica en apoyo de un animal de servicio, cuando el cuadro clínico lo pide.",
        how: "A petición — no un producto en un menú. La carta sigue a la evaluación, no al revés.",
        link: "Consultar",
      },
    },
  },
  home: {
    plan: {
      kicker: "Farmacogenómica en la hora",
      title: "Un plan médico individualizado",
      lede: "Evaluación psiquiátrica, prescripción y manejo de medicación, guiados por farmacogenómica y suplementación personalizada. El cuidado empieza con una evaluación de 60 minutos, sin prisa.",
      intro:
        "Un informe farmacogenómico no es un test de personalidad ni un protocolo. Es un mapa de cómo sus genes pueden manejar un medicamento psiquiátrico — usado aquí dentro de una hora sin prisa, por un clínico cuya formación es la genética.",
      doesKicker: "Qué hace",
      doesTitle: "Los mismos miligramos no son la misma persona.",
      doesBody:
        "La farmacogenómica mira genes que cambian cómo el cuerpo maneja un medicamento. En el cuidado psiquiátrico eso significa las enzimas que transforman muchas tabletas para el ánimo, la atención, el trauma o el sueño. Los genes pueden hacer que esas enzimas trabajen más despacio, de forma típica o más rápido. Los mismos miligramos pueden quedarse, sentarse con normalidad, o irse antes de ayudar. Un informe mapea esa tendencia. No nombra su diagnóstico, y no elige la tableta.",
      sameMilligrams: "Los mismos miligramos",
      geneKicker: "Qué pueden estar haciendo los genes",
      chairKicker: "Cómo puede verse eso en la silla",
      chartSr:
        "Esquema didáctico de farmacogenómica. Los mismos miligramos de un medicamento psiquiátrico, con tres posibles manejos genéticos: el cuerpo puede retener la dosis, manejarla de forma típica, o eliminarla. Cada uno cambia cuánta medicina puede seguir disponible, y cómo puede verse la hora. No es un resultado de laboratorio ni una receta.",
      fates: {
        hold: {
          label: "Puede retenerse",
          gene: "Los genes pueden hacer que las enzimas trabajen más despacio. Puede quedar más medicamento disponible del que sugieren los miligramos del frasco.",
          chair: "En la silla esto puede parecerse a efectos secundarios — niebla, agitación, un medicamento “demasiado fuerte.” Puede ir con suavidad en la dosis, o elegir otro instrumento.",
        },
        typical: {
          label: "Típico",
          gene: "El manejo que el informe llama ordinario. Nada ruidoso. Eso no es permiso para saltarse el resto de la hora, y no es una luz verde.",
          chair: "La página está quieta. Todavía tiene que decir si este medicamento pertenece — por los días, por lo que ya falló, por quien está sentado aquí.",
        },
        clear: {
          label: "Puede no quedarse",
          gene: "Los genes pueden hacer que las enzimas trabajen más rápido. El medicamento puede irse antes de tener la oportunidad de hacer el trabajo para el que se escribió.",
          chair: "En la silla esto puede parecer que el medicamento no hizo nada. La gente cambia de fármaco. La pregunta justa es si alguna vez se quedó el tiempo suficiente para actuar.",
        },
      },
      usesKicker: "Cómo lo usa",
      usesTitle: "La genética está en su formación. La visita sigue siendo el trabajo.",
      usesBody:
        "Estudió botánica, luego la genética de la resiliencia, luego medicina funcional, luego psiquiatría. Por eso el informe está en esta sala — no como un truco de laboratorio enviado desde otro lado, ni como un protocolo de una empresa. En la hora sin prisa lo lee junto al sueño, lo que ya falló y cada otro medicamento en el cuerpo. Esos pueden imitar un gen. Usa la página como una cautela para la dosis y la elección, y para la suplementación en el mismo plan — nunca como un guion que anula a quien está sentado aquí.",
      usesItems: [
        {
          title: "Los días primero",
          body: "La función es el objetivo — dormir, trabajar, un hogar que sostenga. El informe no mide eso. La hora sí.",
        },
        {
          title: "Lo que ya falló",
          body: "Un medicamento que pareció no hacer nada, o uno que fue demasiado, pertenece a la mesa. Lee el informe junto a esa historia, no en su lugar.",
        },
        {
          title: "Qué más hay en el cuerpo",
          body: "Otra tableta — psiquiátrica o no — puede frenar las mismas enzimas. La edad y el hígado también. No trata un gen como la única causa.",
        },
      ],
      planItems: [
        {
          title: "Medicación, cuando la biología lo pide",
          body: "Plena autoridad para prescribir, usada como un instrumento. La dosis y la elección pueden informarse por el informe. Un medicamento que ya ayuda no está automáticamente mal porque una página lo marcó.",
        },
        {
          title: "Suplementación, cuando es la mejor herramienta",
          body: "Los suplementos personalizados se sientan en la misma hora — no un boutique al fondo del pasillo, ni un sustituto de nombrar lo que está pasando.",
        },
        {
          title: "La siguiente hora sigue durando sesenta minutos",
          body: "El informe no acorta la visita, y no sustituye hablar. El seguimiento sigue siendo una hora: medicación y terapia en la misma sala.",
        },
      ],
      standsKicker: "En qué se distingue esta hora",
      standsTitle: "La mayor parte del cuidado psiquiátrico nunca abre esta página.",
      commonKicker: "Una hora psiquiátrica común",
      commonItems: [
        "Un control corto de medicación, y la misma dosis inicial para casi todos.",
        "Meses de ensayo y error para aprender lo que el cuerpo ya sabía.",
        "Un test genómico, si es que se pide, con el que nadie se sienta.",
        "Medicina en una sala. Suplementos en otra parte. Un seguimiento que se encoge.",
      ],
      hereKicker: "Esta hora",
      hereItems: [
        "Sesenta minutos, el informe sobre el escritorio, leído por alguien formado para leerlo.",
        "Dosis y elección informadas antes de la tercera tableta fallida.",
        "Medicación y suplementación escritas como un solo plan.",
        "El seguimiento sigue durando una hora. Usted no es una impresión, y esto no es un protocolo.",
      ],
      clue: "El informe es una pista para la hora, nunca el mapa entero. Otros fármacos, la edad y el hígado pueden imitar un gen. Un medicamento que ya funciona no está automáticamente mal porque una página lo marcó.",
      sketch: "Un esquema de la farmacogenómica en esta práctica. No es su informe, ni un resultado.",
    },
    practicalKicker: "Antes de la primera hora",
    providerLede:
      "Botánica en Oregon State, investigación en genética, medicina funcional, enfermería, cuidados críticos y luego psiquiatría de posgrado. Está construyendo una consulta privada pequeña.",
    aboutMitch: "Sobre Mitch",
    firstVisitTitle: "La primera visita dura 75–90 minutos.",
    firstVisitBody:
      "No le van a apurar. Una breve llamada de encaje es gratuita si quiere oír la voz antes de comprometerse. Luego la admisión — y si encaja, agendamos.",
    whatToExpect: "Qué esperar",
    theApproach: "El enfoque",
    cashTitle: "Pago particular, a propósito. Superbill incluido.",
    cashBody:
      "El pago particular es una elección, para que la hora le pertenezca. Después de una visita hay un superbill si desea buscar reembolso fuera de red.",
    rates: "Honorarios",
    telehealthBand:
      "Las visitas virtuales son horas ordinarias de sesenta minutos. Debe estar en Washington o Idaho.",
    telehealthLink: "Telesalud →",
  },
  cta: {
    title: "Hágase paciente hoy.",
    body: "Cuando esté listo, empiece por la admisión.",
    billing: "Honorarios",
  },
  about: {
    eyebrow: "Acerca de",
    title: "Mitch Corbet, PMHNP-BC.",
    lede: "{name} está construyendo Northform como una consulta privada pequeña — cuidado psiquiátrico, farmacogenómica y suplementación a medida.",
    p1: "Mitch es el mayor de cuatro hijos de un padre o madre solo que luchó contra la adicción y el fantasma del trauma generacional, y que aun así intentó amar. Tras la pérdida de la patria potestad, los hermanos fueron colocados en hogares de acogida distintos.",
    p2: "De adolescente se reunió con sus hermanos y fue adoptado por una familia amorosa. Esa secuencia — ruptura, separación, retorno — sigue informando cómo se sienta con personas cuya confianza en sí mismas, en otros o en la vida ha sido herida.",
    p3: "Se graduó de Oregon State University tras estudiar botánica, luego trabajó internacionalmente en la genética de la resiliencia. Volvió a Estados Unidos para aprender medicina funcional en Portland, completó enfermería en la University of Miami, se formó en cuidados críticos en la University of Kentucky y enseñó ese trabajo a nivel nacional. El posgrado siguió en Gonzaga University.",
    p4: "El trauma, la ansiedad y la depresión grave estresan el sistema nervioso. El cuidado psiquiátrico, la farmacogenómica y los suplementos a medida se usan juntos para restaurar la regulación. El objetivo es la función: sueño, trabajo y relaciones que puedan sostenerse.",
    schools: {
      osu: { place: "Oregon State", note: "Botánica; investigación genética" },
      miami: { place: "Miami · Kentucky", note: "Enfermería, cuidados críticos" },
      gonzaga: { place: "Gonzaga", note: "Psiquiatría de posgrado" },
    },
    portrait: "Retrato próximamente",
    portraitNote: "Las fotografías profesionales de Mitch irán aquí.",
  },
  start: {
    eyebrow: "Pacientes nuevos",
    title: "Cómo empezar.",
    lede: "Elija una cita abajo y complete la admisión segura.",
    begin: "Comenzar admisión",
    ready: "Cuando esté listo",
    beginHeading: "Comience la admisión.",
    loading: "Cargando de forma segura…",
    beginReady:
      "El formulario se abre en una ventana segura. Dedíquele la misma atención que a la primera sesión.",
    beginSoon:
      "El formulario seguro se abre desde este botón cuando el enlace esté activo. El correo es para logística, no un sustituto de una evaluación.",
    meta: "Pago particular · Escala móvil · Superbill después de una visita",
    rates: "Tarifas y facturación",
    telehealth: "Telesalud en Washington e Idaho",
    chapters: [
      {
        title: "Una llamada breve, si la desea.",
        body: "Una llamada de encaje de 10–15 minutos es gratuita. Oiga la voz. Nada se debe por leer esta página.",
      },
      {
        title: "La primera hora dura 75–90 minutos.",
        body: "Historia, un nombre cuidadoso cuando es exacto, y un plan. Las visitas de seguimiento son de sesenta minutos — medicación y terapia en la misma hora. Para video, necesita un cuarto privado, una conexión estable y estar físicamente en Washington o Idaho.",
      },
      {
        title: "La admisión, luego agendamos.",
        body: "Un formulario seguro es cómo la consulta conoce quién es usted antes de la sesión. Si encaja, oirá los siguientes pasos. Si no, la puerta se cierra en silencio.",
      },
    ],
  },
  faq: {
    heading: "Preguntas antes de empezar",
    items: [
      {
        q: "¿Qué ocurre en la primera visita?",
        a: "La primera evaluación dura 75–90 minutos. Las visitas de seguimiento son de sesenta minutos como duración ordinaria — medicación y terapia en la misma hora. No le van a apurar.",
      },
      {
        q: "¿Aceptan seguro?",
        a: "Aún no. El cuidado es de pago particular. Puede aplicar una escala móvil. Después de una visita, un superbill está disponible para buscar reembolso fuera de red. Eso no es garantía de pago.",
      },
      {
        q: "¿Puedo ser atendido por video?",
        a: "Sí, si está físicamente en Washington o Idaho para la cita. Las sesiones siguen siendo de sesenta minutos. Necesitará un cuarto privado y una conexión estable.",
      },
      {
        q: "¿Lo que comparto es confidencial?",
        a: "Sí. La información clínica se trata como información de salud protegida. Completar una admisión crea un registro en el sistema de la consulta, no en este sitio público.",
      },
      {
        q: "¿Hay costo para ver si encaja?",
        a: "Una breve llamada de encaje de 10–15 minutos cuesta $0. Nada se debe por leer el sitio.",
      },
    ],
  },
  patients: {
    eyebrow: "Pacientes actuales",
    title: "Acceso de pacientes.",
    lede: "Si ya recibe cuidado aquí, esta es la puerta de vuelta.",
    body: "Los pacientes nuevos comienzan en Hacerse paciente. Los pacientes actuales pueden entrar abajo.",
    login: "Entrar",
    soon: "El enlace del portal de pacientes irá aquí. Hasta entonces, escriba al consultorio para la logística de pacientes actuales.",
  },
  contact: {
    eyebrow: "Contacto",
    title: "Contacto.",
    lede: "El correo y el teléfono son para logística. Los pacientes nuevos comienzan con la admisión.",
    email: "Correo",
    phone: "Teléfono",
    fax: "Fax",
    location: "Ubicación",
    hours: "Horario",
    begin: "Cómo empezar",
    beginBody: "Con sede en Spokane. Telesalud en Washington e Idaho.",
    hoursValue: "Lun–Sáb · 7:00–19:00 · telesalud en Washington e Idaho",
  },
  billing: {
    eyebrow: "Honorarios",
    title: "Pago particular, con precios claros.",
    lede: "Northform es de pago particular por ahora y aún no está en red con planes de seguro. Hay escala móvil, y recibirá un Good Faith Estimate por escrito antes de la primera visita.",
    eval: "Evaluación integral",
    baseline: "La base Northform",
    minutes: "75–90 minutos",
    followMinutes: "60 minutos",
    hourNote: "medicación y terapia en la misma hora",
    fitCall:
      "Una breve llamada de encaje cuesta $0. Después de una visita, un superbill está disponible si desea buscar reembolso fuera de red — no es garantía de pago.",
    standard: "Tarifas estándar",
    why: "Por qué pago particular",
    superbill: "Superbill",
    insurance: "Seguro",
    sliding: "Escala móvil y planes de pago",
    gfe: "Good Faith Estimate",
    tableService: "Servicio",
    tableRate: "Tarifa de pago particular",
    tableIncludes: "Qué incluye",
    ratesNote:
      "Tarifas de pago particular. La escala móvil puede bajar estos montos. Los laboratorios se facturan aparte. Un Good Faith Estimate se escribe antes de la primera visita — esta página no es ese estimado.",
    whyBody:
      "El pago particular es cómo la sesión permanece lo bastante larga — diagnóstico, prescripción y un plan — en lugar de un incremento de doce minutos de un seguro. No se exige seguro para ser atendido aquí.",
    superbillBody:
      "Después de una visita, Northform puede proporcionar un superbill: un estado de cuenta detallado que puede enviar a su aseguradora para reembolso fuera de red. El reembolso es entre usted y el plan. Un superbill no es garantía de pago.",
    insuranceNone:
      "Aún no hay planes contratados. Hasta que se listen nombres, asuma pago particular. Aun así puede usar un superbill con un beneficio fuera de red si su plan lo tiene.",
    slidingBody:
      "Hay escala móvil para quienes califiquen. Los planes de pago se pueden acordar. Los padres de acogida y los jóvenes se ven en pago particular, con escala. Esa conversación ocurre de frente — no como un código de descuento.",
    gfeBody:
      "Bajo la No Surprises Act, los pacientes de pago particular y sin seguro tienen derecho a un Good Faith Estimate escrito de los cargos esperados antes de que comience el cuidado. Pida; Northform lo proporcionará. La calculadora de arriba es para planificar. No es ese estimado.",
    estimateHeading: "Estimado rápido",
    estimateFirst: "Primera visita",
    estimateFollow: "Visitas de seguimiento",
    estimateCount: "Número de seguimientos",
    estimateTotal: "Total estimado de pago particular",
    estimateNote:
      "Solo para planificar. Esto no es un Good Faith Estimate — el suyo se escribe antes de la primera visita. Los laboratorios se facturan aparte, y una escala móvil puede bajar estos montos.",
  },
  care: {
    eyebrow: "Cuidado",
    title: "Cómo se usa la hora.",
    lede: "Diagnóstico, prescripción y psicoterapia en la misma visita de sesenta minutos.",
    diagnosisTitle: "Diagnóstico",
    diagnosisBody:
      "Una evaluación cuidadosa y, cuando corresponde, un diagnóstico formal. Los nombres pueden organizar el sufrimiento. Se ofrecen como herramientas, no como identidades para vivir dentro para siempre.",
    prescribingTitle: "Prescripción",
    prescribingBody:
      "Plena autoridad para prescribir. Medicación cuando la biología lo pide; suplementos y terapéutica herbal cuando son el mejor instrumento.",
    therapyTitle: "Psicoterapia, sesenta minutos",
    therapyBody:
      "La terapia de conversación no es un extra. Las sesiones son de sesenta minutos como duración ordinaria del trabajo — no una admisión larga seguida de una fábrica de chequeos de treinta minutos.",
    slidingTitle: "Escala móvil",
    slidingBody:
      "Hay escala móvil y planes de pago para quienes califiquen. Los padres de acogida y los jóvenes se ven en pago particular, con escala incluida. Esa conversación ocurre de frente.",
    ratesLink: "Tarifas, Superbill y un Good Faith Estimate →",
    catalogNote: "Cada condición nombrada tiene una página completa.",
  },
  conditions: {
    eyebrow: "Condiciones",
    title: "Condiciones nombradas.",
    lede: "Depresión, ansiedad, TDAH, bipolaridad, TEPT y uso de opioides — cada una con una página completa.",
    homeNote: "El sueño, la psiquiatría ocupacional y la acogida están en el catálogo de inicio.",
    treatLink: "Qué tratamos",
  },
  approach: {
    eyebrow: "Enfoque",
    title: "Farmacogenómica, suplementación y psiquiatría convencional en una sola consulta.",
    lede: "El trauma, el TDAH y los trastornos del ánimo se tratan con insight genético, suplementos dirigidos y medicamentos estándar cuando están indicados.",
    intro: "Estas son las palabras que esta consulta usa para su propio trabajo.",
    terms: [
      {
        name: "Funcional",
        body: "Psicoterapia y, cuando sirve, terapéutica herbal — orotato de litio en lugar de carbonato de litio para el ánimo, péptidos como Semax, o fármacos si hace falta. Funcional significa usar métodos naturales cuando sirven, sin rechazar la medicina cuando se requiere.",
      },
      {
        name: "Autodeterminación",
        body: "El derecho a elegir su propio camino, aunque un profesional disienta. El cuidado es colaborativo. El desacuerdo no es un fracaso de la relación; atropellar sí lo es.",
      },
      {
        name: "Apoyo de pares",
        body: "Quien ha estado ahí tiene un tipo de pericia que un médico no tiene. La experiencia vivida no es una credencial para ondear. Es una razón para escuchar de otro modo.",
      },
      {
        name: "Metas holísticas",
        body: "La pregunta no es solo si se fueron las alucinaciones. ¿Tiene un trabajo, un hogar y un amigo? La función en la vida diaria es la medida.",
      },
      {
        name: "Cuidado de sí",
        body: "Elecciones y acciones que le devuelven a sí mismo y le alinean con quién es — no una lista de rituales para una audiencia.",
      },
    ],
  },
  telehealth: {
    eyebrow: "Cuidado",
    title: "Telesalud en Washington e Idaho.",
    lede: "Las visitas virtuales son horas ordinarias, no una versión menor del trabajo. El consentimiento se firma en el paquete de admisión, no en esta página.",
    p1: "Las sesiones siguen siendo de sesenta minutos. Necesitará un cuarto privado, una conexión estable y estar físicamente en Washington o Idaho para la cita. Las visitas presenciales son en 140 S. Arthur Street, Spokane.",
    p2: "El consentimiento informado de telesalud forma parte del paquete de admisión de IntakeQ. Esta página explica que el consentimiento existe. No lo recaba.",
  },
  insights: {
    eyebrow: "Recursos",
    title: "Educación para pacientes, FMLA y recursos de la consulta.",
    lede: "Lenguaje FMLA, educación para pacientes y recursos de la consulta.",
    crisis: "Si esto es una crisis",
    fmla: "FMLA y el trabajo",
    hubs: [
      { title: "Educación para pacientes", body: "Guías y enlaces para vivir con un sistema nervioso que cambia." },
      { title: "Preparación de comidas", body: "Comida simple y constante. No una marca de bienestar." },
      { title: "Recursos para mujeres", body: "Hormonas, ánimo y una lista corta de puertas que siguen abiertas." },
    ],
    education: {
      title: "Educación y recursos para pacientes.",
      lede: "Un estante breve. Las páginas clínicas de este sitio empiezan por las respuestas; estos enlaces van más lejos.",
      body: "Nada de esto es un diagnóstico ni un plan de tratamiento. Si está en peligro, llame al {emergency}. Para apoyo en crisis en Estados Unidos, llame o envíe un mensaje al {line}.",
      conditions: "Afecciones tratadas en Northform",
      approach: "Los cinco términos",
    },
    recipes: {
      title: "Preparación de comidas, sin teatro.",
      lede: "Comidas simples cuando el apetito, el sueño o la energía están limitados. No una marca de bienestar.",
      items: [
        {
          title: "Avena, sal y fruta",
          body: "Avena de la noche anterior con una pizca de sal, yogur si sienta bien, y la fruta que aguante la semana. El polvo de proteína es opcional. El punto es un desayuno que no pida una decisión a las seis de la mañana.",
        },
        {
          title: "Una bandeja de verduras y una proteína",
          body: "Horno: aceite de oliva, sal, un corte barato o alubias, brócoli o col. Cocine una vez. Coma tres. Nada de esto es un superalimento de marca.",
        },
        {
          title: "Arroz, huevos, verduras",
          body: "Una olla de arroz, una docena de huevos, una bolsa de espinacas congeladas. Cuando no hay apetito, esto sigue siendo comida. Cuando vuelve, añada chile o queso.",
        },
        {
          title: "El caldo de huesos no es una personalidad",
          body: "Caldo, carne que sobró, un cereal. Útil en una semana de mal sueño. No es un protocolo. Si comer es difícil, dígalo en sesión: es dato clínico.",
        },
      ],
    },
    women: {
      title: "Recursos para mujeres.",
      lede: "Hormonas y psiquiatría en la misma sala. Lo perinatal y la perimenopausia no son un apéndice.",
      body: "Cuando los síntomas de salud mental piden terapia hormonal menopáusica, o cuando el embarazo y el posparto descolocan el sueño y el ánimo, esas conversaciones pertenecen a la misma hora que la psiquiatría.",
      perinatal: "Salud mental perinatal",
      depression: "Depresión",
    },
    videos: {
      title: "Vídeos, cuando merezca la pena quedarse quieto.",
      lede: "Los incrustados sustituirán este marcador. Nada se reproduce solo. Nada le sigue hacia una red de anuncios.",
      body: "Charlas seleccionadas y explicaciones breves vivirán aquí como reproductores ordinarios y en pausa: incrustados de YouTube o Vimeo con privacidad reforzada, sin píxeles de marketing en el resto del sitio.",
      slot: "Espacio de vídeo próximamente",
    },
  },
  legal: {
    privacy: {
      eyebrow: "Privacidad",
      title: "Lo que escribe aquí se trata como información de salud.",
      lede: "Un aviso general. El NPP de HIPAA y la política de datos de salud de Washington viven en sus propias URL.",
      p1: "Este sitio público es informativo. No usa cookies de publicidad, Meta Pixel ni Google Analytics. No vendemos la información recogida aquí.",
      p2: "Completar la admisión en el formulario seguro de IntakeQ crea un registro dentro de ese sistema clínico, no en este sitio público. No envíe emergencias por correo.",
      nppLink: "Aviso de prácticas de privacidad HIPAA",
      healthLink: "Política de privacidad de datos de salud del consumidor (Washington)",
      termsLink: "Términos de uso",
    },
    terms: {
      eyebrow: "Legal",
      title: "Términos de uso.",
      lede: "Este sitio es informativo. No crea una relación proveedor–paciente.",
      p1: "Al usar {name} en línea usted acepta que el contenido es educativo, no consejo médico, y no sustituye una evaluación. La admisión segura es la puerta a la atención.",
      p2: "Se usan credenciales exactas en todo el sitio: {provider}. Nada aquí implica un título de médico.",
    },
    npp: {
      eyebrow: "Legal",
      title: "Aviso de prácticas de privacidad.",
      lede: "Mitch aportará el NPP de HIPAA definitivo. Hasta entonces, trate la información clínica como protegida.",
      p1: "Northform Psychiatry publicará un Aviso de prácticas de privacidad coherente con la Norma de Privacidad de HIPAA. Esta página es la URL permanente. El aviso completo sustituye este marcador cuando lo aprueben el abogado y Mitch.",
      p2: "Hasta que ese documento esté en vigor: la información clínica no se usa para marketing, no se vende y no se comenta a la ligera. Completar una admisión (cuando PracticeQ esté enlazado) crea un registro dentro de ese sistema, no en este sitio público.",
    },
    healthData: {
      eyebrow: "Legal",
      title: "Datos de salud del consumidor.",
      lede: "Exigido en Washington, distinto de HIPAA. Mitch aportará la política definitiva. Esta URL ya está enlazada desde la portada y el pie.",
      p1: "La ley My Health My Data de Washington pide una Política de privacidad de datos de salud del consumidor aparte del aviso general. La PHI tratada como entidad cubierta es asunto de HIPAA. Los datos de salud no PHI que un sitio puede recoger de visitantes ocasionales no lo son. Esta página cubre esa segunda categoría.",
      p2: "Este sitio público no usa cookies de publicidad, Meta Pixel ni Google Analytics estándar. No vende datos de salud del consumidor. Cuando llegue la política definitiva, nombrará qué se recoge, por qué, con quién se comparte y cómo retirar el consentimiento.",
      p3: "La admisión por PracticeQ, una vez enlazada, es un sistema clínico, no este sitio de marketing.",
    },
    nondiscrimination: {
      eyebrow: "Legal",
      title: "No discriminación y acceso lingüístico.",
      lede: "Atención sin discriminación. Este sitio está disponible en inglés, español, portugués y francés.",
      p1: "Northform Psychiatry no discrimina por raza, color, origen nacional, sexo, edad o discapacidad, de acuerdo con la Sección 1557 de la Ley de Cuidado de Salud Asequible. Hay ayudas auxiliares y asistencia lingüística.",
    },
  },
  article: {
    how: "Cómo tratamos esto",
    questions: "Preguntas que la gente realmente hace",
    howThis: "Cómo tratamos esto →",
    allInsights: "Todos los recursos",
    reviewed: "Revisado por {name} · Actualizado {date}",
  },
  catalog: catalogEs,
};
