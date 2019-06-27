import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from "../button";

Enzyme.configure({ adapter: new Adapter() });

describe('button specs', () => {
    it('should render button component', () => {
        const wrapper = shallow(<Button>My Button</Button>);

        expect(wrapper.text()).toEqual('My Button');
    });
});
