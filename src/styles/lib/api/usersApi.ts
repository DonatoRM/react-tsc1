import { Users } from '../hooks/useUsers';

export const findAllUsers = async (signal: AbortSignal) => {
	try {
		const response = await fetch('http://localhost:4000/users', { signal });
		const users: Users = (await response.json()) as Users;
		return {
			users,
			error: !response.ok,
			aborted: false
		};
	} catch (error) {
		const aborted =
			error instanceof DOMException && error.name === 'AbortError';
		return {
			users: undefined,
			error: !aborted,
			aborted
		};
	}
};
