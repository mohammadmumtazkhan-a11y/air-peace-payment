import React, { useState } from 'react';
import Header from './components/Layout/Header';
import PaymentCard from './components/Container/PaymentCard';
import SelectionView from './views/SelectionView';
import CheckoutView from './views/CheckoutView';
import StatusView from './views/StatusView';
import MobileFlow from './views/Mobile/MobileFlow';
import SuccessView from './views/SuccessView';
import './index.css';

function App() {
  const [currentStep, setCurrentStep] = useState('selection');
  // steps: 'selection', 'checkout', 'status', 'mobile_sim', 'success'

  const handleProceedToCheckout = () => {
    setCurrentStep('checkout');
  };

  const handleScan = () => {
    setCurrentStep('status'); // Desktop waits
  };

  const handleSwitchToMobile = () => {
    setCurrentStep('mobile_sim');
  };

  const handlePaymentComplete = () => {
    setCurrentStep('success');
  };

  const handleReset = () => {
    setCurrentStep('selection');
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Background Decor */}
      <div style={{ position: 'fixed', top: '-20%', left: '-10%', width: '100vw', height: '100vh', zIndex: -1, background: 'radial-gradient(circle at 10% 20%, rgb(240, 249, 255) 0%, rgb(255, 255, 255) 90%)' }}></div>

      <Header />

      <main style={{
        flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1rem' // Add breathing room
      }}>

        {/* Helper text */}
        <div style={{ marginBottom: '1rem', fontSize: '0.8rem', color: '#94a3b8', opacity: 0.7 }}>
          State: {currentStep}
        </div>

        {currentStep === 'mobile_sim' ? (
          /* Mobile Flow */
          <div className="animate-fade-in-up">
            <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--color-primary)', fontSize: '1.2rem', fontWeight: '600' }}>Simulating Mobile Device</h2>
            <MobileFlow onComplete={handlePaymentComplete} />
          </div>
        ) : (
          /* Desktop Flow Container */
          <PaymentCard>
            <div style={{ width: '100%' }}>
              {currentStep === 'selection' && (
                <SelectionView onProceed={handleProceedToCheckout} />
              )}

              {currentStep === 'checkout' && (
                <CheckoutView onNext={handleScan} />
              )}

              {currentStep === 'status' && (
                <StatusView onSwitchToMobile={handleSwitchToMobile} />
              )}

              {currentStep === 'success' && (
                <SuccessView onReset={handleReset} />
              )}
            </div>
          </PaymentCard>
        )}

      </main>

      <footer style={{
        textAlign: 'center',
        padding: '1rem',
        color: 'var(--color-text-muted)',
        fontSize: '0.7rem',
        flexShrink: 0
      }}>
        &copy; {new Date().getFullYear()} Air Peace Limited. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
