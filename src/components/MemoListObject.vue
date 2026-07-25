<script setup>
import { useAccountStore } from '@/stores/account';
import { saveBook } from '@/services/libraryService';

const props = defineProps({
    results: {
        type: Object,
    },
    memo: {
        type: Object,

    }

});


</script>

<template>
    <div class="box">
        <div class="content">
            <p class="title">{{results.title}}</p>
            <span class="author">
                {{results.createdAt}}
            </span>
            <div class="description">{{results.content}}</div>
        </div>
        
    </div>
    
</template>

<style lang="scss" scoped>
.box {
    gap: 20px;
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

    .description {
        margin-top: 20px;
        font-size: 14px;
        color: #666;
        
        display: -webkit-box;
    -webkit-line-clamp: 3; // 3줄까지만 표시
    -webkit-box-orient: vertical;
    overflow: hidden;
    }


}

</style>