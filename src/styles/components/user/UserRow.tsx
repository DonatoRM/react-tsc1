import CheckIcon from '../icons/CheckIcon';
import CrossIcon from '../icons/CrossIcon';
import style from './UserRow.module.css';

interface UserRowProps {
	username: string;
	name: string;
	active: boolean;
	role: string;
}

const UserRow = ({ username, name, active, role }: UserRowProps) => {
	const [Icon, activeClass] = active
		? [
				<CheckIcon key={0} className={`${style.icon} ${style.active}`} />,
				style.active
		  ]
		: [
				<CrossIcon key={0} className={`${style.icon} ${style.inactive}`} />,
				style.inactive
		  ];

	const [roleName, roleStyle] = ROLE_STYLES[role] ?? ROLE_STYLES.other;

	return (
		<div className={style.wrapper}>
			<div className={style.display}>
				<span>{name}</span>
				<span>{username}</span>
			</div>
			<div className={style.activity}>
				{Icon}
				<span className={activeClass}>{active ? 'Activo' : 'Inactivo'}</span>
			</div>
			<div className={style.job}>
				<span className={roleStyle}>{roleName}</span>
			</div>
		</div>
	);
};

const ROLE_TYPES = {
	TEACHER: 'teacher',
	STUDENT: 'student',
	OTHER: 'other'
};

const ROLE_STYLES = {
	[ROLE_TYPES.TEACHER]: ['profesor', style.teacher],
	[ROLE_TYPES.STUDENT]: ['alumno', style.student],
	[ROLE_TYPES.OTHER]: ['otro', style.other]
};

export default UserRow;
