<script setup lang="ts">
import { ArcGISIdentityManager } from '@esri/arcgis-rest-request';
import { useRouter } from 'vue-router';
import { redirectUri } from '../router'
import { ref } from 'vue';

const currentResult = ref<string>('No login attempted yet')
const initiateLogin = async () => {
    const clientId = import.meta.env.VITE_CLIENTID

    try {
        const session = await ArcGISIdentityManager.beginOAuth2({
        redirectUri,
        clientId
    })
    currentResult.value = `Logged in as ${session?.username}`
    } catch (e) {
        currentResult.value = `OAuth Error: ${e}`
        console.error(e)
    }
}

</script>
<template>
<button @click="initiateLogin">Login</button>
<br>
{{ currentResult }}
</template>