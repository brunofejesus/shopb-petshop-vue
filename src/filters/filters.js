import Vue from 'vue'

Vue.filter('currency', function(value) {
  if (!value) return ''
  value = value.toString()
  let val = (value / 1).toFixed(2).replace('.', ',')
  return `R$ ${val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
})

export default {}
