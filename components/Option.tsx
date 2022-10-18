import { stringify } from "querystring";

type OptionProps = {
    value: number;
    name: string;
}

export default function WeatherOption ({value, name}: OptionProps) {
    return (
        <option value={value}>{name}</option>
    );
}