import  { ReactNode } from "react";
import { createPortal } from "react-dom";

export function Dialog({ children }: { children: ReactNode }) {
    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {children}
        </div>,
        document.body
    );
}

export function DialogOverlay({ onClick }: { onClick: () => void }) {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClick}
        />
    );
}

export function DialogContent({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <div
            className={`relative z-50 bg-white rounded-lg shadow-lg p-6 ${className}`}
        >
            {children}
        </div>
    );
}

export function DialogHeader({ children }: { children: ReactNode }) {
    return (
        <div className="mb-4 border-b pb-2">
            {children}
        </div>
    );
}

export function DialogTitle({ children }: { children: ReactNode }) {
    return (
        <h2 className="text-lg font-semibold">{children}</h2>
    );
}

export function DialogFooter({ children }: { children: ReactNode }) {
    return (
        <div className="mt-4 border-t pt-2 flex justify-end space-x-2">
            {children}
        </div>
    );
}
