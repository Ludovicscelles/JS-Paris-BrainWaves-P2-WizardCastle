import {createContext, useContext, useState, useMemo } from 'react';
import PropTypes from "prop-types";

const ScrollContext = createContext();

export function ScrollProvider({
    children,
}) {

    const [noScroll, setNoScroll] = useState("");
    const memo = useMemo(() => ({noScroll, setNoScroll}), [noScroll])

    return (
        <ScrollContext.Provider value={memo}>
            {children}
        </ScrollContext.Provider>
    )
}

ScrollProvider.propTypes = {
    children: PropTypes.func.isRequired,
}

export const useScroll = () => useContext(ScrollContext)

