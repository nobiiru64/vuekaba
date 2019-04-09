<template>
    <div class="news-view">

        <div class="news-list-nav">
            {{ page }}
            <!--
            <router-link v-if="page > 1" :to="'/' + type + '/' + (page - 1)">&lt; prev</router-link>
            <a v-else class="disabled">&lt; prev</a>
            <span>{{ page }}/{{ maxPage }}</span>
            <router-link v-if="hasMore" :to="'/' + type + '/' + (page + 1)">more &gt;</router-link>
            <a v-else class="disabled">more &gt;</a>
            -->
        </div>

        <div v-if="this.errors.length > 0">
            404 Not Found
        </div>

        <transition :name="transition">
            <div class="news-list" :key="displayedPage" v-if="displayedPage > 0">
                    <thread
                            v-for="thread in displayedItems"
                            :key="thread.id"
                            :thread="thread">
                    </thread>
            </div>
        </transition>
    </div>
</template>


<script>
    import { mapActions, mapGetters } from 'vuex'
  //  import { watchList } from '../api'
    import axios from 'axios';
    import Thread from '../components/Thread.vue';

    export default {
        name: "thread-list",
        components: { Thread },
        data() {
            return {
                displayedPage:  Number(this.$route.params.page) || 1,
                displayedItems: null,
                transition: 'slide-right',
                threads: null,
                errors: [],
            };
        },
        computed: {
            page() {
                return this.$route.params.id
            }
        },
        beforeMount() {
            if (this.$root._isMounted) {
                this.loadThreads()
            }
        },
        watch: {
            page(){
                this.loadThreads()
            },
            $route (to, from){
                this.getData(this.$route.params.board);
            }
        },



        beforeDestroy () {
            this.unwatchList()
        },
        methods: {
            getData: function(board){
                axios.get('/api/' + board + '/1.json')
                    .then(response => {
                        this.displayedItems =  response.data.threads;
                        console.log(this.displayedItems);
                        this.errors = [];
                    })
                    .catch(e => {
                        this.displayedItems = null;
                        this.errors.push(e)
                    })
            },

            loadThreads: function(){

                /*
                this.$bar.start()
                this.$store.dispatch('GET_ALL_THREADS', {
                    code: this.$route.params.id
                }).then(() => {
                    //if (this.page < 0 || this.page > this.maxPage) {
                    //    this.$router.replace(`/${this.type}/1`)
                    //    return
                    //  }
                    //  this.transition = from === -1
                    //    ? null
                    //    : to > from ? 'slide-left' : 'slide-right'
                    //  this.displayedPage = to
                    this.displayedItems = this.$store.getters.activeItems
                    this.$bar.finish()
                })
                */
            }
        },
        mounted: function() {

            this.getData(this.$route.params.board);
        }
    }
</script>

<style>
    .news-view {
        padding-top: 45px;
    }
    .news-list-nav,
    .news-list {
        background-color: #fff;
        border-radius: 2px;
    }
    .news-list-nav {
        padding: 15px 30px;
        position: fixed;
        text-align: center;
        top: 55px;
        left: 0;
        right: 0;
        z-index: 998;
        box-shadow: 0 1px 2px rgba(0,0,0,0.1);
    }
    .news-list-nav a {
        margin: 0 1em;
    }
    .news-list-nav .disabled {
        color: #ccc;
    }
    .news-list {
        position: absolute;
        margin: 30px 0;
        width: 100%;
        transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
    }
    .news-list ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
    .slide-left-enter,
    .slide-right-leave-to {
        opacity: 0;
        transform: translate(30px, 0);
    }
    .slide-left-leave-to,
    .slide-right-enter {
        opacity: 0;
        transform: translate(-30px, 0);
    }
    .item-move,
    .item-enter-active,
    .item-leave-active {
        transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
    }
    .item-enter {
        opacity: 0;
        transform: translate(30px, 0);
    }
    .item-leave-active {
        position: absolute;
        opacity: 0;
        transform: translate(30px, 0);
    }
    @media (max-width: 600px) {
        .news-list {
            margin: 10px 0;
        }
    }

</style>
