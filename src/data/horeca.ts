export const journey = [
  { step: "Descubre", items: ["Instagram", "TikTok", "Google", "Publicidad", "Recomendaciones"] },
  { step: "Entra", items: ["Web", "WhatsApp", "Instagram", "Menú digital"] },
  { step: "Decide", items: ["Mesa", "Reserva", "Retiro", "Delivery"] },
  { step: "Ordena", items: ["Web", "WhatsApp", "QR", "Mesero", "Kiosco"] },
  { step: "Paga", items: ["Tarjeta", "Link", "Transferencia", "Efectivo"] },
  { step: "Se prepara", items: ["Cocina", "Prioridades", "Tiempos", "Estados"] },
  { step: "Se entrega", items: ["Mesa", "Retiro", "Delivery propio", "Última milla"] },
  { step: "Se registra", items: ["Compra", "Ticket", "Preferencias", "Canal"] },
  { step: "Se fideliza", items: ["Campañas", "Cumpleaños", "Beneficios", "Recompra"] },
  { step: "Se predice", items: ["Demanda", "Regreso", "Recomendación", "Riesgo"] },
] as const;

export const roles = [
  { id:"dueno", name:"Dueño / Gerencia", concern:"¿Estoy ganando dinero y dónde se está yendo la plata?", sees:["Ventas y margen", "Local y canal", "Productos rentables", "Clientes que regresan", "Inventario y merma", "Pronóstico"], needs:"Ventas, costos, clientes, delivery e inventario en una misma lectura.", connect:"Ventas, operación, clientes, finanzas, delivery e inventario.", result:"El dueño ve el negocio completo sin pedir cinco reportes." },
  { id:"administracion", name:"Administrador", concern:"Que el turno funcione sin caos, retrasos ni faltantes.", sees:["Mesas y reservas", "Pedidos demorados", "Tiempo en cocina", "Agotados", "Personal", "Alertas"], needs:"Una vista del turno actual, no un reporte de mañana.", connect:"Pedidos, cocina, salón, reservas, delivery y equipo.", result:"Saber qué está pasando ahora, no mañana." },
  { id:"ventas", name:"Ventas", concern:"Vender más, no perder consultas y recuperar clientes.", sees:["Consultas", "Conversión", "Ticket promedio", "Clientes nuevos", "Inactivos", "Venta sugerida"], needs:"El recorrido desde la consulta hasta la compra.", connect:"Redes, WhatsApp, web, pedidos e historial.", result:"Menos consultas perdidas y más clientes que compran." },
  { id:"marketing", name:"Marketing", concern:"Saber qué campaña genera ventas, no solo interacción.", sees:["Campaña y canal", "Pedidos", "Ticket", "Recompra", "CAC", "ROAS"], needs:"Atribución desde el anuncio hasta la recompra.", connect:"Publicidad, redes, WhatsApp, web, ventas y clientes.", result:"Dejar de medir solo likes y empezar a medir ventas." },
  { id:"operaciones", name:"Operaciones", concern:"Velocidad, orden, menos errores y menos desperdicio.", sees:["Tiempo de pedido", "Preparación", "Entrega", "Errores", "Horas pico", "Productividad"], needs:"Tiempos y eventos de cada etapa del servicio.", connect:"Pedidos, cocina, salón, delivery e inventario.", result:"Detectar dónde se frena la operación." },
  { id:"cocina", name:"Cocina", concern:"Qué preparar, en qué orden y qué está atrasado.", sees:["Pedidos", "Prioridad", "Tiempo", "Cambios", "Alérgenos", "Agotados"], needs:"Una cola clara y actualizada en tiempo real.", connect:"Pedidos, salón, delivery y disponibilidad.", result:"Menos gritos, menos papel y menos errores." },
  { id:"salon", name:"Salón / Host", concern:"Mesas, reservas, espera, rotación y experiencia.", sees:["Mapa de mesas", "Disponibilidad", "Waitlist", "Tiempo de mesa", "Preferencias", "Pedidos"], needs:"Contexto de cada mesa y cliente antes de atender.", connect:"Reservas, clientes, mesas y pedidos.", result:"Atender mejor y usar mejor cada mesa." },
  { id:"delivery", name:"Delivery", concern:"Entregar rápido, evitar pérdidas y controlar costos.", sees:["Estado", "Ubicación", "Tiempo estimado", "Transportista", "Costo", "Incidencias"], needs:"Trazabilidad desde cocina hasta la confirmación.", connect:"Cocina, tracking, operadores y cliente.", result:"Menos llamadas de “¿dónde está mi pedido?”." },
  { id:"finanzas", name:"Finanzas", concern:"Que los números cuadren y las apps paguen lo correcto.", sees:["Ventas", "Cobros", "Facturas", "Comisiones", "Depósitos", "Margen"], needs:"Conciliar cada venta con el dinero recibido.", connect:"Ventas, pagos, facturación, delivery y contabilidad.", result:"Detectar diferencias antes del cierre del mes." },
  { id:"compras", name:"Compras", concern:"Comprar lo necesario sin excederse ni quedarse corto.", sees:["Stock", "Consumo", "Rotación", "Proveedor", "Costo", "Demanda"], needs:"Consumo real, recetas, histórico y previsión.", connect:"Ventas, recetas, inventario y proveedores.", result:"Comprar con información, no por intuición." },
  { id:"inventario", name:"Inventario", concern:"Saber qué entra, qué sale, qué falta y qué se pierde.", sees:["Stock real", "Consumo", "Merma", "Caducidad", "Transferencias", "Diferencias"], needs:"Movimientos confiables y alertas oportunas.", connect:"Compras, bodega, recetas y ventas.", result:"Menos merma y menos producto perdido." },
  { id:"experiencia", name:"Experiencia del cliente", concern:"Que el cliente vuelva y que una queja no se pierda.", sees:["Quejas", "Respuesta", "Satisfacción", "Reseñas", "NPS", "Recuperación"], needs:"Historial, responsable y seguimiento de cada caso.", connect:"Reclamos, historial, operación y seguimiento.", result:"No solo resolver la queja: recuperar al cliente." },
  { id:"personas", name:"Recursos Humanos", concern:"Turnos, asistencia, productividad y rotación.", sees:["Horarios", "Asistencia", "Horas pico", "Carga", "Desempeño", "Necesidad"], needs:"Relacionar demanda y ventas con la planificación.", connect:"Demanda, ventas, turnos y desempeño.", result:"Poner más personal cuando hace falta, no cuando ya es tarde." },
  { id:"tecnologia", name:"Tecnología", concern:"Que todo funcione, sea seguro y no esté aislado.", sees:["Sistemas", "Accesos", "Disponibilidad", "Conexiones", "Alertas", "Trazabilidad"], needs:"Una arquitectura sostenible y gobernada.", connect:"Sistemas actuales y nuevas capacidades sin reemplazar todo.", result:"Una arquitectura ordenada y menos sistemas aislados." },
] as const;

