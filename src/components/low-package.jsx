import { useContext } from "react";
import { FeatureFlagContext } from "../contexts";
const LowPackageComponent = () => {
    const { isInLowPackage } = useContext(FeatureFlagContext);
    if (!isInLowPackage) return null;
    return <div>Low Package Component</div>;
}

export default LowPackageComponent;
