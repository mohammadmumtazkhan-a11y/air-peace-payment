import React from 'react';

const PaymentCard = ({ children, className = '' }) => {
    return (
        <div
            className={`glass-card animate-fade-in-up ${className}`}
            width: '100%',
                maxWidth: '500px', // Slightly wider for breathability
                    padding: '3rem',
                        margin: '2rem auto',
                            position: 'relative',
                                display: 'flex',
                                    flexDirection: 'column',
                                        gap: '2rem',
                                            animationDelay: '0.2s',
                // Removed max-height constraint to let it breathe
            }}
        >
    { children }
        </div >
    );
};

export default PaymentCard;
