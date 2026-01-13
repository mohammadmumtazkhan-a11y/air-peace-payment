import React from 'react';
import { Smartphone, Info } from 'lucide-react';
import ProgressBar from '../components/Feedback/ProgressBar';

const StatusView = ({ onSwitchToMobile }) => {
    return (
        <div className="animate-fade-in-up" style={{ textAlign: 'center', paddingTop: '1rem' }}>

            {/* Reusing ProgressBar with Step 1 active (QR Scanned) */}
            <ProgressBar currentStep={1} />

            <div style={{
                background: '#f8fafc',
                padding: '1.5rem',
                borderRadius: '12px', // Consistency
                border: '1px solid #e2e8f0',
                marginTop: '1.5rem', // Match spacing
                display: 'flex',
                alignItems: 'start',
                gap: '1rem',
                textAlign: 'left'
            }}>
                <Info color="#003399" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.5' }}>
                    Your transaction progress will be displayed here while you complete the payment process on your mobile phone.
                </p>
            </div>

            <div style={{ marginTop: '3rem' }}>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                    (For Prototype Purposes Only)
                </p>
                <button
                    onClick={onSwitchToMobile}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.8rem 1.5rem',
                        background: 'var(--color-text-main)',
                        color: 'white',
                        border: 'none',
                        borderRadius: 'var(--radius-md)',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                >
                    <Smartphone size={18} />
                    Switch to Mobile View Prototype
                </button>
            </div>
        </div>
    );
};

export default StatusView;
