import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Button.module.scss';

const Button = ({ children, dafoultNameInput, nameInput }) => {
	const navigate = useNavigate();

	const addName = () => {
		let name = '';

		if (nameInput === '') {
			name = dafoultNameInput;
		} else {
			name = nameInput;
		}
		navigate('/stepOne');
		console.log(name);
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

	return (
		<div>
			<button className={styles[styleButtonActive]} onClick={() => addName()}>
				{children}
			</button>
		</div>
	);
};

export default Button;
