import { useEffect } from 'react';
import '../ErrorPopup.css';

export function ErrorPopup({ message, onClose }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 10000); // 10 seconds

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="error-popup-overlay">
            <div className="error-popup">
                <div className="error-popup-content">
                    <h3>Form Error</h3>
                    <p>{message}</p>
                    <button className="close-btn" onClick={onClose}>
                        ×
                    </button>
                </div>
            </div>
        </div>
    );
}