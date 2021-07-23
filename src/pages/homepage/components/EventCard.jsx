import { ClockCircleTwoTone, EnvironmentTwoTone } from '@ant-design/icons';
import { Card, Statistic } from 'antd';
import React from 'react';

import { resolveImage } from '../../../utils';

export const EventCard = ({ event }) =>
    <Card
        className="event-card"
        cover={<img src={resolveImage(event.type)} />}
        hoverable
        onClick={() => window.location.assign(`/event/${event._id}`)}
    >
        <Card.Meta
            description={
                <>
                    <p>
                        {event.description}
                    </p>
                    <div>
                        <EnvironmentTwoTone twoToneColor="#EA4335" /> {event.location}
                    </div>
                    <div>
                        <ClockCircleTwoTone /> {event.date}
                    </div>
                    {event.tickets
                        ?
                            <Statistic
                                value={event.tickets.map(t => t.price).reduce((p1, p2) => Math.min(p1, p2))}
                                precision={2}
                                prefix="From "
                                suffix="€"
                            />
                        : "Free event"
                    }
                </>
            }
            title={event.name}
        />
    </Card>;
