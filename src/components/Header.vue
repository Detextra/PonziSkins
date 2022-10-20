<template>
    <div id="header">
        <div id="headercontainer">
            <div id="headeritem">
                <a href="/#homepage">Home</a>
            </div>

            <div id="headeritem">
                <a href="/#stats">Statitics</a>
            </div>

            <div id="headeritem">
                <a href="/#stats">My skins</a>
            </div>
        </div>
    </div>
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