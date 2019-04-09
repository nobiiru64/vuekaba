import ThreadView from './ThreadView.vue'

//const camelize = str => str.charAt(0).toUpperCase() + str.slice(1)

export default function ChooseThread (type) {
    return {
        name: `${type}`,

        asyncData ({ store, route }) {
            let code = route.params.path;

          //  return store.dispatch('GET_ALL_THREADS', { code })
        },

        title: type,

        render (h) {

            return h(ThreadView, {props: { type }})
        }
    }

}
