<template>
    <div id="skin">
        <div id="skin-container">

            <div id="skin-data">
                <div><slot name="name">Name : {{skin}}</slot></div>
                <div><slot name="type">Type : {{type}}</slot></div>
                <div><slot name="state">State : {{state}}</slot></div>
            </div>

            <div id="buttons">
                <div>
                    <button id="remove" @click="$emit(removeSkinToCartWithIndex)">
                    <img src="@/assets/minus.png" contain height/></button>
                </div>
                <div>
                    <button id="add" @click="$emit(addSkinToCart)">
                    <img src="@/assets/plus.png"/></button>
                </div>
            </div>

        </div>
    </div>
</template>



<script>
/* needs to import functions from app.js
import ... from '@/src/app.js' */
export default {
    name:"Skin",
    props : {
        skin:{
            type : String,
            default : ""
        },
        type:{
            type : String,
            default : ""
        },
        state:{
            type : String,
            default : ""
        },
        modelValue:{}
    },
    methods:{
        updateState(state){
            this.$emit("", state)
        }
    }
};
</script>



<style>
#skin{
    position: relative;
    border: 1px solid black;
    border-radius: 2px;
    background-color: #2b78e4;
    color:white;
    font-size: small;
    width: 150px;
    height: 100px;
}

#skin-container{
    margin: 2%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

#skin-data{
    width: 100%;
    height : 80%;
    display: flex;
    flex-direction: column;
}

#buttons{
    width: 100%;
    height: 20%;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

button{
    cursor: pointer;
}

img{
    size-adjust: 10%;
    background: transparent;
}


</style>