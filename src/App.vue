<template>
  <ElConfigProvider :locale="locale">
        <router-view />
  </ElConfigProvider>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ElConfigProvider } from 'element-plus';
import localStorageAuthService from './common/authStorage';
import { DEFAULT_LANGUAGE, SUPPORT_LANGUAGE } from './common/constants';
import en from '@/plugins/element-ui/locale/en';
import vi from '@/plugins/element-ui/locale/vi';

@Options({
  components: {
    ElConfigProvider
  },
})
export default class App extends Vue {
  get locale() {
    const lang = localStorageAuthService.getLanguage() || DEFAULT_LANGUAGE;
        if (lang === SUPPORT_LANGUAGE.VI) {
            return vi;
        }
        return en;
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
