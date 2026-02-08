
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Mail, MailMinus } from "lucide-react";
import NotionEmbed from "./NotionEmbed";

const SUBSCRIBE_URL = "https://g-makris.notion.site/ebd//6e6794ace6cf4299b1fcacb5a20b9ace";
const UNSUBSCRIBE_URL = "https://g-makris.notion.site/ebd//62712591f75e43ab958486be913ef9d8";

interface SubscriptionActionsProps {
    variant?: "default" | "outline" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
    className?: string;
}

export const SubscriptionActions = ({ variant = "outline", size = "sm", className }: SubscriptionActionsProps) => {
    const [openForm, setOpenForm] = useState<"subscribe" | "unsubscribe" | null>(null);

    return (
        <>
            <div className={`flex flex-wrap gap-2 ${className}`}>
                <Button
                    variant={variant}
                    size={size}
                    onClick={() => setOpenForm("subscribe")}
                    className="gap-2"
                >
                    <Mail className="h-4 w-4" />
                    Subscribe
                </Button>
                <Button
                    variant="ghost"
                    size={size}
                    onClick={() => setOpenForm("unsubscribe")}
                    className="gap-2 text-muted-foreground hover:text-destructive"
                >
                    <MailMinus className="h-4 w-4" />
                    Unsubscribe
                </Button>
            </div>

            <Dialog open={openForm !== null} onOpenChange={(open) => !open && setOpenForm(null)}>
                <DialogContent className="max-w-4xl h-[80vh] flex flex-col p-0 overflow-hidden glass-effect border-white/10 shadow-premium">
                    <div className="absolute top-4 left-4 z-50">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setOpenForm(null)}
                            className="h-8 px-3 text-xs rounded-full bg-black/20 hover:bg-black/40 text-black hover:text-black dark:text-white dark:hover:text-white transition-colors backdrop-blur-sm"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-3 h-3 mr-1"
                            >
                                <path d="m15 18-6-6 6-6" />
                            </svg>
                            Back
                        </Button>
                    </div>
                    <div className="flex-1 overflow-auto bg-white">
                        {openForm === "subscribe" && (
                            <NotionEmbed
                                url={SUBSCRIBE_URL}
                                title="Subscription Form"
                                height="100%"
                                className="h-full min-h-[500px]"
                            />
                        )}
                        {openForm === "unsubscribe" && (
                            <NotionEmbed
                                url={UNSUBSCRIBE_URL}
                                title="Unsubscription Form"
                                height="100%"
                                className="h-full min-h-[500px]"
                            />
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};
