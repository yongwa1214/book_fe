<script setup>
import { useAccountStore } from '@/stores/account';
import { saveBook } from '@/services/libraryService';

const account = useAccountStore();
const props = defineProps({
    results: {
        type: Object,
    },
    memo: {
        type: Object,

    }

});

const authorToString = (authors) => {
    if (!Array.isArray(authors)) {
        return authors ?? "";
    }

    return authors.join(", ");
};

const addMylibrary = async() =>{
    const data ={
        bookId : props.results.id,
        authors: authorToString(props.results.authors),
        summary: props.results.description,
        publisher: props.results.publisher,
        thumbnail: props.results.thumbnail,
        title: props.results.title,
        totalPage:props.results.pageCount,
        
    } 
    console.log(data)
    const res = await saveBook(data);
    if(res.status !=200){
        alert("error")
        return;
    }
    alert("My本棚に保存しました")



}
// console.log(props.results)

</script>

<template>
    <div class="box">
        <div class="book-image">
            <div class="img" v-if="results.thumbnail">
                <img :src="results.thumbnail"alt="Book Image"/>
            </div>
            <div class="img" v-else>
                ?
            </div>
        </div>    
        <div class="content">
            <p class="title">{{results.title}}</p>
            <span class="author" v-for="author in results.authors" :key="author">
                {{author}}
            </span>
            <span class="publisher"> {{results.publisher}}</span>
            <div class="description">{{results.description}}</div>
        </div>
        <div class="button" v-if="account.state.loggedIn">
            <button @click.stop="addMylibrary" class="btn btn-primary">
                ＋
            </button>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
.box {
    gap: 20px;
    display: flex;
    height: 200px;
    padding: 20px 0;
    border-bottom: 1px solid #ccc;
    

    .img{
        width: 130px;
        height: 100%;

        background: #e5e5e5;
        color: #888;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 48px;
        font-weight: bold;
        
    }
    
    .content {
        width: 100%;
       p{
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 0;
            
       }
       span{
        margin-right: 10px;
       }
    }

    .description {
        margin-top: 20px;
        font-size: 14px;
        color: #666;
        
        display: -webkit-box;
    -webkit-line-clamp: 3; // 3줄까지만 표시
    -webkit-box-orient: vertical;
    overflow: hidden;
    }

    .button {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        .btn {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            font-size: 40px;
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

}

.img img {
    width: 100%;
    height: 100%;
    object-fit: cover;


}
</style>