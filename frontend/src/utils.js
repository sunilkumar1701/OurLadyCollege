import { toast } from 'react-toastify';

/**
 * Display a success toast message.
 * @param {string} message - The success message to display.
 */
export const handleSuccess = (message) => {
    toast.success(message, {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
        style: {
            backgroundColor: "#28a745",  // Green background
            color: "white",
            fontWeight: "bold"
        },
        icon: "✅"
    });
};

/**
 * Display an error toast message.
 * @param {string} message - The error message to display.
 */
export const handleError = (message) => {
    toast.error(message, {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
        style: {
            backgroundColor: "#dc3545",  // Red background
            color: "white",
            fontWeight: "bold"
        },
        icon: "❌"
    });
};
