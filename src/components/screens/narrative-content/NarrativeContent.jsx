import { useContext } from 'react';
import { saveStepContext } from '../../Context';
import styles from './NarrativeContent.module.scss';

const NarrativeContent = ({ children }) => {
	let { saveStep, setSaveStep } = useContext(saveStepContext);

	const goNarrative =
		saveStep === 'start'
			? 'scene_one_options'
			: saveStep === 'scene_one_var-two'
			? 'scene_one_var-two-two'
			: saveStep === 'scene_one_var-three'
			? 'scene_one_var-three-three'
			: saveStep === 'scene_one_var-one' ||
			  saveStep === 'scene_one_var-two-two' ||
			  saveStep === 'scene_one_var-three-three'
			? 'scene_two_intro'
			: //вторая сцена
			saveStep === 'scene_two_intro'
			? 'scene_two_options'
			: saveStep === 'scene_two_var-one'
			? 'scene_two_var-one-two'
			: saveStep === 'scene_two_var-two'
			? 'scene_two_var-two-two'
			: saveStep === 'scene_two_var-three'
			? 'scene_two_var-three-three'
			: saveStep === 'scene_two_var-one-two' ||
			  saveStep === 'scene_two_var-two-two' ||
			  saveStep === 'scene_two_var-three-three'
			? 'scene_three_intro'
			: //третья сцена
			saveStep === 'scene_three_intro'
			? 'scene_three_options'
			: saveStep === 'scene_three_var-one'
			? 'scene_three_var-one-two'
			: saveStep === 'scene_three_var-two'
			? 'scene_three_var-two-two'
			: saveStep === 'scene_three_var-three'
			? 'scene_three_var-three-three'
			: saveStep === 'scene_three_var-one-two' ||
			  saveStep === 'scene_three_var-two-two' ||
			  saveStep === 'scene_three_var-three-three'
			? 'scene_four_intro'
			: //четвертое сцена
			saveStep === 'scene_four_intro'
			? 'scene_four_options'
			: saveStep === 'scene_four_var-one'
			? 'scene_four_var-one-two'
			: saveStep === 'scene_four_var-two'
			? 'scene_four_var-two-two'
			: saveStep === 'scene_four_var-three'
			? 'scene_four_var-three-three'
			: saveStep === 'scene_four_var-one-two' ||
			  saveStep === 'scene_four_var-two-two' ||
			  saveStep === 'scene_four_var-three-three'
			? 'scene_five_intro'
			: //пятое сцена
			saveStep === 'scene_five_intro'
			? 'scene_five_options'
			: saveStep === 'scene_five_var-one'
			? 'scene_five_var-one-two'
			: saveStep === 'scene_five_var-two'
			? 'scene_five_var-two-two'
			: saveStep === 'scene_five_var-three'
			? 'scene_five_var-three-three'
			: saveStep === 'scene_five_var-one-two' ||
			  saveStep === 'scene_five_var-two-two' ||
			  saveStep === 'scene_five_var-three-three'
			? 'scene_five_intro'
			: null;

	const saveToLocalStorage = () => {
		const serializedSaveStep = JSON.stringify(saveStep);
		localStorage.setItem('saveStep', serializedSaveStep);
	};

	return (
		<div
			className={styles.wrapper}
			onClick={() => {
				setSaveStep(goNarrative);
				saveToLocalStorage();
			}}
		>
			<p>{children}</p>
		</div>
	);
};

export default NarrativeContent;
