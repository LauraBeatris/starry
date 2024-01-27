'use client';

import * as PopoverPrimitive from '@radix-ui/react-popover';
import type { PopoverProps as RadixPopoverProps } from '@radix-ui/react-popover';
import {
  type ReactNode,
  type PropsWithChildren,
  useState,
  Dispatch,
  SetStateAction,
  useReducer,
} from 'react';
import { Drawer as VaulDrawer } from 'vaul';

import { className } from '@/app/lib/className';
import { useMediaQuery } from '@/app/lib/hooks/useMediaQuery';

interface PopoverProps
  extends PropsWithChildren<Pick<RadixPopoverProps, 'open' | 'onOpenChange'>> {
  content: ReactNode;
}

export function Popover({
  children,
  content,
  open,
  onOpenChange,
}: PopoverProps) {
  return (
    <PopoverPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <PopoverPrimitive.Trigger className="hidden sm:inline-flex">
        {children}
      </PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          sideOffset={8}
          align="center"
          className="animate-slide-up-fade z-50 hidden items-center rounded-md border border-gray-200 bg-white drop-shadow-lg sm:block"
        >
          {content}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}

type DrawerProps = PropsWithChildren<
  React.ComponentProps<typeof VaulDrawer.Root>
> & { content: ReactNode };

function Drawer({ children, open, onOpenChange, content }: DrawerProps) {
  return (
    <VaulDrawer.Root open={open} onOpenChange={onOpenChange}>
      <div className="sm:hidden">{children}</div>
      <VaulDrawer.Portal>
        <VaulDrawer.Overlay className="fixed inset-0 z-40 bg-gray-100 bg-opacity-10 backdrop-blur" />
        <VaulDrawer.Content className="fixed bottom-0 left-0 right-0 z-50 mt-24 rounded-t-[10px] border-t border-gray-200 bg-white">
          <div className="sticky top-0 z-20 flex w-full items-center justify-center rounded-t-[10px] bg-inherit">
            <div className="my-3 h-1 w-12 rounded-full bg-gray-300" />
          </div>
          <div className="flex min-h-[150px] w-full items-center justify-center overflow-hidden bg-white pb-8 align-middle shadow-xl">
            {content}
          </div>
        </VaulDrawer.Content>
        <VaulDrawer.Overlay />
      </VaulDrawer.Portal>
    </VaulDrawer.Root>
  );
}

function DialogTrigger({
  onClick,
}: Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>) {
  return (
    <button
      type="button"
      className={
        'cursor-pointer rounded-md p-1 transition-colors hover:bg-gray-100 active:bg-gray-200 sm:p-2'
      }
      onClick={onClick}
    >
      🎨
    </button>
  );
}

function Content() {
  return (
    <div className="w-full overflow-auto md:max-w-xl">
      <div className="p-4">
        <p className="py-2 font-display text-xl font-bold text-gray-700">
          Choose a pattern
        </p>
      </div>
    </div>
  );
}

export function PaintingPatternPicker() {
  const { isMobile } = useMediaQuery();

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  if (isMobile) {
    return (
      <Drawer
        content={<Content />}
        open={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
      >
        <DialogTrigger onClick={() => setIsDrawerOpen((prev) => !prev)} />
      </Drawer>
    );
  }

  return (
    <Popover
      content={<Content />}
      onOpenChange={setIsPopoverOpen}
      open={isPopoverOpen}
    >
      <DialogTrigger onClick={() => setIsPopoverOpen((prev) => !prev)} />
    </Popover>
  );
}
