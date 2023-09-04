import {
	INITIAL_PAGE,
	ITEMS_PER_PAGE_TYPES,
	SORT_BY_TYPES
} from '../../constants/searchUsers';

interface User {
	id: string;
	username: string;
	name: string;
	active: boolean;
	role: string;
}

export type Users = User[] | never[] | undefined;

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

export const INITIAL_DATA: DataState = {
	users: undefined,
	loading: true,
	error: false,
	search: '',
	onlyActive: false,
	sortBy: SORT_BY_TYPES.NONE,
	page: INITIAL_PAGE,
	itemsPerPage: ITEMS_PER_PAGE_TYPES.SIX
};

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
	type: 'page_changed';
	payload: number;
}
interface ItemsPerPage {
	type: 'items_per_page_changed';
	payload: number;
}

export type AppActions =
	| DataActions
	| ErrorActions
	| ReloadActions
	| SearchByName
	| OnlyActive
	| SortBy
	| Page
	| ItemsPerPage;

export const usersReducer = (state: DataState, action: AppActions) => {
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
		case 'page_changed':
			return {
				...state,
				loading: false,
				error: false,
				page: action.payload
			};
		case 'items_per_page_changed':
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
