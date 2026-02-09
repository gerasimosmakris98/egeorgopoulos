import { trackEvent, ANALYTICS_EVENTS } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import { Mail, MailMinus } from "lucide-react";
import { useUI } from "@/contexts/UIContext";

interface SubscriptionActionsProps {
    variant?: "default" | "outline" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
    className?: string;
}

export const SubscriptionActions = ({ variant = "outline", size = "sm", className }: SubscriptionActionsProps) => {
    const { openSubscribe, openUnsubscribe } = useUI();

    return (
        <div className={`flex flex-wrap gap-2 ${className}`}>
            <Button
                variant={variant}
                size={size}
                onClick={() => {
                    trackEvent(ANALYTICS_EVENTS.SUBSCRIBE, { location: 'subscription_manager' });
                    openSubscribe();
                }}
                className="gap-2"
            >
                <Mail className="h-4 w-4" />
                Subscribe
            </Button>
            <Button
                variant="ghost"
                size={size}
                onClick={() => {
                    trackEvent(ANALYTICS_EVENTS.UNSUBSCRIBE, { location: 'subscription_manager' });
                    openUnsubscribe();
                }}
                className="gap-2 text-muted-foreground hover:text-destructive"
            >
                <MailMinus className="h-4 w-4" />
                Unsubscribe
            </Button>
        </div>
    );
};
