import Vue from 'vue'
import Router from 'vue-router'

// import MonsterDetail from '@/components/MonsterDetail'
// import MonsterSearch from '@/components/MonsterSearch'

// pages
import WelcomePage from '@/pages/WelcomePage'
import MonsterPage from '@/pages/MonsterPage'
import LeaderSkillPage from '@/pages/LeaderSkillPage'
// import AwakenSkillPage from '@/pages/AwakenSkill'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WelcomePage',
      component: WelcomePage
    },
    {
      path: '/monster',
      name: 'MonsterPage',
      component: MonsterPage
    },
    {
      path: '/LeaderSkill',
      name: 'LeaderSkill',
      component: LeaderSkillPage
    },
    // {
    //   path: '/monster/detail/sample',
    //   name: 'MonsterDetail',
    //   component: MonsterDetail
    // },
    // {
    //   path: '/monster/search',
    //   name: 'MonsterSearch',
    //   component: MonsterSearch
    // },
    // {
    //   path: '/AwakenSkill',
    //   name: 'AwakenSkill',
    //   component: AwakenSkillPage
    // }
  ]
})
