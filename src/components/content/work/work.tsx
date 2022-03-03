import { Fragment } from 'react';

import ContentWrapper from '../wrapper';
import Table from '../../ui/table/table';

import data from '../../../data/work.json';

type Props = {
	language: number;
};

const ContentWork = (props: Props) => {
	return (
		<ContentWrapper name="work">
			<h1>
				.<span className="highlight">work</span>()
			</h1>
			<div>
				{data[props.language].map((item, i) => {
					return (
						<Fragment key={i}>
							<h3>@ {item.company}</h3>

							<Table
								name={item.company}
								data={item.jobs}
								class={1}
							/>
						</Fragment>
					);
				})}
			</div>
		</ContentWrapper>
	);
};

export default ContentWork;
