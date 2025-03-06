import { faAt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Label } from 'radix-ui';
import { FormEventHandler, InputHTMLAttributes } from 'react';
import classes from './styles.module.css';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: React.ReactNode;
  value?: string;
  onChange: FormEventHandler<HTMLInputElement>;
  centerLabel?: boolean;
}

const Input = ({ id, label, value, type, children, centerLabel, ...inputProps }: IProps) => {
  return (
    <div className={`${classes.root} ${centerLabel ? classes.centeredLabel : ''}`}>
      <Label.Root className={classes.label} htmlFor={id}>
        {label}
      </Label.Root>
      <div className={classes.inputWrapper}>
        <input
          className={`${classes.input} ${type === 'email' ? classes.emailInput : ''}`}
          id={id}
          value={value}
          {...inputProps}
        />
        {type === 'email' && <FontAwesomeIcon icon={faAt} />}
        {children}
      </div>
    </div>
  );
};

export default Input;
