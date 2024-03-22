import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '@/views/NotFound.vue'
import TeamsList from '@/components/teams/TeamsList.vue'
import UsersList from '@/components/users/UsersList.vue'
import TeamMembers from '@/components/teams/TeamMembers.vue'

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
      component: TeamsList,
      children: [
        {
          path: ':teamId',
          name: 'team-members',
          component: TeamMembers,
          props: true
        }
      ]
    },
    {
      path: '/users',
      name: 'users',
      component: UsersList
    },
    {
      path: '/:notFound(.*)',
      name: 'not-found',
      component: NotFound
    }
  ]
})

export default router
