import {Weather} from '../types'

export const data: Weather = {
    reports: [
    {id: 0, place: 'Sarpsborg', weather:'Sunny', temperatur:20},
    {id: 1, place: 'Fredrikstad', weather:'Storm', temperatur:5},
    {id: 2, place: 'Halden', weather:'Mosune', temperatur:22},
    {id: 3, place: 'Oslo ', weather:'Snow', temperatur:-6},
    {id: 4, place: 'Moss', weather:'Toxic', temperatur:88}
    ],
    selectedId: 0,
}