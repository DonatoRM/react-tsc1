import { ChangeEvent } from 'react';
import CheckIcon from '../icons/CheckIcon';
import style from './InputCheckIcon.module.css';

interface InputCheckIconProps {
	className?: string;
	checked?: boolean;
	onChange?: (ev: ChangeEvent<HTMLInputElement>) => void;
	label?: string;
	rev?: boolean;
}

const InputCheckIcon = ({
	className,
	checked,
	onChange,
	label,
	rev
}: InputCheckIconProps) => {
	const orientationLabel = rev ? style.left : style.right;
	return (
		<div className={`${style.wrapper} ${orientationLabel} ${className} || ''`}>
			<span className={style.background}>
				<input
					checked={checked}
					type='checkbox'
					className={style.check}
					onChange={onChange}
				></input>
				<CheckIcon className={style.icon} />
			</span>
			<span className={style.label}>{label}</span>
		</div>
	);
};

export default InputCheckIcon;
