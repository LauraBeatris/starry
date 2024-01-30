import { ComponentProps, PropsWithChildren } from 'react';

import styles from './styles.module.css';
import { className } from '@/app/lib/className';

interface ButtonProps
  extends Pick<ComponentProps<'button'>, 'onClick' | 'disabled'> {}

export function Button({ children, onClick }: PropsWithChildren<ButtonProps>) {
  return (
    <button onClick={onClick} className={styles.pushable}>
      <span className={className(styles.front, 'font-bold')}>{children}</span>
    </button>
  );
}
