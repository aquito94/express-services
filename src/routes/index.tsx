import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check, Clock3, UtensilsCrossed } from "lucide-react";
import horecaHero from "@/assets/horeca-hero.jpg";
import ownerImage from "@/assets/horeca-owner.jpg";
import { Button } from "@/components/ui/button";
import { FlowLine } from "@/components/site/FlowLine";
import { SectionIntro } from "@/components/site/SectionIntro";
import { horecaTypes, journey } from "@/data/horeca";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Restaurantes conectados · NETLIFE BUSINESS" },
    { name: "description", content: "Conectamos ventas, pedidos, cocina, delivery, reservas, pagos, clientes, inventario y datos para restaurantes." },
    { property: "og:title", content: "Tu restaurante necesita que todo funcione junto · NETLIFE BUSINESS" },
    { property: "og:description", content: "Una experiencia consultiva para vender más, controlar mejor y trabajar con menos caos." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Home,
});

const morningQuestions = ["¿Cuánto realmente ganamos?", "¿Qué producto dejó mejor margen?", "¿Cuánto vendimos por delivery?", "¿Qué se perdió?", "¿Cuántos clientes regresaron?", "¿Qué puede pasar esta semana?"];
const scattered = ["WhatsApp", "Excel", "POS", "Instagram", "Apps de delivery", "Caja", "Cocina", "Inventario", "Reservas", "Personas"];
const before = ["Pedidos separados", "Reservas manuales", "WhatsApp saturado", "Errores en cocina", "Delivery sin trazabilidad", "Clientes sin historial", "Reportes tardíos", "Compras reactivas"];
const after = ["Canales conectados", "Pedidos centralizados", "Reservas organizadas", "Cocina visible", "Delivery trazable", "Clientes identificados", "Alertas oportunas", "Decisiones más rápidas"];
const steps = ["Entendemos tu operación", "Identificamos pérdidas y fricción", "Revisamos lo que ya tienes", "Definimos qué conectar", "Implementamos por etapas", "Medimos resultados"];

