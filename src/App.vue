<template>
  <v-app>
    <router-view name="layout">
      <router-view/>
    </router-view>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'TechFolio'
    }
  },
  name: 'App'
}
</script>
