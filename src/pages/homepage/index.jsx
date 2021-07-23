import { Affix, Input } from 'antd';
import React, { useEffect, useState } from 'react';

import { Navigation } from '../../common';
import { EventsService } from '../../services';
import { EventCard } from './components';

import './homepage.scss';

export const Homepage = ({ user }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        EventsService.getEvents("")
            .then(response => {
                setEvents(response.data);
            });
    }, []);

    const onSearch = async searchText => {
        setIsLoading(true);
        const response = await EventsService.getEvents(searchText);
        setEvents(response.data);
        setIsLoading(false);
    }

    return (
        <>
            <Navigation user={user} />
            <div className="homepage">
                <Affix>
                    <div className="search-bar">
                        <Input.Search
                            enterButton
                            loading={isLoading}
                            placeholder="Search by event name"
                            onSearch={onSearch}
                        />
                    </div>
                </Affix>
                <div className="events">
                    {events.map(e =>
                        <EventCard
                            event={e}
                            key={e._id}
                        />
                    )}
                </div>
            </div>
        </>
    );
}