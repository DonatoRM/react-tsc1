import CheckIcon from '../icons/CheckIcon';
import CrossIcon from '../icons/CrossIcon';
import style from './UserActive.module.css';

interface UserActiveProps {
	active: boolean;
}

const UserActive = ({ active }: UserActiveProps) => {
	const [Icon, activeClass] = active
		? [
				<CheckIcon key={0} className={`${style.icon} ${style.active}`} />,
				style.active
		  ]
		: [
				<CrossIcon key={0} className={`${style.icon} ${style.inactive}`} />,
				style.inactive
		  ];
	return (
		<div className={style.activity}>
			{Icon}
			<span className={activeClass}>{active ? 'Activo' : 'Inactivo'}</span>
		</div>
	);
};

export default UserActive;
