import { memo } from "react";

const Image = memo(({ src, name, active }) => {
    return (
        <div className={`image ${active ? "active" : ""}`}>
            <img src={src} alt={name} />
        </div>
    );
});

export default Image;