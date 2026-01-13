import React from 'react';

const ProgressBar = ({ currentStep }) => {
    // steps: 1 = Scan, 2 = Processing, 3 = Success
    const steps = [
        { id: 1, label: 'QR Code Scanned' },
        { id: 2, label: 'Processing' },
        { id: 3, label: 'Complete' },
    ];

    return (
        <div style={{ width: '100%', padding: '0 1rem' }}>
            <h2 style={{
                textAlign: 'center',
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '1.5rem',
                color: 'var(--color-primary)'
            }}>
                Transaction Status
            </h2>

            <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Progress Line Background */}
                <div style={{
                    position: 'absolute',
                    top: '6px',
                    left: '0',
                    right: '0',
                    height: '2px',
                    background: '#e2e8f0',
                    zIndex: 0
                }} />

                {/* Active Progress Line */}
                <div style={{
                    position: 'absolute',
                    top: '6px',
                    left: '0',
                    height: '2px',
                    background: 'var(--color-accent)',
                    zIndex: 0,
                    width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
                    transition: 'width 0.5s ease'
                }} />

                {/* Steps */}
                {steps.map((step) => {
                    const isActive = currentStep >= step.id;
                    const isCompleted = currentStep > step.id;

                    return (
                        <div key={step.id} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            zIndex: 1,
                            position: 'relative'
                        }}>
                            {/* Dot */}
                            <div style={{
                                width: '14px',
                                height: '14px',
                                borderRadius: '50%',
                                background: isActive ? 'var(--color-accent)' : '#e2e8f0',
                                border: '2px solid white',
                                boxShadow: isActive ? '0 0 0 2px rgba(212, 5, 17, 0.2)' : 'none',
                                transition: 'all 0.3s ease',
                                marginBottom: '0.5rem'
                            }} />

                            {/* Label */}
                            <span style={{
                                fontSize: '0.7rem',
                                color: isActive ? 'var(--color-text-main)' : 'var(--color-text-muted)',
                                fontWeight: isActive ? '600' : '400',
                                transition: 'color 0.3s ease',
                                whiteSpace: 'nowrap'
                            }}>
                                {step.label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProgressBar;
