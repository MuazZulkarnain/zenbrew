import React from "react";
import { motion } from "framer-motion";

const heightAnimation = {
  initial: {
    height: 0,
  },
  open: {
    height: "85vh",
    transition: { duration: 1, ease: [0.75, 0, 0.23, 1] },
  },
  close: {
    height: 0,
    transition: { duration: 1, ease: [0.75, 0, 0.23, 1] },
  },
};

const Nav = () => {
  return (
    <motion.nav
      variants={heightAnimation}
      initial="initial"
      animate="open"
      exit="close"
      className="bg-red-400"
    >
      nav
    </motion.nav>
  );
};

export default Nav;
