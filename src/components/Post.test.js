import React from 'react';
import Post from './Post.js';
import { configure, shallow, mount} from 'enzyme'
import {expect} from 'chai';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });




describe('<Post />', () => {
    const post = { 
        title: "Best Post Ever!", 
        id: 2, url: "www.post.com", 
        permalink: "/r/posts/thispost", 
        author: "RedditUser",
        // created_utc: new Date().getTime()
    }

    const postWrapper = shallow(<Post post={post} />)
    it('renders without crashing', () => {
        postWrapper;
      });
    it('displays post title', () => {
        // const postWrapper = shallow(<Post post={post} />)
        expect(postWrapper.text()).to.contain(post.title)
    })
    it('displays post title linking to the shared post or site', () => {
        expect(postWrapper.html()).to.contain(`<a href="${post.url}">`)
    })
    it('displays link to the comments on the reddit site ', () => {
        expect(postWrapper.html()).to.contain(`<a href="https://www.reddit.com${post.permalink}">`)
    })
    // it('displays Date and Time it was posted', () => {
    //     expect(postWrapper.text()).to.contain(post.created_utc.toString())
    // })
    it('displays username of post author', () => {
        expect(postWrapper.text()).to.contain(post.author)
    })
    
})

