import { catalogFr } from "./catalog.fr";
import type { Dictionary } from "./en";

export const fr: Dictionary = {
  skip: "Aller au contenu",
  menu: "Menu",
  close: "Fermer",
  language: "Langue",
  brand: {
    psychiatry: "Psychiatrie",
  },
  notFound: {
    title: "Cette page n’existe pas.",
    lede: "L’adresse peut être fausse, ou la page peut avoir été retirée.",
    home: "Retour à l’accueil",
  },
  nav: {
    about: "À propos",
    care: "Soins",
    billing: "Honoraires",
    contact: "Contact",
    become: "Devenir patient",
    login: "Espace patient",
    conditions: "Affections",
    telehealth: "Télésanté",
    approach: "Approche",
    resources: "Ressources",
    privacy: "Confidentialité",
    npp: "Avis HIPAA",
    healthData: "Données de santé",
    terms: "Conditions",
    nondiscrimination: "Non-discrimination",
  },
  footer: {
    hours: "télésanté dans les États de Washington et de l’Idaho",
    crisis:
      "S’il s’agit d’une urgence, appelez le {emergency}. Pour un soutien en crise de santé mentale aux États-Unis, appelez ou envoyez un message au {line}.",
    photos:
      "Photographies de Riverside State Park, Spokane. Pont suspendu par Dsdugan ; Bowl and Pitcher par Benjamin Cody. CC BY-SA 3.0.",
  },
  banner: {
    aria: "Ressources de crise",
    emergency: "Urgence",
    crisisBefore: "Crise de santé mentale : appelez ou envoyez un texto au ",
    crisisAfter: ", 24 h/24",
    dismiss: "Fermer",
  },
  crisis:
    "S’il s’agit d’une urgence, appelez le {emergency}. Pour un soutien en crise de santé mentale aux États-Unis, appelez ou envoyez un message au {line}. Ce site n’est pas un service de crise.",
  credentials: {
    telehealth: "Télésanté dans les États de Washington et de l’Idaho",
    npiSoon: "NPI bientôt",
  },
  hero: {
    tagline: "Soixante minutes. Un nom. Un plan.",
    h1: "Des soins psychiatriques avec le temps de vous voir.",
    lede: "Évaluation, prescription et psychothérapie dans la même heure, sans hâte — guidées par la pharmacogénomique, avec un infirmier praticien en psychiatrie à Spokane.",
    facts: [
      { label: "Première visite", value: "75–90 minutes" },
      { label: "Chaque suivi", value: "Soixante minutes" },
      { label: "Où", value: "Spokane · télésanté dans les États de Washington et de l’Idaho" },
      { label: "Paiement", value: "Paiement privé · Superbill" },
    ],
    treat: "Ce que nous traitons",
    spokane: "Spokane",
    telehealth: "Télésanté dans les États de Washington et de l’Idaho",
  },
  treat: {
    titleBefore: "Ce que nous",
    titleMark: "traitons",
    intro:
      "Pleine autorité de prescription et un diagnostic formel, avec des consultations de soixante minutes comme base.",
    named: "Affections nommées, en détail →",
    what: "De quoi il s’agit",
    how: "Comment nous le traitons",
    cells: {
      "mood-attention": {
        title: "TDAH, dépression et anxiété",
        kicker: "Adultes · Université",
        what: "Attention, humeur, sommeil et énergie qui ne portent plus la journée — chez les adultes et les étudiants.",
        how: "Un nom soigneux lorsqu’il est exact, puis médication, structure, pharmacogénétique et compléments dans la même heure de soixante minutes. Pas un tampon et un renouvellement.",
        link: "Affections nommées",
      },
      trauma: {
        title: "Trauma et réintégration",
        kicker: "Occupationnel · Social · Culturel",
        what: "Ce qui reste après l’événement : un travail qui a brisé la confiance, une unité en sous-effectif, le retour de l’étranger, le déplacement culturel.",
        how: "Psychothérapie, sommeil, pistes génomiques et médication tournée vers la fonction — un emploi, un foyer, un ami — pas seulement le flashback.",
        link: "TSPT et trauma",
      },
      identity: {
        title: "Identité et valeur de soi",
        kicker: "Centrée sur le sens",
        what: "Cauchemars, culpabilité, honte, peur, et la question de qui vous êtes après la rupture.",
        how: "Le but n’est pas de discuter une croyance. Parler, réguler, et de la médecine au besoin — assez de calme pour vivre une vie à l’intérieur.",
        link: "L’approche",
      },
      sleep: {
        title: "Sommeil et quarts",
        kicker: "Nuits · Rotations",
        what: "Les nuits, les horaires rotatifs, et un système nerveux qui ne descend pas.",
        how: "Le sommeil est traité dans la même heure que l’humeur et l’attention — pas comme une boutique à part. La prescription suit le quart, pas un horaire de bureau imaginaire.",
        link: "Soins",
      },
      occupational: {
        title: "Travail, congé et retour",
        kicker: "Psychiatrie occupationnelle",
        what: "Le congé, le retour au travail, et le papier qu’une carrière et un système nerveux ont besoin.",
        how: "Évaluation pour des préoccupations professionnelles. Rapports et formulaires facturés à l’heure lorsqu’ils s’allongent. Langage FMLA lorsqu’un poste doit être protégé.",
        link: "FMLA et le travail",
      },
      foster: {
        title: "Accueil et jeunesse",
        kicker: "Échelle mobile",
        what: "Les jeunes, y compris ceux en accueil, et les adultes qui les soutiennent.",
        how: "Paiement privé, avec échelle incluse. Évaluation, médication et assez de temps. Cette conversation a lieu de face — pas comme un code de réduction.",
        link: "Enfants et adolescents",
      },
      colleagues: {
        title: "Soins pour ceux qui soignent",
        kicker: "Confidentiel",
        what: "Professionnels de santé et premiers intervenants qui ne peuvent pas se permettre une salle d’attente publique.",
        how: "La même psychiatrie de soixante minutes, avec la discrétion incluse. Le traitement assisté par médication ouvre en janvier 2027.",
        link: "Devenir patient",
      },
      "service-animal": {
        title: "Évaluations d’animal d’assistance",
        kicker: "Sur demande",
        what: "Une évaluation psychiatrique en soutien d’un animal d’assistance, lorsque le tableau clinique le demande.",
        how: "Sur demande — pas un produit dans un menu. La lettre suit l’évaluation, pas l’inverse.",
        link: "Demander",
      },
    },
  },
  home: {
    plan: {
      kicker: "Pharmacogénomique dans l’heure",
      title: "Un plan médical individualisé",
      lede: "Évaluation psychiatrique, prescription et gestion des médicaments, guidées par la pharmacogénomique et une supplémentation personnalisée. Les soins commencent par une évaluation de 60 minutes, sans précipitation.",
      intro:
        "Un rapport pharmacogénomique n’est pas un test de personnalité, ni un protocole. C’est une carte de la façon dont vos gènes peuvent gérer un médicament psychiatrique — utilisée ici dans une heure sans hâte, par un clinicien dont la formation est la génétique.",
      doesKicker: "Ce qu’elle fait",
      doesTitle: "Les mêmes milligrammes ne sont pas la même personne.",
      doesBody:
        "La pharmacogénomique regarde les gènes qui changent la façon dont le corps gère un médicament. En soins psychiatriques, cela veut dire les enzymes qui transforment beaucoup de comprimés pour l’humeur, l’attention, le trauma ou le sommeil. Les gènes peuvent faire travailler ces enzymes plus lentement, de façon typique, ou plus vite. Les mêmes milligrammes peuvent rester, siéger ordinairement, ou partir avant d’aider. Un rapport cartographie cette tendance. Il ne nomme pas votre diagnostic, et il ne choisit pas le comprimé.",
      sameMilligrams: "Les mêmes milligrammes",
      geneKicker: "Ce que les gènes peuvent être en train de faire",
      chairKicker: "À quoi cela peut ressembler dans la chaise",
      chartSr:
        "Schéma pédagogique de la pharmacogénomique. Les mêmes milligrammes d’un médicament psychiatrique, avec trois prises en charge génétiques possibles : le corps peut retenir la dose, la gérer de façon typique, ou l’éliminer. Chacune change combien de médicament peut encore être disponible, et à quoi l’heure peut ressembler. Ce n’est pas un résultat de laboratoire, ni une ordonnance.",
      fates: {
        hold: {
          label: "Peut rester",
          gene: "Les gènes peuvent faire travailler les enzymes plus lentement. Plus de médicament peut rester disponible que ne le suggèrent les milligrammes sur le flacon.",
          chair: "Dans la chaise, cela peut ressembler à des effets indésirables — brouillard, agitation, un médicament « trop fort ». Il peut y aller doucement sur la dose, ou choisir un autre instrument.",
        },
        typical: {
          label: "Typique",
          gene: "La prise en charge que le rapport appelle ordinaire. Rien de bruyant. Ce n’est pas une permission de sauter le reste de l’heure, et ce n’est pas un feu vert.",
          chair: "La page est calme. Il doit encore dire si ce médicament appartient — d’après les jours, d’après ce qui a déjà échoué, d’après la personne assise ici.",
        },
        clear: {
          label: "Peut ne pas rester",
          gene: "Les gènes peuvent faire travailler les enzymes plus vite. Le médicament peut partir avant d’avoir la chance de faire le travail pour lequel il a été écrit.",
          chair: "Dans la chaise, cela peut ressembler à un médicament qui n’a rien fait. Les gens changent de molécule. La question juste est de savoir si cela a jamais assez tenu pour agir.",
        },
      },
      usesKicker: "Comment il s’en sert",
      usesTitle: "La génétique est dans sa formation. La visite reste le travail.",
      usesBody:
        "Il a étudié la botanique, puis la génétique de la résilience, puis la médecine fonctionnelle, puis la psychiatrie. C’est pourquoi le rapport est dans cette pièce — pas comme un tour de laboratoire envoyé d’ailleurs, et pas comme un protocole d’entreprise. Dans l’heure sans hâte, il le lit à côté du sommeil, de ce qui a déjà échoué, et de chaque autre médicament dans le corps. Ceux-là peuvent imiter un gène. Il se sert de la page comme d’une prudence pour la dose et le choix, et pour la supplémentation dans le même plan — jamais comme un script qui écrase la personne assise ici.",
      usesItems: [
        {
          title: "Les jours d’abord",
          body: "La fonction est le but — dormir, travailler, un foyer qui tient. Le rapport ne mesure pas cela. L’heure, si.",
        },
        {
          title: "Ce qui a déjà échoué",
          body: "Un médicament qui a semblé ne rien faire, ou un qui était trop, appartient à la table. Il lit le rapport à côté de cette histoire, pas à sa place.",
        },
        {
          title: "Ce qui d’autre est dans le corps",
          body: "Un autre comprimé — psychiatrique ou non — peut ralentir les mêmes enzymes. L’âge et le foie aussi. Il ne traite pas un gène comme la seule cause.",
        },
      ],
      planItems: [
        {
          title: "Médicament, lorsque la biologie le demande",
          body: "Pleine autorité de prescrire, utilisée comme un instrument. La dose et le choix peuvent s’informer du rapport. Un médicament qui aide déjà n’est pas automatiquement faux parce qu’une page l’a marqué.",
        },
        {
          title: "Supplémentation, lorsqu’elle est le meilleur outil",
          body: "Les compléments personnalisés s’assoient dans la même heure — pas une boutique au bout du couloir, et pas un substitut à nommer ce qui se passe vraiment.",
        },
        {
          title: "L’heure suivante reste soixante minutes",
          body: "Le rapport n’abrège pas la visite, et il ne remplace pas la parole. Le suivi reste une heure : médicament et thérapie dans la même pièce.",
        },
      ],
      standsKicker: "En quoi cette heure se distingue",
      standsTitle: "La plupart des soins psychiatriques n’ouvrent jamais cette page.",
      commonKicker: "Une heure psychiatrique ordinaire",
      commonItems: [
        "Un court contrôle de médicaments, et la même dose de départ pour presque tout le monde.",
        "Des mois d’essais et d’erreurs pour apprendre ce que le corps savait déjà.",
        "Un test génomique, s’il est même demandé, avec lequel personne ne s’assoit.",
        "Le médicament dans une pièce. Les compléments ailleurs. Un suivi qui rétrécit.",
      ],
      hereKicker: "Cette heure",
      hereItems: [
        "Soixante minutes, le rapport sur le bureau, lu par quelqu’un formé à le lire.",
        "Dose et choix informés avant le troisième comprimé raté.",
        "Médicament et supplémentation écrits comme un seul plan.",
        "Le suivi reste une heure. Vous n’êtes pas une impression, et ceci n’est pas un protocole.",
      ],
      clue: "Le rapport est un indice pour l’heure, jamais toute la carte. D’autres médicaments, l’âge et le foie peuvent imiter un gène. Un médicament qui aide déjà n’est pas automatiquement faux parce qu’une page l’a marqué.",
      sketch: "Un schéma de la pharmacogénomique dans cette pratique. Pas votre rapport, et pas un résultat.",
    },
    practicalKicker: "Avant la première heure",
    providerLede:
      "Botanique à Oregon State, recherche en génétique, médecine fonctionnelle, soins infirmiers, soins critiques, puis psychiatrie de troisième cycle. Il construit un petit cabinet privé.",
    aboutMitch: "À propos de Mitch",
    firstVisitTitle: "La première visite dure 75–90 minutes.",
    firstVisitBody:
      "Vous ne serez pas pressé. Un bref appel d’adéquation est gratuit si vous voulez entendre la voix avant de vous engager. Puis l’admission — et si cela convient, nous prenons rendez-vous.",
    whatToExpect: "À quoi s’attendre",
    theApproach: "L’approche",
    cashTitle: "Paiement privé, à dessein. Superbill compris.",
    cashBody:
      "Le paiement privé est un choix, pour que l’heure vous appartienne. Un superbill est disponible après une visite si vous souhaitez chercher un remboursement hors réseau.",
    rates: "Honoraires",
    telehealthBand:
      "Les visites virtuelles sont des heures ordinaires de soixante minutes. Vous devez être dans l’État de Washington ou de l’Idaho.",
    telehealthLink: "Télésanté →",
  },
  cta: {
    title: "Devenez patient aujourd’hui.",
    body: "Lorsque vous êtes prêt, commencez par l’admission.",
    billing: "Honoraires",
  },
  about: {
    eyebrow: "À propos",
    title: "Mitch Corbet, PMHNP-BC.",
    lede: "{name} construit Northform comme un petit cabinet privé — soins psychiatriques, pharmacogénétique et supplémentation sur mesure.",
    p1: "Mitch est l’aîné de quatre enfants d’un parent seul qui a lutté contre la dépendance et le fantôme du trauma générationnel, et qui a tout de même tenté d’aimer. Après la perte de l’autorité parentale, les frères et sœurs ont été placés dans des foyers d’accueil distincts.",
    p2: "Adolescent, il a retrouvé ses frères et sœurs et a été adopté par une famille aimante. Cette séquence — rupture, séparation, retour — continue d’informer la façon dont il s’assoit avec des personnes dont la confiance en soi, en autrui ou en la vie a été blessée.",
    p3: "Il a obtenu son diplôme d’Oregon State University après des études de botanique, puis a travaillé à l’international sur la génétique de la résilience. Il est revenu aux États-Unis pour apprendre la médecine fonctionnelle à Portland, a terminé les soins infirmiers à l’University of Miami, s’est formé aux soins critiques à l’University of Kentucky et a enseigné ce travail à l’échelle nationale. Le troisième cycle a suivi à Gonzaga University.",
    p4: "Le trauma, l’anxiété et la dépression sévère stressent le système nerveux. Les soins psychiatriques, la pharmacogénétique et les compléments sur mesure sont utilisés ensemble pour restaurer la régulation. L’objectif est la fonction : sommeil, travail et relations qui tiennent.",
    schools: {
      osu: { place: "Oregon State", note: "Botanique ; recherche génétique" },
      miami: { place: "Miami · Kentucky", note: "Soins infirmiers, soins critiques" },
      gonzaga: { place: "Gonzaga", note: "Psychiatrie de troisième cycle" },
    },
    portrait: "Portrait bientôt",
    portraitNote: "Les photographies professionnelles de Mitch iront ici.",
  },
  start: {
    eyebrow: "Nouveaux patients",
    title: "Comment commencer.",
    lede: "Choisissez un rendez-vous ci-dessous et remplissez l’admission sécurisée.",
    begin: "Commencer l’admission",
    ready: "Lorsque vous êtes prêt",
    beginHeading: "Commencez l’admission.",
    loading: "Chargement sécurisé…",
    beginReady:
      "Le formulaire s’ouvre dans une fenêtre sécurisée. Accordez-lui la même attention qu’à la première séance.",
    beginSoon:
      "Le formulaire sécurisé s’ouvre depuis ce bouton lorsque le lien est actif. Le courriel est pour la logistique, pas un substitut d’une évaluation.",
    meta: "Paiement privé · Échelle mobile · Superbill après une visite",
    rates: "Tarifs et facturation",
    telehealth: "Télésanté dans les États de Washington et de l’Idaho",
    chapters: [
      {
        title: "Un bref appel, si vous le souhaitez.",
        body: "Un appel d’adéquation de 10–15 minutes est gratuit. Entendez la voix. Rien n’est dû pour avoir lu cette page.",
      },
      {
        title: "La première heure dure 75–90 minutes.",
        body: "Histoire, un nom soigneux lorsqu’il est exact, et un plan. Les visites de suivi durent soixante minutes — médication et thérapie dans la même heure. Pour la vidéo, vous avez besoin d’une pièce privée, d’une connexion stable et d’être physiquement dans l’État de Washington ou de l’Idaho.",
      },
      {
        title: "L’admission, puis nous prenons rendez-vous.",
        body: "Un formulaire sécurisé est la façon dont le cabinet connaît qui vous êtes avant la séance. Si cela convient, vous entendrez les prochaines étapes. Sinon, la porte se ferme en silence.",
      },
    ],
  },
  faq: {
    heading: "Questions avant de commencer",
    items: [
      {
        q: "Que se passe-t-il lors de la première visite ?",
        a: "La première évaluation dure 75–90 minutes. Les visites de suivi durent soixante minutes comme durée ordinaire — médication et thérapie dans la même heure. Vous ne serez pas pressé.",
      },
      {
        q: "Acceptez-vous l’assurance ?",
        a: "Pas encore. Les soins sont en paiement privé. Une échelle mobile peut s’appliquer. Après une visite, un superbill est disponible pour chercher un remboursement hors réseau. Cela n’est pas une garantie de paiement.",
      },
      {
        q: "Puis-je être vu en vidéo ?",
        a: "Oui, si vous êtes physiquement dans l’État de Washington ou de l’Idaho pour le rendez-vous. Les séances restent de soixante minutes. Vous aurez besoin d’une pièce privée et d’une connexion stable.",
      },
      {
        q: "Ce que je partage est-il confidentiel ?",
        a: "Oui. L’information clinique est traitée comme information de santé protégée. Remplir une admission crée un dossier dans le système du cabinet, pas sur ce site public.",
      },
      {
        q: "Y a-t-il un coût pour voir si cela convient ?",
        a: "Un bref appel d’adéquation de 10–15 minutes coûte 0 $. Rien n’est dû pour avoir lu le site.",
      },
    ],
  },
  patients: {
    eyebrow: "Patients déjà suivis",
    title: "Espace patient.",
    lede: "Si vous recevez déjà des soins ici, voici la porte du retour.",
    body: "Les nouveaux patients commencent à Devenir patient. Les patients déjà suivis peuvent se connecter ci-dessous.",
    login: "Se connecter",
    soon: "Le lien du portail patient se trouvera ici. D’ici là, écrivez au cabinet pour la logistique des patients déjà suivis.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact.",
    lede: "Le courriel et le téléphone sont pour la logistique. Les nouveaux patients commencent par l’admission.",
    email: "Courriel",
    phone: "Téléphone",
    fax: "Fax",
    location: "Lieu",
    hours: "Horaires",
    begin: "Comment commencer",
    beginBody: "Basé à Spokane. Télésanté dans les États de Washington et de l’Idaho.",
    hoursValue: "Lun–Sam · 7 h–19 h · télésanté dans les États de Washington et de l’Idaho",
  },
  billing: {
    eyebrow: "Honoraires",
    title: "Paiement privé, avec des prix clairs.",
    lede: "Northform est en paiement privé pour l’instant et n’est pas encore en réseau avec des plans d’assurance. Une échelle mobile existe, et vous recevrez un Good Faith Estimate par écrit avant la première visite.",
    eval: "Évaluation complète",
    baseline: "La base Northform",
    minutes: "75–90 minutes",
    followMinutes: "60 minutes",
    hourNote: "médication et thérapie dans la même heure",
    fitCall:
      "Un bref appel d’adéquation coûte 0 $. Après une visite, un superbill est disponible si vous souhaitez chercher un remboursement hors réseau — ce n’est pas une garantie de paiement.",
    standard: "Tarifs standard",
    why: "Pourquoi le paiement privé",
    superbill: "Superbill",
    insurance: "Assurance",
    sliding: "Échelle mobile et plans de paiement",
    gfe: "Good Faith Estimate",
    tableService: "Service",
    tableRate: "Tarif en paiement privé",
    tableIncludes: "Ce que cela comprend",
    ratesNote:
      "Tarifs en paiement privé. L’échelle mobile peut baisser ces montants. Laboratoires facturés à part. Un Good Faith Estimate est écrit avant la première visite — cette page n’est pas cet estimé.",
    whyBody:
      "Le paiement privé est ce qui permet à la séance de rester assez longue — diagnostic, prescription et un plan — au lieu d’un incrément de douze minutes d’une assurance. L’assurance n’est pas exigée pour être vu ici.",
    superbillBody:
      "Après une visite, Northform peut fournir un superbill : un relevé détaillé que vous pouvez soumettre à votre assureur pour un remboursement hors réseau. Le remboursement est entre vous et le plan. Un superbill n’est pas une garantie de paiement.",
    insuranceNone:
      "Aucun plan contracté pour l’instant. Jusqu’à ce que des noms soient listés, supposez le paiement privé. Vous pouvez tout de même utiliser un superbill avec un bénéfice hors réseau si votre plan en a un.",
    slidingBody:
      "Une échelle mobile est offerte à ceux qui y ont droit. Des plans de paiement peuvent être convenus. Les parents d’accueil et les jeunes sont vus en paiement privé, avec échelle. Cette conversation a lieu de face — pas comme un code de réduction.",
    gfeBody:
      "En vertu de la No Surprises Act, les patients en paiement privé et non assurés ont droit à un Good Faith Estimate écrit des charges attendues avant le début des soins. Demandez ; Northform le fournira. Le calculateur ci-dessus est pour planifier. Ce n’est pas cet estimé.",
    estimateHeading: "Estimation rapide",
    estimateFirst: "Première visite",
    estimateFollow: "Visites de suivi",
    estimateCount: "Nombre de suivis",
    estimateTotal: "Total estimé en paiement privé",
    estimateNote:
      "Pour planifier seulement. Ceci n’est pas un Good Faith Estimate — le vôtre est écrit avant la première visite. Les laboratoires sont facturés à part, et une échelle mobile peut baisser ces montants.",
  },
  care: {
    eyebrow: "Soins",
    title: "Comment l’heure est utilisée.",
    lede: "Diagnostic, prescription et psychothérapie dans la même visite de soixante minutes.",
    diagnosisTitle: "Diagnostic",
    diagnosisBody:
      "Une évaluation soigneuse et, lorsqu’elle est justifiée, un diagnostic formel. Les noms peuvent organiser la souffrance. Ils sont offerts comme des outils, pas comme des identités à habiter pour toujours.",
    prescribingTitle: "Prescription",
    prescribingBody:
      "Pleine autorité de prescription. Médication lorsque la biologie le demande ; compléments et thérapeutiques à base de plantes lorsqu’ils sont le meilleur instrument.",
    therapyTitle: "Psychothérapie, soixante minutes",
    therapyBody:
      "La thérapie par la parole n’est pas un extra. Les séances durent soixante minutes comme durée ordinaire du travail — pas une longue admission suivie d’une usine de contrôles de trente minutes.",
    slidingTitle: "Échelle mobile",
    slidingBody:
      "Une échelle mobile et des plans de paiement sont offerts à ceux qui y ont droit. Les parents d’accueil et les jeunes sont vus en paiement privé, avec échelle incluse. Cette conversation a lieu de face.",
    ratesLink: "Tarifs, Superbill et un Good Faith Estimate →",
    catalogNote: "Chaque affection nommée a une page complète.",
  },
  conditions: {
    eyebrow: "Affections",
    title: "Affections nommées.",
    lede: "Dépression, anxiété, TDAH, bipolarité, TSPT et usage d’opioïdes — chacune avec une page complète.",
    homeNote: "Le sommeil, la psychiatrie occupationnelle et l’accueil sont dans le catalogue d’accueil.",
    treatLink: "Ce que nous traitons",
  },
  approach: {
    eyebrow: "Approche",
    title: "Pharmacogénétique, supplémentation et psychiatrie conventionnelle dans un seul cabinet.",
    lede: "Le trauma, le TDAH et les troubles de l’humeur sont traités avec un aperçu génétique, des compléments ciblés et des médicaments standard lorsqu’ils sont indiqués.",
    intro: "Ce sont les mots que ce cabinet utilise pour son propre travail.",
    terms: [
      {
        name: "Fonctionnel",
        body: "Psychothérapie et, lorsqu’ils servent, thérapeutiques à base de plantes — orotate de lithium plutôt que carbonate de lithium pour l’humeur, peptides tels que le Semax, ou pharmaceutiques si besoin. Fonctionnel signifie utiliser des méthodes naturelles lorsqu’elles servent, sans refuser la médecine lorsqu’elle est requise.",
      },
      {
        name: "Autodétermination",
        body: "Le droit de choisir votre propre chemin, même si un professionnel n’est pas d’accord. Les soins sont collaboratifs. Le désaccord n’est pas un échec de la relation ; écraser l’autre l’est.",
      },
      {
        name: "Soutien par les pairs",
        body: "Quelqu’un qui y a été détient une forme d’expertise qu’un médecin n’a pas. L’expérience vécue n’est pas une crédential à agiter. C’est une raison d’écouter autrement.",
      },
      {
        name: "Objectifs holistiques",
        body: "La question n’est pas seulement si les hallucinations sont parties. Avez-vous un emploi, un foyer et un ami ? La fonction dans la vie quotidienne est la mesure.",
      },
      {
        name: "Soin de soi",
        body: "Des choix et des actes qui vous ramènent à vous-même et vous alignent avec qui vous êtes — pas une liste de rituels pour un public.",
      },
    ],
  },
  telehealth: {
    eyebrow: "Soins",
    title: "Télésanté dans les États de Washington et de l’Idaho.",
    lede: "Les visites virtuelles sont des heures ordinaires, pas une version moindre du travail. Le consentement se signe dans le dossier d’admission, pas sur cette page.",
    p1: "Les séances restent de soixante minutes. Vous aurez besoin d’une pièce privée, d’une connexion stable, et d’être physiquement dans l’État de Washington ou de l’Idaho pour le rendez-vous. Les visites en personne ont lieu au 140 S. Arthur Street, Spokane.",
    p2: "Le consentement éclairé de télésanté fait partie du dossier d’admission IntakeQ. Cette page explique que le consentement existe. Elle ne le recueille pas.",
  },
  insights: {
    eyebrow: "Ressources",
    title: "Éducation pour les patients, FMLA et ressources du cabinet.",
    lede: "Langage FMLA, éducation pour les patients et ressources du cabinet.",
    crisis: "S’il s’agit d’une crise",
    fmla: "FMLA et le travail",
    hubs: [
      { title: "Éducation pour les patients", body: "Guides et liens pour vivre avec un système nerveux qui change." },
      { title: "Préparation des repas", body: "Nourriture simple et régulière. Pas une marque de bien-être." },
      { title: "Ressources pour les femmes", body: "Hormones, humeur, et une courte liste de portes qui restent ouvertes." },
    ],
    education: {
      title: "Éducation et ressources pour les patients.",
      lede: "Une courte étagère. Les pages cliniques de ce site commencent par les réponses ; ces liens vont plus loin.",
      body: "Rien ici n’est un diagnostic ni un plan de traitement. Si vous êtes en danger, appelez le {emergency}. Pour un soutien en crise aux États-Unis, appelez ou envoyez un texto au {line}.",
      conditions: "Affections traitées chez Northform",
      approach: "Les cinq termes",
    },
    recipes: {
      title: "Préparation des repas, sans théâtre.",
      lede: "Repas simples lorsque l’appétit, le sommeil ou l’énergie sont limités. Pas une marque de bien-être.",
      items: [
        {
          title: "Avoine, sel et fruit",
          body: "Avoine de la veille avec une pincée de sel, yaourt s’il passe bien, et le fruit qui tiendra la semaine. La poudre de protéines est facultative. L’idée est un petit-déjeuner qui ne demande pas une décision à 6 h.",
        },
        {
          title: "Un plat de légumes et une protéine",
          body: "Four : huile d’olive, sel, une coupe bon marché ou des haricots, brocoli ou chou. Cuire une fois. Manger trois fois. Rien ici n’est un superaliment de marque.",
        },
        {
          title: "Riz, œufs, verts",
          body: "Une casserole de riz, une douzaine d’œufs, un sac d’épinards congelés. Quand l’appétit s’en va, c’est encore de la nourriture. Quand il revient, ajoutez du piment ou du fromage.",
        },
        {
          title: "Le bouillon d’os n’est pas une personnalité",
          body: "Bouillon, reste de viande, une céréale. Utile dans une semaine de mauvais sommeil. Pas un protocole. Si manger est difficile, dites-le en séance — c’est une donnée clinique.",
        },
      ],
    },
    women: {
      title: "Ressources pour les femmes.",
      lede: "Hormones et psychiatrie dans la même pièce. Le périnatal et la périménopause ne sont pas un appendice.",
      body: "Lorsque les symptômes de santé mentale demandent une hormonothérapie ménopausique, ou lorsque la grossesse et le post-partum dérangent le sommeil et l’humeur, ces conversations appartiennent à la même heure que la psychiatrie.",
      perinatal: "Santé mentale périnatale",
      depression: "Dépression",
    },
    videos: {
      title: "Vidéos, quand cela vaut la peine de s’asseoir.",
      lede: "Les intégrations remplaceront ce substitut. Rien ne se lance tout seul. Rien ne vous suit vers un réseau publicitaire.",
      body: "Des interventions choisies et de courtes explications vivront ici comme des lecteurs ordinaires, en pause — intégrations YouTube ou Vimeo à confidentialité renforcée, sans pixels marketing sur le reste du site.",
      slot: "Emplacement vidéo à venir",
    },
  },
  legal: {
    privacy: {
      eyebrow: "Confidentialité",
      title: "Ce que vous écrivez ici est traité comme une information de santé.",
      lede: "Un avis général. L’NPP HIPAA et la politique de données de santé de Washington vivent sur leurs propres URL.",
      p1: "Ce site public est informatif. Il n’utilise pas de cookies publicitaires, de Meta Pixel ni de Google Analytics. Nous ne vendons pas les informations recueillies ici.",
      p2: "Remplir l’admission dans le formulaire sécurisé IntakeQ crée un dossier dans ce système clinique — pas sur ce site public. N’envoyez pas d’urgences par courriel.",
      nppLink: "Avis de pratiques de confidentialité HIPAA",
      healthLink: "Politique de confidentialité des données de santé du consommateur (Washington)",
      termsLink: "Conditions d’utilisation",
    },
    terms: {
      eyebrow: "Mentions légales",
      title: "Conditions d’utilisation.",
      lede: "Ce site est informatif. Il ne crée pas de relation soignant–patient.",
      p1: "En utilisant {name} en ligne, vous acceptez que le contenu soit éducatif, non un avis médical, et non un substitut à une évaluation. L’admission sécurisée est la porte vers les soins.",
      p2: "Des titres exacts sont utilisés partout : {provider}. Rien sur ce site n’implique un titre de médecin.",
    },
    npp: {
      eyebrow: "Mentions légales",
      title: "Avis de pratiques de confidentialité.",
      lede: "Mitch fournira l’NPP HIPAA définitif. D’ici là, traitez l’information clinique comme protégée.",
      p1: "Northform Psychiatry publiera un Avis de pratiques de confidentialité conforme à la règle de confidentialité HIPAA. Cette page est l’URL permanente. L’avis complet remplace ce substitut lorsque le conseil et Mitch l’auront approuvé.",
      p2: "Jusqu’à ce que ce document soit en vigueur : l’information clinique n’est pas utilisée pour le marketing, n’est pas vendue et n’est pas discutée à la légère. Remplir une admission (une fois PracticeQ lié) crée un dossier dans ce système — pas sur ce site public.",
    },
    healthData: {
      eyebrow: "Mentions légales",
      title: "Données de santé du consommateur.",
      lede: "Exigé à Washington, distinct de HIPAA. Mitch fournira la politique définitive. Cette URL est déjà liée depuis la page d’accueil et le pied de page.",
      p1: "La loi My Health My Data de Washington demande une Politique de confidentialité des données de santé du consommateur distincte de l’avis général. Les PHI traitées en tant qu’entité couverte relèvent de HIPAA. Les données de santé non PHI qu’un site peut recueillir auprès de visiteurs occasionnels n’en relèvent pas. Cette page couvre cette seconde catégorie.",
      p2: "Ce site public n’utilise pas de cookies publicitaires, de Meta Pixel ni de Google Analytics standard. Il ne vend pas de données de santé du consommateur. Lorsque la politique définitive arrivera, elle nommera ce qui est recueilli, pourquoi, avec qui cela est partagé, et comment retirer le consentement.",
      p3: "L’admission via PracticeQ, une fois liée, est un système clinique — pas ce site de marketing.",
    },
    nondiscrimination: {
      eyebrow: "Mentions légales",
      title: "Non-discrimination et accès linguistique.",
      lede: "Des soins sans discrimination. Ce site est disponible en anglais, espagnol, portugais et français.",
      p1: "Northform Psychiatry ne fait pas de discrimination fondée sur la race, la couleur, l’origine nationale, le sexe, l’âge ou le handicap, conformément à la section 1557 de l’Affordable Care Act. Des aides auxiliaires et une assistance linguistique sont disponibles.",
    },
  },
  article: {
    how: "Comment nous traitons ceci",
    questions: "Questions que les gens posent vraiment",
    howThis: "Comment nous traitons ceci →",
    allInsights: "Toutes les ressources",
    reviewed: "Relu par {name} · Mis à jour {date}",
  },
  catalog: catalogFr,
};
