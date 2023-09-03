import style from './UserDisplay.module.css';

interface UserDisplayProps {
	username: string;
	name: string;
}

const UserDisplay = ({ username, name }: UserDisplayProps) => (
	<div className={style.display}>
		<span>{name}</span>
		<span>{username}</span>
	</div>
);

export default UserDisplay;
