<script setup lang="ts">
import { ArcGISIdentityManager } from '@esri/arcgis-rest-request';
import { redirectUri } from '../router';
const clientId = import.meta.env.VITE_CLIENTID

ArcGISIdentityManager.completeOAuth2({
    clientId,
    redirectUri
})

</script>
<template>

</template>