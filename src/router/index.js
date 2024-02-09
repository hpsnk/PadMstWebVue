import Vue from 'vue'
import Router from 'vue-router'

// pages
import WelcomePage     from '@/pages/WelcomePage'
import MonsterPage     from '@/pages/MonsterPage'
import LeaderSkillPage from '@/pages/LeaderSkillPage'
import AwakenSkillPage from '@/pages/AwakenSkill'

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
    {
      path: '/awakenskill',
      name: 'AwakenSkill',
      component: AwakenSkillPage
    },
  ]
})
