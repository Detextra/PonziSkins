<template>
    <div id="stats">
        <Header/>
        <Top-page/>
        
        <Footer/>
    </div>
</template>

<script>
import Header from "@/components/Header";
import TopPage from "@/components/TopPage";
import Footer from "@/components/Footer";

export default{
    name : "Stats",
    components: {Header, TopPage, Footer}
}
</script>


<style>
#stats{
    background-color: #eeeeee;
}

</style>