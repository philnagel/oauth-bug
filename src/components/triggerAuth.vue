<script setup lang="ts">
import { ArcGISIdentityManager } from '@esri/arcgis-rest-request';
import { useRouter } from 'vue-router';
import { redirectUri } from '../router'


const initiateLogin = async () => {
    const clientId = import.meta.env.VITE_CLIENTID

    try {
        const session = await ArcGISIdentityManager.beginOAuth2({
        redirectUri,
        clientId
    })
    console.log(session)
    } catch (e) {
        console.error(e)
    }
}

</script>
<template>
<button @click="initiateLogin">Login</button>
</template>