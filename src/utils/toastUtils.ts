import { Toast } from 'primereact/toast';
import { RefObject } from 'react';

type SeverityType = 'success' | 'info' | 'warn' | 'error';

export const showToast = (toast: RefObject<Toast>, message: string, severity: SeverityType) => {
    const summary = severity.charAt(0).toUpperCase() + severity.slice(1);
    toast.current?.show({ severity: severity, summary: summary, detail: message });
};