import React, { useEffect, useState } from 'react';
import { QrCode, Copy, Clock } from 'lucide-react';

const CheckoutView = ({ onNext }) => {
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    return (
        <div className="animate-fade-in-up" style={{ textAlign: 'center' }}>
            {/* Timer Badge */}
            <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    background: 'rgba(212, 5, 17, 0.1)', // Light red background
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    color: 'var(--color-accent)', // Red text
                    fontWeight: '700',
                    fontSize: '0.95rem'
                }}>
                    <Clock size={18} />
                    <span>{formatTime(timeLeft)} mins remaining</span>
                </div>
            </div>

            {/* Details Box */}
            <div style={{
                background: '#f8fafc',
                padding: '1.5rem 2rem',
                borderRadius: '12px',
                marginBottom: '2.5rem',
                textAlign: 'left',
                border: '1px solid #e2e8f0'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'center' }}>
                    <span style={{ color: '#64748b', fontSize: '1rem', fontWeight: '500' }}>Total Amount</span>
                    <span style={{ fontWeight: '800', fontSize: '1.4rem', color: '#0f172a' }}>£ 550.00</span>
                </div>
                <div style={{ width: '100%', height: '1px', background: '#e2e8f0', marginBottom: '1rem' }}></div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span style={{ color: '#64748b', fontWeight: '500' }}>Paying to</span>
                    <span style={{ fontWeight: '600', color: '#1e293b' }}>Air Peace via PLAID</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ color: '#64748b', fontWeight: '500', flexShrink: 0 }}>Reference</span>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', minWidth: 0 }}>
                        <span style={{
                            fontWeight: '700',
                            fontFamily: 'monospace',
                            letterSpacing: '1px',
                            color: '#334155',
                            background: '#e2e8f0',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            wordBreak: 'break-all',
                            fontSize: '0.9rem',
                            lineHeight: '1.2',
                            textAlign: 'right'
                        }}>BNSCD1234567788TG</span>
                    </div>
                </div>
            </div>

            <div style={{ marginBottom: '1.5rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                Scan QR Code to pay
            </div>

            {/* QR Code Section */}
            <div style={{ marginBottom: '2rem' }}>
                <div
                    onClick={onNext} // Simulating scan by clicking
                    style={{
                        background: 'white',
                        padding: '10px',
                        borderRadius: 'var(--radius-sm)',
                        display: 'inline-block',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease',
                        border: '4px solid black'
                    }}
                    className="hover:scale-105"
                >
                    <QrCode size={160} color="black" />
                </div>
            </div>

            {/* Footer Info */}
            <p style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', maxWidth: '400px', margin: '0 auto', lineHeight: '1.4' }}>
                By scanning the QR code you give permission to Mito.Money to initiate a payment via PLAID and share your account details with Mito.money. You also agree to our Terms of Service and Privacy Policy
            </p>

            <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ border: '1px solid #ccc', borderRadius: '50%', width: '15px', height: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.6rem' }}>i</span>
                </div>
                <p style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)' }}>Mito.Money collects payments for AirPeace</p>
            </div>

        </div>
    );
};

export default CheckoutView;
