import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveStepContext } from '../../Context';
import styles from './Button.module.scss';

const Button = ({
	children,
	dafoultNameInput,
	nameInput,
	help,
	exit,
	veiwHelp,
	setVeiwHelp,
}) => {
	const navigate = useNavigate();

	const addName = () => {
		let name = '';

		const saveToLocalStorage = () => {
			const serializedSaveName = JSON.stringify(name);
			localStorage.setItem('name', serializedSaveName);
		};

		if (nameInput === '') {
			name = dafoultNameInput;
		} else {
			name = nameInput;
		}
		navigate('/narrativeWindow');
		saveToLocalStorage(name);
		return name;
	};

	const [styleButtonActive, setStyleButtonActive] = useState('button');

	useEffect(() => {
		const test = () => {
			if (!nameInput) {
				return 'button';
			} else if (nameInput) {
				return 'button1';
			}
		};
		setStyleButtonActive(test());
	}, [nameInput]);

	let { saveStep, setSaveStep } = useContext(saveStepContext);

	return (
		<>
			{help ? (
				<button className={styles.help} onClick={() => setVeiwHelp(!veiwHelp)}>
					{children}
				</button>
			) : exit ? (
				<button
					className={styles.exit}
					onClick={() => {
						setSaveStep('start');
						navigate('/');
					}}
				>
					{children}
				</button>
			) : (
				<button className={styles[styleButtonActive]} onClick={() => addName()}>
					{children}
				</button>
			)}
		</>
	);
};

export default Button;
