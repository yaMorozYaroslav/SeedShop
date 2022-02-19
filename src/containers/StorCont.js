import React, {useEffect, useState} from 'react';
import {getStoryIds, getStory} from '../services/hnApi';
import {Story} from '../components/Story'
 export const StorCont = () =>{
	const [storyIds, setStoryIds] = useState([]);
	useEffect(()=>{
		getStoryIds().then(data=>setStoryIds(data));
		getStory(30388152).then(data => console.log(data));
	}, []);
     return (
      <>
        <h1>Hacker News Stories</h1>
  {storyIds.map(storyDi=>(<Story key={storyDi} storyDi={storyDi}/>
                 ))}
            </>
        );
     };