
import { motion } from "framer-motion";

const GlobalLoader = () => {
    return (
        <div className="fixed inset-0 min-h-screen bg-background flex flex-col items-center justify-center z-50">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
            >
                {/* Pulsing rings */}
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
                />

                {/* Core spinner */}
                <div className="relative w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />

                {/* Logo/Brand placeholder within spinner */}
                <div className="absolute inset-0 flex items-center justify-center font-playfair font-bold text-xl text-foreground">
                    E.G.
                </div>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-sm text-muted-foreground font-medium tracking-widest uppercase"
            >
                Loading Experience...
            </motion.p>
        </div>
    );
};

export default GlobalLoader;
