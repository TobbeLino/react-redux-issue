import { useSelector } from 'react-redux';
import { LangContext } from './LangProvider';
import { useContext } from 'react';

export const selectSomething = (state) => state.something;

export const TestComponent = ({ children }) => {
	const something = useSelector(selectSomething);	// <--- This is where it crashes...
	const { t } = useContext(LangContext);
	return (
		<>
			<div>I'm TestComponent: {something} {t()}</div>
			<div>
				{children}
			</div>
		</>
	);
};
