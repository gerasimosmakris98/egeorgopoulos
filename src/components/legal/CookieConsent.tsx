import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Cookie, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            // Small delay for better UX (don't show immediately on load)
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookie-consent', 'declined');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 z-50 md:max-w-[400px]"
                >
                    <div className="glass-card-elevated p-6 rounded-2xl border border-primary/20 bg-background/95 backdrop-blur-xl shadow-2xl">
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-primary/10 rounded-full flex-shrink-0">
                                <Cookie className="w-6 h-6 text-primary animate-pulse" />
                            </div>
                            <div className="space-y-3">
                                <h3 className="font-bold text-foreground">We use cookies</h3>
                                <p className="text-sm text-muted-foreground leading-snug">
                                    We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
                                    <br />
                                    <Link to="/legal/cookies" className="text-primary hover:underline font-medium text-xs mt-1 inline-block">
                                        Read our Cookie Policy
                                    </Link>
                                </p>
                                <div className="flex gap-2 pt-1">
                                    <Button size="sm" onClick={handleAccept} className="w-full">
                                        Accept
                                    </Button>
                                    <Button size="sm" variant="outline" onClick={handleDecline} className="w-full">
                                        Decline
                                    </Button>
                                </div>
                            </div>
                            <button
                                onClick={handleDecline}
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="Close"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
