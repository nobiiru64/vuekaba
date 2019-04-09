import BoardList from './BoardList.vue'

//const camelize = str => str.charAt(0).toUpperCase() + str.slice(1)

export default function ChooseBoard (type) {
    return {
        name: `${type}`,

        asyncData ({ store, route }) {
            let code = route.params.id;
          //  return store.dispatch('GET_ALL_THREADS', { code })
        },

        title: type,

        render (h) {
            return h(BoardList, {props: { type }})
        }
    }

}
