import ContentIs from './is/is';
import ContentWork from './work/work';
import ContentSkills from './skills/skills';
import ContentQandA from './qanda/qanda';
import ContentContact from './contact/contact';

import classes from './content.module.scss';

type Props = {
	language: number;
};

const Content = (props: Props) => {
	return (
		<div className={classes.content}>
			<ContentIs language={props.language}></ContentIs>
			<ContentWork language={props.language}></ContentWork>
			<ContentSkills></ContentSkills>
			<ContentQandA language={props.language}></ContentQandA>
			<ContentContact></ContentContact>
		</div>
	);
};

export default Content;
