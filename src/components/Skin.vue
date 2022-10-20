<template>
    <div id="skin">
        <div id="skin-container">

            <div id="skin-data">
                <slot name="name">Skin name : {{skin}}</slot>
                <slot name="type">Skin type : {{type}}</slot>
                <slot name="state">Skin state : {{state}}</slot>
            </div>

            <div id="buttons">
                <button id="add"><font-awesome-icon icon="fa-solid fa-plus" /></button>
                <button id="remove"><font-awesome-icon icon="fa-solid fa-minus" /></button>
            </div>

        </div>
    </div>
</template>



<script>
import {} from "@fortawesome/fontawesome-free";
export default {
    name:"Skin",
    props : {
        displayInfo : {
            skin : String,
            type : String,
            state : String
        }
    },
    components: {Skin},
};
</script>



<style>

#skin{
    position: relative;
    border-color: black;
    border-radius: 2px;
    background-color: aqua;
    color: aliceblue;
    width: 100px;
    height: 150px;
}

#skin-container{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

#skin-data{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

#buttons{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

</style>