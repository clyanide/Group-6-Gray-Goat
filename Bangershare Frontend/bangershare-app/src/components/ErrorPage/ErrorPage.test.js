import React from 'react';
import ErrorPage from "./index.js";
import { createShallow } from '@material-ui/core/test-utils';
import ErrorImage from "./Error.jpg"

describe('<ErrorPage />', () => {

    let shallow;

    beforeAll(() => {
        shallow = createShallow();
    });

    it('does render h1 text', () => {
        const wrapper = shallow(<ErrorPage />);

        const text = <h1
            style={{
                fontSize: "70px",
                marginTop: "20px",
                marginBottom: "20px",
                textAlign: "left",
                marginLeft: "40px",
            }}
        >
            Oops!
        </h1>

        expect(wrapper).toContainReact(text);
    });

    it('does render h2 text', () => {
        const wrapper = shallow(<ErrorPage />);

        const text1 = <h2
            style={{
                fontWeight: "lighter",
                textAlign: "left",
                marginLeft: "40px",
            }}
        >
            You seem to have lost your way :c
        </h2>

        const text2 = <h2
            style={{
                marginBottom: "20px",
                fontWeight: "lighter",
                textAlign: "left",
                marginLeft: "40px",
            }}
        >
            Don't feel bad, it happens to everyone.
        </h2>

        const text3 = <h2
            style={{
                marginBottom: "20px",
                fontWeight: "lighter",
                textAlign: "left",
                marginLeft: "40px",
            }}
        >
            Here is a picture of our dear friend Yin Wang when he lost
            his way to the barbershop.
        </h2>



        expect(wrapper).toContainReact(text1);
        expect(wrapper).toContainReact(text2);
        expect(wrapper).toContainReact(text3);
    });

    it('does render h3 text', () => {
        const wrapper = shallow(<ErrorPage />);

        const text = <h3
            style={{
                marginBottom: "20px",
                fontWeight: "lighter",
                textAlign: "left",
                marginLeft: "40px",
            }}
        >
            Error code: <strong>404</strong>
        </h3>

        expect(wrapper).toContainReact(text);
    });

    it('does render correct image', () => {
        const wrapper = shallow(<ErrorPage />);

        expect(wrapper.find("img").prop("src")).toEqual(ErrorImage);
    });
});