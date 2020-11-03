<template>
  <v-container>
    <v-btn router-link to="/" elevation="2" outlined color="accent" text
      >Voltar para loja</v-btn
    >
    <product class="mt-3" :product="product" />
  </v-container>
</template>

<script>
import Product from '../components/Product'
import * as api from '../api/apiService'

export default {
  name: 'ProductDetails',
  data: () => ({
    product: {}
  }),
  async mounted() {
    const { id } = this.$route.params
    const product = await api.getProductById(id)
    this.product = { ...product }
  },
  components: {
    Product
  }
}
</script>
