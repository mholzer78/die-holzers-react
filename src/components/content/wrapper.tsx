import classes from './content.module.scss';

type Props = { name: string; children: JSX.Element[] };

const ContentQandA = (props: Props) => {
	return (
		<section id={props.name}>
			<div className={classes.inner}>{props.children}</div>
		</section>
	);
};

export default ContentQandA;
