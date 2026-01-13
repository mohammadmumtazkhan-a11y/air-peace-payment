import React, { useState } from 'react';
import { ArrowLeft, Lock, ShieldCheck, ChevronRight, Building } from 'lucide-react';

const MobileFlow = ({ onComplete }) => {
    const [step, setStep] = useState('landing'); // landing, bank-select, login, confirm
    const [selectedBank, setSelectedBank] = useState(null);

    const banks = [
        { id: 'chase', name: 'Chase', color: '#117ACA' },
        { id: 'boa', name: 'Bank of America', color: '#E31837' },
        { id: 'wells', name: 'Wells Fargo', color: '#CD1409' },
    ];

    /* --- Sub-Components --- */

    const MobileLanding = () => (
        <div className="animate-fade-in-up" style={{ padding: '2rem 1.5rem', textAlign: 'center' }}>
            <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem' }}>Air Peace Payment</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Secure Checkout</p>
            </div>

            <div style={{
                background: '#f8fafc',
                padding: '1.5rem',
                borderRadius: '12px',
                marginBottom: '2rem',
                border: '1px solid #e2e8f0'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                    <span style={{ color: '#64748b' }}>Flight</span>
                    <span style={{ fontWeight: '600' }}>LOS - LHR</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', fontWeight: 'bold' }}>
                    <span>Total</span>
                    <span>₦ 1,250,400</span>
                </div>
            </div>

            <button
                onClick={() => setStep('bank-select')}
                style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'var(--color-primary)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontWeight: '600',
                    cursor: 'pointer'
                }}
            >
                Continue to Payment
            </button>

            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.8rem' }}>
                <Lock size={12} />
                <span>Encrypted by Plaid</span>
            </div>
        </div>
    );

    const BankSelect = () => (
        <div className="animate-slide-in" style={{ padding: '1rem' }}>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Select your bank</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {banks.map(bank => (
                    <div
                        key={bank.id}
                        onClick={() => { setSelectedBank(bank); setStep('login'); }}
                        style={{
                            padding: '1rem',
                            borderRadius: '12px',
                            border: '1px solid #e2e8f0',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            background: 'white'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: bank.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Building size={16} color="white" />
                            </div>
                            <span style={{ fontWeight: '500' }}>{bank.name}</span>
                        </div>
                        <ChevronRight size={16} color="#cbd5e1" />
                    </div>
                ))}
            </div>
        </div>
    );

    const Login = () => (
        <div className="animate-slide-in" style={{ padding: '1.5rem', textAlign: 'center' }}>
            <div style={{ width: '48px', height: '48px', margin: '0 auto 1rem', background: selectedBank.color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Building size={24} color="white" />
            </div>
            <h3 style={{ marginBottom: '0.5rem' }}>Log in to {selectedBank.name}</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Enter your credentials to proceed</p>

            <input type="text" placeholder="Username" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '1rem' }} />
            <input type="password" placeholder="Password" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '2rem' }} />

            <button
                onClick={() => setStep('confirm')}
                style={{
                    width: '100%',
                    padding: '1rem',
                    background: selectedBank.color,
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontWeight: '600',
                    cursor: 'pointer'
                }}
            >
                Log In
            </button>
        </div>
    );

    const Confirm = () => (
        <div className="animate-slide-in" style={{ padding: '2rem 1.5rem', textAlign: 'center' }}>
            <div style={{ width: '64px', height: '64px', margin: '0 auto 1.5rem', background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShieldCheck size={32} color="#166534" />
            </div>
            <h3 style={{ marginBottom: '0.5rem' }}>Authorize Payment</h3>
            <h1 style={{ marginBottom: '2rem', fontSize: '2rem', color: 'var(--color-primary)' }}>₦ 1,250,400</h1>

            <div style={{ textAlign: 'left', background: '#f8fafc', padding: '1rem', borderRadius: '12px', marginBottom: '2rem' }}>
                <div style={{ marginBottom: '0.5rem', fontSize: '0.9rem', color: '#64748b' }}>From</div>
                <div style={{ marginBottom: '1rem', fontWeight: '600' }}>{selectedBank.name} Checking (...8829)</div>
                <div style={{ marginBottom: '0.5rem', fontSize: '0.9rem', color: '#64748b' }}>To</div>
                <div style={{ fontWeight: '600' }}>Air Peace Limited</div>
            </div>

            <button
                onClick={onComplete}
                style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'var(--color-primary)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontWeight: '600',
                    cursor: 'pointer'
                }}
            >
                Confirm & Pay
            </button>
        </div>
    );

    return (
        <div style={{
            width: '300px', // Narrower, more realistic prop
            height: '580px', // Fixed height
            margin: '0 auto',
            background: 'white',
            borderRadius: '30px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            border: '8px solid #334155',
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column'
        }}>
            {/* Phone Notion Bar */}
            <div style={{ position: 'absolute', top: '0', left: '0', right: '0', height: '24px', background: '#334155', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '40%', height: '100%', background: 'black', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px' }}></div>
            </div>

            <div style={{ paddingTop: '32px', height: '100%', overflowY: 'auto', scrollbarWidth: 'none' }}>
                {step === 'landing' && <MobileLanding />}
                {step === 'bank-select' && <BankSelect />}
                {step === 'login' && <Login />}
                {step === 'confirm' && <Confirm />}
            </div>
        </div>
    );
};

export default MobileFlow;
