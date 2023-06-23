/*
This component is only used in module2, and when it loads alone, it all works.
But when it loads a few seconds after module1 (after it has set the global context), the following happens:
    <GlobalStyles> below only works if 'styled' (from '@emotion/styled') is also imported in "Main_1.js" (which is *only* used in module1, i.e. a completely different module/app)
    <LangProvider> below works if either 'LangProvider' OR '@emotion/styled' also imported in "Main_1.js"
    ...a bit weird that <LangProvider> starts working when '@emotion/styled' (only, totally unrelated) has been imported earlier in a different module...
*/
import { TestComponent } from './TestComponent';
import { LangProvider } from './LangProvider';
import { Global } from '@emotion/react';
const GlobalStyles = () => {
    return (
        <Global styles={{
            body: {
                'backgroundColor': '#FFFFAA',
                'fontFamily': 'Sans-serif'
            }
        }} />
    )
}

export const Main_2 = () => {
    return (
        <>
            <GlobalStyles />
            <div>I'm Main_2 #1</div>
            <LangProvider>
                <div>I'm Main_2 #2</div>
                <TestComponent>
                    <div>I'm Main_2 #3</div>
                </TestComponent>
            </LangProvider>
        </>
    );
}
