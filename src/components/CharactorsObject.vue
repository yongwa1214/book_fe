<script setup>
import { deleteMemo } from '@/services/memoService';
const props = defineProps({
    results: {
        type: Object,
    },
    memo: {
        type: Object,
    }

});

const emit = defineEmits(['return', 'fix'])
const deMemo = async ()=>{
    console.log(props.results.memoId)
    if(confirm("削除しますか")){
        await deleteMemo(props.results.memoId)
        emit('return',2)
    }
}

const modify = () =>{
    emit('fix')
}

</script>

<template>
    <div class="chBox">
        <div class="chTop">
            <div class="title">{{ results.title }}</div>
            <div class="memoBtn">
                <i class="bi bi-pencil" @click="modify"></i>
                <i class="bi bi-trash" @click="deMemo"></i>
            </div>
        </div>
        <div class="content">{{ results.content }}</div>
    </div>
</template>

<style lang="scss" scoped>

.chBox{
    margin: 10px 0;
    padding: 10px;
    max-width: 150px;
    border-radius: 5%;
    border: 1px solid #efefef;
    height: 180px;
    overflow: auto;

}

.chTop{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.memoBtn{

        margin-left: 10px;
        display: flex;
        gap: 10px;
    }
i{
    cursor: pointer;
}
.title{
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 20px;
    color:#2b4bb4 ;
}

.content{
   font-size: 14px ;
   color: #666;
}


</style>