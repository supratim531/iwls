import React from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { AnimatePresence } from "framer-motion";

// import { NRIBannerImage } from "../../assets";

const NRIAdModal = (props) => {
  const { isOpen, onClose } = props;

  return (
    <AnimatePresence>
      {isOpen && (
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
            className="scrollbar relative mx-6 max-h-[90vh] w-[600px] max-w-2xl overflow-y-auto rounded-lg bg-white"
          >
            <div className="flex flex-col bg-white">
              <div className="sticky top-0 z-10 flex h-[36px] items-center justify-end bg-white px-4">
                <button onClick={onClose} className="text-primary-dark">
                  <i className="text-2xl fa-solid fa-xmark"></i>
                </button>
              </div>

              <div className="">
                <img
                  src="https://innerworklegalservices.com/images/nri-banner.png"
                  alt="NRI"
                />
              </div>
            </div>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default NRIAdModal;
