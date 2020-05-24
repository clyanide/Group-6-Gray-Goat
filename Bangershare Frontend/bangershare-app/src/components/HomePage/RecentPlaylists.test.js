import React from 'react';
import RecentPlaylists from "./RecentPlaylists.js";
import { createShallow } from '@material-ui/core/test-utils';
import { Typography } from '@material-ui/core';

describe('<RecentPlaylists />', () => {

    let shallow;

    beforeAll(() => { 
        shallow = createShallow();
    });

    it('should show correct number of typography', () => {
        const wrapper = shallow(<RecentPlaylists />);
        expect(wrapper).toContainMatchingElements(2, Typography);

    });

    it('should display correct typography', () => {
        const wrapper = shallow(<RecentPlaylists />);
        const text = wrapper.find(Typography);

        expect(text.at(0).text()).toBe('Recent Playlists');
    });


});