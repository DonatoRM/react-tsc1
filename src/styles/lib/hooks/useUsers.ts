import { useEffect, useState } from 'react';
import { findAllUsers } from '../api/usersApi';

const INITIAL_DATA: Data = {
	users: undefined,
	loading: true,
	error: false
};

export const useUsers = () => {
	const [data, setData] = useState(INITIAL_DATA);
	const setUsers = (newUsers: Users) => {
		setData(prevData => ({
			...prevData,
			users: newUsers,
			loading: false,
			error: false
		}));
	};
	const setError = () => {
		setData(prevData => ({
			...prevData,
			users: undefined,
			loading: false,
			error: false
		}));
	};
	const reloadData = () => {
		setData(prevData => ({
			...prevData,
			users: undefined,
			loading: true,
			error: false
		}));
	};
	useEffect(() => {
		if (!data.loading) return;
		const controller = new AbortController();
		void addAllUsers(setUsers, setError, controller.signal);
		return () => {
			controller.abort();
		};
	}, [data.loading]);
	return {
		...data,
		reloadData
	};
};

const addAllUsers = async (
	setUsers: (newUsers: Users) => void,
	setError: () => void,
	signal: AbortSignal
) => {
	const { users, error, aborted } = await findAllUsers(signal);
	if (aborted) return;
	if (error) setError();
	else setUsers(users);
};

interface User {
	id: string;
	username: string;
	name: string;
	active: boolean;
	role: string;
}

export type Users = User[] | never[] | undefined;

interface Data {
	users: Users;
	loading: boolean;
	error: boolean;
}
