Vue3
상태관리 - Pinia
https://ko.vuejs.org/guide/scaling-up/state-management.html#ssr-considerations

lifecycle
https://ko.vuejs.org/guide/essentials/lifecycle.html
https://willy-whales.tistory.com/18

Vue.js에서는 vue-i18n 라이브러리를 사용하여 쉽게 프로젝트의 다국어 처리를 해줄 수 있다.  
https://developerjournal.tistory.com/10

DB 다국어
https://dong-queue.tistory.com/65

Auth
https://github.com/lumiamitie/TIL/blob/master/js/vue_auth.md
https://zakelstorm.tistory.com/141

Router 에서 beforeEnter를 이용해서 로그인 체크 하기
https://m.blog.naver.com/1ilsang/221338086140
https://velog.io/@jiiiiinni/Vue.js-Router-%EC%A0%91%EA%B7%BC-%EA%B6%8C%ED%95%9C-%EB%B6%80%EC%97%AC%ED%95%98%EA%B8%B0Router-Guard
https://www.google.com/search?q=vue+router+%EA%B6%8C%ED%95%9C&sca_esv=579969189&ei=tYtJZf2TH82LoASi5r24Aw&ved=0ahUKEwi9wqnA17CCAxXNBYgKHSJzDzcQ4dUDCBA&uact=5&oq=vue+router+%EA%B6%8C%ED%95%9C&gs_lp=Egxnd3Mtd2l6LXNlcnAiEXZ1ZSByb3V0ZXIg6raM7ZWcMgUQABiABEjpPFCbCliTPHADeAGQAQGYAYgBoAGKFaoBBDUuMjC4AQPIAQD4AQHCAgoQABhHGNYEGLADwgIHEAAYigUYQ8ICBBAAGB7CAgYQABgIGB7CAgYQABgFGB7CAgsQABiABBixAxiDAcICBBAAGAPiAwQYACBBiAYBkAYK&sclient=gws-wiz-serp

axios typescript
https://stack94.tistory.com/entry/TypeScript-Axios-TypeScript-%EC%A0%81%EC%9A%A9%ED%95%98%EC%97%AC-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EC%9E%90

동적 라우팅 만들기
안됩니다. webpack은 정적이던 동적이던 import 하면 실제 경로로 변환하여 맞는지 확인하고 내용을 확인하여 웹에 맞게끔 패키징을 하는 역할을 합니다. 
즉, 변환을 하게 되고 변환하면 원본 import 소스와는 달리 괴랄한 코드로 변하게 되어 직접 파보지 않으면 알 수 없게 됩니다. 당연히 이걸 API 단에서는 알 수가 없습니다.
만약 권한별로 라우트 경로를 저장하고 싶다면, 내부 js를 하나 만들고 거기에 동적 import 문 (위에서 한 거)을 
JSON 방식의 사전을 만들어서 (기존에 routes 속성에 정의했던 것들) 예를 들어 로그인한 뒤 성공 시 권한을 가져와서 적절하게 route 사전을 가져와 취합한 뒤, 
this.$route.addRoutes(...) 메소드를 통해 라우팅을 추가할 수 있습니다.

라우팅 추가 메소드 사용법: https://router.vuejs.org/api/#router-addroutes
https://router.vuejs.kr/guide/advanced/dynamic-routing.html

addRoutes 메소드를 구글링해보면 여러가지 케이스에 대한 동적 라우팅 생성에 대한 예제도 있으므로 참고도 해보시길.