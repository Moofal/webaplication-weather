export type Weather = {
    reports: report[];
    selectedId: number;
}
export type report = {
    id: number;
    place: string;
    weather: string;
    temperatur: number;
}
