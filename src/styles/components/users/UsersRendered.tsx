import { Users } from '../../lib/hooks/useUsers';
import UserRow from '../user/UserRow';
import style from './UsersRendered.module.css';

interface UsersRenderedProps {
	users: Users;
	loading: boolean;
	error: boolean;
}

const UsersRendered = ({ users, loading, error }: UsersRenderedProps) => {
	let renderedResult: RenderedResult = [];
	if (loading)
		renderedResult = <p className={style.loading}>Cargando usuarios...</p>;
	if (error)
		renderedResult = (
			<p className={style.error}>Error en la carga de usuarios</p>
		);
	if (!loading && !error) {
		if (users?.length)
			renderedResult = users.map(user => <UserRow key={user.id} {...user} />);
		else {
			renderedResult = <p className={style.empty}>No existen usuarios</p>;
		}
	}
	return renderedResult;
};

type RenderedResult = JSX.Element[] | JSX.Element;

export default UsersRendered;
