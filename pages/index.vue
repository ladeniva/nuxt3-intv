<template>
  <h1>Homepage</h1>
  <p>{{ title }}</p>
  <ul>
    <li v-for="num in nums" v-if="num < 10">Sock size #{{ num | roundNum }}</li>
  </ul>
  <template slot="header" slot-scope="slotProps">
    <h1>Items no {{ slotProps.items.length }}</h1>
  </template>
  <h1>Cart items: {{ cart }}</h1>
  <!-- Add here the add to cart component and conect it to "addToCart" and button text  'Add one more item'-->
</template>

<script>
export default {
  name: 'Itrv App',
  beforeDestroy() {
    console.log('Clear local storage...');
  },
  data() {
    return {
      cart: 0,
      num: 1,
      brand: "Bob's",
      product: 'Socks',
      slotProps: { items: ['50% cotton', '30% wool', '20% polyester'] },
      nums: [1, 2.4, 5, 12.3, 16],
    };
  },
  methods: {
    addToCart(quantity) {
      this.cart += 1;
    },
  },
  filters: {
    roundNum(value) {
      return Math.round(value);
    },
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
  },
};
</script>
