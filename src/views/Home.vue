<template>
  <div class="home">
<hello-world></hello-world>

    <ul>
      <li v-for="post in posts" v-bind:key="post" v-text="post.title" ></li>
      <li>Test</li>
    </ul>
  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
