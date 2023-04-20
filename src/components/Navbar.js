import "./Navbar.css";
import React from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faBoxOpen } from "@fortawesome/free-solid-svg-icons";

const links = [
  { name: "Home", to: "#home", id: 1 },
  { name: "About", to: "#about", id: 2 },
  { name: "Service", to: "#services", id: 3 },
  { name: "Contact", to: "#contact", id: 4 },
];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

export default function Navbar() {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <main className="rounded py-1 px-1 ">
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{
              width: 300,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
          >
            <motion.div
              className="container1"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {links.map(({ name, to, id }) => (
                <motion.a
                  className="links-style"
                  key={id}
                  href={to}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                >
                  {name}
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
      <div className="btn-container">
        <button onClick={cycleOpen}>
          {open ? (
            <FontAwesomeIcon icon={faClose} />
          ) : (
            <FontAwesomeIcon icon={faBoxOpen} />
          )}
        </button>
      </div>
    </main>
  );
}
