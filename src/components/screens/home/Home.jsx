import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveStepContext, veiwHelpContext } from '../../Context';
import Help from '../help/Help';
import styles from './Home.module.scss';

const Home = () => {
	const [name, setName] = useState('');
	const navigate = useNavigate();
	let { veiwHelp, setVeiwHelp } = useContext(veiwHelpContext);
	let { saveStep, setSaveStep } = useContext(saveStepContext);

	useEffect(() => {
		const storedSaveStep = localStorage.getItem('saveStep');
		const storedSaveName = localStorage.getItem('name');
		if (storedSaveStep) {
			// Парсим строку из локального хранилища в объект
			const parsedSaveStep = JSON.parse(storedSaveStep);
			setSaveStep(parsedSaveStep);
		}

		if (storedSaveName) {
			// Парсим строку из локального хранилища в объект
			const parsedSaveName = JSON.parse(storedSaveName);
			setName(parsedSaveName);
		}
	}, []);

	return (
		<div className={styles.wrapper}>
			{veiwHelp ? <Help /> : <></>}
			<h1>Ферма будущего</h1>
			<h2>визуальная новелла</h2>
			{name ? (
				<h2 style={{ marginTop: '0.5em' }}>Добро пожаловать {name}!</h2>
			) : (
				<></>
			)}
			<ul>
				<li
					onClick={() => {
						setSaveStep('start');
						navigate('/intro');
					}}
				>
					Начать игру
				</li>
				{saveStep !== 'start' && saveStep ? (
					<li onClick={() => navigate('/narrativeWindow')}>Продолжить</li>
				) : (
					<></>
				)}

				<li onClick={() => setVeiwHelp(true)}>Помощь</li>
				<li>Выход</li>
			</ul>
		</div>
	);
};

export default Home;
