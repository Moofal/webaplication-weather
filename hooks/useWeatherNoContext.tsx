import { useState } from "react";
import { Weather } from "../types";

export default function useRow(initnalState: Weather) {
    const [state, setState] = useState(initnalState);

    const changePlace = (id: number) => {
        setState((prev) => ({
            ...prev,
            selectedId: id
        }))
    }

    return {state, changePlace}
}