<template>
    <div id="myskins">
        <Header/>
        <TopPage/>
        <SkinList/>
        <Footer/>
    </div>
</template>

<script>
import Header from "@/components/Header";
import TopPage from "@/components/TopPage";
import SkinList from "@/components/SkinList";
import Footer from "@/components/Footer";

export default{
    name : "MySkins",
    components: {Header, TopPage, SkinList, Footer}
}
</script>


<style>
#myskins{
    background-color: #eeeeee;
    margin: 0;
}
</style>