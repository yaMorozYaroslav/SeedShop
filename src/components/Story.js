import React, {useState, useEffect} from 'react';
import {getStory} from '../services/hnApi';
import {StoryWrapper} from '../styles/StoryStyles';

export const Story = ({storyDi}) => {
	const [story, setStory] = useState();

	useEffect(()=>{
		getStory(storyDi).then(data=>data&&data.url&&setStory(data));
	}, []);

	return story && story.url?(
		<StoryWrapper data-testing="story">
		<a href={story.url}><p>{story.title}</p>
		<p>{story.title}</p>
		</a>
		By: <p>{story.by}</p>
		Posted: <p>{story.time}</p>
		</StoryWrapper>
		):null;
};