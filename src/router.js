import { createWebHistory, createRouter } from 'vue-router';
import Books from  './components/Books.vue'
import Home from  './components/Home.vue'

const routes = [
    {
		path: '/home',
		name: 'home',
		component: Home,
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