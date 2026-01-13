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
            <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--color-text-main)',
                    fontWeight: '600',
                    fontSize: '0.9rem'
                }}>
                    <Clock size={16} />
                    You have <span style={{ color: 'var(--color-accent)' }}>{formatTime(timeLeft)}</span> mins make payment
                </div>
            </div>

            {/* Details Box */}
            <div style={{
                background: 'rgba(241, 245, 249, 0.5)',
                padding: '1rem 1.5rem',
                borderRadius: 'var(--radius-sm)',
                marginBottom: '2rem',
                textAlign: 'left'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem', alignItems: 'center' }}>
                    <span style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', fontWeight: 'bold' }}>Total</span>
                    <span style={{ fontWeight: '700', fontSize: '1.2rem', color: 'var(--color-text-main)' }}>£ 550.00</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                    <span style={{ color: 'var(--color-text-muted)', fontWeight: 'bold' }}>Paying to</span>
                    <span style={{ fontWeight: '600', color: 'var(--color-text-muted)' }}>Air Peace via PLAID</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--color-text-muted)', fontWeight: 'bold' }}>Reference</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontWeight: '700', fontFamily: 'monospace', letterSpacing: '0.5px', color: 'var(--color-text-muted)' }}>BNSCD1234567788TG</span>
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
