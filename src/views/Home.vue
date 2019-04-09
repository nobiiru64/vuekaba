<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ul class="unlisted" v-if="threads && threads.length">
      <li v-for="thread of threads">
        <a :href="link + '/b/res/' + thread.thread_num + '.html'">
          <img :src="link + thread.posts[0].files[0].thumbnail">
          <div class="thread" v-html="thread.posts[0].comment.slice(0, 100)"></div>
          <p>{{thread.thread_num}}</p>
        </a>

      </li>
    </ul>
    <ul v-if="errors && errors.length">
      <li v-for="error of errors">
        {{error.message}}
      </li>
    </ul>
  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios';

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {
        link: 'https://2ch.hk/',
        threads: [],
        errors: [],
    }
  },
  methods: {
      getData: function(){
          axios.get('/api/b/1.json')
              .then(response => {
                  this.threads   = response.data.threads;
                  console.log(response.data.threads)

              })
              .catch(e => {
                  console.log(e);
                  this.errors.push(e)
              })
      }
  },
  mounted: function() {

      this.getData()
      console.log(this.posts);
  }
}


</script>
<style>
  ul {
    list-style-type: none;
  }
  li {
    text-align: left;
  }
</style>
