import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UIContextType {
    isLiveCVOpen: boolean;
    openLiveCV: () => void;
    closeLiveCV: () => void;
    isContactOpen: boolean;
    openContact: () => void;
    closeContact: () => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export const UIProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLiveCVOpen, setIsLiveCVOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);

    const openLiveCV = () => setIsLiveCVOpen(true);
    const closeLiveCV = () => setIsLiveCVOpen(false);

    const openContact = () => setIsContactOpen(true);
    const closeContact = () => setIsContactOpen(false);

    return (
        <UIContext.Provider value={{
            isLiveCVOpen, openLiveCV, closeLiveCV,
            isContactOpen, openContact, closeContact
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
