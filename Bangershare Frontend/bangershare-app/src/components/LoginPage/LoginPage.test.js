import React from 'react';
import LoginPage from "./LoginForm.js";
import { Button } from "@material-ui/core";
import { createShallow } from '@material-ui/core/test-utils';

describe('<LoginForm />', () => {

    let shallow;

    beforeAll(() => {
        shallow = createShallow();
    });

    it('does not render the error label', () => {
        const wrapper = shallow(<LoginPage />);

        const label = <label
            style={{
                marginLeft: "10px",
                color: "red",
            }}
        >
            Invalid Username or Password
            </label>

        expect(wrapper).not.toContainReact(label);
    });

    it('renders only a single button', () => {
        const wrapper = shallow(<LoginPage />);
        expect(wrapper).toContainMatchingElements(1, Button);
    });

    it('renders button text correctly', () => {
        const wrapper = shallow(<LoginPage />);
        const text = wrapper.find(Button);
        expect(text.text()).toBe('Login');
    });
});