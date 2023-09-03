import { ChangeEvent } from 'react';
import style from './InputSearchIcon.module.css';
import SearchIcon from '../icons/SearchIcon';

interface InputSearchIconProps<T> {
	className?: string;
	value?: T;
	onChange?: (ev: ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
}

const InputSearchIcon = <T,>({
	className,
	value,
	onChange,
	placeholder
}: InputSearchIconProps<T>) => {
	return (
		<div className={`${style.wrapper} ${className}` || ''}>
			<input
				className={style.input}
				type={typeof value === 'string' ? 'text' : 'number'}
				value={typeof value === 'string' ? value.toString() : Number(value)}
				onChange={onChange}
				placeholder={placeholder}
			/>
			<SearchIcon className={style.icon} />
		</div>
	);
};

export default InputSearchIcon;
