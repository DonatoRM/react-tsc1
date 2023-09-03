import { ROLE_TYPES } from '../../constants/roleTypes';
import style from './UserRole.module.css';

interface UserRoleProps {
	role: string;
}

const UserRole = ({ role }: UserRoleProps) => {
	const [roleName, roleStyle] = ROLE_STYLES[role] ?? ROLE_STYLES.other;
	return (
		<div className={style.job}>
			<span className={roleStyle}>{roleName}</span>
		</div>
	);
};

const ROLE_STYLES = {
	[ROLE_TYPES.TEACHER]: ['profesor', style.teacher],
	[ROLE_TYPES.STUDENT]: ['alumno', style.student],
	[ROLE_TYPES.OTHER]: ['otro', style.other]
};

export default UserRole;
