import {describe, it} from 'vitest'
import {act, renderHook} from '@testing-library/react'
import {data} from '../data'
import useWeather from '../hooks/useWeatherNoContext'

describe('useWeather', () => {
    it('should exist', () => {
        const {result} = renderHook(() => useWeather(data))
        expect(result).toBeDefined()
    })
    it('should have weatherData', () => {
        const {result} = renderHook(() => useWeather(data))
        expect(result.current.state).toMatchObject(data)
    })
    it('should update selectedId', () => {
        const {result} = renderHook(() => useWeather(data))
        act(() => {
            result.current.changePlace(1)
        })
        expect(result.current.state.selectedId).toBe(1)
    })
    it('selected id place should match place in data', () => {
        const {result} = renderHook(() => useWeather(data))
        const testId = 1
        act(() => {
            result.current.changePlace(testId)
        })
        expect(result.current.state.reports[testId]).toMatchObject({
            id: 1, place: 'Fredrikstad', weather:'Storm', temperatur:5
        })
    })
})