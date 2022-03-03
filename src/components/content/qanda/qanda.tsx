import ContentWrapper from '../wrapper';

import Accordion from '../../ui/accordion/accordion';

import dataQanda from '../../../data/qanda.json';

type Props = {
	language: number;
};

const ContentQandA = (props: Props) => {
	return (
		<ContentWrapper name="qanda">
			<h1>
				.<span className="highlight">q_and_a</span>()
			</h1>
			<div>
				{dataQanda[props.language].map((item, i) => {
					return (
						<div key={i}>
							<Accordion lang={props.language.toString()} index={i} {...item} />
						</div>
					);
				})}
			</div>
		</ContentWrapper>
	);
};

export default ContentQandA;
