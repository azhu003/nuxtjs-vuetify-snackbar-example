import Vue from 'vue'
import message from 'vuetify-message-snackbar'
import Vuetify, {VSnackbar, VIcon, VBtn} from 'vuetify/lib'

Vue.use(Vuetify)
Vue.component('v-snackbar', VSnackbar)
Vue.component('v-btn', VBtn)
Vue.component('v-icon', VIcon)

const MessageOption = {
  app: true,
  top: true,
  right: true,
  dark: true,
}
Vue.use(message, MessageOption)
