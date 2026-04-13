import React, { useEffect, useState } from 'react';

type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  onDismiss: () => void;
}

const icons: Record<ToastType, string> = {
  success: 'check_circle',
  error: 'error',
  info: 'info',
};

const styles: Record<ToastType, string> = {
  success: 'border-[#F2CA50]/40 bg-[#F2CA50]/10 text-[#F2CA50]',
  error:   'border-red-500/40 bg-red-500/10 text-red-400',
  info:    'border-blue-400/40 bg-blue-400/10 text-blue-300',
};

const Toast = ({ message, type = 'success', duration = 4000, onDismiss }: ToastProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger enter animation on next tick
    const enterTimer = setTimeout(() => setVisible(true), 10);
    const exitTimer = setTimeout(() => {
      setVisible(false);
      setTimeout(onDismiss, 400); // Wait for exit animation
    }, duration);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
    };
  }, [duration, onDismiss]);

  return (
    <div
      role="alert"
      className={`
        flex items-center gap-4 px-5 py-4 rounded-2xl border backdrop-blur-md shadow-2xl
        font-label text-sm font-semibold tracking-wide max-w-sm w-full
        transition-all duration-400 ease-in-out
        ${styles[type]}
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
    >
      <span
        className="material-symbols-outlined text-xl flex-shrink-0"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        {icons[type]}
      </span>
      <span className="flex-1 text-on-surface">{message}</span>
      <button
        onClick={() => { setVisible(false); setTimeout(onDismiss, 400); }}
        className="text-on-surface-variant hover:text-on-surface transition-colors ml-2"
        aria-label="Cerrar"
      >
        <span className="material-symbols-outlined text-base">close</span>
      </button>
    </div>
  );
};

// --- Toast Container & State Manager ---

interface ToastItem {
  id: number;
  message: string;
  type: ToastType;
}

let _addToast: ((message: string, type?: ToastType) => void) | null = null;

export const toast = {
  success: (message: string) => _addToast?.(message, 'success'),
  error:   (message: string) => _addToast?.(message, 'error'),
  info:    (message: string) => _addToast?.(message, 'info'),
};

export const ToastContainer = () => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  let counter = 0;

  useEffect(() => {
    _addToast = (message: string, type: ToastType = 'success') => {
      const id = ++counter;
      setToasts(prev => [...prev, { id, message, type }]);
    };
    return () => { _addToast = null; };
  }, []);

  const remove = (id: number) => setToasts(prev => prev.filter(t => t.id !== id));

  return (
    <div
      aria-live="polite"
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] flex flex-col items-center gap-3 pointer-events-none"
    >
      {toasts.map(t => (
        <div key={t.id} className="pointer-events-auto">
          <Toast
            message={t.message}
            type={t.type}
            onDismiss={() => remove(t.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default Toast;
