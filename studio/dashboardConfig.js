export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62374064dab2a52767898ffb',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-xuwefsrx',
                  apiId: 'e57cd4da-5398-466b-a684-edc5483a9b37'
                },
                {
                  buildHookId: '6237406526e0632d69b5de20',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-yjogpouj',
                  apiId: '1f5d3423-778e-4f84-b344-91494665cd25'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tmtz/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-yjogpouj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
