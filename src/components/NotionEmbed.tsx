
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface NotionEmbedProps {
    url: string;
    title: string;
    className?: string;
    height?: string | number;
}

const NotionEmbed = ({ url, title, className, height = 600 }: NotionEmbedProps) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className={cn("relative w-full overflow-hidden rounded-lg bg-white", className)}>
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/50 z-10">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
            )}
            <iframe
                src={url}
                title={title}
                width="100%"
                height={height}
                frameBorder="0"
                allowFullScreen
                className="w-full h-full"
                onLoad={() => setIsLoading(false)}
            />
        </div>
    );
};

export default NotionEmbed;
