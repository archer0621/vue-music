export default {
  routes: [
    {
      path: '/',
      redirect: '/home/rtstyle'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/Home.vue'),
      meta: {
        index: 7
      },
      children: [
        {
          path: 'rtstyle',
          name: 'style',
          component: () => import('@/views/right/menu/RightStyle'),
          meta: {
            index: 7
          },
        },
        {
          path: 'rtsongs',
          name: 'songs',
          component: () => import('@/views/right/menu/RightSongs'),
          meta:{index:8}
        },
        {
          path: 'rtanchor',
          name: 'anchor',
          component: () => import('@/views/right/menu/RightAnchor'),
          meta:{index:9}
        },
        {
            path: 'rtlist',
            name: 'list',
            component: () => import('@/views/right/menu/RightList'),
            meta:{index:10}
        },
        {
            path: 'rtnewsing',
            name: 'newsing',
            component: () => import('@/views/right/menu/RightNewSing'),
            meta:{index:11}
        },
        {
            path: 'rtsinger',
            name: 'singer',
            component: () => import('@/views/right/menu/RightSinger'),
            meta:{index:12}
        },
      ]
    },
    {
      path: '/songs:id',
      name: 'songslist',
      component: () => import('@/components/common/songlist/SongList'),
      meta:{index:2}
    },
    {
      path: '/anchor:id',
      name: 'anchorlist',
      component: () => import('@/components/common/anchor/AnchorList'),
      meta:{index:2}
    },
    {
      path: '/search:keywords',
      name: 'search',
      component: () => import('@/components/common/search/SearchMain'),
      meta:{index:2}
    },
    {
      path: '/myseilffm',
      name: 'myseilffm',
      component: () => import('@/components/common/myseilfFM/MyseilfFM'),
      meta:{index:5}
  },
  ],
  mode: 'history'
}