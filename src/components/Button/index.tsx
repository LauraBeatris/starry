import { PropsWithChildren } from 'react';

import styles from './styles.module.css';
import { className } from '@/utils/className';

export function Button({ children }: PropsWithChildren) {
  return (
    <button className={styles.pushable}>
      <span className={className(styles.front, "font-bold")}>{children}</span>
    </button>
  );
}
