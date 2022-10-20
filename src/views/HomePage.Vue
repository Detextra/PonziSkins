<template>
    <div id="homepage">
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
    name : "HomePage",
    components: {Header, TopPage, Footer}
}
</script>


<style>
#homepage{
    background-color: #eeeeee;
}

</style>