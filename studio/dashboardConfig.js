export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '627b6d230aaa4444f500dac9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-page-trial-studio',
                  apiId: 'dc60c14c-42f3-4612-b164-885897216850'
                },
                {
                  buildHookId: '627b6d2365b28643cd27b8ed',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-page-trial',
                  apiId: '05171ab5-b020-4d25-91c2-d7c430f5ee7b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adampatt/sanity-nextjs-landing-page-trial',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-page-trial.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
