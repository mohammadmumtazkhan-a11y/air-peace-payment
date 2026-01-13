import React, { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

const ProcessingView = ({ onComplete }) => {
    // Simulate processing time
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 4000); // 4 seconds processing
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="animate-fade-in-up" style={{
            textAlign: 'center',
            padding: '4rem 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem'
        }}>
            {/* Logo/Icon Animation */}
            <div style={{ position: 'relative' }}>
                <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'rgba(212, 5, 17, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 1
                }} className="animate-pulse">
                    <Loader2 size={40} className="spin" color="var(--color-accent)" style={{ animation: 'spin 1.5s linear infinite' }} />
                    <style>{`
            @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          `}</style>
                </div>
                <div style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '-10px',
                    right: '-10px',
                    bottom: '-10px',
                    borderRadius: '50%',
                    border: '2px solid rgba(212, 5, 17, 0.2)',
                    zIndex: 0,
                    animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
                }}></div>
                <style>{`
            @keyframes ping {
              75%, 100% {
                transform: scale(1.5);
                opacity: 0;
              }
            }
          `}</style>
            </div>

            <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>Processing Payment...</h2>
                <p style={{ color: 'var(--color-text-muted)' }}>Please do not close this window.</p>
            </div>
        </div>
    );
};

export default ProcessingView;
