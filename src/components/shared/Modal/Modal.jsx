import React from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";

const Modal = (props) => {
  const { title, isOpen, onClose, children } = props;

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative mx-6 max-h-[90vh] w-[600px] max-w-2xl overflow-y-auto rounded-lg bg-white p-6"
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-primary-dark">
              {title ? title : null}
            </span>
            <button onClick={onClose} className="text-primary-dark">
              <i className="fa-solid fa-xmark text-4xl"></i>
            </button>
          </div>

          {children}
        </div>
      </motion.div>
    </Dialog>
  );
};

export default Modal;
