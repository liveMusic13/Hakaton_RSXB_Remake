import { useContext } from 'react';
import { saveStepContext } from '../../Context';
import styles from './Choise.module.scss';

const Choise = ({ one, two, three }) => {
	let { saveStep, setSaveStep } = useContext(saveStepContext);

	const goNarrativeChoise = variable => {
		if (saveStep === 'scene_one_options') {
			setSaveStep(`scene_one_${variable}`);
		} else if (saveStep === 'scene_two_options') {
			setSaveStep(`scene_two_${variable}`);
		} else if (saveStep === 'scene_three_options') {
			setSaveStep(`scene_three_${variable}`);
		} else if (saveStep === 'scene_four_options') {
			setSaveStep(`scene_four_${variable}`);
		} else if (saveStep === 'scene_five_options') {
			setSaveStep(`scene_five_${variable}`);
		}
	};

	return (
		<>
			<ul className={styles.wrapper}>
				<li
					onClick={() => {
						goNarrativeChoise('var-one');
					}}
				>
					{one}
				</li>
				<li
					onClick={() => {
						goNarrativeChoise('var-two');
					}}
				>
					{two}
				</li>
				<li
					onClick={() => {
						goNarrativeChoise('var-three');
					}}
				>
					{three}
				</li>
			</ul>
		</>
	);
};

export default Choise;
