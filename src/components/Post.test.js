import React from 'react';
import Post from './Post.js';
import { configure, shallow, mount} from 'enzyme'
import {expect} from 'chai';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });




describe('<Post />', () => {
    let post = {title: "Best Post Ever!", id: 2}
    it('renders without crashing', () => {
        // const post = {title: "Best Post Ever!", id: 2}
        shallow(<Post post={post} />);
      });
    it('displays post title', () => {
        // const post = {title: "Best Post Ever!", id: 2}
        const wrapper = shallow(<Post post={post} />)
        expect(wrapper.text()).to.contain('Best Post Ever!')
    })
})

