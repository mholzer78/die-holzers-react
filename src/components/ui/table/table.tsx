import PercentBar from '../percentBar/percentBar';

import styles from './table.module.scss';

type Course = {
	date: string;
	link: string;
};

type Props = {
	name: string;
	data: { title: string; content: string | number | Course }[];
	class?: number;
};

const tableClasses = [
	styles.table,
	styles.tableLimit,
	styles.tableLimitMob,
	styles.tableOffLimit,
];

const Table = (props: Props) => {
	let classIndex = props.class ? props.class : 0;
	let tableClass = `${tableClasses[classIndex]}`;
	return (
		<table className={tableClass}>
			<tbody>
				{props.data.map((item, i) => {
					if (typeof item.content === 'number') {
						return (
							<tr key={i}>
								<td>{item.title}</td>
								<td>
									<PercentBar percent={item.content} />
								</td>
							</tr>
						);
					} else if (typeof item.content === 'string') {
						return (
							<tr key={i}>
								<td>{item.title}</td>
								<td>{item.content}</td>
							</tr>
						);
					}
					return (
						<tr key={i}>
							<td>{item.title}</td>
							<td>{item.content.date}</td>
							<td>{item.content.link}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Table;
