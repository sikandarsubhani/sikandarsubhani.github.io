import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-4 z-50">
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="p-3 bg-primary rounded-full shadow-lg hover:bg-primary/80 transition-colors"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
      
      <motion.a
        href={`https://wa.me/923054090834`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        className="p-3 bg-[#25D366] rounded-full shadow-lg"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  );
};