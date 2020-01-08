import Vue from 'vue'
import Vuex from 'vuex'
import { ORMDatabase } from 'vuex-orm-decorators'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [ORMDatabase.install()]
})
