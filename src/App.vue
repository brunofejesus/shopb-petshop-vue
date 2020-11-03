<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <v-toolbar-title>Loja Petshop ShopBFJ</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <v-btn router-link to="/" text>
        <span class="mr-2">Loja</span>
      </v-btn>

      <v-btn router-link to="/about" text>
        <span class="mr-2">Configurações</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <!-- <HelloWorld /> -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  })
}
</script>
