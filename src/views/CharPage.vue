<script setup>
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { saveBookMemo } from '@/services/memoService';

const router = useRouter();
const route = useRoute();

const state = reactive({
    memo:{
        title:"",
        content :"",
        type: "character",
        id : 0,
        libraryId: route.params.libraryId
    }
})


const emit = defineEmits(['return'])
const save = async() =>{
    const res = await saveBookMemo(state.memo);
    console.log("save", res)
    emit('return',2)
}
const cancel = () =>{
    emit('return',2)
} 


</script>
<template>
 <form class="detail" @submit.prevent="submit">
    <!-- <div class="mb-3 date" >
      등록일시: test
    </div> -->
    <div class="mb-3 mt-1">
      <label for="title" class="form-label">名前</label>
      <input type="text" id="title" class="form-control p-2" ref="ref_title" v-model="state.memo.title" />
    </div>
    <div class="mb-2">
      <label for="content" class="form-label">内容</label>
      <textarea id="content" class="form-control p-2 contentBox" ref="ref_content" v-model="state.memo.content"></textarea>
    </div>
    <!-- <div class="count mb-3" :style="{ color: state.memo.content.length > 200 ? '#ff123d' : '#1c1c1c' }">
      {{ state.memo.content.length }} / 200
    </div> -->
    <div class="d-flex button">
      <button type="button" class="btn btn-light" @click="cancel">キャンセル</button>
      <button type="button" class="btn btn-primary" @click="save">{{ state.memo.id > 0 ? '修正':' 保存　' }}</button>
    </div>
  </form>
</template>
<style lang="scss">
.count{
  display: flex;
  justify-content: flex-end;
}

.date{
  color: #6b6b6b;
  font-size: 12px;
}

.detail{
  width: 820px;
}

textarea.form-control{
    width: 100%;
    min-height: 100px;
}


input:focus {
  outline: none;
  box-shadow: none;
}


.form-control:focus,
.form-select:focus {
  outline: none;
  box-shadow: none;
//   border-color: #ced4da; /* 원하는 색으로 변경 */
}

.button{
    margin-top: 20px;
    gap: 20px;
    justify-content: flex-end;
}


.contentBox{
 min-height: 100px;
}

</style>