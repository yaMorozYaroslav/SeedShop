'use client'
import { useReducer, useContext } from "react";
import React from "react";
import SeedReducer from "./SeedReducer";
import {getSeeds, createSeed, editSeed, deleteSeed} from '../../api'

import {GET_SEEDS, START_LOADING, END_LOADING,
	    ADD_SEED, UPDATE_SEED, REMOVE_SEED, ERROR} from "./SeedTypes"

const SeedContext = React.createContext()

export const SeedState = ({ children }) => {
  
  const initialState = {
    seeds: {},
    loading: false, 
    error: []
  };
 
  const [state, dispatch] = useReducer(SeedReducer, initialState)

  const fetchSeeds = async(category, type, page, search, sort) => {
	try{
		dispatch({type: START_LOADING})
		
		const {data} = await getSeeds(category, type, page, search, sort)
		
		dispatch({type: GET_SEEDS, payload: data})
		
		dispatch({type: END_LOADING})
	 }
	catch(err){	
		dispatch({type: ERROR, payload: err.message})
	  }
   }
  
  const addSeed = async(source) => {
    try{
		const {data} = await createSeed(source)
		//const newData = (!category||category===data.category)&&
		//                (!type||type===data.type)?data:null
		console.log(data)
		dispatch({type: ADD_SEED, payload: data})
	 }
    catch(err){
    	dispatch({type: ERROR, payload: err})
    }
  };

  const updateSeed = async (id, source) => {
	  try{
		  const {data} = await editSeed(id, source)
		  //console.log(data)
		  dispatch({type: UPDATE_SEED, payload: data})
		  }
	  catch(err){
		dispatch({type: ERROR, payload: err})
	   }
	  }

   const removeSeed = async(id) => {
	try{
		const {data} = await deleteSeed(id)
		console.log(data)
		dispatch({type: REMOVE_SEED, payload: data})
	 }
	catch(err){
		dispatch({type: ERROR, payload: err})
	}
   }

  
  return (

    <SeedContext.Provider
      value={{
        seeds: state.seeds,
        loading: state.loading,
        error: state.error,
        fetchSeeds,
        addSeed,
        updateSeed,
        removeSeed,  
        ...state,
      }}>
      {children}
    </SeedContext.Provider>
  );
};
export const useSeedContext = () => useContext(SeedContext)
