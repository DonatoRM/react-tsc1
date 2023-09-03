import UsersRendered from './UsersRendered';
import { useUsers } from '../../lib/hooks/useUsers';
import style from './UsersList.module.css';

const UsersList = () => {
	const { users, loading, error } = useUsers();

	return (
		<div className={style.wrapper}>
			<h1 className={style.title}>Listado de usuarios</h1>
			<UsersRendered users={users} loading={loading} error={error} />
		</div>
	);
};

export default UsersList;
