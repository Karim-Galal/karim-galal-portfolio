import { useEffect } from "react";

function useEscapeKey(enabled, callback) {
    useEffect(() => {
        if (!enabled) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                callback();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [enabled, callback]);
}

export default useEscapeKey;