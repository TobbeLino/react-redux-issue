import React from 'react'
import { Provider } from 'react-redux';
import { store } from './store';
import { Main_1 } from './Main_1';

export const App_1 = () => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <div>
                    module 1
                </div>
                <Main_1/>
            </Provider>
        </React.StrictMode>
    );
};
