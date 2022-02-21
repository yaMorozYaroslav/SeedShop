import React, {useEffect, useState} from 'react';
import {getStoryIds, getStory} from '../services/hnApi';
import {Story} from '../components/Story';
import {GlobalStyle, StoriesContainerWrapper} 
                      from '../styles/StorContStyl';
import {useInfiniteScroll} from '../hooks/useInfiniteScroll';
 export const StorCont = () =>{
  const {count} = useInfiniteScroll();
	const [storyIds, setStoryIds] = useState([]);
  
	useEffect(()=>{
		getStoryIds().then(data=>setStoryIds(data)); 
	}, []);
     return (
      <>
      <GlobalStyle />
      <StoriesContainerWrapper data-test-id="stories-container">
        <h1>Hacker News Stories</h1>
  {storyIds.slice(0, count).map(storyDi=>
  	        (<Story key={storyDi} storyDi={storyDi}/>
                 ))}
      </StoriesContainerWrapper>
            </>
        );
     };