export const operationAreas = [
  { id:"ventas", name:"Ventas y marketing", title:"No todo el que te ve en Instagram termina comprando.", problem:"Una persona pregunta menú, horario, precio y delivery. Si nadie responde rápido, se pierde.", flow:["Publicidad", "Instagram / Google", "Web / WhatsApp", "Respuesta", "Menú", "Pedido", "Pago", "Cliente", "Recompra"], result:"No midas solo likes. Mide cuántos terminan comprando." },
  { id:"pedidos", name:"Pedidos", title:"Un pedido no debería pasar por cinco personas para llegar a cocina.", problem:"Cuando se copia, confirma y vuelve a escribir, aumentan el tiempo y los errores.", flow:["Cliente pide", "Se valida", "Paga", "Cocina recibe", "Se prepara", "Estado actualizado", "Se entrega"], result:"Un solo recorrido para mesa, retiro, delivery, QR, web y WhatsApp." },
  { id:"cocina", name:"Cocina", title:"Cocina necesita saber qué hacer ahora.", problem:"No necesita más chats: necesita orden, prioridades, tiempos y cambios visibles.", flow:["Pendiente", "Priorizado", "Preparando", "Listo", "Entregado"], result:"Menos gritos. Menos papel. Menos confusión. Más control." },
  { id:"salon", name:"Salón y mesas", title:"Una mesa vacía también es dinero que no entró.", problem:"Reservas, espera, ocupación y preferencias suelen vivir en lugares distintos.", flow:["Reserva", "Confirmación", "Check-in", "Mesa", "Pedido", "Pago", "Historial"], result:"Saber quién viene, dónde sentarlo y cuánto tiempo lleva una mesa." },
  { id:"delivery", name:"Delivery", title:"No se trata de salir de las apps. Se trata de no depender solo de ellas.", problem:"Las apps consiguen demanda, pero el canal propio construye la relación.", flow:["Descubre", "Canal propio", "Menú", "Pedido", "Pago", "Cocina", "Entrega", "Datos", "Recompra"], result:"Las apps pueden traer el primer pedido. Tu canal propio debería traer el segundo." },
  { id:"finanzas", name:"Finanzas", title:"Contabilidad no debería descubrir los problemas a fin de mes.", problem:"Ventas, cobros, comisiones y depósitos deben cuadrar antes del cierre.", flow:["Venta", "Cobro", "Factura", "Comisión", "Depósito", "Conciliación", "Alerta"], result:"Vender más no siempre significa ganar más." },
  { id:"inventario", name:"Inventario y compras", title:"Lo peor no es quedarte sin producto. Es descubrirlo cuando ya lo pidieron.", problem:"Stock, recetas, consumo, merma y compras necesitan la misma versión.", flow:["Venta", "Receta", "Consumo", "Stock", "Alerta", "Compra", "Recepción"], result:"Si sabes qué vas a vender, puedes comprar mejor." },
  { id:"experiencia", name:"Experiencia", title:"El cliente no ve tus sistemas. Solo siente si todo funciona o no.", problem:"Cada demora, error o reclamo afecta la posibilidad de que vuelva.", flow:["Señal", "Alerta", "Responsable", "Contacto", "Solución", "Seguimiento"], result:"Resolver el problema y recuperar al cliente." },
] as const;

