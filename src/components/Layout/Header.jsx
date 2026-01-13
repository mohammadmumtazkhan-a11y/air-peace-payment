import React from 'react';
import { Plane } from 'lucide-react';

const Header = () => {
    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.5rem 2rem',
            maxWidth: '1200px',
            margin: '0 auto',
            width: '100%'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="animate-fade-in-up">
                {/* Logo Icon */}
                <div style={{
                    background: 'linear-gradient(135deg, var(--color-primary), #0044CC)',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0, 51, 153, 0.3)'
                }}>
                    <Plane color="white" size={20} fill="white" style={{ transform: 'rotate(-45deg)' }} />
                </div>

                {/* Wordmark */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h1 style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        lineHeight: '1',
                        color: 'var(--color-primary)',
                        letterSpacing: '-0.02em'
                    }}>
                        AIR <span style={{ color: 'var(--color-accent)' }}>PEACE</span>
                    </h1>
                    <span style={{
                        fontSize: '0.75rem',
                        color: 'var(--color-text-muted)',
                        fontWeight: '500',
                        fontStyle: 'italic'
                    }}>
                        ...your peace, our goal
                    </span>
                </div>
            </div>

            {/* Optional: Navigation or Help Link */}
            <nav className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <a href="#" style={{
                    textDecoration: 'none',
                    color: 'var(--color-primary)',
                    fontWeight: '500',
                    fontSize: '0.9rem',
                    opacity: 0.8,
                    transition: 'var(--transition-fast)'
                }}>
                    Need Help?
                </a>
            </nav>
        </header>
    );
};

export default Header;
