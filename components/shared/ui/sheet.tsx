'use client';

import React, { createContext, useContext, useMemo, useState, cloneElement, useEffect } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

type SheetContextValue = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const SheetContext = createContext<SheetContextValue | null>(null);

const useSheetContext = () => {
  const ctx = useContext(SheetContext);
  if (!ctx) {
    throw new Error('Sheet components must be used within a Sheet');
  }
  return ctx;
};

export type SheetProps = {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (value: boolean) => void;
};

export const Sheet = ({ children, open: openProp, onOpenChange }: SheetProps) => {
  const isControlled = openProp !== undefined;
  const [internalOpen, setInternalOpen] = useState(false);

  const open = isControlled ? !!openProp : internalOpen;

  const setOpen = (value: boolean) => {
    if (!isControlled) {
      setInternalOpen(value);
    }
    onOpenChange?.(value);
  };

  const value = useMemo(() => ({ open, setOpen }), [open]);

  return <SheetContext.Provider value={value}>{children}</SheetContext.Provider>;
};

export type SheetTriggerProps = {
  children: React.ReactElement<{ onClick?: React.MouseEventHandler }>;
  asChild?: boolean;
};

export const SheetTrigger = ({ children, asChild }: SheetTriggerProps) => {
  const { setOpen } = useSheetContext();

  if (asChild && React.isValidElement(children)) {
    return cloneElement(children, {
      onClick: (event: React.MouseEvent) => {
        if (typeof children.props.onClick === 'function') {
          children.props.onClick(event);
        }
        setOpen(true);
      },
    });
  }

  return (
    <button type="button" onClick={() => setOpen(true)}>
      {children}
    </button>
  );
};

export type SheetContentProps = {
  children: React.ReactNode;
  side?: 'left' | 'right';
  className?: string;
};

export const SheetContent = ({ children, side = 'right', className }: SheetContentProps) => {
  const { open, setOpen } = useSheetContext();
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (!open) {
      setEntered(false);
      return;
    }

    // Trigger enter transition on mount so panel slides into view.
    const id = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(id);
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex">
      <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        className={clsx(
          'relative h-full w-80 max-w-[80vw] shadow-2xl p-6 overflow-y-auto rounded-lg border',
          'transform transition-transform duration-300 ease-out will-change-transform',
          entered
            ? 'translate-x-0'
            : side === 'right'
              ? 'translate-x-full'
              : '-translate-x-full',
          side === 'right' ? 'ml-auto rounded-l-2xl' : 'mr-auto rounded-r-2xl',
          className ?? 'bg-background text-foreground border-border',
        )}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
};
