import React, { useEffect, useState } from 'react';

import { Navigation } from '../../common';
import { EventsService } from '../../services';
import { BuyCard, EventCard, TicketCard } from './components';

import './event.scss';

export const Event = ({ user }) => {
    const [card, setCard] = useState({
        cardNumber: "2222 4000 7000 0005",
        cvc: "737",
        expiry: "03/30"
    });
    const [event, setEvent] = useState({});
    const [paymentMethod, setPaymentMethod] = useState(1);
    const [chosenTickets, setChosenTickets] = useState([]);

    useEffect(() => {
        const id = window.location.pathname.split('/').slice(-1);
        EventsService.getEvent(id)
            .then(response => {
                setEvent(response.data);
            });
    }, []);

    const onBuy = async () => {
        let ticketRequest = {
            eventId: event._id,
            paymentMethod: paymentMethod,
            tickets: chosenTickets.map(({ id, ...rest }) => rest)
        };

        if (paymentMethod === 2)
            ticketRequest.cardInfo = card;

        try {
            await EventsService.buyTicket(ticketRequest);
            window.location.assign('/my-tickets');
        } catch (error) {
            console.log(error);
        }
    }

    const onTicketAdd = addedTicket => {
        const chosenTicket = {
            ...addedTicket,
            id: Math.random().toString(36).substr(2, 9)
        };

        setChosenTickets([...chosenTickets, chosenTicket]);
    }

    return (
        <>
            <Navigation user={user} />
            <div className="event">
                <EventCard event={event} />
                <div>
                    <TicketCard
                        event={event}
                        user={user}
                        onTicketAdd={onTicketAdd}
                    />
                    {chosenTickets.length > 0 &&
                        <BuyCard
                            card={card}
                            chosenTickets={chosenTickets}
                            paymentMethod={paymentMethod}
                            onBuy={onBuy}
                            setCard={setCard}
                            setChosenTickets={setChosenTickets}
                            setPaymentMethod={setPaymentMethod}
                        />
                    }
                </div>
            </div>
        </>
    );
}
