import useWeather from "../hooks/useWeather";

type WeatherRow = {
    id:number
}

export default function WeatherRow({id}:WeatherRow) {
    const {state, handleChange} = useWeather();
    function onClick() {
        handleChange(id);
    }
    return (
        <>
        <tr>
            <td>{state.reports[id].place}</td>
            <td>{state.reports[id].weather}</td>
            <td>{state.reports[id].temperatur}</td>
            {state.selectedId !== id? 
            (<button onClick={onClick}>Velg sted</button>):
            (null)    
            }
        </tr>
        </>
    )
}