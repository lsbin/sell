<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <router-link class="tab-item" to="/seller">seller</router-link>
      <router-link class="tab-item" to="/ratings">ratings</router-link>
      <router-link class="tab-item" to="/goods">goods</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import header from 'components/header/header'

export default {
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus" scoped>
  #app
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px

      .tab-item
        flex: 1
        text-align: center
</style>
