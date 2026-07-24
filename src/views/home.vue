<script setup>
import { reactive } from 'vue';
import { bookList } from '@/services/libraryService';
import { useRouter, useRoute } from 'vue-router';

const params = reactive({
    keyword: '',
}); 

const router = useRouter();


const search = async() => {
  if(!params.keyword){
    return
  }
  const res = await bookList(params);
  console.log(res);
  router.push({
  path: '/search',
  query: {
    keyword: params.keyword
  }
});
  
};

</script>
<template>
    <div class="home">
        <span>WELCOME TO BOBO!!</span>
    </div>
    <!-- search area -->
    <div class="search-area">
    <div class="search-box">
      <input
        type="text"
        v-model="params.keyword"
        placeholder="本のタイトルを入力してください。"
        @keyup.enter="search"
      />

      <button @click="search" @keyup.enter="search">
              <i class="bi bi-search"></i>
      </button>
    </div>
  </div>

</template>
<style lang="scss" scoped>
.home{
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    height: 40vh;
    background-color: #c7e2fc;
    color: #0d6efd;
    font-size: 100px;
    overflow: hidden;   
    position: relative;
    
}

.search-area {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

/* 검색 박스 */
.search-box {
  width: 700px;
  height: 55px;

  display: flex;

  border: 2px solid #adceff;
  border-radius: 50px;

  overflow: hidden;

  background: white;
}

/* Input */
.search-box input {
  flex: 1;

  border: none;
  outline: none;

  padding: 0 20px;

  font-size: 18px;
}

/* 버튼 */
.search-box button {
  width: 70px;

  border: none;

 background: #ffffff;
  color: #5d9cfa;

  font-size: 24px;

  cursor: pointer;

  transition: 0.2s;
}

// .search-box button:hover {
//   background: #0056d6;
// }
</style>
