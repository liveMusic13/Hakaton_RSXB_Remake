import { useContext } from 'react';
import data from '../../../data.js';
import { saveStepContext, veiwHelpContext } from '../../Context.jsx';
import Button from '../../ui/button/Button';
import Choise from '../choise/Choise.jsx';
import Help from '../help/Help.jsx';
import NarrativeContent from '../narrative-content/NarrativeContent.jsx';
import styles from './NarrativeWindow.module.scss';

const NarrativeWindow = () => {
	let { veiwHelp, setVeiwHelp } = useContext(veiwHelpContext);
	let { saveStep, setSaveStep } = useContext(saveStepContext);

	const roadMapForBackground =
		saveStep === 'start'
			? 'url(./scena_1-vyb.png)'
			: saveStep === 'scene_one_options'
			? 'url(./scena_1-vyb.png)'
			: saveStep === 'scene_one_var-one'
			? 'url(./scena_1-vyb.png)'
			: saveStep === 'scene_one_var-two'
			? 'url(./scena_1-vyb.png)'
			: saveStep === 'scene_one_var-two-two'
			? 'url(./scena_1-vyb.png)'
			: saveStep === 'scene_one_var-three'
			? 'url(./scena_1-vyb.png)'
			: saveStep === 'scene_one_var-three-three'
			? 'url(./scena_1-vyb.png)'
			: saveStep === 'scene_two_intro'
			? 'url(./scena_2-zas.png)'
			: saveStep === 'scene_two_options'
			? 'url(./scena_2-zas.png)'
			: saveStep === 'scene_two_var-one'
			? 'url(./scena_2-zas.png)'
			: saveStep === 'scene_two_var-one-two'
			? 'url(./scena_2-zas.png)'
			: saveStep === 'scene_two_var-two'
			? 'url(./scena_2-zas.png)'
			: saveStep === 'scene_two_var-two-two'
			? 'url(./scena_2-zas.png)'
			: saveStep === 'scene_two_var-three'
			? 'url(./scena_2-zas.png)'
			: saveStep === 'scene_two_var-three-three'
			? 'url(./scena_2-vyb3.png)'
			: saveStep === 'scene_three_intro'
			? 'url(./scena_3-zas.png)'
			: saveStep === 'scene_three_options'
			? 'url(./scena_3-zas.png)'
			: saveStep === 'scene_three_var-one'
			? 'url(./scena_3-zas.png)'
			: saveStep === 'scene_three_var-one-two'
			? 'url(./scena_3-zas.png)'
			: saveStep === 'scene_three_var-two'
			? 'url(./scena_3-ambar-2.png)'
			: saveStep === 'scene_three_var-two-two'
			? 'url(./scena_3-ambar-2.png)'
			: saveStep === 'scene_three_var-three'
			? 'url(./scena_3-ambar-2.png)'
			: saveStep === 'scene_three_var-three-three'
			? 'url(./scena_3-ambar-2.png)'
			: saveStep === 'scene_four_intro'
			? 'url(./scena-4-zas.png)'
			: saveStep === 'scene_four_options'
			? 'url(./scena-4-zas.png)'
			: saveStep === 'scene_four_var-two'
			? 'url(./scena-4-zas.png)'
			: saveStep === 'scene_four_var-two-two'
			? 'url(./scena-4-zas.png)'
			: saveStep === 'scene_four_var-three'
			? 'url(./scena-4-zas.png)'
			: saveStep === 'scene_four_var-three-three'
			? 'url(./scena-4-zas.png)'
			: saveStep === 'scene_four_var-one' ||
			  saveStep === 'scene_four_var-one-two' ||
			  saveStep === 'scene_five_var-one' ||
			  saveStep === 'scene_five_var-one-two'
			? 'url(./scena_4-vyb3.png)'
			: saveStep === 'scene_five_intro'
			? 'url(./scena_5-zas.png)'
			: saveStep === 'scene_five_options'
			? 'url(./scena_5-zas.png)'
			: saveStep === 'scene_five_var-two'
			? 'url(./scena_5-vyb-2.png)'
			: saveStep === 'scene_five_var-two-two'
			? 'url(./scena_5-vyb-2.png)'
			: saveStep === 'scene_five_var-three'
			? 'url(./scena_4-vyb3.png)'
			: saveStep === 'scene_five_var-three-three'
			? 'url(./scena_4-vyb3.png)'
			: '';

	const choiceАndСonsequences =
		saveStep === 'start' ? (
			<NarrativeContent>{data.scene_one.intro}</NarrativeContent>
		) : saveStep === 'scene_one_options' ? (
			<Choise
				one={data.scene_one.options[0]}
				two={data.scene_one.options[1]}
				three={data.scene_one.options[2]}
			/>
		) : saveStep === 'scene_one_var-one' ? (
			<NarrativeContent>{data.scene_one.consequence.one[0]}</NarrativeContent>
		) : saveStep === 'scene_one_var-two' ? (
			<NarrativeContent>{data.scene_one.consequence.two[0]}</NarrativeContent>
		) : saveStep === 'scene_one_var-two-two' ? (
			<NarrativeContent>{data.scene_one.consequence.two[1]}</NarrativeContent>
		) : saveStep === 'scene_one_var-three' ? (
			<NarrativeContent>{data.scene_one.consequence.three[0]}</NarrativeContent>
		) : saveStep === 'scene_one_var-three-three' ? (
			<NarrativeContent>{data.scene_one.consequence.three[1]}</NarrativeContent>
		) : saveStep === 'scene_two_intro' ? (
			<NarrativeContent>{data.scene_two.intro}</NarrativeContent>
		) : // сцена вторая
		saveStep === 'scene_two_options' ? (
			<Choise
				one={data.scene_two.options[0]}
				two={data.scene_two.options[1]}
				three={data.scene_two.options[2]}
			/>
		) : saveStep === 'scene_two_var-one' ? (
			<NarrativeContent>{data.scene_two.consequence.one[0]}</NarrativeContent>
		) : saveStep === 'scene_two_var-one-two' ? (
			<NarrativeContent>{data.scene_two.consequence.one[1]}</NarrativeContent>
		) : saveStep === 'scene_two_var-two' ? (
			<NarrativeContent>{data.scene_two.consequence.two[0]}</NarrativeContent>
		) : saveStep === 'scene_two_var-two-two' ? (
			<NarrativeContent>{data.scene_two.consequence.two[1]}</NarrativeContent>
		) : saveStep === 'scene_three_intro' ? (
			<NarrativeContent>{data.scene_three.intro}</NarrativeContent>
		) : saveStep === 'scene_two_var-three' ? (
			<NarrativeContent>{data.scene_two.consequence.three[0]}</NarrativeContent>
		) : saveStep === 'scene_two_var-three-three' ? (
			<NarrativeContent>{data.scene_two.consequence.three[1]}</NarrativeContent>
		) : // сцена третья
		saveStep === 'scene_three_options' ? (
			<Choise
				one={data.scene_three.options[0]}
				two={data.scene_three.options[1]}
				three={data.scene_three.options[2]}
			/>
		) : saveStep === 'scene_three_var-one' ? (
			<NarrativeContent>{data.scene_three.consequence.one[0]}</NarrativeContent>
		) : saveStep === 'scene_three_var-one-two' ? (
			<NarrativeContent>{data.scene_three.consequence.one[1]}</NarrativeContent>
		) : saveStep === 'scene_three_var-two' ? (
			<NarrativeContent>{data.scene_three.consequence.two[0]}</NarrativeContent>
		) : saveStep === 'scene_three_var-two-two' ? (
			<NarrativeContent>{data.scene_three.consequence.two[1]}</NarrativeContent>
		) : saveStep === 'scene_four_intro' ? (
			<NarrativeContent>{data.scene_three.intro}</NarrativeContent>
		) : saveStep === 'scene_three_var-three' ? (
			<NarrativeContent>
				{data.scene_three.consequence.three[0]}
			</NarrativeContent>
		) : saveStep === 'scene_three_var-three-three' ? (
			<NarrativeContent>
				{data.scene_three.consequence.three[1]}
			</NarrativeContent>
		) : // сцена четвертая
		saveStep === 'scene_four_options' ? (
			<Choise
				one={data.scene_four.options[0]}
				two={data.scene_four.options[1]}
				three={data.scene_four.options[2]}
			/>
		) : saveStep === 'scene_four_var-one' ? (
			<NarrativeContent>{data.scene_four.consequence.one[0]}</NarrativeContent>
		) : saveStep === 'scene_four_var-one-two' ? (
			<NarrativeContent>{data.scene_four.consequence.one[1]}</NarrativeContent>
		) : saveStep === 'scene_four_var-two' ? (
			<NarrativeContent>{data.scene_four.consequence.two[0]}</NarrativeContent>
		) : saveStep === 'scene_four_var-two-two' ? (
			<NarrativeContent>{data.scene_four.consequence.two[1]}</NarrativeContent>
		) : saveStep === 'scene_five_intro' ? (
			<NarrativeContent>{data.scene_four.intro}</NarrativeContent>
		) : saveStep === 'scene_four_var-three' ? (
			<NarrativeContent>
				{data.scene_four.consequence.three[0]}
			</NarrativeContent>
		) : saveStep === 'scene_four_var-three-three' ? (
			<NarrativeContent>
				{data.scene_four.consequence.three[1]}
			</NarrativeContent>
		) : // сцена пятая
		saveStep === 'scene_five_options' ? (
			<Choise
				one={data.scene_five.options[0]}
				two={data.scene_five.options[1]}
				three={data.scene_five.options[2]}
			/>
		) : saveStep === 'scene_five_var-one' ? (
			<NarrativeContent>{data.scene_five.consequence.one[0]}</NarrativeContent>
		) : saveStep === 'scene_five_var-one-two' ? (
			<NarrativeContent>{data.scene_five.consequence.one[1]}</NarrativeContent>
		) : saveStep === 'scene_five_var-two' ? (
			<NarrativeContent>{data.scene_five.consequence.two[0]}</NarrativeContent>
		) : saveStep === 'scene_five_var-two-two' ? (
			<NarrativeContent>{data.scene_five.consequence.two[1]}</NarrativeContent>
		) : saveStep === 'scene_five_intro' ? (
			<NarrativeContent>{data.scene_five.intro}</NarrativeContent>
		) : saveStep === 'scene_five_var-three' ? (
			<NarrativeContent>
				{data.scene_five.consequence.three[0]}
			</NarrativeContent>
		) : saveStep === 'scene_five_var-three-three' ? (
			<NarrativeContent>
				{data.scene_five.consequence.three[1]}
			</NarrativeContent>
		) : null;

	return (
		<div
			className={styles.wrapper}
			style={{ backgroundImage: roadMapForBackground }}
		>
			<Button veiwHelp={veiwHelp} setVeiwHelp={setVeiwHelp} help={'help'}>
				<img src='./help-no-active.svg' alt='help' />
			</Button>
			<Button exit={'exit'}>
				<img src='./exit-no-active.svg' alt='exit' />
			</Button>
			{veiwHelp ? <Help /> : <></>}
			{choiceАndСonsequences}
		</div>
	);
};

export default NarrativeWindow;
