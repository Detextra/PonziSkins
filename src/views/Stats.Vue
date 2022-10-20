<template>
    <div id="stats">
        <Header/>
        <Top-page/>

        <div>
            <div>
                <slot>You actually own : {{skinNB}} skins</slot>
            </div>
        </div>
        
        <Footer/>
    </div>
</template>

<script>
import Header from "@/components/Header";
import TopPage from "@/components/TopPage";
import Footer from "@/components/Footer";
import data from '././app.js'

export default{
    name : "Stats",
    props : {
        skinNB : data[1].length
    },
    components: {Header, TopPage, Footer}
}
</script>


<style>
#stats{
    background-color: #eeeeee;
}

</style>