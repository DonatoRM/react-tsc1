import UsersRendered from './UsersRendered';
import { useUsers } from '../../lib/hooks/useUsers';
import style from './UsersList.module.css';

const UsersList = () => {
	const { data, dispatchData } = useUsers();

	return (
		<div className={style.wrapper}>
			<h1 className={style.title}>Listado de usuarios</h1>
			<UsersRendered
				users={data.users}
				loading={data.loading}
				error={data.error}
			/>
		</div>
	);
};

export default UsersList;
