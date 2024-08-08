<template>
  <section id="product">
    <div class="product-container">
      <h2>Product you may like</h2>
      <div v-if="products && products.length" class="product-wrapper">
        <div class="product" v-for="item in products" :key="item.id">
          <RouterLink :to="'/product/'+ item.id">
            <div class="image">
              <img :src="item.thumbnails" alt="">
            </div>
            <div class="content">
              <h5>{{ item.name }}</h5>
              <p class="description">{{ item.description }}</p>
              <p class="priceAfter">
                ${{ (item.discount === 0 ? item.price : (item.price * (100 - item.discount) / 100)).toFixed(2) }}
              </p>
              <div class="discount">
                <p class="cent">{{ item.discount }}%</p>
                <p class="price-before">${{ item.price }}</p>
              </div>
              <div class="locations">
                <Icon class="icon-rounded" icon="material-symbols:location-on-rounded"></Icon>
                <p>{{ item.location }}</p>
              </div>
              <div class="reviews">
                <Icon class="icon-kidstar" icon="material-symbols:kid-star"></Icon>
                <p class="stars">{{ item.stars }}</p>
                <p class="solds">Sold {{ item.sold }}</p>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
      <div v-else>
        <p>No products found.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { categoriesId } from '@/services/products';
import { useRoute } from 'vue-router';

const route = useRoute();
const categoryName = ref('');
const products = ref([]);
const currentPage = ref(1);

const fetchProducts = async (id, page) => {
  try {
    const response = await categoriesId(id, page);
    products.value = response.data.data;
    categoryName.value = response.data.categoryName || 'Unknown Category';
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }
};

onMounted(() => {
  const id = route.params.id;
  fetchProducts(id, currentPage.value);
});

watch(() => route.params.id, (newId) => {
  fetchProducts(newId, currentPage.value);
});
</script>

<style scoped>
#product {
  margin-bottom: 20px;
  overflow: hidden;
  padding: 10px 150px;
}

.product-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.product-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.product {
  width: 100%;
  max-width: 250px;
  border-radius: 10px;
  border: 1px solid #e1e0e0;
  overflow: hidden;
  margin-bottom: 20px;
  max-height: 500px;
}

.image img {
  width: 100%;
  height: auto;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
}

.content {
  padding: 10px;
}

.content h5 {
  font-size: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #5e5d5d;
  
}

.content .description {
  font-size: 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #5e5d5d;
  
}

.content .priceAfter {
  font-size: 20px;
  color: #181818;
}

.content .discount {
  display: flex;
  align-items: center;
  gap: 5px;
}

.content .discount .cent {
  font-size: 15px;
  background: #ffd1d1;
  padding: 5px 8px;
  border-radius: 10px;
}

.content .discount .price-before {
  margin: 5px 0;
  color: #7b7a7a;
  text-decoration: line-through;
}

.locations {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.locations .icon-rounded {
  font-size: 20px;
  color: #7b7a7a;
  margin-right: 5px;
}

.locations p {
  color: #7b7a7a;
  font-size: 14px;
}

.reviews {
  display: flex;
  align-items: center;
  margin-top: 5px;
}

.reviews .icon-kidstar {
  color: #ffd18c;
  font-size: 20px;
  margin-right: 5px;
}

.reviews .stars {
  margin-right: 5px;
  color: #7b7a7a;
}

.reviews .solds {
  color: #7b7a7a;
  font-size: 14px;
}
</style>