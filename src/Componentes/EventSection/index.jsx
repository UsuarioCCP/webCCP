import React from "react";
import { EventCalendar } from "../EventCalendar";

const EventSection = () => {
const events = [
  {
    title: "Trayectoria MEGA",
    src: "https://scontent.fbaq9-1.fna.fbcdn.net/v/t39.30808-6/448604811_8035784319777076_5884651271323088761_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=SiCFj8Ul3GIQ7kNvgGjKcyD&_nc_ht=scontent.fbaq9-1.fna&oh=00_AYCY5K8DWaHGnjDJwdBMPQZEcG-bR5DUAw_VygC7IEmzIw&oe=66791B08",
    description: "La Cámara de Comercio de Bogotá  y la Camara de Comercio de Pamplona han unido esfuerzo para traer nuevamente a nuestro territorio programa Empresas en #TrayectoriaMega el cual busca crear una comunidad de empresarios que piense en grande y logre metas #MEGA en torno a una Colombia cada vez más competitiva. El programa empresas en trayectoria MEGA, es un programa que le permite a las empresas aplicar metodología de empresarios para empresarios que contribuyen al crecimiento sobresaliente de las organizaciones participantes, por medio de Formación, Mentoría y Conversaciones poderosas.",
    date: "2024-06-19",
    time: "2:00 PM",
    theme: "Backend",
    speaker: "Jane Doe"
  },
  {
      title: "Ruta Solidaria",
      src: "https://img.freepik.com/vector-gratis/ilustracion-concepto-seminario_114360-7480.jpg?t=st=1718746648~exp=1718750248~hmac=c8a45a8d355a98033d59cfc1f4f69433fa8d82a6056c2266d7eef4ff1e39a5de&w=1060",
      description: "Aprende cómo construir aplicaciones de servidor con Node.js.",
      date: "2024-02-12",
      time: "2:00 PM",
      theme: "Backend",
      speaker: "Jane Doe"
  },
  {
      title: "Aprendiendo aprender",
      src: "https://img.freepik.com/vector-gratis/ilustracion-concepto-seminario_114360-7480.jpg?t=st=1718746648~exp=1718750248~hmac=c8a45a8d355a98033d59cfc1f4f69433fa8d82a6056c2266d7eef4ff1e39a5de&w=1060",
      description: "Aprende cómo construir aplicaciones de servidor con Node.js.",
      date: "2024-03-12",
      time: "3:00 PM",
      theme: "Backend",
      speaker: "Jane Doe"
  },
  {
      title: "Convocatoria Empretur 'Sostenibilidad en mipymes turísticas' ",
      src: "https://img.freepik.com/vector-gratis/ilustracion-concepto-seminario_114360-7480.jpg?t=st=1718746648~exp=1718750248~hmac=c8a45a8d355a98033d59cfc1f4f69433fa8d82a6056c2266d7eef4ff1e39a5de&w=1060",
      description: "invitación para que nos acompañen en el Facebooklive del @MincomercioCo, @ColombiaProductiva, @FonturColombia y @Caemcorporacion donde daremos a conocer la nueva convocatoria para prestadores de servicios turísticos de los departamentos de Antioquia, Chocó, Norte de Santander y Santander para que mejoremos la sostenibilidad de nuestro sector.",
      date: "2024-07-02",
      time: "4:30 PM",
      theme: "Sostenibilidad en turismo",
      speaker: "Enlace de registro  https://bit.ly/3zgqLut"
  },
  {
    title: "Capacitación en Node.js 3",
    src: "https://img.freepik.com/vector-gratis/ilustracion-concepto-seminario_114360-7480.jpg?t=st=1718746648~exp=1718750248~hmac=c8a45a8d355a98033d59cfc1f4f69433fa8d82a6056c2266d7eef4ff1e39a5de&w=1060",
    description: "Aprende cómo construir aplicaciones de servidor con Node.js.",
    date: "2024-05-10",
    time: "4:00 PM",
    theme: "Backend",
    speaker: "Jane Doe"
  },
  {
      title: "Capacitación en Node.js",
      src: "https://img.freepik.com/vector-gratis/ilustracion-concepto-seminario_114360-7480.jpg?t=st=1718746648~exp=1718750248~hmac=c8a45a8d355a98033d59cfc1f4f69433fa8d82a6056c2266d7eef4ff1e39a5de&w=1060",
      description: "Aprende cómo construir aplicaciones de servidor con Node.js.",
      date: "2024-06-12",
      time: "2:00 PM",
      theme: "Backend",
      speaker: "Jane Doe"
  },
  {
      title: "Capacitación en Node.js 2",
      src: "https://img.freepik.com/vector-gratis/ilustracion-concepto-seminario_114360-7480.jpg?t=st=1718746648~exp=1718750248~hmac=c8a45a8d355a98033d59cfc1f4f69433fa8d82a6056c2266d7eef4ff1e39a5de&w=1060",
      description: "Aprende cómo construir aplicaciones de servidor con Node.js.",
      date: "2024-07-12",
      time: "3:00 PM",
      theme: "Backend",
      speaker: "Jane Doe"
  },
  {
      title: "Capacitación en Node.js 3",
      src: "https://img.freepik.com/vector-gratis/ilustracion-concepto-seminario_114360-7480.jpg?t=st=1718746648~exp=1718750248~hmac=c8a45a8d355a98033d59cfc1f4f69433fa8d82a6056c2266d7eef4ff1e39a5de&w=1060",
      description: "Aprende cómo construir aplicaciones de servidor con Node.js.",
      date: "2024-08-12",
      time: "4:00 PM",
      theme: "Backend",
      speaker: "Jane Doe"
  },
  {
      title: "Capacitación en Node.js 3",
      src: "https://img.freepik.com/vector-gratis/ilustracion-concepto-seminario_114360-7480.jpg?t=st=1718746648~exp=1718750248~hmac=c8a45a8d355a98033d59cfc1f4f69433fa8d82a6056c2266d7eef4ff1e39a5de&w=1060",
      description: "Aprende cómo construir aplicaciones de servidor con Node.js.",
      date: "2024-09-12",
      time: "4:00 PM",
      theme: "Backend",
      speaker: "Jane Doe"
  },
  {
      title: "Capacitación en Node.js 3",
      src: "https://img.freepik.com/vector-gratis/ilustracion-concepto-seminario_114360-7480.jpg?t=st=1718746648~exp=1718750248~hmac=c8a45a8d355a98033d59cfc1f4f69433fa8d82a6056c2266d7eef4ff1e39a5de&w=1060",
      description: "Aprende cómo construir aplicaciones de servidor con Node.js.",
      date: "2024-10-12",
      time: "4:00 PM",
      theme: "Backend",
      speaker: "Jane Doe"
  },
  {
      title: "Capacitación en Node.js 3",
      src: "https://img.freepik.com/vector-gratis/ilustracion-concepto-seminario_114360-7480.jpg?t=st=1718746648~exp=1718750248~hmac=c8a45a8d355a98033d59cfc1f4f69433fa8d82a6056c2266d7eef4ff1e39a5de&w=1060",
      description: "Aprende cómo construir aplicaciones de servidor con Node.js.",
      date: "2024-11-12",
      time: "4:00 PM",
      theme: "Backend",
      speaker: "Jane Doe"
  },
  {
      title: "Capacitación en Node.js 3",
      src: "https://img.freepik.com/vector-gratis/ilustracion-concepto-seminario_114360-7480.jpg?t=st=1718746648~exp=1718750248~hmac=c8a45a8d355a98033d59cfc1f4f69433fa8d82a6056c2266d7eef4ff1e39a5de&w=1060",
      description: "Aprende cómo construir aplicaciones de servidor con Node.js.",
      date: "2024-12-12",
      time: "4:00 PM",
      theme: "Backend",
      speaker: "Jane Doe"
  },
  {
      title: "Capacitación en Node.js 3",
      src: "https://img.freepik.com/vector-gratis/ilustracion-concepto-seminario_114360-7480.jpg?t=st=1718746648~exp=1718750248~hmac=c8a45a8d355a98033d59cfc1f4f69433fa8d82a6056c2266d7eef4ff1e39a5de&w=1060",
      description: "Aprende cómo construir aplicaciones de servidor con Node.js.",
      date: "2024-12-20",
      time: "4:00 PM",
      theme: "Backend",
      speaker: "Jane Doe"
  },
  {
      title: "Capacitación en Node.js 3",
      src: "https://img.freepik.com/vector-gratis/ilustracion-concepto-seminario_114360-7480.jpg?t=st=1718746648~exp=1718750248~hmac=c8a45a8d355a98033d59cfc1f4f69433fa8d82a6056c2266d7eef4ff1e39a5de&w=1060",
      description: "Aprende cómo construir aplicaciones de servidor con Node.js.",
      date: "2024-12-22",
      time: "4:00 PM",
      theme: "Backend",
      speaker: "Jane Doe"
  },
    // Añade más eventos aquí
];

return(
<div className="grid w-full my-2">
  <EventCalendar events={events} />
</div>
)
}
  export {EventSection}