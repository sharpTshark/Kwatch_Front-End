import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import room from '../views/room.vue'
import contact from '../views/contact.vue'
import goRoom from '../views/goRoom.vue'
import username from '../views/username.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/room/roomAction=:roomAction/error=:error/join=:roomId',
    name: 'join/create room',
    component: goRoom
  },
  {
    path: '/room/roomId=:roomId',
    name: 'room',
    component: room
  },
  {
    path: '/username/to=:roomAction',
    name: 'username',
    component: username
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// protect routes
router.beforeEach((to, from, next) => {
  const username =  sessionStorage.getItem('username')
  if (to.name == 'join/create room') {
    if (username) next()
    else {
      next({ path: '/username/to='+to.params.roomAction })
    }
  } 
  
  if (to.name == 'room') {
    if (username) next()
    else {
      next({ path: '/username/to='+to.params.roomId })
    }
  } 
  
  else next()



})

export default router
