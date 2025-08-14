import { useState } from "react";

const HocCompo = (OrginalCompo: any) => {
    const newCompo = () => {
        const [count, setCount] = useState<number>(0);
        return <OrginalCompo reset={() => setCount(0)} deCount={() => setCount((count) => count - 1)} incCount={() => setCount((count) => count + 1)} count={count} />;
    };
    return newCompo;
};

export default HocCompo; 