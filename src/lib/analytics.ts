/**
 * Utility for GA4 event tracking
 */
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, params);
    } else {
        console.warn(`GA4 event tracking failed for: ${eventName}`, params);
    }
};

/**
 * Pre-defined event types for consistency
 */
export const ANALYTICS_EVENTS = {
    VIEW_CV: 'view_cv',
    LINKEDIN_CLICK: 'linkedin_click',
    CONTACT_SUBMIT: 'contact_form_submit',
    SUBSCRIBE: 'subscription_submit',
    UNSUBSCRIBE: 'unsubscription_submit',
    SERVICE_CLICK: 'service_card_click',
    NAV_CLICK: 'navigation_click',
};
