import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  // Notion Contact Form URL
  const CONTACT_FORM_URL = "https://g-makris.notion.site/ebd//cc96af92e5694ed8a5aad68e5c4e5765";

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className={cn(
        "relative w-full max-w-4xl h-[85vh] glass-effect rounded-2xl overflow-hidden shadow-premium flex flex-col",
        "animate-in fade-in-0 zoom-in-95 duration-300"
      )}>
        {/* Header with Close Button - Minimal */}
        <div className="absolute top-4 left-4 z-50">
          <Button
            variant="ghost"
            size="sm"
            aria-label="Go back"
            className="h-8 px-3 text-xs rounded-full bg-black/20 hover:bg-black/40 text-black hover:text-black dark:text-white dark:hover:text-white transition-colors backdrop-blur-sm"
            onClick={onClose}
          >
            <ArrowLeft className="w-3 h-3 mr-1" />
            Back
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1 w-full bg-white overflow-hidden relative h-full">
          <iframe
            src={CONTACT_FORM_URL}
            title="Contact Form"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
