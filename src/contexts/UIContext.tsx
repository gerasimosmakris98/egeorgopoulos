import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UIContextType {
    isLiveCVOpen: boolean;
    openLiveCV: () => void;
    closeLiveCV: () => void;
    isContactOpen: boolean;
    openContact: () => void;
    closeContact: () => void;
    subscribeState: "subscribe" | "unsubscribe" | null;
    openSubscribe: () => void;
    openUnsubscribe: () => void;
    closeSubscribe: () => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export const UIProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLiveCVOpen, setIsLiveCVOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [subscribeState, setSubscribeState] = useState<"subscribe" | "unsubscribe" | null>(null);

    const openLiveCV = () => setIsLiveCVOpen(true);
    const closeLiveCV = () => setIsLiveCVOpen(false);

    const openContact = () => setIsContactOpen(true);
    const closeContact = () => setIsContactOpen(false);

    const openSubscribe = () => setSubscribeState("subscribe");
    const openUnsubscribe = () => setSubscribeState("unsubscribe");
    const closeSubscribe = () => setSubscribeState(null);

    return (
        <UIContext.Provider value={{
            isLiveCVOpen, openLiveCV, closeLiveCV,
            isContactOpen, openContact, closeContact,
            subscribeState, openSubscribe, openUnsubscribe, closeSubscribe
        }}>
            {children}
        </UIContext.Provider>
    );
};

export const useUI = () => {
    const context = useContext(UIContext);
    if (context === undefined) {
        throw new Error('useUI must be used within a UIProvider');
    }
    return context;
};
