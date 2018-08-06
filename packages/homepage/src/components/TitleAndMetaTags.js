import React from 'react'
import Helmet from 'react-helmet'

export default (
    {
      title = 'ParadiseLost',
      description =  'for developers , that is it ...'
    }) => (
        <Helmet
            title = {title}
            meta = {
                [
                    { name: 'og:title', content: title },
                    { name: 'description', content: description },
                    { name: 'og:description', content: description },
                    { name: 'twitter:description', content: description },
                    {
                        name: 'keywords',
                        content:
                            'react, paradiselost, editor, code, javascript, playground, sharing, spa, single, page, application, web, application, frontend, front, end',
                    },
                ]
            }
        />
);