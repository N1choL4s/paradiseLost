import React from 'react'
import styled from 'styled-components'
import Media from 'react-media'

import Fullscreen from 'common/components/flex/Fullscreen';
import Centered from 'common/components/flex/Centered';
import Relative from 'common/components/Relative';



import Background from './Background'
import HomeTitle from './Title'

import getScrollPos from '../../../utils/scroll'

export default class Animation extends React.PureComponent {
    render(){
        return (
            <Relative>
                <Fullscreen>
                    <Background

                    />
                </Fullscreen>
            </Relative>
        )
    }
}