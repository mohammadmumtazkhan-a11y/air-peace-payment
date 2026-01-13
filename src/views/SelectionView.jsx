import React, { useState } from 'react';
import { Plane, CreditCard, Landmark, Phone } from 'lucide-react';

const SelectionView = ({ onProceed }) => {
    const [selectedMethod, setSelectedMethod] = useState('bank');

    const methods = [
        { id: 'card', label: 'Credit / Debit Card', icon: <CreditCard size={20} /> },
        { id: 'bank', label: 'Pay by Bank Transfer', icon: <Landmark size={20} />, badge: 'Fastest' },
        { id: 'ussd', label: 'USSD Code', icon: <Phone size={20} /> },
    ];

    return (
        <div className="animate-fade-in-up">
            {/* Flight Details Header */}
            <div style={{
                background: 'rgba(255, 255, 255, 0.5)',
                padding: '1.5rem',
                borderRadius: 'var(--radius-md)',
                marginBottom: '2rem',
                border: '1px solid rgba(0, 51, 153, 0.1)'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div>
                            <div style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-primary)' }}>LOS</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Lagos</div>
                        </div>
                        <Plane className="rotate-90" color="var(--color-accent)" size={24} style={{ transform: 'rotate(90deg)' }} />
                        <div>
                            <div style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-primary)' }}>LHR</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>London</div>
                        </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Booking Ref</div>
                        <div style={{ fontWeight: '600', fontFamily: 'monospace' }}>APK-8829-XJ</div>
                    </div>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.9rem',
                    color: 'var(--color-text-muted)',
                    borderTop: '1px solid rgba(0,0,0,0.05)',
                    paddingTop: '0.8rem'
                }}>
                    <span>2 Adults, 2 Bags</span>
                    <span style={{ fontWeight: '500', color: 'var(--color-primary)' }}>Economy</span>
                </div>
            </div>

            {/* Total Amount */}
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Total Amount</p>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--color-primary)' }}>
                    ₦ 1,250,400
                </h2>
            </div>

            {/* Payment Methods */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                {methods.map((method) => (
                    <div
                        key={method.id}
                        onClick={() => setSelectedMethod(method.id)}
                        style={{
                            padding: '1rem',
                            borderRadius: 'var(--radius-sm)',
                            border: selectedMethod === method.id
                                ? '2px solid var(--color-primary)'
                                : '1px solid rgba(0,0,0,0.1)',
                            background: selectedMethod === method.id
                                ? 'rgba(0, 51, 153, 0.03)'
                                : 'white',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ color: selectedMethod === method.id ? 'var(--color-primary)' : 'var(--color-text-muted)' }}>
                                {method.icon}
                            </div>
                            <span style={{ fontWeight: selectedMethod === method.id ? '600' : '500' }}>
                                {method.label}
                            </span>
                        </div>
                        {method.badge && (
                            <span style={{
                                fontSize: '0.7rem',
                                background: '#dcfce7',
                                color: '#166534',
                                padding: '2px 8px',
                                borderRadius: '10px',
                                fontWeight: '600'
                            }}>
                                {method.badge}
                            </span>
                        )}
                    </div>
                ))}
            </div>

            <button
                onClick={onProceed}
                style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'var(--color-accent)',
                    color: 'white',
                    border: 'none',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(212, 5, 17, 0.3)',
                    transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
                Proceed to Payment
            </button>
        </div>
    );
};

export default SelectionView;
