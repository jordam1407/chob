/* eslint-disable no-magic-numbers */
/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

export default function FadeUp({ children, y }) {
  return (
    <motion.div
      initial={ { opacity: 0, y: y ?? 250 } }
      whileInView={ { opacity: 1, y: 0 } }
      transition={ { duration: 0.5 } }
      viewport={ { once: true } }
    >
      {children}
    </motion.div>
  );
}
