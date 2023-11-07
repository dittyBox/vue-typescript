import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import axios from 'axios';
import setI18n from './locale/i18n';

loadFonts();

setI18n()
  .then((el: any) => {
    const app = createApp(App)
    // [axios / http 통신]
    app.config.globalProperties.$axios = axios
    // 다국어 
    app.use(el)
    // [라우터 사용 설정]
    app.use(router)
    // [vuetify 사용 설정]
    app.use(vuetify)
    // 상태
    app.use(store)
    // [main 아이디 : 렌더링 시작점]
    app.mount('#app')
  })
