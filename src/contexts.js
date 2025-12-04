import { useState, createContext } from "react";

export const FeatureFlagContext = createContext({});

export const FeatureFlagProvider = ({ children }) => {
    const [flags, setFlags] = useState({
        isInTrial: true,
        isInLowPackage: false
    });
    return (
        <FeatureFlagContext.Provider value={flags}>
            {children}
        </FeatureFlagContext.Provider>
    )
}