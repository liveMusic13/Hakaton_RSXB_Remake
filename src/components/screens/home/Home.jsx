import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { veiwHelpContext } from '../../Context';
import Help from '../help/Help';
import styles from './Home.module.scss';

const Home = () => {
	const navigate = useNavigate();
	const { veiwHelp, setVeiwHelp } = useContext(veiwHelpContext);

	return (
		<div className={styles.wrapper}>
			{veiwHelp ? <Help /> : <></>}
			<h1>Ферма будущего</h1>
			<h2>визуальная новелла</h2>
			<ul>
				<li onClick={() => navigate('/intro')}>Начать игру</li>
				<li onClick={() => setVeiwHelp(true)}>Помощь</li>
				<li>Выход</li>
			</ul>
		</div>
	);
};

export default Home;
