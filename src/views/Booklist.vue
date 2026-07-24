<script setup>
import { reactive } from 'vue';
import bookObject from '@/components/BookListObject.vue';

const params = reactive({
    keyword: '',
    page: 1,
    type: 'title'
}); 


const search = async() => {
  const res = await bookList(params);
  console.log(res);


};

</script>
<template>
    <div class="container">
        <div class ="top">
            <span>OOに関する793件の検索結果</span>
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
        </div>
        
        
        <bookObject />

    </div>
</template>  
<style lang="scss" scoped>

.container {
    display: block;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 30px;
    min-height: 100vh;
}

.top {
    display: flex;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    span {
        font-size: 30px;
        font-weight: 700;
        color: #626262;
    }
}
.search-area {
  display: flex;
  justify-content: center;
}

/* 검색 박스 */
.search-box {
  width: 350px;
  height: 50px;

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
</style>