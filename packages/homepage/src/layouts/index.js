import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from 'common/theme';
import '../css/typography.css';
import '../css/global.css';

// eslint-disable-next-line
export default class TemplateWrapper extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <div style={{ position: 'absolute', left: 0, right: 0, zIndex: 20 }}>

                    </div>
                    <div style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
                        {children()}
                    </div>
                </div>
            </ThemeProvider>
        );
    }
}