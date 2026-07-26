<script setup>
import { reactive, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { saveBookMemo, updateMemo } from '@/services/memoService';


const router = useRouter();
const route = useRoute();

const props = defineProps({
    results: {
        type: Object,
    },
    memo: {
        type: Object,

    }
});

const state = reactive({
    memo:{
        title:"",
        content :"",
        type: "memo",
        memoId : 0,
        libraryId: route.params.libraryId
    }
})

console.log("yahoo",state.memo)
onMounted(() => {
    if (props.results) {
        state.memo.title= props.results.title
        state.memo.content= props.results.content
        state.memo.memoId= props.results.memoId
    }

})

const refresh = ()=>{
    state.memo.title= ""
    state.memo.content= ""
    state.memo.memoId=0
    props.results.type = null
}

const emit = defineEmits(['return'])
const save = async() =>{
    if(state.memo.memoId>0){
        const res = await updateMemo(state.memo);
        refresh();
        emit('return',1)
        return
    }
    const res = await saveBookMemo(state.memo)
    refresh();

    emit('return',1)
}

const cancel = () =>{
    refresh();
    console.log("rhclsek", state.memo)
    emit('return',1)
} 

console.log("we", state.memo)

</script>
<template>
 <form class="detail">
    <!-- <div class="mb-3 date" >
      등록일시: test
    </div> -->
    <div class="mb-3 mt-3">
      <label for="title" class="form-label">タイトル</label>
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
      <button type="button" class="btn btn-primary" @click="save">{{ state.memo.memoId > 0 ? '修正':' 保存　' }}</button>
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
    width: 810px;
}

textarea.form-control{
    width: 100%;
    min-height: 300px;
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

.btn .btn-primary{

}
.contentBox{
 min-height: 500px;
}

</style>