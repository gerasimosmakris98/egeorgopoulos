import React from 'react';
import { useUI } from '@/contexts/UIContext';
import LiveCVModal from './modals/LiveCVModal';
import ContactForm from './ContactForm';
import { SubscriptionDialog } from './SubscriptionDialog';

const GlobalModals = () => {
    const { isContactOpen, closeContact } = useUI();

    return (
        <>
            <LiveCVModal />
            <ContactForm isOpen={isContactOpen} onClose={closeContact} />
            <SubscriptionDialog />
        </>
    );
};

export default GlobalModals;