export const connectedLayers = [
  { name:"Captación", items:["Google","Instagram","TikTok","Publicidad","QR"] },
  { name:"Venta", items:["Web","WhatsApp","Menú","Reservas","Canal propio"] },
  { name:"Pedido", items:["Mesa","Delivery","Retiro","Apps"] },
  { name:"Pago", items:["Online","POS","Caja","Link"] },
  { name:"Operación", items:["Mesas","POS","KDS","Inventario","Compras"] },
  { name:"Entrega", items:["Mesa","Retiro","Delivery"] },
  { name:"Cliente", items:["Historial","Preferencias","Frecuencia","Ticket"] },
  { name:"Fidelización", items:["Campañas","Promociones","Recompra","Beneficios"] },
  { name:"Datos", items:["Ventas","Operación","Finanzas","Clientes"] },
  { name:"Decisión", items:["Qué vender","Qué comprar","Qué promocionar","Qué corregir"] },
] as const;

export const diagnostics = [
  { id:"vender", label:"Quiero vender más", problem:"Consultas sin respuesta, baja conversión o poco seguimiento.", info:"Canales de entrada, consultas, pedidos, ticket y recompra.", connect:"Redes, WhatsApp, web, pedidos y clientes.", measure:"Conversión, ticket promedio, frecuencia e ingresos." },
  { id:"costos", label:"Quiero bajar mis costos", problem:"Comisiones, merma, tiempos y tareas manuales consumen margen.", info:"Costos por canal, producto, turno y local.", connect:"Ventas, apps, recetas, inventario y finanzas.", measure:"Margen, costo de alimentos, merma y costo por pedido." },
  { id:"control", label:"Quiero controlar mejor mi restaurante", problem:"Los datos llegan tarde y cada área cuenta una historia distinta.", info:"Ventas, pedidos, caja, cocina, inventario y personal.", connect:"La operación completa en una vista ejecutiva.", measure:"Desviaciones, rentabilidad, productividad y alertas." },
  { id:"errores", label:"Quiero reducir errores", problem:"Pedidos se vuelven a escribir y los cambios se pierden.", info:"Origen del pedido, modificaciones, tiempos e incidencias.", connect:"Canales de pedido, cocina, salón y entrega.", measure:"Errores, cancelaciones, reclamos y reprocesos." },
  { id:"propio", label:"Quiero vender más por canal propio", problem:"La relación con el cliente termina en una app externa.", info:"Canal, cliente, compra, frecuencia y costo de adquisición.", connect:"Google, redes, web, menú, pago y seguimiento.", measure:"Pedidos propios, comisión evitada, recompra y LTV." },
  { id:"clientes", label:"Quiero conocer a mis clientes", problem:"Cada compra empieza desde cero porque no existe una historia común.", info:"Historial, frecuencia, preferencias, ticket y satisfacción.", connect:"Pedidos, reservas, canales, reclamos y campañas.", measure:"Clientes identificados, recurrencia, retención y ticket." },
  { id:"inventario", label:"Quiero controlar mi inventario", problem:"Los faltantes y la merma aparecen demasiado tarde.", info:"Stock, recetas, consumo, compras, caducidad y diferencias.", connect:"Ventas, recetas, bodega y proveedores.", measure:"Merma, quiebres, rotación y costo de alimentos." },
  { id:"cocina", label:"Quiero que cocina sea más rápida", problem:"La prioridad no está clara y los atrasos se detectan por los reclamos.", info:"Hora de entrada, preparación, cambios, estado y carga.", connect:"Pedidos, KDS, salón, delivery y disponibilidad.", measure:"Tiempo de preparación, atrasos, errores y capacidad." },
  { id:"delivery", label:"Quiero mejorar delivery", problem:"El cliente no sabe dónde está su pedido y el costo real no está claro.", info:"Preparación, despacho, ruta, tiempo, costo e incidencia.", connect:"Cocina, tracking, transportista, cliente y pagos.", measure:"Tiempo de entrega, reclamos, costo y recompra." },
  { id:"fidelizar", label:"Quiero fidelizar", problem:"Se envían las mismas promociones a todos o no se vuelve a contactar.", info:"Frecuencia, preferencias, última compra y respuesta.", connect:"Clientes, historial, segmentos y campañas.", measure:"Recompra, frecuencia, clientes recuperados y LTV." },
  { id:"predecir", label:"Quiero saber qué va a pasar", problem:"Compras, personal y promociones se deciden solo por intuición.", info:"Histórico de ventas, clima, fechas, productos y turnos.", connect:"Ventas, inventario, personal y contexto.", measure:"Precisión de demanda, faltantes, merma y productividad." },
  { id:"ia", label:"Quiero usar IA y no sé por dónde empezar", problem:"Hay muchas ideas, pero no un problema priorizado ni una medida de éxito.", info:"Tareas repetitivas, decisiones lentas y pérdidas observables.", connect:"Solo el proceso donde exista valor comprobable.", measure:"Tiempo ahorrado, ingreso recuperado o pérdida evitada." },
] as const;

