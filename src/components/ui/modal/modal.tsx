"use client";

import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import {
  Fragment,
  type ReactNode,
  type RefObject,
  useEffect,
  useState,
} from "react";
import { AiOutlineClose } from "react-icons/ai";

import { cn } from "@/lib/utils";

export type TModalRef = {
  modalOpen: () => void;
  modalClose: () => void;
  modalToggle: () => void;
};

export const modalRefDefaultValue = (): TModalRef => ({
  modalOpen: () => {},
  modalClose: () => {},
  modalToggle: () => {},
});

export type TModalRefType = RefObject<TModalRef | null>;

export type TModalRefProps = {
  modalRef: TModalRefType;
};

type ModalSize = "sm" | "md" | "lg" | "xl";

const panelSizeClasses: Record<ModalSize, string> = {
  sm: "max-w-sm",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
};

export type ModalProps = {
  modalRef: TModalRefType;
  title?: string;
  description?: string;
  showCloseButton?: boolean;
  closeLabel?: string;
  size?: ModalSize;
  children?: ReactNode;
  panelClassName?: string;
  onClose?: () => void;
};

export function Modal({
  modalRef,
  title,
  description,
  showCloseButton = true,
  closeLabel = "Close",
  size = "lg",
  children,
  panelClassName,
  onClose,
}: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const modalOpen = () => {
    setIsOpen(true);
  };

  const modalClose = () => {
    setIsOpen(false);
  };

  const modalToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    modalClose();
  };

  useEffect(() => {
    modalRef.current = {
      modalOpen,
      modalClose,
      modalToggle,
    };
  });

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-x-hidden overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel
                className={cn(
                  "w-full transform rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                  "max-h-[90vh] overflow-y-auto",
                  panelSizeClasses[size],
                  panelClassName,
                )}
              >
                {(title || showCloseButton) && (
                  <div className="mb-4 flex items-start justify-between gap-4">
                    {title ? (
                      <DialogTitle
                        as="h3"
                        className="font-semibold text-slate-800"
                      >
                        {title}
                      </DialogTitle>
                    ) : (
                      <span />
                    )}

                    {showCloseButton && (
                      <button
                        type="button"
                        className="rounded-full text-slate-400 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label={closeLabel}
                        onClick={handleClose}
                      >
                        <AiOutlineClose className="size-5" aria-hidden="true" />
                      </button>
                    )}
                  </div>
                )}

                {description && (
                  <Description className="mb-4 text-sm text-slate-500">
                    {description}
                  </Description>
                )}

                {children}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
