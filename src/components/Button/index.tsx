import { ComponentProps, ElementType } from 'react';
import classes from './styles.module.css';

type TProps<T extends ElementType = 'button'> = {
  icon?: boolean;
  Component?: T;
} & ComponentProps<T>;

const Button = <T extends ElementType = 'button'>({
  icon = false,
  Component = 'button',
  ...props
}: TProps<T>) => {
  return (
    <Component
      className={`${classes.button} ${icon ? classes.iconButton : classes.primaryButton}`}
      {...props}
    />
  );
};

export default Button;
