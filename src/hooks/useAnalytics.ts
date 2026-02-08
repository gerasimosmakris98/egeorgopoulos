import { useState, useCallback, useRef } from 'react';

// Static Analytics - Backend Disconnected
interface AnalyticsData {
  totalViews: number;
  uniqueViews: number;
  topPages: { path: string; views: number }[];
  recentViews: { path: string; created_at: string; user_agent: string | null }[];
}

export const useAnalytics = () => {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    totalViews: 0,
    uniqueViews: 0,
    topPages: [],
    recentViews: []
  });

  const trackedPaths = useRef<Set<string>>(new Set());

  const trackPageView = useCallback(async (path: string) => {
    // Prevent duplicate tracking for same path in same session
    const sessionKey = `${path}-${Date.now().toString().slice(0, -4)}`;
    if (trackedPaths.current.has(sessionKey)) {
      return;
    }
    trackedPaths.current.add(sessionKey);

    // Check cookie consent
    const consent = localStorage.getItem('cookie_consent');
    if (consent === 'rejected') {
      return;
    }

    // Backend disconnected - Usage is strictly local or no-op
    // console.log("Analytics: Page view tracked locally", path);
  }, []);

  const fetchAnalytics = useCallback(async () => {
    // Backend disconnected - No data to fetch
    console.warn("Analytics: Backend disabled, cannot fetch data.");
    setAnalytics({
      totalViews: 0,
      uniqueViews: 0,
      topPages: [],
      recentViews: []
    });
  }, []);

  return { analytics, trackPageView, fetchAnalytics };
};
