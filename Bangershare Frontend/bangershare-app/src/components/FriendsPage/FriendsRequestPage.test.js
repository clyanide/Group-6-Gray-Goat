import React from 'react';
import FriendRequest from "./FriendRequests/index.js";
import { createShallow } from '@material-ui/core/test-utils';
import { Typography } from '@material-ui/core';

describe('<FriendRequest />', () => {

    let shallow;

    beforeAll(() => { 
        shallow = createShallow();
    });

    it('should show correct number of typography', () => {
        const wrapper = shallow(<FriendRequest />);

        expect(wrapper).toContainMatchingElements(1, Typography);
    });

    it('should show correct text', () => {
        const wrapper = shallow(<FriendRequest />);
        const text = wrapper.find(Typography);

        expect(text.text()).toBe('You have no friend requests.');
    });
});