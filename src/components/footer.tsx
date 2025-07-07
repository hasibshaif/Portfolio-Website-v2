import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-gray-400 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            © 2024 Hasib Shaif. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}