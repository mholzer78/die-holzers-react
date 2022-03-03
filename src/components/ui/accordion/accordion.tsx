import { useState } from 'react';

import styles from './accordion.module.scss';

type Props = {
	lang: string;
	index: number;
	title: string;
	content: (string | string[])[];
};

const Accordion = (props: Props) => {
	const [showContent, setShowContent] = useState(false);

	return (
		<div className={styles.accordionItem} key={props.index}>
			<h3
				id={'qanda' + props.lang + props.index}
				onClick={() => {
					setShowContent(!showContent);
				}}
			>
				{props.title}
				{showContent ? <span>&uArr;</span> : <span>&dArr;</span>}
			</h3>
			<div className={showContent ? '' : 'hidden'}>
				{props.content.map((contentItem, i) => {
					if (typeof contentItem === 'string') {
						return <p key={i}>{contentItem}</p>;
					} else {
						return (
							<ul key={i}>
								{contentItem.map((subItem, i) => {
									return <li key={i}>{subItem}</li>;
								})}
							</ul>
						);
					}
				})}
			</div>
		</div>
	);
};

export default Accordion;
