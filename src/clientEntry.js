/**
 * @fileName clientEntry
 * @author dzm
 * @date 2020/7/13
 * @descripion
 */

"use strict";
import {createApp} from "./main";

const {app, router} = createApp()

router.onReady(() => {
    app.$mount('#app', true)
})
