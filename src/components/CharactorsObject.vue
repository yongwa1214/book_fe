<script setup>
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
    <div class="chBox">
        <div class="title">{{ results.title }}</div>
        <div class="content">{{ results.content }}</div>
    </div>
</template>

<style lang="scss" scoped>

.chBox{
    margin: 10px 0;
    padding: 10px;
    width: 150px;
    border-radius: 5%;
    border: 1px solid #efefef;
    height: 180px;

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