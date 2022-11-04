import classes from './error-alert.module.css';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode
}

function ErrorAlert(props: Props) {
  return <div className={classes.alert}>{props.children}</div>;
}

export default ErrorAlert;
