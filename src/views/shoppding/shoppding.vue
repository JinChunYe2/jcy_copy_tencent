<template>
    <div>
        <div class = "content">
            <div  v-if = "list != ''">
                <tr v-for = "(item,index) in list" :key = item.id>
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.price }}</td>
                    <td>
                        <button @click = "item.num --" v-bind:disabled = "item.num <= 1">--</button>
                            {{ item.num }}
                        <button  @click = "item.num ++">++</button>
                    </td>
                    <td>
                        <button @click = "removeClack(index)">移除</button>
                    </td>
                </tr>
                <p>和：{{num}}</p>
            </div>
            <div v-else>
                <p>meiyoule</p>
            </div>
            <div>
                <table>
                    <input type="text" v-model = "text">
                    {{ text }}
                    <input type="text" :value = "textone" @input = "textone = $event.target.value">
                    {{ textone }}
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    let list = [
        {
            id : 1,
            name:'vue项目开发实战',
            price: 199,
            num: 1,
        },
        {
            id : 13,
            name:'js项目开发实战',
            price: 299,
            num: 1,
        },
        {
            id : 14,
            name:'jq项目开发实战',
            price: 399,
            num: 1,
        },
        {
            id : 15,
            name:'css项目开发实战',
            price: 122,
            num: 1,
        },
        {
            id : 11,
            name:'html项目开发实战',
            price: 133,
            num: 1,
        },
        
    ]
    export default {
        data () {
            return {
                list,
                data:[222,333,5,4,66,77,32,45],
                text:'这是一段文字',
                textone:'另一端文字',
            }
        },
        computed: {
            add(index){
                return this.list[index].price * this.list[index].num
            },
            num(){
                return this.list.reduce(function(preValue,n){
                    return preValue +  n.price * n.num
                },0)
                // return this.data.filter(n =>{
                //     return n > 221;
                // }).map(n =>{
                //     return n * 1;
                // }).reduce((value,n) =>{
                //     return value + n
                // },0)
            },

        },
        methods: {
            removeClack(index){
                let self = this;
                self.list.splice(index,1)
                // self.list[index] = '';
            },
        }
    }
</script>

<style lang="less" scoped>
    *{
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
    }
    tr{
        border: 1px solid #000;
        padding: 10px;
        display: block;
        td{
            padding: 0 10px;
            border: 1px solid #000;
        }
    }
</style>