import { useState } from "react";

export default function useSelected() {
    const [selected, setState] = useState(false);

    const setSelected = () => {
        if (selected === false) {
            setState(true);
        }
        
    }

    return {selected, setSelected}
}