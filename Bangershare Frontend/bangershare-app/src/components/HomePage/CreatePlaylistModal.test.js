import React from 'react';
import PlaylistModal from "./CreatePlaylistModal.js";
import { createShallow } from '@material-ui/core/test-utils';
import { TextField, Button } from '@material-ui/core';

describe('<CreatePlaylistModal />', () => {

    let shallow;

    beforeAll(() => { 
        shallow = createShallow();
    });

    it('should show correct heading', () => {
        const wrapper = shallow(<PlaylistModal />);

        const h2 = <h2>Give your playlist a name</h2>;

        expect(wrapper).toContainReact(h2);
    });

    it('should have correct number of buttons', () => {
        const wrapper = shallow(<PlaylistModal />);
        expect(wrapper).toContainMatchingElements(2, Button);
    });

    it('renders first button text correctly', () => {
        const wrapper = shallow(<PlaylistModal />);
        const text = wrapper.find(Button);
        expect(text.at(0).text()).toBe('Cancel');
    });

    it('renders second button text correctly', () => {
        const wrapper = shallow(<PlaylistModal />);
        const text = wrapper.find(Button);
        expect(text.at(1).text()).toBe('Create');
    });

    it('should have correct number of textfields', () => {
        const wrapper = shallow(<PlaylistModal />);
        expect(wrapper).toContainMatchingElements(1, TextField);
    });

});