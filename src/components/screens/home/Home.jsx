import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveStepContext, veiwHelpContext } from '../../Context';
import Help from '../help/Help';
import styles from './Home.module.scss';

const Home = () => {
	const navigate = useNavigate();
	const { veiwHelp, setVeiwHelp } = useContext(veiwHelpContext);
	let { saveStep, setSaveStep } = useContext(saveStepContext);

	useEffect(() => {
		const storedSaveStep = localStorage.getItem('saveStep');
		if (storedSaveStep) {
			// Парсим строку из локального хранилища в объект
			const parsedSaveStep = JSON.parse(storedSaveStep);
			setSaveStep(parsedSaveStep);
		}
	}, []);

	return (
		<div className={styles.wrapper}>
			{veiwHelp ? <Help /> : <></>}
			<h1>Ферма будущего</h1>
			<h2>визуальная новелла</h2>
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
