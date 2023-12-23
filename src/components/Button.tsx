import { PropsWithChildren } from 'react';

export function Button({ children }: PropsWithChildren) {
  return (
    <button className="pushable">
      <span className="front font-bold">{children}</span>
    </button>
  );
}
