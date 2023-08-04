import styles from './Input.module.scss';

const Input = ({ dafoultNameInput, nameInput, setNameInput }) => {
	return (
		<>
			<input
				className={styles.input}
				type='text'
				placeholder={dafoultNameInput}
				value={nameInput}
				onChange={event => setNameInput(event.target.value)}
			/>
		</>
	);
};

export default Input;
