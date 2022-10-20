<template>
    <div>
        <Header/>
        <Top-page/>
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
    name : "HomePage",
    components: {Header, TopPage, SkinList, Footer}
}
</script>


<style>

</style>