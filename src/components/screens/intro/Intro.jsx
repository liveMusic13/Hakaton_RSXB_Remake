import { useState } from 'react';
import Button from '../../ui/button/Button';
import Input from '../../ui/input/Input';
import styles from './Intro.module.scss';

const Intro = () => {
	const arrName = [
		'Великий кукурузник',
		'Чык-чырык',
		'Морковь всемогущая',
		'Бурак гневный',
		'Авокадий ||',
	];

	const generateName = arr => {
		return arr[Math.floor(Math.random() * arr.length)];
	};

	const step1 = (
		<div className={styles.block__content}>
			<h3>
				<strong>Добро пожаловать!</strong>
			</h3>
			<p className={styles.paragraph}>
				В этом приключении вы окажетесь в роли фермера, который стремится
				преуспеть в своем деле, все время сталкиваясь с различными проблемами и
				предлагая решения.
			</p>
		</div>
	);
	const step2 = (
		<div className={styles.block__content1}>
			<p className={styles.paragraph}>
				От вашего выбора зависит будущее вашей фермыи ваших отношений с
				окружающим миром.
			</p>
		</div>
	);
	const step3 = (
		<div className={styles.block__content2}>
			<p className={styles.paragraph}>
				Помните, что нет правильного или неправильного пути - это ваша история,
				и вы выбираете, как именно вы будете ее рассказывать.
			</p>
		</div>
	);

	const [dafoultNameInput, setDefaultNameInput] = useState(
		generateName(arrName)
	);
	const [nameInput, setNameInput] = useState('');

	const [intro, setIntro] = useState(step1);
	const [numStep, setNumStep] = useState(1);
	const [viewInputName, setViewInputName] = useState(false);

	const backgroundIntro =
		numStep === 1 ? (
			'url(./glav-rob.png)'
		) : numStep === 2 ? (
			'url(./glav-rob2.png)'
		) : numStep === 3 ? (
			'url(./glav-rob.png)'
		) : numStep === 4 ? (
			'url(./glav-none.png)'
		) : (
			<></>
		);
	const stylesTriangle =
		numStep === 1 ? (
			'test'
		) : numStep === 2 ? (
			'test1'
		) : numStep === 3 ? (
			'test'
		) : (
			<></>
		);

	const stepIntro = () => {
		if (numStep === 1) {
			setNumStep(2);
			setIntro(step2);
		} else if (numStep === 2) {
			setNumStep(3);
			setIntro(step3);
		} else {
			setNumStep(4);
			setViewInputName(true);
		}
	};

	return (
		<div
			onClick={() => stepIntro()}
			className={styles.wrapper}
			style={{ backgroundImage: backgroundIntro }}
		>
			{viewInputName ? (
				<>
					<h2 className={styles.title_input}>Введите свое имя</h2>
					<Input
						dafoultNameInput={dafoultNameInput}
						nameInput={nameInput}
						setNameInput={setNameInput}
					/>
					<Button dafoultNameInput={dafoultNameInput} nameInput={nameInput}>
						Начать приключение
					</Button>
				</>
			) : (
				<>
					{intro}
					<div className={styles[stylesTriangle]}></div>
				</>
			)}
		</div>
	);
};

export default Intro;
