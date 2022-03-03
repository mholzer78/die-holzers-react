import ContentWrapper from '../wrapper';
import Table from '../../ui/table/table';

import dataSkills from '../../../data/skills.json';
import dataCourses from '../../../data/courses.json';

const ContentSkills = () => {
	return (
		<ContentWrapper name="skills">
			<h1>
				.<span className="highlight">skills</span>('
				<span className="highlight">overview</span>')
			</h1>
			<Table name="skills" data={dataSkills} class={3} />
			<h1>
				.<span className="highlight">skills</span>('
				<span className="highlight">courses</span>')
			</h1>
			<Table name="courses" data={dataCourses} class={2} />
		</ContentWrapper>
	);
};

export default ContentSkills;
