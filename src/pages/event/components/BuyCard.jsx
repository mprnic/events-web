import { CreditCardTwoTone, DollarTwoTone } from '@ant-design/icons';
import { Button, Card, List, Radio, Space, Statistic } from 'antd';
import React from 'react';
import CreditCardInput from 'react-credit-card-input';

export const BuyCard = ({ card, chosenTickets, paymentMethod, onBuy, setCard, setChosenTickets, setPaymentMethod }) =>
    <Card className="ticket-card">
        <Card.Meta
            description={
                <>
                    <h3>Chosen tickets</h3>
                    <List
                        dataSource={chosenTickets}
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
                                <Button
                                    type="danger"
                                    onClick={() => setChosenTickets(chosenTickets.filter(t => t.id !== ticket.id))}
                                >
                                    Remove
                                </Button>
                            </List.Item>
                        )}
                    />
                    <h3 className="payment">Payment method</h3>
                    <Radio.Group
                        value={paymentMethod}
                        onChange={event => setPaymentMethod(event.target.value)}
                    >
                        <Space direction="vertical">
                            <Radio value={1}><DollarTwoTone /> Cash</Radio>
                            <Radio value={2}><CreditCardTwoTone /> Credit card</Radio>
                        </Space>
                    </Radio.Group>
                    {paymentMethod === 2 &&
                        <div className="credit-card">
                            <CreditCardInput
                                cardNumberInputProps={{ value: card.cardNumber, onChange: event => setCard({ ...card, cardNumber: event.target.value }) }}
                                cardExpiryInputProps={{ value: card.expiry, onChange: event => setCard({ ...card, expiry: event.target.value }) }}
                                cardCVCInputProps={{ value: card.cvc, onChange: event => setCard({ ...card, cvc: event.target.value }) }}
                                fieldStyle={{ border: "1px solid #1890ff" }}
                            />
                        </div>
                    }
                    <div>
                        <Button
                            className="buy-button"
                            type="primary"
                            onClick={onBuy}
                        >
                            Buy
                        </Button>
                    </div>
                </>
            }
        />
    </Card>;
