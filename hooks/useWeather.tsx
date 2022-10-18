import { ActionType, useWeatherContext } from "../context/WeatherContext";

export default function useWeather() {
    const [state, dispatch] = useWeatherContext();

    const handleChange = (select:number) => {
        dispatch({type:ActionType.CHANGE_PLACE, selectedId: select})
    }
    
    return {
        state,
        handleChange
    }
}