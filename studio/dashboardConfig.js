export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '600f09ce87faf800f890b765',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-ir9w41jx',
                  apiId: '03df2d00-4722-4bd3-a4a1-ff3054ad633c'
                },
                {
                  buildHookId: '600f09ce87faf800ba90b6c7',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-o7mc8j38',
                  apiId: '9c37079b-7a21-4c11-b85a-1b161c644e47'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ZzStarShadow/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-o7mc8j38.netlify.app', category: 'apps'}
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
