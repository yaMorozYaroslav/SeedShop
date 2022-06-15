import axios from 'axios'

export const fetchElvs =()=> axios.get('https://back-elevators.herokuapp.com/elevators')
export const moveZero =()=> axios.put('https://back-elevators.herokuapp.com/floor/0')
export const moveEight =()=> axios.put('https://back-elevators.herokuapp.com/floor/8')