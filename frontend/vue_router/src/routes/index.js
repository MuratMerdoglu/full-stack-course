import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Error from "../views/Error.vue";

export const routes = [
    {
        path: "/", component: Home
    },
    {
        path: "/about/:id", component: About
    },
    {
        path: "*", component: Error
    }

]