export const horecaTypes = [
 {name:"Restaurantes", focus:"Mesas, pedidos, cocina, delivery, inventario, margen y fidelización.", featured:true},
 {name:"Cafeterías", focus:"Horas pico, pedidos rápidos, frecuencia, ticket e inventario."},
 {name:"Pastelerías", focus:"Pedidos personalizados, anticipos, producción, entregas y recordatorios."},
 {name:"Hoteles", focus:"Reservas, restaurante, room service, eventos, consumos y experiencia."},
 {name:"Dark kitchens", focus:"Apps, costos, producción, tiempos, delivery y rentabilidad por marca."},
 {name:"Cadenas y franquicias", focus:"Comparación entre locales, estándares, inventario y control central."},
 {name:"Food courts y catering", focus:"Volumen, producción, coordinación, cobro y entregas."},
] as const;

export const restaurantMetrics = ["Ventas","Margen","Ticket promedio","Conversión","Frecuencia","Recompra","Pedidos por canal","Comisión de apps","Tiempo de preparación","Tiempo de entrega","Rotación de mesa","Cancelaciones","Reclamos","NPS","CSAT","Merma","Costo de alimentos","Rentabilidad por producto","Rentabilidad por local","Horas pico","Productividad","Stock","CAC","ROAS","LTV"];

export const aiExamples = ["Responder y tomar pedidos", "Confirmar y recordar reservas", "Recomendar productos y venta adicional", "Recuperar clientes inactivos", "Analizar comentarios y reclamos", "Predecir demanda y horarios pico", "Sugerir compras e inventario", "Detectar anomalías y cancelaciones", "Analizar rentabilidad", "Recomendar campañas", "Resumir la operación y alertar desviaciones"];
