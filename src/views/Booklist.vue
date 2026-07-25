<script setup>
import { reactive,onMounted, computed } from 'vue';
import bookObject from '@/components/BookListObject.vue';
import { bookList } from '@/services/libraryService';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();


const params = reactive({
    keyword: '',
    page: 1,
    type: 'title'
    
}); 

const data = reactive({
    word :''
    , totalCount: null
    ,res: [],
    page: null,
    size: null
});
onMounted(async () => {
    params.keyword = route.query.keyword;

        const res = await bookList(params);

        data.word = params.keyword;
        data.res = res.data;
        data.totalCount = res.data.totalItems;
        data.page = res.data.page;
        data.size = res.data.size;
        console.log(data)
});


const search = async() => {
  const list = await bookList(params);
  data.res = list.data
  data.word = params.keyword


    router.replace({
    path: "/search",
    query: {
      keyword: params.keyword
    }
  });

  data.page = list.data.page
  data.size = list.data.size
  data.totalCount = list.data.totalItems
};
  

const totalPage = computed(() => {
    return Math.ceil(data.totalCount / data.size);
});


const movePage = async (page) => {
    params.page = page;
    await search();
};

</script>
<template>
    <div class="container">
        <div class ="top">
            <div>
                <span class="keyword">'{{ data.word }}'</span>
                <span>の検索結果 </span>
            </div>
            
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
        <div class="count">{{ data.totalCount}}件</div>
        
        
        <bookObject  v-for="book in data.res.results"
                    :key="book.id"
                    :results="book"/>

    </div>

    <!-- Pagination -->
    <div class="pagination">
        <button
            v-for="page in totalPage"
            :key="page"
            @click="movePage(page)"
            :class="{ active: page === data.page }"
        >
            {{ page }}
        </button>
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
    overflow: hidden;
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
    .keyword{
    color:#0d6efd
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


.count {
    color:#626262
}

.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    margin: 60px 0 150px;
}

.pagination button {
    width: 40px;
    height: 40px;

    border: 1px solid #dcdcdc;
    border-radius: 50%;

    background: #fff;
    color: #666;

    cursor: pointer;

    transition: all 0.2s ease;
}

.pagination button:hover {
    background: #f5f5f5;
    border-color: #0d6efd;
    color: #0d6efd;
}

.pagination button.active {
    background: #0d6efd;
    border-color: #0d6efd;
    color: #fff;
    font-weight: bold;
}
</style>