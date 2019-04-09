<template>

    <li class="thread-item">

        <span class="thread-image"><img :width="140" class="thread-image--img" :src="'http://2ch.hk/' + thread.posts[0].files[0].path"></span>
        <a v-bind:href="this.$route.params.board + '/' + thread.thread_num">#{{ thread.thread_num }}</a><br>

           <span class="meta">
             <div class="thread" v-html="thread.posts[0].comment"></div>

             {{thread.id }}
           </span>

    </li>
    <!--
    <li class="thread-item">
     z

      <span class="meta">
        <div class="thread" v-html="item.text"></div>


      </span>


      <span class="score">{{ item.score }}</span>
      <span class="title">
        <template v-if="item.url">
          <a :href="item.url" target="_blank" rel="noopener">{{ item.title }}</a>
          <span class="host"> ({{ item.url | host }})</span>
        </template>
        <template v-else>
          <router-link :to="'/item/' + item.id">{{ item.title }}</router-link>
        </template>
      </span>
      <br>
      <span class="meta">
        <span v-if="item.type !== 'job'" class="by">
          by <router-link :to="'/user/' + item.by">{{ item.by }}</router-link>
        </span>
        <span class="time">
          {{ item.time | timeAgo }} ago
        </span>
        <span v-if="item.type !== 'job'" class="comments-link">
          | <router-link :to="'/item/' + item.id">{{ item.descendants }} comments</router-link>
        </span>
      </span>
      <span class="label" v-if="item.type !== 'story'">{{ item.type }}</span>

    </li>-->
</template>

<script>
    export default {
        name: 'thread-item',
        props: {
            thread: Object,
            active: Boolean
        },
        beforeMount(){

        },

    }

</script>

<style>

    li {
        list-style: none;
    }

    .thread-item {
        font-family: Verdana, sans-serif;
        background-color: #fff;
        padding: 20px 30px 20px 120px;
        border-bottom: 1px solid #eee;
        position: relative;
        line-height: 20px;
    }
    .thread-item a {
        color: #f60;
    }
    .thread-item .thread-image {
        color: #f60;
        font-size: 1.1em;
        font-weight: 700;
        position: absolute;
        width: 100px;
        height: 100px;
        left: 0;
        text-align: center;
        margin-top: -10px;
        opacity: 0.1;
    }
    .thread-item .thread-image .thread-image--img {
        max-width: 100px;
        border-radius: 10%;
        opacity: 90%;
    }
    .thread-item .meta,
    .thread-item .host {
        font-size: 0.85em;
        color: #333;
    }
    .thread-item .meta a,
    .thread-item .host a {
        color: #f60;
        text-decoration: none;
    }
    .thread-item .meta a:hover,
    .thread-item .host a:hover {
        color: #f60;
    }

</style>
