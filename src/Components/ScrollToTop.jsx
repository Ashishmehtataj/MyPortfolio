import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisible = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisible);

        return () => window.removeEventListener("scroll", toggleVisible);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            style={{
                position: "fixed",
                right: "20px",
                bottom: "20px",
                zIndex: 9999,
            }}
            className={`fixed bottom-6 right-6 z-50
                    h-12 w-12 rounded-full
                  bg-cyan-500 text-yellow-200
                    flex items-center justify-center
                    shadow-lg 
                    transition-all duration-300
                    hadow-[0_0_20px_rgba(34,211,238,0.7)]
                    hover:shadow-[0_0_35px_rgba(34,211,238,1)]
                    hover:scale-110
      ${visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5 pointer-events-none"
                }`}
        >
            <FaArrowUp size={30} className="border" />
        </button>
    );
};

export default ScrollToTop;