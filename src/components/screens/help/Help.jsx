import { useContext } from 'react';
import { veiwHelpContext } from '../../Context';
import styles from './Help.module.scss';

const Help = () => {
	const { veiwHelp, setVeiwHelp } = useContext(veiwHelpContext);

	return (
		<div className={styles.wrapper} onClick={() => setVeiwHelp(false)}>
			<div className={styles.intro}>
				<p>
					<strong>Наша визуальная новелла</strong> - это интерактивная игра,
					включающая анимацию с текстом, которую читает игрок.
				</p>
				<p>
					Игрок имеет возможность выбирать различные варианты действий, что
					влияет на развитие сюжета.
				</p>
			</div>
			<h2>
				<strong>Как сохранить/загрузить игру?</strong>
			</h2>
			<p>
				Игра, сохраняестя автоматически. Чтобы загрузить игру, вернитесь в меню
				и "Продолжить".
			</p>
			<h2>
				<strong>Как пропустить диалог?</strong>
			</h2>
			<p>
				Вы можете пропустить диалог, нажимаю в любое место экрана во время
				диалога.
			</p>
			<h2>
				<strong>Как влияют мои выборы на историю?</strong>
			</h2>
			<p>
				Ваши выборы влияют на отношения с другими персонажами и на исход
				истории. Они могут привести к различным концовкам.
			</p>

			<div className={styles.block}>
				<p className={styles.p1}>
					Если у вас возникли технические вопросы или проблемы с игрой,
					обратитесь в нашу службу поддержки по адресу
					<strong> support@fermafuturegame.com. </strong>
				</p>
				<p>
					Мы постараемся как можно скорее вам помочь. Мы надеемся, что вам
					понравится наша визуальная новелла <strong>"Ферма будущего". </strong>
					Удачи в игре!
				</p>
			</div>
		</div>
	);
};

export default Help;
