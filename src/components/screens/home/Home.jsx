import { useNavigate } from 'react-router-dom';
import styles from './Home.module.scss';

const Home = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.wrapper}>
			<h1>Ферма будущего</h1>
			<h2>визуальная новелла</h2>
			<ul>
				<li onClick={() => navigate('/intro')}>Начать игру</li>
				<li>Помощь</li>
				<li>Выход</li>
			</ul>
		</div>
	);
};

export default Home;
