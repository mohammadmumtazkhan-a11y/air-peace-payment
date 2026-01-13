import React from 'react';

const PaymentCard = ({ children, className = '' }) => {
    return (
        <div
            className={`glass-card animate-fade-in-up ${className}`}
            style={{
                width: '100%',
                maxWidth: '480px',
                padding: '2rem',
                margin: '1rem auto',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                animationDelay: '0.2s'
            }}
        >
            {children}
        </div>
    );
};

export default PaymentCard;
