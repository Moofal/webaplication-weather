import useWeather from "../hooks/useWeather";

export default function InfoBox() {
    const {state} = useWeather();
    return (
        <>
        <div className="InfoBox">
            <span>{state.reports[state.selectedId].place}</span> |
            <span>{state.reports[state.selectedId].weather}</span> |
            <span>{state.reports[state.selectedId].temperatur} grader</span> |
        </div>
        </>
    ); 
}