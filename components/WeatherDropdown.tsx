import useSelected from "../hooks/useSelected";
import useWeather from "../hooks/useWeather";
import WeatherOption from "./Option";

type WeatherDropdownProps = {
    selected: boolean;
    setSelected: () => void;
}

export default function WeatherDropdown({selected, setSelected}:WeatherDropdownProps) {
    const {state, handleChange} = useWeather();

    function onChange(event: any) {
        const weatherID:number = parseInt(event.target.value);
        handleChange(weatherID);
        setSelected();
    }

    return (
        <>
        <select onChange={onChange}>
        <option selected disabled hidden>Velg en verdi</option>
            {state.reports.map((report) => (
                <WeatherOption key={report.id} value={report.id} name={report.place}/>
            ))}
        </select>
        </>
    );
}