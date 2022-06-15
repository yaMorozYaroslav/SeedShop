import axios from 'axios'

export const fetchElvs =()=> axios.get('https://back-elevators.herokuapp.com/elevators')
export const moveZero =()=> axios.