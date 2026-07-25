<script setup>
import { reactive, onMounted, isVNode } from 'vue';
import { myBookItem } from '@/services/libraryService';
import { useRoute, useRouter } from 'vue-router';
import CharactorsObject from '@/components/CharactorsObject.vue';
import MemoListObject from '@/components/MemoListObject.vue';
import { myMemoList } from '@/services/memoService';



const info = reactive({
    res :{
        authors:'',
        id :'',
        libraryId :0,
        publisher:'',
        publishedDate :'',
        readPage :0,
        status:'',
        summary :'',
        thumbnail :'',
        title:'',
        totalPage :0,
    }

    ,memo :[]
    ,charactor:[]
})


const selected = info.res.status;

const route = useRoute();
const router = useRouter();

onMounted(async() => {
    const libraryId =route.params.libraryId
    const res = await myBookItem(libraryId);
    info.res = res.data
    info.status = res.data.status

    const memo = await myMemoList(libraryId, "memo")
    info.memo = memo.data

    const char = await myMemoList(libraryId, "character")
    info.char = char.data
   

})

const changeFilter = (filter) => {
    info.res.status = filter;
};

</script>

<template>
    <div class="container">
        <div class="left">
            <div class="left-top">
                <img :src="info.res.thumbnail" class="book-img">

                <div class="title">
                    {{info.res.title}}
                </div>
            </div>

            <div class="readCount">
                {{ info.res.totalPage }} / {{ info.res.readPage }}

            </div>
            <div class="left-buttom">
                <div class="button">
                    <button
                    class="btn"
                    :class="{ active: info.res.status === 'read' }"
                    @click="changeFilter('read')"
                    >
                        読書中
                    </button>

                    <button
                        class="btn"
                        :class="{ active: info.res.status === 'finish'}"
                        @click="changeFilter('finish')"
                    >
                        完了
                    </button>
                </div>
                <div class="info">
                    <div class="info-book">
                        <span class="info-title">著者</span>
                        <span class="info-title">{{ info.res.authors }}</span>
                    </div>
                    <div class="info-book">
                        <span class="info-title">出版社名</span>
                        <span class="info-title">{{ info.res.publisher }}</span>
                    </div>
                    <p>{{ info.res.authors }}</p>
                    <p>{{ info.res.authors }}</p>
                </div>
                
            </div>
        </div>



        <div class="right">
            <div class="right-top">
                <div class="right-title">
                    登場人物
                    <div class="r-btn">
                        <button @click.stop="addMylibrary" class="btn btn-primary">
                            ＋
                        </button>
                    </div>
                </div>
                <div class="char">
                    <CharactorsObject v-for="char in info.char"
                            :key="char.memoId"
                            :results="char"/>
                </div>
            </div>

            <div class="middle-line"></div>

            <div class="right-bottom">
                <div class="rbt">
                    <div class="left-group">
                        <div class="right-title">読書記録</div>

                        <div class="r-btn">
                            <button @click.stop="addMylibrary" class="btn btn-primary">
                                ＋
                            </button>
                        </div>
                    </div>
                
                    <div class="search-area">
                        <div class="search-box">
                            <input
                                type="text"
                                
                                placeholder="本のタイトルを入力してください。"
                                @keyup.enter="search"
                            />

                            <button @click="search" @keyup.enter="search">
                                    <i class="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="memoArea">
                <!-- memo area -->
                    <MemoListObject  v-for="memo in info.memo"
                        :key="memo.memoId"
                        :results="memo"/>
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
   // min-height: 100vh;
    gap: 20px;
}

.left{
    width: 30%;

}

.left-top {
    text-align: center;   // 가운데 정렬
    padding-top: 20px;    // 위 여백
}

.button {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 20px;
}

.btn {

    color: #77a2ff;
    border: 1px solid #a4c4ff;

    transition: 0.2s;
}

.btn.active {
    background: #c7e2fc;
    color: #0d6efd;
    border-color: #c7e2fc;
}

.book-img {
    display: block;
    width: 150px;
    height: 220px;
    margin: 0 auto;       // 이미지 가운데
    object-fit: cover;
}

.title {
    width: 200px;
    margin: 15px auto 0;
    text-align: center;

    white-space: normal;
    word-break: break-word;
}

.info{
    text-align: center;
}



.right{
    flex: 1;
    margin-top: 10px;

    
}

.rbt {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.left-group {
    display: flex;
    align-items: center;
    gap: 10px;
}


.right-title{
    display: flex;
    align-items: center;
    gap: 20px;
    font-weight: bold;
    font-size: 25px;
}
 .r-btn {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        .btn {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            font-size: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .btn-primary {
            border: none;
            background-color: #eff5ff;
            color: #5174fe;
        }

        .btn:hover {
            background-color: #cfe1ff;
        
        }
    }

    .middle-line{
        width: 100%;
        height: 1px;
        background-color: #efefef;
        margin: 20px 0;
    }
    
    .right{
        height: 700px;
    }
    .right-bottom{
       padding-right: 10px;
        width: 100%;
         height: 500px;

    }

    .search-area {
        flex-shrink: 0;
}

/* 검색 박스 */
.search-box {
  width:250px;
  height: 40px;

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

  font-size: 14px;
}

/* 버튼 */
.search-box button {
  width: 70px;

  border: none;

 background: #ffffff;
  color: #5d9cfa;

  font-size: 16px;

  cursor: pointer;

  transition: 0.2s;
}


.memoArea{
    margin-top: 5px;
    overflow-y: scroll;
}

.char{
    display: flex;
    gap: 20px

}

</style>