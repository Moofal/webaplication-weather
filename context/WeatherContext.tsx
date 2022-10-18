import * as React from "react";
import { createContext, useContext, useReducer } from "react";
import { Weather } from "../types";

 // bestemer case handling for reducer
export enum ActionType {
    CHANGE_PLACE = 'CHANGE_PLACE'
}

// type of actions 
// this one changes the selecred value changing the report shown
type Action = 
    | {type: ActionType.CHANGE_PLACE; selectedId: number;}
// the inital values
const initialState:Weather = {
    reports: [
    {id: 0, place: 'Sarpsborg', weather:'Sunny', temperatur:20},
    {id: 1, place: 'Fredrikstad', weather:'Storm', temperatur:5},
    {id: 2, place: 'Halden', weather:'Mosune', temperatur:22},
    {id: 3, place: 'Oslo ', weather:'Snow', temperatur:-6},
    {id: 4, place: 'Moss', weather:'Toxic', temperatur:88}
    ],
    selectedId: 0,
}

const WeatherContext = React.createContext< 
    [Weather, React.Dispatch<Action>] | undefined
>(undefined)

//const WeatherContext = createContext({});
function reducer (state:Weather, action: Action):Weather {
    switch (action.type) {
        case ActionType.CHANGE_PLACE: {
            return {
                ...state,
                selectedId: action.selectedId,
            };
        }
        default: {
           return state     
        }
    }
}

type WeatherProviderProps = {
    children: React.ReactNode
  }

const WeatherProvider = ({children}: WeatherProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <WeatherContext.Provider value={[state, dispatch]}>
            {children}
        </WeatherContext.Provider>
    );
}

function useWeatherContext () {
    const context = useContext(WeatherContext);

    if (context === undefined) {
        throw new Error('useWeatherContext must be used within a GameProvider')
    }

    return context;
} 
export{WeatherProvider, useWeatherContext}