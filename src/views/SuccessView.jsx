import React from 'react';
import { Check, ArrowRight, Home } from 'lucide-react';

const SuccessView = ({ onReset }) => {
    return (
        <div className="animate-fade-in-up" style={{
            textAlign: 'center',
            padding: '2rem 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem'
        }}>
            {/* Success Animation */}
            <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: '#10B981', // Success Green
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 10px 25px rgba(16, 185, 129, 0.4)',
                animation: 'bounceIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards'
            }}>
                <Check size={40} color="white" strokeWidth={3} />
            </div>

            <div>
                <h2 style={{
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    marginBottom: '0.5rem',
                    color: '#065F46'
                }}>
                    Payment Successful!
                </h2>
                <p style={{ color: 'var(--color-text-muted)', maxWidth: '300px', margin: '0 auto' }}>
                    Your flight to London has been confirmed.
                </p>
            </div>

            <div style={{
                background: '#f8fafc',
                padding: '1rem',
                borderRadius: '12px',
                width: '100%',
                maxWidth: '300px',
                border: '1px solid #e2e8f0',
                textAlign: 'left'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>Flight</span>
                    <span style={{ fontWeight: '600' }}>LOS - LHR</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>Transaction ID</span>
                    <span style={{ fontWeight: '600', fontFamily: 'monospace' }}>MITO-8829-XJ</span>
                </div>
            </div>

            <button
                onClick={onReset}
                style={{
                    marginTop: '1rem',
                    padding: '0.8rem 1.5rem',
                    background: 'var(--color-primary)',
                    color: 'white',
                    border: 'none',
                    borderRadius: 'var(--radius-md)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontWeight: '600'
                }}
            >
                <Home size={18} />
                Return to Home
            </button>
        </div>
    );
};

export default SuccessView;
