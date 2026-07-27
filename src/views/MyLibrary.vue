<script setup>
import { myBookList, LastBookRead, MonthFinishBook, myBookListType } from '@/services/libraryService';
import { reactive, onMounted, ref } from 'vue';




const date = new Date();
const state = reactive({
    list:[]
    ,data: localStorage.getItem("username")
    ,lastBook :{
        libraryId:0
        ,title:''
        ,thumbnail:''
    }
    ,monthBook:[]
})


const selected = ref("all");

const changeFilter = (filter) => {
    selected.value = filter;
};

const getLibraryList = async(filter) =>{
    if(filter =="all"){
        changeFilter(filter)
        const res = await myBookList();
        state.list = res.data
        return
    }
    const res = await myBookListType(filter)
    state.list = res.data
    changeFilter(filter)

    
}

onMounted(async() => {
    const monthBook = await MonthFinishBook();
    state.monthBook = monthBook.data
    console.log(monthBook)

    const res = await myBookList();
    state.list = res.data
    const lastbook =await LastBookRead();
    state.lastBook = lastbook.data


})
</script>
<template>

    <div class="container">
        <!-- Left -->
        <div class="left">
            <div class="left-top">
                <!-- <span class="username">{{ state.data }}</span> -->
                <div class="mb-2">最近読んだ本</div>
                
                    <div class="thumbnail">
                        <router-link :to="`/my/library/${state.lastBook.libraryId}`">
                            <img 
                                v-if="state.lastBook.thumbnail"
                                :src="state.lastBook.thumbnail"
                            />

                            <div v-else class="no-image">
                                ?
                            </div>
                        </router-link>
                    </div>

                    <div class="title">
                        {{ state.lastBook.title }}
                        
                    </div>
                
            </div>

            <div class="left-bottom">
                <div class="mb-1 bt">「{{date.getMonth()+1}}月の本」</div>      
                <div class="mb-3">--------------------------------</div>   
                <div v-for="monthBook in state.monthBook" class="mb-3">
                    {{ monthBook.title }}
                </div>
                <div v-if="state.monthBook.length>0">   
                    <div>--------------------------------</div>
                    <div class="total">
                        <div>会計</div>
                        <div>{{ state.monthBook.length }}冊</div>
                    </div>
                    
                </div>
            </div>
        </div>

        <!-- Right -->
        <div class="right">
        <div class="right-top">
            <button
                class="btn"
                :class="{ active: selected === 'all' }"
                @click="getLibraryList('all')"
            >
                すべて
            </button>

            <button
                class="btn"
                :class="{ active: selected === 'read' }"
                @click="getLibraryList('read')"
            >
                読書中
            </button>

            <button
                class="btn"
                :class="{ active: selected === 'finish' }"
                @click="getLibraryList('finish')"
            >
                完了
            </button>
        </div>

        <div class="bookshelf">
            
            <div
                class="book"
                v-for="book in state.list"
                :key="book.libraryId"
            >
                <router-link :to="`/my/library/${book.libraryId}`">
                   <div class="thumbnail">
                        <img 
                            v-if="book.thumbnail"
                            :src="book.thumbnail"
                        />

                        <div v-else class="no-image">
                            ?
                        </div>
                    </div>

                    <div class="title">
                        {{ book.title }}
                    </div>
                </router-link>
            </div>
        
        </div>
    </div>
    </div>
</template>  

<style lang="scss" scoped>
.container {
    display: flex;
    width: 100%;
    max-width: 1200px;
    margin: 50px auto;
    padding: 0 30px;
    min-height: 100vh;
    gap: 20px;
}
.left {
    min-width: 250px;

    display: flex;
    flex-direction: column;
    gap: 30px;
}


.left-top,
.left-bottom {
    border: 1px solid #ddd;
    border-radius: 10px;
    min-height: 250px;
    padding: 20px;
    .bt{
        text-align: center;
        font-weight: 700;
        font-size: 20px;
    }
}
.left-top{
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    .username{
        font-size: 25px;
    color: #0d6efd;
    }
    .title{
          margin: 10px auto;
    }
    
    
}


.total{
    display: flex;
    justify-content: space-between;
}

.right {
    flex: 1;
}

.right-top {
    display: flex;
    gap: 15px;

    padding-left: 35px; // thumbnail 시작 위치에 맞게 조절
   // margin-bottom: 30px;
}

.right-top .btn {

    color: #77a2ff;
    border: 1px solid #a4c4ff;

    transition: 0.2s;
}

.right-top .btn.active {
    background: #c7e2fc;
    color: #0d6efd;
    border-color: #c7e2fc;
}

.bookshelf {
    display: grid;
    grid-template-columns: repeat(4, 0.5fr);
    column-gap: 35px;
    row-gap: 70px;

    padding-top: 30px;

    /* 책장 선반 */
    // background-image: repeating-linear-gradient(
    //     to bottom,
    //     transparent 0,
    //     transparent 240px,
    //     #9c6b30 240px,
    //     #9c6b30 248px
    // );
}

.book {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.thumbnail {
    width: 120px;
    height: 170px;
    background: #ddd;
    overflow: hidden;
    box-shadow: 0 7px 7px -1px #b2b1b8;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.no-image {
    font-size: 40px;
    font-weight: bold;
    color: #aaa;

    display: flex;
    justify-content: center;
    align-items: center;
}

.title {
    margin-top: 12px;
    width: 120px;

    text-align: center;
    font-size: 12px;

    white-space: normal;
    word-break: break-word;
    
}


.status {
    color: #0d6efd;
    font-weight: bold;
}


</style>
