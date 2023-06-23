# react-redux-issue
Demo issues with react-redux v8.1.1 shared contexts + multiple independent preact/react modules

## Install
```
npm install
```

## Demo
Run with Preact modules:
```
npm run start:preact
```
...and open: http://localhost:8085

Run with React modules:
```
npm run start:react
```
...and open: http://localhost:8086

## Issue
When using react-redux v8.1.1 with multiple independent preact/react modules, the react context is shared between the modules. This is not the case with react-redux v8.1.0.

Loading only one of the modules works fine.
But loading first module 1 and then module 2 causes Preact to crash and React to display a warning in the console. However, loading module 2 first, and then module 1 work. 

What's even more confusing is that if module 1 imports libs that module 2 uses (e.g. the 'LangProvider' or '@emotion/styled'), it starts working!
The two modules are apparently affecting each other, although they should be completely independent.

The reason is probably that react-redux v8.1.1 shares the react context (through the global browser scope), so independent modules/apps on the same page will suddenly be depending on each other if they happen to use the same react version and react-redux 8.1.1.

This may lead to **VERY** hard-to-analyze issues where behaviour depends on the order of which different apps happen to load on a webpage. Another issue is that Preact pretends to be React "17.0.2", and if one preact module is loaded at the same time as a "real" React 17.0.2 module, it will sure lead to violent crashes.

## Workarounds
- Downgrade to react-redux v8.1.0, which does not share the react context.
- Use a custom react-redux context: https://react-redux.js.org/api/hooks#custom-context
