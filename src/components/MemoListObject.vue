<script setup>
import { useAccountStore } from '@/stores/account';
import { deleteMemo } from '@/services/memoService';

const props = defineProps({
    results: {
        type: Object,
    },
    memo: {
        type: Object,

    }

});
const emit = defineEmits(['return'])
const deMemo = async ()=>{
    console.log(props.results.memoId)
    if(confirm("削除しますか")){
        await deleteMemo(props.results.memoId)
        emit('return',0)
    }
}

</script>

<template>
    <div class="box">
        <div class="memoRight">
            <div class="content">
                <p class="title">{{results.title}}</p>
                <span class="author">
                    {{results.createdAt}}
                </span>
                <div class="description">{{results.content}}</div>
            </div>
        </div>
        <div class="memoBtn">
            <i class="bi bi-pencil"></i>
            <i class="bi bi-trash" @click="deMemo"></i>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
.box {
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    //gap: 20px;
    display: flex;
    height: 160px;
    padding: 5px 0;
    border-bottom: 1px solid #ccc;
    padding-right: 10px;
    
    
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

    .memoRight{
        flex: 1;
    }

    .memoBtn{
        font-size: 20px;
        margin-left: 10px;
        display: flex;
        gap: 20px;
    }

    .description {
        margin-top: 15px;
        font-size: 14px;
        color: #666;
        
        display: -webkit-box;
    -webkit-line-clamp: 3; // 3줄까지만 표시
    -webkit-box-orient: vertical;
    overflow: hidden;
    }


}

i{
    cursor: pointer;
}

</style>