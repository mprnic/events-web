import axios from 'axios';

import { EVENTS_SERVICE_URL } from '../constants';

export const getEvents = eventName => axios.get(`${EVENTS_SERVICE_URL}/events?eventName=${eventName}`);
export const getEvent = id => axios.get(`${EVENTS_SERVICE_URL}/events/${id}`);

export const buyTicket = ticketRequest => axios.post(`${EVENTS_SERVICE_URL}/tickets`, ticketRequest, { headers: { authorization: localStorage.getItem('authToken') } });
