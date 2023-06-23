import React from 'react'
import { Provider } from 'react-redux';
import { store } from './store';
import { Main_2 } from './Main_2';

export const App_2 = () => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <div>
                    module 2
                </div>
                <Main_2 />
            </Provider>
        </React.StrictMode>
    );
}
