<template>
    <div id="skinlist">

    </div>
</template>


<script>
import Skin from "@/components/Skin";

export default {
    name:"SkinList",
    props : {
        size : Int32Array,
    },
    components: {Skin},
};
</script>


<style>
</style>