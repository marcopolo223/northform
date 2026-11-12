"use client";

import { useLocale } from "@/lib/i18n/locale-provider";
import type { Locale } from "@/lib/i18n/config";

type Item = { title: string; body: string };
type Policy = { heading: string; intro: string; items: Item[] };

const policy: Record<Locale, Policy> = {
  en: {
    heading: "Appointments and cancellation",
    intro:
      "When you schedule, that time block is reserved for your clinical care. These guidelines keep the schedule fair for everyone.",
    items: [
      { title: "Advance notice", body: "Please give at least 24 hours’ notice if you need to reschedule or cancel." },
      {
        title: "Late cancellations and missed visits",
        body: "A $250 scheduling fee applies when an appointment is canceled with less than 24 hours’ notice or missed without contact, because that time cannot be offered to someone else.",
      },
      {
        title: "Insurance and self-pay",
        body: "Health insurance and self-pay arrangements cover clinical care, not administrative scheduling fees, so this fee is your direct out-of-pocket responsibility.",
      },
      {
        title: "Settling a balance",
        body: "Balances are due within seven (7) calendar days of the missed session, unless you arrange a custom payment plan directly with Northform.",
      },
      {
        title: "Emergencies",
        body: "Acute medical emergencies and unforeseen circumstances happen. The fee may be adjusted or waived on review for documented emergencies. Please reach out as soon as you can.",
      },
    ],
  },
  es: {
    heading: "Citas y cancelaciones",
    intro:
      "Al programar una cita, ese bloque de tiempo queda reservado para su atención clínica. Estas pautas mantienen la agenda justa para todos.",
    items: [
      { title: "Aviso previo", body: "Avise con al menos 24 horas de anticipación si necesita reprogramar o cancelar." },
      {
        title: "Cancelaciones tardías y citas perdidas",
        body: "Se aplica una tarifa de programación de $250 cuando una cita se cancela con menos de 24 horas de aviso o se pierde sin contacto, porque ese tiempo no puede ofrecerse a otra persona.",
      },
      {
        title: "Seguro y pago particular",
        body: "El seguro médico y el pago particular cubren la atención clínica, no las tarifas administrativas de programación, por lo que esta tarifa corre por su cuenta.",
      },
      {
        title: "Saldo pendiente",
        body: "Los saldos vencen dentro de siete (7) días naturales después de la sesión perdida, salvo que acuerde un plan de pago personalizado directamente con Northform.",
      },
      {
        title: "Emergencias",
        body: "Las emergencias médicas agudas y los imprevistos ocurren. La tarifa puede ajustarse o eximirse tras revisión en emergencias documentadas. Comuníquese lo antes posible.",
      },
    ],
  },
  pt: {
    heading: "Consultas e cancelamentos",
    intro:
      "Ao marcar, esse bloco de tempo fica reservado para o seu cuidado clínico. Estas regras mantêm a agenda justa para todos.",
    items: [
      { title: "Aviso prévio", body: "Avise com pelo menos 24 horas de antecedência se precisar de remarcar ou cancelar." },
      {
        title: "Cancelamentos tardios e faltas",
        body: "Aplica-se uma taxa de agendamento de $250 quando uma consulta é cancelada com menos de 24 horas de aviso ou falhada sem contacto, porque esse tempo não pode ser oferecido a outra pessoa.",
      },
      {
        title: "Seguro e pagamento particular",
        body: "O seguro de saúde e o pagamento particular cobrem o cuidado clínico, não as taxas administrativas de agendamento, pelo que esta taxa é da sua responsabilidade.",
      },
      {
        title: "Regularização do saldo",
        body: "Os saldos vencem em sete (7) dias corridos após a sessão falhada, salvo se combinar um plano de pagamento personalizado diretamente com a Northform.",
      },
      {
        title: "Emergências",
        body: "Emergências médicas agudas e imprevistos acontecem. A taxa pode ser ajustada ou dispensada após análise em emergências documentadas. Contacte-nos assim que puder.",
      },
    ],
  },
  fr: {
    heading: "Rendez-vous et annulations",
    intro:
      "Lorsque vous réservez, ce créneau est réservé à vos soins cliniques. Ces règles gardent l’agenda équitable pour tous.",
    items: [
      { title: "Préavis", body: "Merci de prévenir au moins 24 heures à l’avance si vous devez reporter ou annuler." },
      {
        title: "Annulations tardives et absences",
        body: "Des frais de planification de 250 $ s’appliquent lorsqu’un rendez-vous est annulé avec moins de 24 heures de préavis ou manqué sans contact, car ce créneau ne peut être proposé à quelqu’un d’autre.",
      },
      {
        title: "Assurance et paiement privé",
        body: "L’assurance santé et le paiement privé couvrent les soins cliniques, pas les frais administratifs de planification ; ces frais restent donc à votre charge.",
      },
      {
        title: "Règlement du solde",
        body: "Les soldes sont dus dans les sept (7) jours calendaires suivant la séance manquée, sauf si vous convenez d’un plan de paiement personnalisé directement avec Northform.",
      },
      {
        title: "Urgences",
        body: "Les urgences médicales aiguës et les imprévus arrivent. Les frais peuvent être ajustés ou levés après examen pour des urgences documentées. Contactez-nous dès que possible.",
      },
    ],
  },
};

export function CancellationPolicy() {
  const { locale } = useLocale();
  const copy = policy[locale];

  return (
    <section>
      <h2 className="type-heading">{copy.heading}</h2>
      <p className="mt-3 max-w-2xl text-fg/70">{copy.intro}</p>
      <dl className="mt-6 grid gap-px border border-fg/15 bg-fg/15 sm:grid-cols-2 lg:grid-cols-4">
        {copy.items.map((item) => (
          <div key={item.title} className="bg-ground p-6">
            <dt className="font-serif text-[1.15rem] leading-snug tracking-[-0.015em]">{item.title}</dt>
            <dd className="mt-3 text-[0.93rem] leading-relaxed text-fg/75">{item.body}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
