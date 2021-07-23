import { UserOutlined } from '@ant-design/icons';
import { Affix, Button } from 'antd';
import React from 'react';

export const Navigation = ({ user }) =>
    <Affix>
        <div className="navigation">
            <div>
                <Button
                    type="text"
                    onClick={() => window.location.assign('/')}
                >
                    Events
                </Button>
                {user &&
                    <>
                        <Button
                            type="text"
                            onClick={() => window.location.assign('/my-tickets')}
                        >
                            My tickets
                        </Button>
                        {user.accountType > 0 &&
                            <Button
                                type="text"
                                onClick={() => window.location.assign('/my-events')}
                            >
                                My events
                            </Button>
                        }
                    </>
                }
            </div>
            <div>
                {user
                    ?
                    <>
                        <span className="user"><UserOutlined /> {user.email}</span>
                        <Button
                            danger
                            onClick={() => {
                                localStorage.removeItem('authToken');
                                window.location.assign(window.location);
                            }}
                        >
                            Log out
                        </Button>
                    </>
                    :
                    <>
                        <Button
                            ghost
                            type="primary"
                            onClick={() => window.location.assign('/login')}
                        >
                            Sign in
                        </Button>
                        <Button
                            type="primary"
                            onClick={() => window.location.assign('/register')}
                        >
                            Register
                        </Button>
                    </>
                }
            </div>
        </div>
    </Affix>;
