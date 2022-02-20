import React, {useEffect, useState} from 'react';
import {getStoryIds, getStory} from '../services/hnApi';
import {Story} from '../components/Story';
import {GlobalStyle, StoriesContainerWrapper} 
                      from '../styles/StorContStyl';
import {useInfiniteScroll} from '../hooks/useInfiniteScroll';
 export const StorCont = () =>{
	const [storyIds, setStoryIds] = useState([]);
  const test = useInfiniteScroll();
	useEffect(()=>{
		getStoryIds().then(data=>setStoryIds(data));
		getStory(30388152).then(data => console.log(data));
	}, []);
     return (
      <>
      <GlobalStyle />
      <StoriesContainerWrapper data-test-id="stories-container">
        <h1>Hacker News Stories</h1>
  {storyIds.map(storyDi=>
  	        (<Story key={storyDi} storyDi={storyDi}/>
                 ))}
      </StoriesContainerWrapper>
            </>
        );
     };