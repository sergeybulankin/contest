import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import App from './App.vue'
import router from '@/router/index'
import './index.css'

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
    cache,
    uri: 'https://rickandmortyapi.com/graphql',
})

const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },
    router,
    render: () => h(App)
})

app.mount('#app')