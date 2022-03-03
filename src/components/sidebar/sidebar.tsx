import styles from './sidebar.module.scss';

type Props = {
	language: number;
    switchLang: any;
};

const Sidebar = (props: Props) => {
	return (
		<aside className={styles.sidebar}>
			<div>michaelHolzer</div>
			<nav>
				<a href="#is">.is()</a>
				<a href="#work">.work()</a>
				<a href="#skills">.skills()</a>
				<a href="#qanda">.q_and_a()</a>
				<a href="#contact">.contact()</a>
			</nav>
			<div className={styles.langSwitch}>
				<button onClick={props.switchLang} data-value="1" disabled={props.language === 1}>
					DE
				</button>
				<button onClick={props.switchLang} data-value="0" disabled={props.language === 0}>
					EN
				</button>
			</div>
		</aside>
	);
};

export default Sidebar;
