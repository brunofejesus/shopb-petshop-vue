<template>
  <v-container>
    <v-row no-gutters>
      <v-col v-for="product in listProducts" :key="product.id">
        <product class="mt-5" :product="product" />
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script>
import * as api from '../api/apiService'
import Product from './Product'

export default {
  name: 'Products',
  components: {
    Product
  },
  data: () => ({
    listProducts: null
  }),
  async created() {
    this.listProducts = await api.getAllProducts()
  }
}
</script>

<style lang="scss" scoped></style>
