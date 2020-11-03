<template>
  <v-card :style="{ width: maxWidth }">
    <v-img
      @click="showProductDetails()"
      :src="product.foto"
      :height="maxHeigthImg"
    ></v-img>

    <v-card-title>
      {{ product.nome }}
    </v-card-title>

    <v-card-subtitle>
      <p class="text-lg-right">
        <span :class="classObjectDiscount">{{ product.preco | currency }}</span
        >{{ ' ' }}
        <strong>{{ product.desconto | currency }} </strong>
      </p></v-card-subtitle
    >

    <v-card-subtitle :class="classObjectText">
      {{ product.descricao }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn color="primary" block>
        Comprar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Product',
  props: ['product'],
  data: () => ({
    maxWidth: '344px',
    maxHeigthImg: '300px',
    isFullWidth: false
  }),
  mounted() {
    this.isFullWidth = this.$route.name === 'ecommerce'
    this.isFullWidth ? (this.maxWidth = '100%') : ''
  },
  methods: {
    showProductDetails() {
      if (this.$route.name !== 'ecommerce') {
        this.$router.push({
          name: 'ecommerce',
          params: { id: this.product.id }
        })
      }
    }
  },
  computed: {
    classObjectDiscount: function() {
      return this.product.desconto ? 'text-decoration-line-through' : ''
    },
    classObjectText: function() {
      return this.isFullWidth
        ? ''
        : 'text-no-wrap overflow-hidden text-truncate'
    }
  }
}
</script>

<style lang="scss" scoped></style>
