<!--
<template>
    <div>
        <div v-for="(skin, index) in cart">

        </div>
    </div>

</template>
-->

<script>
import Skin from "@/components/Skin";
import cart from "././app.js";

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