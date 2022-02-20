import {useState, useEffect} from 'react';
import {STORY_INCREMENT, MAX_STORIES} from '../constants';

export const useInfiniteSCroll = () => {
	const [loading, setLoading] = useState(false);
	const [count, setCount] = useState(STORY_INCREMENT);
const handleScroll=()=>{
	console.log('window++++', window);
	handleScroll();
    };
};