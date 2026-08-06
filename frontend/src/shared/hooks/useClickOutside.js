import { useEffect } from "react";

function useClickOutside(ref, enabled, callback) {
    useEffect(() => {
        if (!enabled) return;

        const handleMouseDown = (event) => {
            if (!ref.current) return;

            if (!ref.current.contains(event.target)) {
                callback();
            }
        };

        document.addEventListener("pointerdown", handleMouseDown);

        return () => {
            document.removeEventListener("pointerdown", handleMouseDown);
        };
    }, [ref, enabled, callback]);
}

export default useClickOutside;