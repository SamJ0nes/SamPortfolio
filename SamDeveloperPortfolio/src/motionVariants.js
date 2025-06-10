export const boxVariantsLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 60, damping: 20 } }
};

export const boxVariantsRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 60, damping: 20 } }
};

export const boxVariantsUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
};

export const boxVariantsFade = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0, transition: { type: "tween", duration: 1.5 } }
};
