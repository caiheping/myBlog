import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 视图列表
    TagsViews: [],
    // 激活菜单
    activeMenu: 'home',
    // 主题
    theme: '#80BCFB'
  },
  mutations: {

  },
  actions: {

  }
})
