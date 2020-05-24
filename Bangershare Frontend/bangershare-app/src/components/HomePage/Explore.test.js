import React from 'react';
import Explore from "./Explore.js";
import { createShallow } from '@material-ui/core/test-utils';
import { Typography } from '@material-ui/core';

describe('<Explore />', () => {

    let shallow;

    beforeAll(() => { 
        shallow = createShallow();
    });

    it('should show correct number of typography', () => {
        const wrapper = shallow(<Explore />);
        expect(wrapper).toContainMatchingElements(2, Typography);

    });

    it('should display correct typography', () => {
        const wrapper = shallow(<Explore />);
        const text = wrapper.find(Typography);

        expect(text.at(0).text()).toBe('Explore');
    });

});