function Home() {
 return <div className="overflow-hidden">
  <section className="relative min-h-[calc(100svh-72px)] bg-ink text-light">
    <img src={horecaHero} alt="Restaurante contemporáneo en plena operación" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
    <div className="absolute inset-0 hero-scrim" />
    <div className="relative mx-auto flex min-h-[calc(100svh-72px)] max-w-[90rem] items-end px-5 pb-14 pt-28 lg:px-8 lg:pb-20">
      <div className="max-w-4xl"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-signal">NETLIFE BUSINESS · Restaurantes conectados</p>
      <h1 className="mt-5 max-w-4xl text-5xl leading-[0.94] sm:text-6xl lg:text-8xl">Tu restaurante no necesita más sistemas. <span className="text-accent">Necesita que todo funcione junto.</span></h1>
      <p className="mt-7 max-w-3xl text-base leading-7 text-light/75 sm:text-xl">Desde que un cliente te descubre hasta que vuelve a comprar. Conectamos ventas, pedidos, cocina, delivery, reservas, pagos, clientes, inventario y datos para que controles mejor y crezcas sin aumentar el caos.</p>
      <div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg"><Link to="/diagnostico">Quiero ver mi restaurante conectado <ArrowRight /></Link></Button><Button asChild size="lg" variant="outline" className="border-light/30 bg-light/5 text-light hover:bg-light/10 hover:text-light"><a href="#recorrido">Ver cómo funciona <ArrowDown /></a></Button></div></div>
    </div>
  </section>

  <section className="border-b border-border bg-background py-20 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
    <div className="lg:sticky lg:top-28"><span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-primary"><Clock3 className="size-4"/> 8:00 AM</span><h2 className="mt-5 text-4xl leading-tight sm:text-5xl">Todo empieza mucho antes de que el cliente se siente a la mesa.</h2><p className="mt-5 text-muted-foreground">El dueño abre el restaurante y quiere entender qué pasó ayer, qué está pasando hoy y qué debería preparar para mañana.</p></div>
    <div><div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">{morningQuestions.map((q,i)=><div key={q} className="bg-card p-6"><span className="font-mono text-xs text-signal">0{i+1}</span><p className="mt-3 text-lg">{q}</p></div>)}</div><p className="mt-8 text-3xl leading-tight">Pero un dato está en caja. Otro en Excel. Otro en WhatsApp. Otro lo conoce el administrador. <span className="text-primary">Otro nadie lo tiene.</span></p></div>
  </div></section>

  <section className="bg-ink py-20 text-light lg:py-28"><div className="mx-auto max-w-7xl px-5"><SectionIntro dark eyebrow="El problema real" title="El problema no es que no tengas información. El problema es que está en todas partes." />
   <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center"><div><p className="text-xs uppercase tracking-[.16em] text-light/50">Antes</p><div className="mt-4 flex flex-wrap gap-2">{scattered.map(x=><span key={x} className="rounded-md border border-light/15 bg-light/5 px-3 py-2 text-sm text-light/65">{x}</span>)}</div></div><ArrowRight className="hidden size-8 text-signal lg:block"/><div className="rounded-lg border border-signal/40 bg-signal/10 p-8"><p className="text-xs uppercase tracking-[.16em] text-signal">Después</p><p className="mt-3 text-4xl">Una operación conectada.</p></div></div>
  </div></section>

  <section id="recorrido" className="scroll-mt-24 bg-card py-20 lg:py-28"><div className="mx-auto max-w-[90rem] px-5 lg:px-8"><SectionIntro eyebrow="El recorrido completo" title="Del primer click a la siguiente compra." text="Un cliente puede descubrirte en Instagram, comprar por WhatsApp y quedar registrado para que puedas volver a venderle." />
   <div className="mt-12 flex snap-x gap-3 overflow-x-auto pb-6">{journey.map((item,i)=><article key={item.step} className="min-h-72 w-64 shrink-0 snap-start border-l border-border bg-background p-6"><span className="font-mono text-xs text-primary">{String(i+1).padStart(2,"0")}</span><h3 className="mt-8 text-2xl">{item.step}</h3><ul className="mt-5 space-y-2 text-sm text-muted-foreground">{item.items.map(x=><li key={x}>{x}</li>)}</ul></article>)}</div>
  </div></section>

  <section className="bg-background py-20 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center"><figure className="relative aspect-[4/3] overflow-hidden rounded-lg"><img src={ownerImage} alt="Dueño y administradora revisando la operación del restaurante" width={1600} height={1008} loading="lazy" className="h-full w-full object-cover"/></figure><div><SectionIntro eyebrow="Cada persona ve algo distinto" title="Todos miran el mismo restaurante." text="El dueño quiere rentabilidad. Cocina quiere orden. Finanzas quiere que los números cuadren. Marketing quiere saber qué campaña vende. El cliente solo quiere que todo funcione."/><Button asChild className="mt-8" size="lg"><Link to="/roles">Explorar por rol <ArrowRight/></Link></Button></div></div></section>

  <section className="border-y border-border bg-surface py-20 lg:py-28"><div className="mx-auto max-w-7xl px-5"><SectionIntro eyebrow="Un solo negocio" title="Así se ve un restaurante conectado." text="Captar, vender, cobrar, producir, entregar, medir, fidelizar, predecir y volver a vender."/><div className="mt-12"><FlowLine items={["Captar","Vender","Cobrar","Producir","Entregar","Medir","Fidelizar","Predecir","Volver a vender"]}/></div><div className="mt-8 flex justify-end"><Button asChild variant="outline"><Link to="/restaurante-conectado">Ver el mapa completo <ArrowRight/></Link></Button></div></div></section>

  <section className="bg-card py-20 lg:py-28"><div className="mx-auto max-w-7xl px-5"><SectionIntro eyebrow="Antes / después" title="Menos piezas sueltas. Más control del negocio."/><div className="mt-12 grid gap-5 md:grid-cols-2"><div className="rounded-lg border border-border p-8"><p className="text-xs uppercase text-muted-foreground">Antes</p><ul className="mt-6 space-y-3">{before.map(x=><li key={x} className="text-muted-foreground">— {x}</li>)}</ul></div><div className="rounded-lg border border-primary/30 bg-secondary p-8"><p className="text-xs uppercase text-primary">Después</p><ul className="mt-6 space-y-3">{after.map(x=><li key={x} className="flex gap-2"><Check className="mt-1 size-4 text-primary"/>{x}</li>)}</ul></div></div></div></section>

  <section className="bg-ink py-20 text-light lg:py-28"><div className="mx-auto max-w-7xl px-5"><SectionIntro dark eyebrow="Especialistas en HORECA" title="Restaurantes primero. El resto, desde su operación real."/><div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-light/15 bg-light/15 md:grid-cols-2 lg:grid-cols-3">{horecaTypes.map((x)=><article key={x.name} className={`p-7 ${x.featured ? "bg-primary md:col-span-2" : "bg-ink"}`}><UtensilsCrossed className={`size-5 ${x.featured ? "text-primary-foreground" : "text-signal"}`}/><h3 className="mt-8 text-2xl">{x.name}</h3><p className={`mt-3 text-sm leading-6 ${x.featured ? "text-primary-foreground/75" : "text-light/55"}`}>{x.focus}</p></article>)}</div></div></section>

  <section className="bg-background py-20 lg:py-28"><div className="mx-auto max-w-7xl px-5"><SectionIntro eyebrow="Empieza sin reemplazar todo" title="No tienes que cambiar todo mañana." text="Primero entendemos qué vale la pena resolver. Después conectamos lo necesario por etapas."/><div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">{steps.map((x,i)=><div key={x} className="bg-card p-6"><span className="font-mono text-xs text-primary">0{i+1}</span><p className="mt-5 text-lg">{x}</p></div>)}</div></div></section>

  <section className="bg-primary py-20 text-primary-foreground"><div className="mx-auto max-w-5xl px-5"><p className="text-xs font-semibold uppercase tracking-[.16em] text-primary-foreground/65">Hablemos de tu operación</p><h2 className="mt-5 text-4xl leading-tight sm:text-6xl">No necesitas otra app. Necesitas que tu restaurante funcione como un solo negocio.</h2><p className="mt-6 max-w-2xl text-lg text-primary-foreground/75">Cuéntanos cómo trabajas hoy. Identificamos dónde existe fricción, qué estás perdiendo y qué conviene conectar.</p><div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg" variant="secondary"><Link to="/diagnostico">Quiero diagnosticar mi restaurante</Link></Button><Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><Link to="/oportunidad">Quiero ver una demo</Link></Button></div></div></section>
 </div>;
}
