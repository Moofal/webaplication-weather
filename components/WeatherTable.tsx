import useWeather from "../hooks/useWeather";
import WeatherRow from "./WeatherRow";

export default function WeatherTable() {
    const {state} = useWeather();
    return (
        <>
        <table>
            {state.reports.map((report) => (
                <WeatherRow key={report.id} id={report.id}/>
            ))}
        </table>
        </>
    );
}