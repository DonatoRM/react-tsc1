import { useEffect, useReducer } from 'react';
import { findAllUsers } from '../api/usersApi';

const SORT_BY_TYPES = {
	NONE: 0,
	BY_NAME: 1,
	BY_ACTIVE: 2,
	BY_ROLE: 3
};

interface DataState {
	users: Users;
	loading: boolean;
	error: boolean;
	search: string;
	onlyActive: boolean;
	sortBy: number;
	page: number;
	itemsPerPage: number;
}

const INITIAL_PAGE = 1;

const ITEMS_PER_PAGE_TYPES = {
	FOUR: 4,
	SIX: 6,
	EIGHT: 8
};

const INITIAL_DATA: DataState = {
	users: undefined,
	loading: true,
	error: false,
	search: '',
	onlyActive: false,
	sortBy: SORT_BY_TYPES.NONE,
	page: INITIAL_PAGE,
	itemsPerPage: ITEMS_PER_PAGE_TYPES.SIX
};

interface User {
	id: string;
	username: string;
	name: string;
	active: boolean;
	role: string;
}

export type Users = User[] | never[] | undefined;

interface DataActions {
	type: 'users_changed';
	payload: Users;
}
interface ErrorActions {
	type: 'error';
}
interface ReloadActions {
	type: 'reload';
}
interface SearchByName {
	type: 'search_by_name_changed';
	payload: string;
}
interface OnlyActive {
	type: 'only_active_changed';
	payload: boolean;
}
interface SortBy {
	type: 'sort_by_changed';
	payload: number;
}
interface Page {
	type: 'Page_changed';
	payload: number;
}
interface ItemsPerPage {
	type: 'Items_Per_Page_changed';
	payload: number;
}

type AppActions =
	| DataActions
	| ErrorActions
	| ReloadActions
	| SearchByName
	| OnlyActive
	| SortBy
	| Page
	| ItemsPerPage;

const usersReducer = (state: DataState, action: AppActions) => {
	switch (action.type) {
		case 'users_changed':
			return {
				...state,
				users: action.payload,
				loading: false,
				error: false
			};
		case 'error':
			return {
				...state,
				loading: false,
				error: false
			};
		case 'reload':
			return {
				...state,
				loading: true,
				error: false
			};
		case 'search_by_name_changed':
			return {
				...state,
				loading: false,
				error: false,
				search: action.payload
			};
		case 'only_active_changed':
			return {
				...state,
				loading: false,
				error: false,
				onlyActive: action.payload
			};
		case 'sort_by_changed':
			return {
				...state,
				loading: false,
				error: false,
				sortBy: action.payload
			};
		case 'Page_changed':
			return {
				...state,
				loading: false,
				error: false,
				page: action.payload
			};
		case 'Items_Per_Page_changed':
			return {
				...state,
				loading: false,
				error: false,
				itemsPerPage: action.payload
			};
		default:
			throw new Error('Invalid action type');
	}
};

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
	const { users, error, aborted } = await findAllUsers(signal);
	if (aborted) return;
	if (error) dispatchData({ type: 'error' });
	else dispatchData({ type: 'users_changed', payload: users });
};
