<template>
     <nav>
  <router-link to="/">AllSkins</router-link> |
  <router-link to="/DescriptionSkins"> DescriptionSkins</router-link> |
  <router-link to="/graphique">graphique</router-link>
  
  </nav>
  <router-view />
</template>



<script>
export default{
    name: "Header"
}
</script>


<style>
#header{
    position: relative;
    width : 100%;
    height: 10vh;
    background-color: #eeeeee;
    margin: 0;
}

#headercontainer{
    display: flex;
    flex-direction: row;
}

#headeritem{
    border: 1px solid black;
    align-self: center;
}
</style>