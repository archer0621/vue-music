import Vue from 'vue'
import Vuex from 'vuex'

import modulesOne from '@/store/module/modulesOne'
import mutations from '@/store/mutations'
import getters from '@/store/getter'
import actions from '@/store/action'

Vue.use(Vuex)

const state = {
  musiclistId:[],
  musicCount:0,
  nowmusic:'',
  nowmusicmenu:{},
  musicmenus:[],
  userPlayList:[],
  musicDuration: 0,
  isPlaying:true,
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: {
    modulesOne,
  }
})