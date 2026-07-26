<script setup>
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const state = reactive({
    memo:{
        title:"",
        content :""
        ,id: 0
    }
})

const emit = defineEmits(['save', 'cancle'])
const save = () =>{

    console.log("save")
}
const ask = () =>{
    console.log("hi")
} 


</script>
<template>
 <form class="detail" @submit.prevent="submit">
    <!-- <div class="mb-3 date" >
      등록일시: test
    </div> -->
    <div class="mb-3">
      <label for="title" class="form-label">title</label>
      <input type="text" id="title" class="form-control p-3" ref="ref_title" v-model="state.memo.title" placeholder="제목을 입력해주세요" />
    </div>
    <div class="mb-2">
      <label for="content" class="form-label">内容</label>
      <textarea id="content" class="form-control p-3 contentBox" ref="ref_content" v-model="state.memo.content" placeholder="내용을 입력해주세요"></textarea>
    </div>
    <!-- <div class="count mb-3" :style="{ color: state.memo.content.length > 200 ? '#ff123d' : '#1c1c1c' }">
      {{ state.memo.content.length }} / 200
    </div> -->
    <div class="d-flex button">
      <button type="submit" class="btn btn-light ">취소</button>
      <button type="submit" class="btn btn-primary" @click.stop="save">{{ state.memo.id > 0 ? '수정':'저장' }}</button>
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

.form-control{
    width: 100%;
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