import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        var y = window.scrollY;
        var i = 99;

        function intervalFunc() {
            if (i < 0) return;

            window.scrollTo(0, y * i / 100);
            i --;
            setInterval(intervalFunc, 30);
        }

        setInterval(intervalFunc, 30);
    }, [pathname]);

    return null;
}