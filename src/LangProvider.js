import { createContext } from 'react'
import { useSelector } from 'react-redux';

export const LangContext = createContext({
    // this default context is used if a component is not wrapped in a <LangProvider>  (should not happen)
    t: (key) => 'blabla#1',
    currentLang: 'en'
});

export const LangProvider = ({ children }) => {
    const currentLang = useSelector(state => state.currentLang);

    // Generate a new context when translations change...
    const ctx = {
        t: (key) => 'blabla#2',
        currentLang
    }

    return (
        <LangContext.Provider value={ctx}>
            {children}
        </LangContext.Provider>
    );
};
