declare module 'tailwind-toastify' {
    export function showAlert(type: 'info' | 'error' | 'success', title: string, message: string): void;
}