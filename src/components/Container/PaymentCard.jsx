import React from 'react';

const PaymentCard = ({ children, className = '' }) => {
    return (
        <div
            className={`glass-card animate-fade-in-up ${className}`}
            style={{
                width: '100%',
                maxWidth: '480px',
                padding: '2rem 2.5rem',
                margin: '0',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                animationDelay: '0.2s',
                maxHeight: '100%',
                overflowY: 'auto', // Safety scroll only if absolutely needed inside the card
                scrollbarWidth: 'none' // Hide scrollbar for aesthetics
            }}
        >
            {children}
        </div>
    );
};

export default PaymentCard;
