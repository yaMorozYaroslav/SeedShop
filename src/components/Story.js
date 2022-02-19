import React, {useState, useEffect} from 'react';
import {getStory} from '../services/hnApi';
import {mapTime} from '../mappers/mapTime'
import {StoryWrapper, StoryTitle, StoryMeta, StoryMetaElement} 
                from '../styles/StoryStyles';

export const Story = ({storyDi}) => {
	const [story, setStory] = useState();

	useEffect(()=>{
		getStory(storyDi).then(data=>data&&data.url&&setStory(data));
	}, []);

	return story && story.url?(
		<StoryWrapper data-testing="story">
		   <StoryTitle>
		<a href={story.url}>{story.title}</a>
		   </StoryTitle>
		   <StoryMeta>
     <span data-testing="story-by">
	 <StoryMetaElement color="#000">By:</StoryMetaElement>{story.by}
     </span>
     <span data-testing="story-time">
       <StoryMetaElement color="#000">Posted:</StoryMetaElement>
       {mapTime(story.time)}
	 </span>
		   </StoryMeta> 
		</StoryWrapper>
		):null;
};