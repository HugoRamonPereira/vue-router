import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeamsList from '@/components/teams/TeamsList.vue'
import UsersList from '@/components/users/UsersList.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/teams',
      name: 'teams',
      component: TeamsList
    },
    {
      path: '/users',
      name: 'users',
      component: UsersList
    }
  ]
})

export default router
