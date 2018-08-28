import React from 'react';
import styled from 'styled-components';

import { sandboxUrl } from 'common/utils/url-generator'

import media from '../../../utils/media'
import { fadeIn } from "../../../utils/animation";
import RollingText from '../../../components/RollingText'
import Button from '../../../components/Button'

const Container = styled.div`
    color: white;
    flex: 2;
    
    ${media.tablet`
        flex:1;
        transform: none;
    `};
`;

const Titile = styled.h1`
  font-weight: 600;
  font-size: 1rem;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
  font-family: Source Sans Pro, Open Sans, Segoe UI, sans-serif;
  ${media.tablet`
    text-align: center;
  `};
  
  ${media.phone`
    font-size: 3rem;
  `};
`;

const SubTitle = styled.h2`
    font-weight: 600;
    font-size: 1rem;
    font-family: Source Sans Pro, Open Sans, Segoe UI, sans-serif;
    line-height: 1.2;
    padding-bottom: 2rem;
    
    color: rgba(255, 255, 255, 0.9);
    
    ${fadeIn(0,4)};
    
    ${media.tablet`
        text-align: center;
    `};
    
    ${media.phone`
        font-size: 1.5rem;
    `};
`;

const Buttons = styled.div`
  display: flex;
  width: 550px;
  ${fadeIn(0.5)};
  font-size: 1rem;

  a {
    margin-right: 1rem;

    ${media.tablet`
      margin: 0;
      text-align: center;
      margin-right: 0;
    `};
  }

  ${media.tablet`
    margin: 0 1rem;
    justify-content: space-around;
    width: 100%;
    text-align: center;
  `};

  ${media.phone`
    font-size: .875rem;

    a {
      width: inherit;
    }
  `};
`;

const ResponsiveRollingText = styled(RollingText)`
  ${media.tablet`
    width: 100%;
  `};
`;

const Primary = styled.div`
  display: inline-block;
  margin-left: 1rem;
  ${fadeIn(0.3)};
  color: ${props => props.theme.primary};
`;

const Secondary = styled.div`
  transition: 0.5s ease color;
  display: inline-block;
  ${fadeIn(0.2)};
`;

const isBot = () => {
    return /google|baidu|bing|msn|duckduckgo|teoma|slurp|yandex/i.test(
        navigator.userAgent
    );
};

export default ( {template} ) => (
    <Container>
        <Titile title="ParadisLost">
            <Secondary style={{ color: template.color() }}>
                Develope Platform
            </Secondary>
            <Primary></Primary>
        </Titile>
        <SubTitle title="The online code editor tailored for web applications">
            {typeof window === 'undefined' || isBot() ? (
                <span>The online code editor for web applications</span>
            ) : (
            <span>
              The online editor for{' '}
                        <RollingText updateCheck={template.name} width="12rem">
                <span style={{ color: template.color() }}>
                  {template.niceName === 'Vanilla' ? 'Web' : template.niceName}
                </span>
              </RollingText>
            </span>
            )}
        </SubTitle>

        <ResponsiveRollingText>
            <Buttons>
                <Button
                    href={sandboxUrl({ id: template.shortid })}
                    color={template.color}
                    style={{ width: 135 }}
                >
                    Open {template.niceName}
                </Button>
                <Button
                    href={`https://codesandbox.io/search?refinementList%5Btemplate%5D%5B0%5D=${
                        template.name
                        }`}
                    color={template.color}
                    secondary
                >
                    Explore Example
                </Button>
            </Buttons>
        </ResponsiveRollingText>
    </Container>
);