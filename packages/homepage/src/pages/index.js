import React from 'react'
import { Link } from 'gatsby-link'

import Animation from '../screens/home/Animation'

import TitleAndMetaTags from '../components/TitleAndMetaTags'

export default class HomePage extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', this.scrollCheck, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollCheck);
    }

    scrollCheck = () => {
        clearTimeout(this.timer);
        if (!document.body.classList.contains('disable-hover')) {
            document.body.classList.add('disable-hover');
            window.scrolling = true;
        }

        this.timer = setTimeout(() => {
            document.body.classList.remove('disable-hover');
            window.scrolling = false;
        }, 500);
    };

     render() {
         return (
             <div>
                 <TitleAndMetaTags/>
                 <Animation/>
             </div>
         )
     }
}
