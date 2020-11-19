import Vue from "vue";
import Router from "vue-router";
import NotFound from "../views/NotFound";
import Home from "../views/Home";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            name: "Home",
            path: "/home",
            component: Home
        },
        {
            name: "Profile",
            path: "/profile/:id",
            component: () =>
                import(/* webpackChunckName: 'Profile' */ "../views/Profile")
        },
        {
            name: "Videos",
            path: "/videos",
            component: () =>
                import(/* webpackChunckName: 'Videos' */ "../views/Videos")
        },
        {
            name: "Notifications",
            path: "/notifications",
            component: () =>
                import(
                    /* webpackChunckName: 'Notifications' */ "../views/Notifications"
                )
        },
        {
            name: "Messages",
            path: "/:username/messages",
            component: () =>
                import(/* webpackChunckName: 'Messages' */ "../views/Messages")
        },
        {
            name: "Friends",
            path: "/:id/friends",
            component: () =>
                import(/* webpackChunckName: 'Friends' */ "../views/Friends")
        },
         {
            name: "FriendRequests",
            path: "/:id/requests",
            component: () =>
                import(/* webpackChunckName: 'FriendRequests' */ "../views/FriendRequests")
        },
        {
            name: "NotFound",
            path: "*",
            component: NotFound
        }
    ]
});
