<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'halamanSatu' }">Halaman 1</b-nav-item>
        <b-nav-item :to="{ name: 'halamanDua' }">Halaman 2</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
export default {
  name: "LayoutHeader"
}
</script>
<style lang="scss" scoped>

</style>