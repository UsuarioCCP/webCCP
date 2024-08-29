import React, { useState, useEffect, useMemo } from 'react';
import { parseISO, format, isAfter, isValid } from 'date-fns';
import { es } from 'date-fns/locale';
import './styles.css'; // Para estilos adicionales si es necesario

const EventCalendar = ({ events }) => {
    const [organizedEvents, setOrganizedEvents] = useState({});
    const [selectedEvent, setSelectedEvent] = useState(null);

    const allMonths = useMemo(() => [
        'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
        'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ], []);

    useEffect(() => {
        const validEvents = events.filter(event => isValid(parseISO(event.date)));

        const eventsByMonth = validEvents.reduce((acc, event) => {
            const month = format(parseISO(event.date), 'MMMM', { locale: es });
            if (!acc[month]) {
                acc[month] = [];
            }
            acc[month].push(event);
            return acc;
        }, {});

        // Ordenar eventos dentro de cada mes por fecha
        for (let month in eventsByMonth) {
            eventsByMonth[month].sort((a, b) => parseISO(a.date) - parseISO(b.date));
        }

        // Asegurarse de que todos los meses están en organizedEvents
        const completeEventsByMonth = allMonths.reduce((acc, month) => {
            if (!eventsByMonth[month]) {
                acc[month] = [];
            } else {
                acc[month] = eventsByMonth[month];
            }
            return acc;
        }, {});

        setOrganizedEvents(completeEventsByMonth);

        // Encontrar el próximo evento futuro
        const today = new Date();
        const futureEvents = validEvents.filter(event => isAfter(parseISO(event.date), today));
        if (futureEvents.length > 0) {
            setSelectedEvent(futureEvents.sort((a, b) => parseISO(a.date) - parseISO(b.date))[0]);
        }
    }, [events, allMonths]);

    return (
        <div className="grid justify-items-center md:grid-cols-1 lg:grid-cols-2 lg:w-11/12 lg:h-[80vh] gap-10 mx-2 lg:mx-10">
            <div className="col-span-1 flex flex-wrap justify-center items-center self-center w-full">
                <h2 className="mb-5 text-2xl font-bold">Próximo evento</h2>
                {selectedEvent ? (
                    <div className="event-card card lg:card-side bg-base-100 shadow-xl ">
                        <figure className="w-full md:w-5/6 lg:w-1/2 flex-shrink-0 m-2">
                            <img src={selectedEvent.src} alt={selectedEvent.title} className="w-full h-auto object-cover" />
                        </figure>
                        <div className="card-body px-5 py-2 m-2 flex flex-col">
                            <h2 className="card-title line-clamp-3">{selectedEvent.title}</h2>
                            <p className="overflow-hidden text-ellipsis text-balance ... lg:w-5/6 max-h-64">{selectedEvent.description}</p>
                            <p><strong>Fecha:</strong> {format(parseISO(selectedEvent.date), 'dd/MM/yyyy')}</p>
                            <p><strong>Hora:</strong> {selectedEvent.time}</p>
                            <p><strong>Tema:</strong> {selectedEvent.theme}</p>
                            <p><strong>Capacitador:</strong> {selectedEvent.speaker}</p>
                        </div>
                    </div>
                ) : (
                    <div className="text-center leading-loose">
                        <p>
                            ¡Ups! Parece que no hay nada programado para esta fecha. Pero no te preocupes, ¡siempre hay más por venir!
                            Estamos trabajando duro para preparar eventos emocionantes que te encantarán. ¡Estén atentos!
                        </p>
                    </div>
                )}
            </div>
            <div className="col-span-1 flex flex-wrap justify-start w-full items-center overflow-y-auto">
                <div className="lg:w-10/12 px-5 py-5 flex flex-wrap justify-center items-center self-center">
                    <h2 className="mb-5 text-2xl font-bold text-center">Agendate con tus eventos favoritos</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {allMonths.map((month, index) => (
                            <div key={index} className="bg-gray-100 mb-1 border border-gray-300 rounded-md shadow-md flex flex-col h-[6.5rem]">
                                <h2 className={`text-xl text-center text-white uppercase font-semibold h-8 ${index < 3 || (index >= 6 && index < 9) ? 'gradient-rose' : 'gradient-blue'}`}>
                                    {month}
                                </h2>
                                <ul className="list-none p-1 flex-col overflow-auto max-h-40">
                                    {organizedEvents[month] && organizedEvents[month].length > 0 ? (
                                        organizedEvents[month].map((event, idx) => (
                                            <li key={idx} className="cursor-pointer hover:bg-gray-200 p-1 rounded" onClick={() => setSelectedEvent(event)}>
                                                <p className="text-xs truncate"><strong className=" font-bold pr-1">{format(parseISO(event.date), 'dd')}</strong> {event.title}</p>
                                            </li>
                                        ))
                                    ) : (
                                        <li className="text-xs p-2">No hay eventos programados.</li>
                                    )}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export { EventCalendar };
