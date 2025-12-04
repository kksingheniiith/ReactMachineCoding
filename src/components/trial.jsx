import { useContext } from "react";
import { FeatureFlagContext } from "../contexts";

const TrialComponent = () => {
    const { isInTrial } = useContext(FeatureFlagContext);
    if (!isInTrial) return null;
    return <div>Trial Component</div>;
}

export default TrialComponent;
