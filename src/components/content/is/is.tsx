import ContentWrapper from '../wrapper';
import Table from '../../ui/table/table';

import styles from './is.module.scss';

import dataIs from '../../../data/is.json';
import imgMH from '../../../assets/img/mholzer_small.jpg';

type Props = {
	language: number;
};

const ContentIs = (props: Props) => {
	return (
		<ContentWrapper name="is">
			<h1>
				<span className="highlight">michaelHolzer</span>.
				<span className="highlight">is</span>()
			</h1>
			<div className="d-flex">
				<div>
					{dataIs[props.language].intro.map((item, i) => {
						return <p key={i}>{item}</p>;
					})}
				</div>
				<div>
					<img
						className={styles.myImage}
						src={imgMH}
						alt="Michael Holzer"
					/>
				</div>
			</div>
			<br />
			<Table name="facts" data={dataIs[props.language].facts} />
		</ContentWrapper>
	);
};

export default ContentIs;
