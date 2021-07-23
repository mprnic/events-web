import { ClockCircleTwoTone, EnvironmentTwoTone } from '@ant-design/icons';
import { Card } from 'antd';
import React from 'react';

import { resolveImage } from '../../../utils';

export const EventCard = ({ event }) =>
    <Card
        className="event-card"
        cover={<img src={resolveImage(event.type)} />}
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
                </>
            }
            title={event.name}
        />
    </Card>;
