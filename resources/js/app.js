import { createWebHashHistory, createRouter } from 'vue-router';
import Student from './component/Student.vue';
import AddStudent from './component/AddStudent.vue';
import { createApp } from "vue";
import { Form, HasError, AlertError } from 'vform'
window.Form = Form;
const form = new Form({})

const Vue = window.vue;
require('bootstrap');
window.axios = require('axios');


const routes = [
    {
        path: '/',
        name: 'Student List',
        component: Student
    },
    {
        path: '/add-student',
        name: 'Add Student',
        component: AddStudent
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp({})
app.use(router)

app.mount('#app')