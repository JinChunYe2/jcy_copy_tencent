<template>
    <div>
        <p style = "width:100%;height:500px;background-color:red;border:1px solid #000">{{ msg }}</p>
    </div>
</template>

<script>
    export default {
        name: "chechen",
        data () {
            return {
                
            }
        },
        props: {
            msg:String
        }
    }
</script>