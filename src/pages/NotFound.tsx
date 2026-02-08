import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MoveLeft, FileQuestion } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl opacity-20"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center relative z-10 max-w-lg mx-auto"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-24 h-24 bg-secondary/50 rounded-3xl mx-auto mb-8 flex items-center justify-center glass-effect border-border/50"
        >
          <FileQuestion className="w-10 h-10 text-primary" />
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-playfair font-bold mb-6 text-foreground">404</h1>

        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground/90">Block Not Found</h2>

        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
          The transaction you are looking for seems to be missing from the chain.
          It might have been moved or never existed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="default"
            size="lg"
            asChild
            className="rounded-full h-12 px-8 shadow-premium hover:scale-105 transition-transform"
          >
            <Link to="/">
              <MoveLeft className="mr-2 w-4 h-4" />
              Return to Home
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
