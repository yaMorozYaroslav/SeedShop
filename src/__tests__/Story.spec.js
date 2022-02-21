import React from 'react';
import {Story} from '../components/Story';
import {render, cleanup, waitForElement}from'@testing-library/react';
import {singularStory} from '../fixtures';
import {getStory} from '../services/hnApi';

beforeEach(()=>{
	cleanup();
	jest.resetAllMocks();
});

jest.mock('../services/hnApi', ()=>({
	getStory: jest.fn(),
}));
test('renders the dtory with component', async ()=>{	
 getStory.mockImplementation(()=>Promise.resolve(singularStory));
	
	const{getByText, queryByTestId} = render(<Story storyId="1" />);
	   await waitForElement(()=>[
			queryByTestId('story'),
			expect(getByText('Tarnished: Google Responds')).toBeTruthy(),
			//expect(queryByTestId('story-by')
				 //  .textContent).toEqual('By: Karl Hadwen'),
		  	]);
	    });
