import axios from 'axios';
import {getStoryIds, getStory, newStoriesUrl, storyUrl}
                               from '../services/hnApi';
import {singularStory, storyIds, emptySingularStory} 
                                from '../fixtures';
import {cleanup} from '@testing-library/react';
jest.mock('axios');

describe('HackerNews Api', ()=>{
	beforeEach(()=>{
		cleanup();
		jest.resetAllMocks();
	});

	describe('getStory functionality', ()=>{
  it('requests and gets a story from the HackerNews Api',async() => {
       axios.get.mockImplementation(()=>
       	   Promise.resolve({data: singularStory})
       	);
       const entity = await getStory(1);
       expect(axios.get).toHaveBeenCalledTimes(1);
     expect(axios.get).toHaveBeenCalledWith(`${storyUrl + 1}.json`);
     expect(entity).toEqual(singularStory);
	});
  it('doesnt retrieve a story, but handles',async () => {
  	  axios.get.mockImplementation(()=>
       	 Promise.resolve({data: emptySingularStory})
       	);
      const entity = await getStory(1);
     expect(axios.get).toHaveBeenCalledTimes(1);
     expect(axios.get).toHaveBeenCalledWith(`${storyUrl + 1}.json`);
     expect(entity).toEqual(emptySingularStory);
  });
  it('requests and gets a story from the HackerNews Api',async() => {
 axios.get.mockImplementation(()=>Promise.resolve({data: storyIds})
       	);
       const entity = await getStoryIds();
       expect(axios.get).toHaveBeenCalledTimes(1);
     expect(axios.get).toHaveBeenCalledWith(newStoriesUrl);
     expect(entity).toEqual(storyIds);
	});
	});
});