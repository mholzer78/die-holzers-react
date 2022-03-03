import styles from './percentBar.module.scss';

type Props = {
	percent: number;
};

const barClasses = [
	styles.fill0,
	styles.fill10,
	styles.fill20,
	styles.fill30,
	styles.fill40,
	styles.fill50,
	styles.fill60,
	styles.fill70,
	styles.fill80,
	styles.fill90,
	styles.fill100,
];

const PercentBar = (props: Props) => {
	return (
		<span className={`${barClasses[props.percent / 10]}`}>
			<span>{props.percent}%</span>
		</span>
	);
};

export default PercentBar;
