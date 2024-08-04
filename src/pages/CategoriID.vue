<template>
    <section id="product">
      <div class="product-container">
        <h2>Product you may like</h2>
      <div v-if="products && products.length" class="product-wrapper" >
        <div class="products" v-for="item in products" :key="item.id">
          <div class="image">
            <img :src="item.thumbnails" alt="">
          </div>
          <div class="content">
            <h5>{{ item.name }}</h5>
            <p class="description">{{ item.description }}</p>
            <p class="priceAfter">
              ${{ (item.discount === 0 ? item.price : (item.price * item.discount / 100)).toFixed(2) }}
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
        </div>
      </div>
      <div v-else>
        <p>No products found.</p>
      </div>
      </div>
      
      <!-- Hiển thị thông tin phân trang nếu cần -->
      <!-- <div v-if="meta.totalPages > 1" class="pagination">
        <button @click="fetchData(meta.currentPage - 1)" :disabled="meta.currentPage === 1">Previous</button>
        <span>Page {{ meta.currentPage }} of {{ meta.totalPages }}</span>
        <button @click="fetchData(meta.currentPage + 1)" :disabled="meta.currentPage === meta.totalPages">Next</button>
      </div> -->
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted ,watch} from 'vue';
  import { categoriesId } from '@/services/products';
  import { useRoute } from 'vue-router';
  const route = useRoute();
const categoryName = ref('');
const products = ref([]);
const currentPage = ref(1);

const fetchProducts = async (id, page) => {
  try {
    const response = await categoriesId(id, page);
    //console.log('la ta :',response);
    products.value = response.data.data;
    console.log(products.value);
    // Giả sử API trả về tên danh mục trong response
    categoryName.value = response.data.categoryName || 'Unknown Category';
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }
};

onMounted(() => {
  const id = route.params.id;
  //console.log('id ne :',id);
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
  padding: 10px 150px; /* Giữ nguyên padding này */
}

.product-container {
  width: 100%;
  max-width: 1200px; /* Giới hạn chiều rộng container */
  margin: 0 auto; /* Căn giữa container */
  padding: 0 20px; /* Padding cho container */
}

.product-wrapper {
  display: grid; /* Sử dụng grid layout để hiển thị các sản phẩm theo cột */
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Tự điều chỉnh số cột, 250px là chiều rộng tối thiểu */
  gap: 20px; /* Khoảng cách giữa các sản phẩm */
  
}

.product {
    width: 100%; /* Chiều rộng của sản phẩm là 100% của phần tử chứa nó */
  max-width: 2500px; /* Giới hạn chiều rộng tối đa của sản phẩm */
  border-radius: 10px;
  border: 1px solid #e1e0e0;
  overflow: hidden;
  margin-bottom: 20px; /* Khoảng cách dưới mỗi sản phẩm */
  max-height: 500px; /* Đặt chiều cao tối đa cho mỗi sản phẩm */
}

.image img {
  width: 100%; /* Đảm bảo hình ảnh bên trong sản phẩm hiển thị hết phần không gian có sẵn */
  height: auto; /* Chiều cao tự động */
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
}

.content {
  padding: 10px; /* Padding bên trong nội dung sản phẩm */
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

.content .discount .cent {
    font-size: 15px;
  background: #ffd1d1;
  padding: 5px 8px;
  border-radius: 10px;
}

.content .discount .price-before {
  margin: 5px 0;
  color: #7b7a7a;
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