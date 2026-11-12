import { catalogPt } from "./catalog.pt";
import type { Dictionary } from "./en";

export const pt: Dictionary = {
  skip: "Saltar para o conteúdo",
  menu: "Menu",
  close: "Fechar",
  language: "Idioma",
  brand: {
    psychiatry: "Psiquiatria",
  },
  notFound: {
    title: "Esta página não existe.",
    lede: "O endereço pode estar errado, ou a página pode ter sido retirada.",
    home: "Voltar ao início",
  },
  nav: {
    about: "Sobre",
    care: "Cuidado",
    billing: "Honorários",
    contact: "Contacto",
    become: "Tornar-se paciente",
    login: "Entrada de pacientes",
    conditions: "Condições",
    telehealth: "Telessaúde",
    approach: "Abordagem",
    resources: "Recursos",
    privacy: "Privacidade",
    npp: "Aviso HIPAA",
    healthData: "Dados de saúde",
    terms: "Termos",
    nondiscrimination: "Não discriminação",
  },
  footer: {
    hours: "telessaúde em Washington e Idaho",
    crisis:
      "Se isto for uma emergência, ligue {emergency}. Para apoio em crise de saúde mental nos Estados Unidos, ligue ou envie mensagem para {line}.",
    photos:
      "Fotografias de Riverside State Park, Spokane. Ponte suspensa de Dsdugan; Bowl and Pitcher de Benjamin Cody. CC BY-SA 3.0.",
  },
  banner: {
    aria: "Recursos de crise",
    emergency: "Emergência",
    crisisBefore: "Crise de saúde mental: ligue ou envie mensagem para ",
    crisisAfter: ", 24 horas",
    dismiss: "Fechar",
  },
  crisis:
    "Se isto for uma emergência, ligue {emergency}. Para apoio em crise de saúde mental nos Estados Unidos, ligue ou envie mensagem para {line}. Este site não é um serviço de crise.",
  credentials: {
    telehealth: "Telessaúde em Washington e Idaho",
    npiSoon: "NPI em breve",
  },
  hero: {
    tagline: "Sessenta minutos. Um nome. Um plano.",
    h1: "Cuidado psiquiátrico com tempo para o ver.",
    lede: "Avaliação, prescrição e psicoterapia na mesma hora sem pressa — orientadas pela farmacogenómica, com um enfermeiro especialista em psiquiatria em Spokane.",
    facts: [
      { label: "Primeira consulta", value: "75–90 minutos" },
      { label: "Cada seguimento", value: "Sessenta minutos" },
      { label: "Onde", value: "Spokane · telessaúde em Washington e Idaho" },
      { label: "Pagamento", value: "Pagamento particular · Superbill" },
    ],
    treat: "O que tratamos",
    spokane: "Spokane",
    telehealth: "Telessaúde em Washington e Idaho",
  },
  treat: {
    titleBefore: "O que",
    titleMark: "tratamos",
    intro:
      "Plena autoridade prescritiva e um diagnóstico formal, com consultas de sessenta minutos como base.",
    named: "Condições nomeadas, na íntegra →",
    what: "O que é",
    how: "Como tratamos",
    cells: {
      "mood-attention": {
        title: "PHDA, depressão e ansiedade",
        kicker: "Adultos · Universidade",
        what: "Atenção, humor, sono e energia que já não sustentam o dia — em adultos e estudantes.",
        how: "Um nome cuidadoso quando é exacto, depois medicação, estrutura, farmacogenómica e suplementos na mesma hora de sessenta minutos. Não um carimbo e uma receita.",
        link: "Condições nomeadas",
      },
      trauma: {
        title: "Trauma e reintegração",
        kicker: "Ocupacional · Social · Cultural",
        what: "O que resta depois do acontecimento: um trabalho que quebrou a confiança, uma unidade sem pessoal, o regresso do estrangeiro, o deslocamento cultural.",
        how: "Psicoterapia, sono, pistas genómicas e medicação virada para a função — um emprego, uma casa, um amigo — não só o flashback.",
        link: "PTSD e trauma",
      },
      identity: {
        title: "Identidade e valor próprio",
        kicker: "Centrada no sentido",
        what: "Pesadelos, culpa, vergonha, medo, e a pergunta de quem é depois da ruptura.",
        how: "O objectivo não é discutir uma crença. Conversar, regular, e medicina quando é preciso — silêncio suficiente para viver uma vida lá dentro.",
        link: "A abordagem",
      },
      sleep: {
        title: "Sono e turnos",
        kicker: "Noites · Rotações",
        what: "Noites, horários rotativos, e um sistema nervoso que não desce.",
        how: "O sono é tratado na mesma hora que o humor e a atenção — não como uma boutique à parte. A prescrição segue o turno, não um horário de escritório imaginário.",
        link: "Cuidado",
      },
      occupational: {
        title: "Trabalho, baixa e regresso",
        kicker: "Psiquiatria ocupacional",
        what: "A baixa, o regresso ao trabalho, e o papel que uma carreira e um sistema nervoso precisam.",
        how: "Avaliação por preocupações laborais. Relatórios e formulários facturados à hora quando se alongam. Linguagem FMLA quando um emprego tem de ser protegido.",
        link: "FMLA e o trabalho",
      },
      foster: {
        title: "Acolhimento e juventude",
        kicker: "Escala móvel",
        what: "Jovens, incluindo os que estão em acolhimento, e os adultos que os sustentam.",
        how: "Pagamento privado, com escala incluída. Avaliação, medicação e tempo suficiente. Essa conversa acontece de frente — não como um código de desconto.",
        link: "Crianças e adolescentes",
      },
      colleagues: {
        title: "Cuidado para quem cuida",
        kicker: "Confidencial",
        what: "Profissionais de saúde e primeiros respondentes que não podem dar-se ao luxo de uma sala de espera pública.",
        how: "A mesma psiquiatria de sessenta minutos, com a discrição incluída. O tratamento assistido por medicação abre em janeiro de 2027.",
        link: "Tornar-se paciente",
      },
      "service-animal": {
        title: "Avaliações de animal de serviço",
        kicker: "A pedido",
        what: "Uma avaliação psiquiátrica em apoio de um animal de serviço, quando o quadro clínico o pede.",
        how: "A pedido — não um produto num menu. A carta segue a avaliação, não o contrário.",
        link: "Perguntar",
      },
    },
  },
  home: {
    plan: {
      kicker: "Farmacogenómica na hora",
      title: "Um plano médico individualizado",
      lede: "Avaliação psiquiátrica, prescrição e gestão da medicação, guiadas por farmacogenómica e suplementação personalizada. O cuidado começa com uma avaliação de 60 minutos, sem pressa.",
      intro:
        "Um relatório farmacogenómico não é um teste de personalidade nem um protocolo. É um mapa de como os seus genes podem lidar com um medicamento psiquiátrico — usado aqui dentro de uma hora sem pressa, por um clínico cuja formação é a genética.",
      doesKicker: "O que faz",
      doesTitle: "Os mesmos miligramas não são a mesma pessoa.",
      doesBody:
        "A farmacogenómica olha para genes que mudam a forma como o corpo lida com um medicamento. No cuidado psiquiátrico isso significa as enzimas que transformam muitos comprimidos para o humor, a atenção, o trauma ou o sono. Os genes podem fazer essas enzimas trabalhar mais devagar, de forma típica, ou mais depressa. Os mesmos miligramas podem ficar, sentar-se com normalidade, ou ir-se antes de ajudar. Um relatório mapeia essa tendência. Não nomeia o seu diagnóstico, e não escolhe o comprimido.",
      sameMilligrams: "Os mesmos miligramas",
      geneKicker: "O que os genes podem estar a fazer",
      chairKicker: "Como isso pode parecer na cadeira",
      chartSr:
        "Esquema didáctico de farmacogenómica. Os mesmos miligramas de um medicamento psiquiátrico, com três possíveis tratos genéticos: o corpo pode reter a dose, tratá-la de forma típica, ou eliminá-la. Cada um muda quanta medicina pode continuar disponível, e como a hora pode parecer. Não é um resultado de laboratório nem uma receita.",
      fates: {
        hold: {
          label: "Pode ficar",
          gene: "Os genes podem fazer as enzimas trabalhar mais devagar. Pode restar mais medicamento disponível do que os miligramas do frasco sugerem.",
          chair: "Na cadeira isto pode parecer efeitos secundários — névoa, agitação, um medicamento “demasiado forte.” Pode ir com suavidade na dose, ou escolher outro instrumento.",
        },
        typical: {
          label: "Típico",
          gene: "O trato que o relatório chama ordinário. Nada ruidoso. Isso não é permissão para saltar o resto da hora, e não é uma luz verde.",
          chair: "A página está quieta. Ainda tem de dizer se este medicamento pertence — pelos dias, pelo que já falhou, por quem está sentado aqui.",
        },
        clear: {
          label: "Pode não ficar",
          gene: "Os genes podem fazer as enzimas trabalhar mais depressa. O medicamento pode ir-se antes de ter a oportunidade de fazer o trabalho para o qual foi escrito.",
          chair: "Na cadeira isto pode parecer que o medicamento não fez nada. As pessoas mudam de fármaco. A pergunta justa é se alguma vez ficou tempo suficiente para actuar.",
        },
      },
      usesKicker: "Como o usa",
      usesTitle: "A genética está na sua formação. A consulta continua a ser o trabalho.",
      usesBody:
        "Estudou botânica, depois a genética da resiliência, depois medicina funcional, depois psiquiatria. É por isso que o relatório está nesta sala — não como um truque de laboratório enviado de outro lado, nem como um protocolo de uma empresa. Na hora sem pressa lê-o junto do sono, do que já falhou, e de cada outro medicamento no corpo. Esses podem imitar um gene. Usa a página como uma cautela para a dose e a escolha, e para a suplementação no mesmo plano — nunca como um guião que anula quem está sentado aqui.",
      usesItems: [
        {
          title: "Os dias primeiro",
          body: "A função é o objectivo — dormir, trabalhar, uma casa que aguente. O relatório não mede isso. A hora sim.",
        },
        {
          title: "O que já falhou",
          body: "Um medicamento que pareceu não fazer nada, ou um que foi demasiado, pertence à mesa. Lê o relatório junto dessa história, não no lugar dela.",
        },
        {
          title: "O que mais está no corpo",
          body: "Outro comprimido — psiquiátrico ou não — pode abrandar as mesmas enzimas. A idade e o fígado também. Não trata um gene como a única causa.",
        },
      ],
      planItems: [
        {
          title: "Medicação, quando a biologia pede",
          body: "Plena autoridade para prescrever, usada como um instrumento. A dose e a escolha podem informar-se pelo relatório. Um medicamento que já ajuda não está automaticamente errado porque uma página o marcou.",
        },
        {
          title: "Suplementação, quando é a melhor ferramenta",
          body: "Os suplementos personalizados sentam-se na mesma hora — não um boutique ao fundo do corredor, nem um substituto de nomear o que está a acontecer.",
        },
        {
          title: "A hora seguinte continua a durar sessenta minutos",
          body: "O relatório não encurta a consulta, e não substitui falar. O seguimento continua a ser uma hora: medicação e terapia na mesma sala.",
        },
      ],
      standsKicker: "Em que esta hora se distingue",
      standsTitle: "A maior parte do cuidado psiquiátrico nunca abre esta página.",
      commonKicker: "Uma hora psiquiátrica comum",
      commonItems: [
        "Um controlo curto da medicação, e a mesma dose inicial para quase todos.",
        "Meses de ensaio e erro para aprender o que o corpo já sabia.",
        "Um teste genómico, se é que se pede, com o qual ninguém se senta.",
        "Medicina numa sala. Suplementos noutro sítio. Um seguimento que encolhe.",
      ],
      hereKicker: "Esta hora",
      hereItems: [
        "Sessenta minutos, o relatório sobre a secretária, lido por alguém formado para o ler.",
        "Dose e escolha informadas antes do terceiro comprimido falhado.",
        "Medicação e suplementação escritas como um só plano.",
        "O seguimento continua a durar uma hora. Não é uma impressão, e isto não é um protocolo.",
      ],
      clue: "O relatório é uma pista para a hora, nunca o mapa inteiro. Outros fármacos, a idade e o fígado podem imitar um gene. Um medicamento que já funciona não está automaticamente errado porque uma página o marcou.",
      sketch: "Um esquema da farmacogenómica nesta prática. Não é o seu relatório, nem um resultado.",
    },
    practicalKicker: "Antes da primeira hora",
    providerLede:
      "Botânica na Oregon State, investigação em genética, medicina funcional, enfermagem, cuidados críticos e depois psiquiatria de pós-graduação. Está a construir uma consulta privada pequena.",
    aboutMitch: "Sobre Mitch",
    firstVisitTitle: "A primeira consulta dura 75–90 minutos.",
    firstVisitBody:
      "Não será apressado. Uma breve chamada de encaixe é gratuita se quiser ouvir a voz antes de se comprometer. Depois a admissão — e se encaixar, marcamos.",
    whatToExpect: "O que esperar",
    theApproach: "A abordagem",
    cashTitle: "Pagamento particular, de propósito. Superbill incluído.",
    cashBody:
      "O pagamento particular é uma escolha, para que a hora lhe pertença. Depois de uma consulta há um superbill se quiser procurar reembolso fora da rede.",
    rates: "Honorários",
    telehealthBand:
      "As consultas virtuais são horas ordinárias de sessenta minutos. Precisa de estar em Washington ou Idaho.",
    telehealthLink: "Telessaúde →",
  },
  cta: {
    title: "Torne-se paciente hoje.",
    body: "Quando estiver pronto, comece pela admissão.",
    billing: "Honorários",
  },
  about: {
    eyebrow: "Sobre",
    title: "Mitch Corbet, PMHNP-BC.",
    lede: "{name} está a construir a Northform como uma consulta privada pequena — cuidado psiquiátrico, farmacogenómica e suplementação à medida.",
    p1: "Mitch é o mais velho de quatro filhos de um pai ou mãe sozinho que lutou contra a adição e o fantasma do trauma geracional, e que mesmo assim tentou amar. Após a perda dos direitos parentais, os irmãos foram colocados em lares de acolhimento separados.",
    p2: "Em adolescente reuniu-se com os irmãos e foi adoptado por uma família amorosa. Essa sequência — ruptura, separação, regresso — continua a informar como se senta com pessoas cuja confiança em si, nos outros ou na vida foi ferida.",
    p3: "Formou-se na Oregon State University depois de estudar botânica, depois trabalhou internacionalmente na genética da resiliência. Voltou aos Estados Unidos para aprender medicina funcional em Portland, concluiu enfermagem na University of Miami, formou-se em cuidados críticos na University of Kentucky e ensinou esse trabalho a nível nacional. O pós-graduação seguiu-se na Gonzaga University.",
    p4: "O trauma, a ansiedade e a depressão grave stressam o sistema nervoso. O cuidado psiquiátrico, a farmacogenómica e os suplementos à medida são usados em conjunto para restaurar a regulação. O objectivo é a função: sono, trabalho e relações que se aguentem.",
    schools: {
      osu: { place: "Oregon State", note: "Botânica; investigação genética" },
      miami: { place: "Miami · Kentucky", note: "Enfermagem, cuidados críticos" },
      gonzaga: { place: "Gonzaga", note: "Psiquiatria de pós-graduação" },
    },
    portrait: "Retrato em breve",
    portraitNote: "As fotografias profissionais de Mitch ficarão aqui.",
  },
  start: {
    eyebrow: "Novos pacientes",
    title: "Como começar.",
    lede: "Escolha uma consulta abaixo e preencha a admissão segura.",
    begin: "Começar admissão",
    ready: "Quando estiver pronto",
    beginHeading: "Comece a admissão.",
    loading: "Carregando com segurança…",
    beginReady:
      "O formulário abre numa janela segura. Dê-lhe a mesma atenção que daria à primeira sessão.",
    beginSoon:
      "O formulário seguro abre neste botão quando o link estiver activo. O correio é para logística, não um substituto de uma avaliação.",
    meta: "Pagamento particular · Escala móvel · Superbill após uma consulta",
    rates: "Tarifas e facturação",
    telehealth: "Telessaúde em Washington e Idaho",
    chapters: [
      {
        title: "Uma chamada breve, se quiser.",
        body: "Uma chamada de encaixe de 10–15 minutos é gratuita. Ouça a voz. Nada é devido por ler esta página.",
      },
      {
        title: "A primeira hora dura 75–90 minutos.",
        body: "História, um nome cuidadoso quando é exacto, e um plano. As consultas de seguimento são de sessenta minutos — medicação e terapia na mesma hora. Para vídeo, precisa de uma sala privada, uma ligação estável e estar fisicamente em Washington ou Idaho.",
      },
      {
        title: "A admissão, depois marcamos.",
        body: "Um formulário seguro é como a consulta conhece quem é antes da sessão. Se encaixar, ouvirá os próximos passos. Se não, a porta fecha-se em silêncio.",
      },
    ],
  },
  faq: {
    heading: "Perguntas antes de começar",
    items: [
      {
        q: "O que acontece na primeira consulta?",
        a: "A primeira avaliação dura 75–90 minutos. As consultas de seguimento são de sessenta minutos como duração ordinária — medicação e terapia na mesma hora. Não será apressado.",
      },
      {
        q: "Aceitam seguro?",
        a: "Ainda não. O cuidado é de pagamento particular. Pode aplicar-se uma escala móvel. Depois de uma consulta, um superbill está disponível para procurar reembolso fora da rede. Isso não é garantia de pagamento.",
      },
      {
        q: "Posso ser visto por vídeo?",
        a: "Sim, se estiver fisicamente em Washington ou Idaho para a consulta. As sessões continuam a ser de sessenta minutos. Precisará de uma sala privada e de uma ligação estável.",
      },
      {
        q: "O que partilho é confidencial?",
        a: "Sim. A informação clínica é tratada como informação de saúde protegida. Completar uma admissão cria um registo no sistema da consulta, não neste site público.",
      },
      {
        q: "Há custo para ver se encaixa?",
        a: "Uma breve chamada de encaixe de 10–15 minutos custa $0. Nada é devido por ler o site.",
      },
    ],
  },
  patients: {
    eyebrow: "Pacientes atuais",
    title: "Entrada de pacientes.",
    lede: "Se já recebe cuidado aqui, esta é a porta de regresso.",
    body: "Os pacientes novos começam em Tornar-se paciente. Os pacientes atuais podem entrar abaixo.",
    login: "Entrar",
    soon: "A ligação do portal de pacientes ficará aqui. Até lá, escreva à consulta para a logística de pacientes atuais.",
  },
  contact: {
    eyebrow: "Contacto",
    title: "Contacto.",
    lede: "O correio e o telefone são para logística. Os novos pacientes começam com a admissão.",
    email: "Correio",
    phone: "Telefone",
    fax: "Fax",
    location: "Localização",
    hours: "Horário",
    begin: "Como começar",
    beginBody: "Com sede em Spokane. Telessaúde em Washington e Idaho.",
    hoursValue: "Seg–Sáb · 7:00–19:00 · telessaúde em Washington e Idaho",
  },
  billing: {
    eyebrow: "Honorários",
    title: "Pagamento particular, com preços claros.",
    lede: "A Northform é de pagamento particular por agora e ainda não está em rede com planos de seguro. Há escala móvel, e receberá um Good Faith Estimate por escrito antes da primeira consulta.",
    eval: "Avaliação abrangente",
    baseline: "A base Northform",
    minutes: "75–90 minutos",
    followMinutes: "60 minutos",
    hourNote: "medicação e terapia na mesma hora",
    fitCall:
      "Uma breve chamada de encaixe custa $0. Depois de uma consulta, um superbill está disponível se quiser procurar reembolso fora da rede — não é garantia de pagamento.",
    standard: "Tarifas padrão",
    why: "Porquê pagamento particular",
    superbill: "Superbill",
    insurance: "Seguro",
    sliding: "Escala móvel e planos de pagamento",
    gfe: "Good Faith Estimate",
    tableService: "Serviço",
    tableRate: "Tarifa de pagamento particular",
    tableIncludes: "O que inclui",
    ratesNote:
      "Tarifas de pagamento particular. A escala móvel pode baixar estes montantes. Análises facturadas à parte. Um Good Faith Estimate é escrito antes da primeira consulta — esta página não é esse estimado.",
    whyBody:
      "O pagamento particular é como a sessão permanece bastante longa — diagnóstico, prescrição e um plano — em vez de um incremento de doze minutos de um seguro. Não é exigido seguro para ser visto aqui.",
    superbillBody:
      "Depois de uma consulta, a Northform pode fornecer um superbill: um extracto detalhado que pode enviar à seguradora para reembolso fora da rede. O reembolso é entre si e o plano. Um superbill não é garantia de pagamento.",
    insuranceNone:
      "Ainda não há planos contratados. Até que os nomes sejam listados, assuma pagamento particular. Pode mesmo assim usar um superbill com um benefício fora da rede se o seu plano o tiver.",
    slidingBody:
      "Há escala móvel para quem se qualificar. Os planos de pagamento podem ser acordados. Pais de acolhimento e jovens são vistos em pagamento particular, com escala. Essa conversa acontece de frente — não como um código de desconto.",
    gfeBody:
      "Sob a No Surprises Act, os pacientes de pagamento particular e sem seguro têm direito a um Good Faith Estimate escrito dos encargos esperados antes de o cuidado começar. Peça; a Northform irá fornecê-lo. A calculadora acima é para planear. Não é esse estimado.",
    estimateHeading: "Estimativa rápida",
    estimateFirst: "Primeira consulta",
    estimateFollow: "Consultas de seguimento",
    estimateCount: "Número de seguimentos",
    estimateTotal: "Total estimado de pagamento particular",
    estimateNote:
      "Apenas para planear. Isto não é um Good Faith Estimate — o seu é escrito antes da primeira consulta. Análises são facturadas à parte, e uma escala móvel pode baixar estes montantes.",
  },
  care: {
    eyebrow: "Cuidado",
    title: "Como se usa a hora.",
    lede: "Diagnóstico, prescrição e psicoterapia na mesma consulta de sessenta minutos.",
    diagnosisTitle: "Diagnóstico",
    diagnosisBody:
      "Uma avaliação cuidadosa e, quando se justifica, um diagnóstico formal. Os nomes podem organizar o sofrimento. São oferecidos como ferramentas, não como identidades para viver dentro para sempre.",
    prescribingTitle: "Prescrição",
    prescribingBody:
      "Plena autoridade prescritiva. Medicação quando a biologia o pede; suplementos e terapêutica herbal quando são o melhor instrumento.",
    therapyTitle: "Psicoterapia, sessenta minutos",
    therapyBody:
      "A terapia de conversa não é um extra. As sessões são de sessenta minutos como duração ordinária do trabalho — não uma admissão longa seguida de uma fábrica de checagens de trinta minutos.",
    slidingTitle: "Escala móvel",
    slidingBody:
      "Há escala móvel e planos de pagamento para quem se qualificar. Pais de acolhimento e jovens são vistos em pagamento particular, com escala incluída. Essa conversa acontece de frente.",
    ratesLink: "Tarifas, Superbill e um Good Faith Estimate →",
    catalogNote: "Cada condição nomeada tem uma página completa.",
  },
  conditions: {
    eyebrow: "Condições",
    title: "Condições nomeadas.",
    lede: "Depressão, ansiedade, PHDA, bipolaridade, PTSD e uso de opiáceos — cada uma com uma página completa.",
    homeNote: "O sono, a psiquiatria ocupacional e o acolhimento estão no catálogo da página inicial.",
    treatLink: "O que tratamos",
  },
  approach: {
    eyebrow: "Abordagem",
    title: "Farmacogenómica, suplementação e psiquiatria convencional numa só consulta.",
    lede: "O trauma, a PHDA e as perturbações do humor são tratados com insight genético, suplementos dirigidos e medicamentos padrão quando estão indicados.",
    intro: "Estas são as palavras que esta consulta usa para o seu próprio trabalho.",
    terms: [
      {
        name: "Funcional",
        body: "Psicoterapia e, quando serve, terapêutica herbal — orotato de lítio em vez de carbonato de lítio para o humor, péptidos como Semax, ou fármacos se for preciso. Funcional significa usar métodos naturais quando servem, sem recusar a medicina quando é necessária.",
      },
      {
        name: "Autodeterminação",
        body: "O direito de escolher o seu próprio caminho, mesmo que um profissional discorde. O cuidado é colaborativo. A discordância não é um fracasso da relação; atropelar sim.",
      },
      {
        name: "Apoio de pares",
        body: "Quem já esteve lá tem um tipo de perícia que um médico não tem. A experiência vivida não é uma credencial para agitar. É uma razão para ouvir de outro modo.",
      },
      {
        name: "Objectivos holísticos",
        body: "A pergunta não é só se as alucinações desapareceram. Tem um emprego, uma casa e um amigo? A função na vida diária é a medida.",
      },
      {
        name: "Cuidado de si",
        body: "Escolhas e acções que o devolvem a si e o alinham com quem é — não uma lista de rituais para uma audiência.",
      },
    ],
  },
  telehealth: {
    eyebrow: "Cuidado",
    title: "Telessaúde em Washington e Idaho.",
    lede: "As consultas virtuais são horas ordinárias, não uma versão menor do trabalho. O consentimento assina-se no pacote de admissão, não nesta página.",
    p1: "As sessões continuam a ser de sessenta minutos. Precisará de uma sala privada, uma ligação estável e estar fisicamente em Washington ou Idaho para a consulta. As consultas presenciais são em 140 S. Arthur Street, Spokane.",
    p2: "O consentimento informado de telessaúde faz parte do pacote de admissão do IntakeQ. Esta página explica que o consentimento existe. Não o recolhe.",
  },
  insights: {
    eyebrow: "Recursos",
    title: "Educação para pacientes, FMLA e recursos da consulta.",
    lede: "Linguagem FMLA, educação para pacientes e recursos da consulta.",
    crisis: "Se isto for uma crise",
    fmla: "FMLA e o trabalho",
    hubs: [
      { title: "Educação para pacientes", body: "Guias e ligações para viver com um sistema nervoso que muda." },
      { title: "Preparação de refeições", body: "Comida simples e constante. Não uma marca de bem-estar." },
      { title: "Recursos para mulheres", body: "Hormonas, humor e uma lista curta de portas que se mantêm abertas." },
    ],
    education: {
      title: "Educação e recursos para pacientes.",
      lede: "Uma prateleira breve. As páginas clínicas deste site começam pelas respostas; estes links vão mais longe.",
      body: "Nada disto é um diagnóstico ou um plano de tratamento. Se estiver em perigo, ligue {emergency}. Para apoio em crise nos Estados Unidos, ligue ou envie mensagem para {line}.",
      conditions: "Afecções tratadas na Northform",
      approach: "Os cinco termos",
    },
    recipes: {
      title: "Preparação de refeições, sem teatro.",
      lede: "Refeições simples quando o apetite, o sono ou a energia estão limitados. Não uma marca de bem-estar.",
      items: [
        {
          title: "Aveia, sal e fruta",
          body: "Aveia da véspera com uma pitada de sal, iogurte se sentar bem, e a fruta que aguente a semana. O pó de proteína é opcional. O ponto é um pequeno-almoço que não peça uma decisão às seis da manhã.",
        },
        {
          title: "Um tabuleiro de legumes e uma proteína",
          body: "Forno: azeite, sal, um corte barato ou feijão, brócolos ou couve. Cozinhe uma vez. Coma três. Nada disto é um superalimento de marca.",
        },
        {
          title: "Arroz, ovos, verdes",
          body: "Uma panela de arroz, uma dúzia de ovos, um saco de espinafres congelados. Quando o apetite desaparece, isto continua a ser comida. Quando volta, acrescente malagueta ou queijo.",
        },
        {
          title: "Caldo de ossos não é uma personalidade",
          body: "Caldo, carne que sobrou, um cereal. Útil numa semana de mau sono. Não é um protocolo. Se comer for difícil, diga-o na sessão — é dado clínico.",
        },
      ],
    },
    women: {
      title: "Recursos para mulheres.",
      lede: "Hormonas e psiquiatria na mesma sala. O perinatal e a perimenopausa não são um apêndice.",
      body: "Quando os sintomas de saúde mental pedem terapêutica hormonal menopáusica, ou quando a gravidez e o pós-parto desarrumam o sono e o humor, essas conversas pertencem à mesma hora que a psiquiatria.",
      perinatal: "Saúde mental perinatal",
      depression: "Depressão",
    },
    videos: {
      title: "Vídeos, quando valer a pena ficar quieto.",
      lede: "Os embeds substituirão este marcador. Nada reproduz sozinho. Nada o segue para uma rede de anúncios.",
      body: "Conversas escolhidas e explicações curtas viverão aqui como leitores ordinários e em pausa — embeds do YouTube ou Vimeo com privacidade reforçada, sem píxeis de marketing no resto do site.",
      slot: "Espaço de vídeo em breve",
    },
  },
  legal: {
    privacy: {
      eyebrow: "Privacidade",
      title: "O que escreve aqui é tratado como informação de saúde.",
      lede: "Um aviso geral. O NPP da HIPAA e a política de dados de saúde de Washington vivem nas suas próprias URLs.",
      p1: "Este site público é informativo. Não usa cookies de publicidade, Meta Pixel nem Google Analytics. Não vendemos a informação recolhida aqui.",
      p2: "Completar a admissão no formulário seguro do IntakeQ cria um registo dentro desse sistema clínico — não neste site público. Não envie emergências por correio.",
      nppLink: "Aviso de práticas de privacidade HIPAA",
      healthLink: "Política de privacidade de dados de saúde do consumidor (Washington)",
      termsLink: "Termos de utilização",
    },
    terms: {
      eyebrow: "Legal",
      title: "Termos de utilização.",
      lede: "Este site é informativo. Não cria uma relação prestador–paciente.",
      p1: "Ao usar {name} em linha, concorda que o conteúdo é educativo, não conselho médico, e não substitui uma avaliação. A admissão segura é a porta para o cuidado.",
      p2: "Usam-se credenciais exactas em todo o site: {provider}. Nada aqui implica um título de médico.",
    },
    npp: {
      eyebrow: "Legal",
      title: "Aviso de práticas de privacidade.",
      lede: "Mitch fornecerá o NPP da HIPAA definitivo. Até lá, trate a informação clínica como protegida.",
      p1: "A Northform Psychiatry publicará um Aviso de práticas de privacidade coerente com a Norma de Privacidade da HIPAA. Esta página é a URL permanente. O aviso completo substitui este marcador quando o advogado e Mitch o aprovarem.",
      p2: "Até esse documento estar em vigor: a informação clínica não é usada para marketing, não é vendida e não se discute à ligeira. Completar uma admissão (quando o PracticeQ estiver ligado) cria um registo dentro desse sistema — não neste site público.",
    },
    healthData: {
      eyebrow: "Legal",
      title: "Dados de saúde do consumidor.",
      lede: "Exigido em Washington, distinto da HIPAA. Mitch fornecerá a política definitiva. Esta URL já está ligada a partir da página inicial e do rodapé.",
      p1: "A lei My Health My Data de Washington pede uma Política de privacidade de dados de saúde do consumidor separada do aviso geral. PHI tratada como entidade coberta é matéria da HIPAA. Dados de saúde não PHI que um site pode recolher de visitantes ocasionais não o são. Esta página cobre essa segunda categoria.",
      p2: "Este site público não corre cookies de publicidade, Meta Pixel nem Google Analytics padrão. Não vende dados de saúde do consumidor. Quando a política definitiva chegar, nomeará o que se recolhe, porquê, com quem se partilha e como retirar o consentimento.",
      p3: "A admissão pelo PracticeQ, uma vez ligada, é um sistema clínico — não este site de marketing.",
    },
    nondiscrimination: {
      eyebrow: "Legal",
      title: "Não discriminação e acesso linguístico.",
      lede: "Cuidado sem discriminação. Este site está disponível em inglês, espanhol, português e francês.",
      p1: "A Northform Psychiatry não discrimina com base em raça, cor, origem nacional, sexo, idade ou deficiência, em conformidade com a Secção 1557 da Affordable Care Act. Auxílios auxiliares e assistência linguística estão disponíveis.",
    },
  },
  article: {
    how: "Como tratamos isto",
    questions: "Perguntas que as pessoas realmente fazem",
    howThis: "Como tratamos isto →",
    allInsights: "Todos os recursos",
    reviewed: "Revisto por {name} · Actualizado {date}",
  },
  catalog: catalogPt,
};
