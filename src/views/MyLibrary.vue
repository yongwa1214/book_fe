<script setup>
import { myBookList } from '@/services/libraryService';
import { reactive, onMounted, ref } from 'vue';

const state = reactive({
    list:null
})

const selected = ref("all");

const changeFilter = (filter) => {
    selected.value = filter;
};

onMounted(async() => {
    const res = await myBookList();
    state.list = res.data

})
</script>
<template>
    My library
    <div class="container">
        <!-- Left -->
        <div class="left">
            <div class="left-top">
                カテゴリー
            </div>

            <div class="left-bottom">
                メモ
            </div>
        </div>

        <!-- Right -->
        <div class="right">
        <div class="right-top">
            <button
                class="btn"
                :class="{ active: selected === 'all' }"
                @click="changeFilter('all')"
            >
                すべて
            </button>

            <button
                class="btn"
                :class="{ active: selected === 'reading' }"
                @click="changeFilter('reading')"
            >
                読書中
            </button>

            <button
                class="btn"
                :class="{ active: selected === 'finish' }"
                @click="changeFilter('finish')"
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
                        <img :src="book.thumbnail" />
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
    width: 250px;

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

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
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
