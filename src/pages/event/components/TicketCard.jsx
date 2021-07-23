import { Button, Card, List, Statistic } from 'antd';
import React from 'react';

export const TicketCard = ({ event, user, onTicketAdd }) =>
    <Card className="ticket-card">
        <Card.Meta
            description={
                event.tickets
                    ?
                        <>
                            <List
                                dataSource={event.tickets}
                                itemLayout="horizontal"
                                renderItem={ticket => (
                                    <List.Item>
                                        <List.Item.Meta
                                            description={
                                                <Statistic
                                                    precision={2}
                                                    suffix="€"
                                                    value={ticket.price}
                                                />
                                            }
                                            title={ticket.name}
                                        />
                                        {user &&
                                            <Button
                                                type="primary"
                                                onClick={() => onTicketAdd(ticket)}
                                            >
                                                Add
                                            </Button>
                                        }
                                    </List.Item>
                                )}
                            />
                            {!user &&
                                <Button
                                    type="primary"
                                    onClick={() => window.location.assign('/login')}
                                >
                                    Sign in to buy tickets
                                </Button>
                            }
                        </>
                    : "This event is free"
            }
            title="Tickets"
        />
    </Card>;
