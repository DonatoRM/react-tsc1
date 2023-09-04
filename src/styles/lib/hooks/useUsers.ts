import { useReducer, useEffect } from 'react';
import {
	AppActions,
	INITIAL_DATA,
	usersReducer
} from '../reducers/usersReducer';
import { findUsers } from '../api/usersApi';

export const useUsers = () => {
	const [data, dispatchData] = useReducer(usersReducer, INITIAL_DATA);

	useEffect(() => {
		if (!data.loading) return;
		const controller = new AbortController();
		void addAllUsers(dispatchData, controller.signal);
		return () => {
			controller.abort();
		};
	}, [data.loading]);
	return {
		data,
		dispatchData
	};
};

const addAllUsers = async (
	dispatchData: React.Dispatch<AppActions>,
	signal: AbortSignal
) => {
	const { users, error, aborted } = await findUsers(signal);
	if (aborted) return;
	if (error) dispatchData({ type: 'error' });
	else dispatchData({ type: 'users_changed', payload: users });
};
