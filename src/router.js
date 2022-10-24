import { createWebHistory, createRouter } from 'vue-router';
import { mainStore } from './store/index';
import Books from  './components/Books.vue'
import Home from  './components/Home.vue'

const routes = [
    {
		path: '/',
		name: 'home',
		component: Home,
        beforeEnter: (to, from,next) => {
            const store = mainStore();
            store.unSetBooks()
            return next()
        },
	},
	{
		path: '/books',
		name: 'books',
		component: Books,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;