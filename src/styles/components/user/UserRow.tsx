import UserActive from './UserActive';
import UserDisplay from './UserDisplay';
import UserRole from './UserRole';
import style from './UserRow.module.css';

interface UserRowProps {
	username: string;
	name: string;
	active: boolean;
	role: string;
}

const UserRow = ({ username, name, active, role }: UserRowProps) => (
	<div className={style.wrapper}>
		<UserDisplay username={username} name={name} />
		<UserActive active={active} />
		<UserRole role={role} />
	</div>
);

export default UserRow;
