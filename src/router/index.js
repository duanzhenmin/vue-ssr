/**
 * @fileName index
 * @author dzm
 * @date 2020/7/14
 * @descripion
 */

"use strict";
import Vue from "vue";
import Router from "vue-router";
import Home from "./../page/index.vue";
import About from "./../page/about.vue";

Vue.use(Router);

export function createRouter() {
    return new Router({
        mode: "history",
        routes: [
            {
                path: "/",
                component: Home
            },
            {
                path: "/about",
                component: About
            }
        ]
    })
}
