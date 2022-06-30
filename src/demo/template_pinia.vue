<template>
  <div class="test">用户名:{{ store.me }}</div>
  <hr />
  <el-button @click="updateName">修改store中的name</el-button>
  <hr />
</template>

<script setup lang="ts">
import { useMainStore } from '@/store'

const store = useMainStore()

const updateName = () => {
  // 直接改变属性,会覆盖相同key的值
  store.$patch({
    name: '111',
  })
  // 通过方法
  store.insertPost('222')
}
</script>

<style lang="scss" scoped>
.test {
  color: $test-color;
}
</style>
