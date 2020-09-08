<template>
    <div>
        <div class = "content">
            <ul  v-if = "list != ''">
                <li v-for = "(item,index) in list" :key = item.id>
                    <span>{{ item.id }}</span>
                    <span>{{ item.name }}</span>
                    <span>{{ item.price }}</span>
                    <span @click = "spanclick(item.num,index)">++</span>
                    <span>{{ item.num }}</span>
                    <span @click = "spancli(item.num,index)">--</span>
                    <button @click = "removeClack(index)">{{ item.remove }}</button>
                </li>
                <p>和：</p>
            </ul>
            <div v-else>
                <p>meiyoule</p>
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
            num: 0,
            remove: '移除',
        },
        {
            id : 13,
            name:'js项目开发实战',
            price: 299,
            num: 0,
            remove: '移除',
        },
        {
            id : 14,
            name:'jq项目开发实战',
            price: 399,
            num: 0,
            remove: '移除',
        },
        {
            id : 15,
            name:'css项目开发实战',
            price: 122,
            num: 0,
            remove: '移除',
        },
        {
            id : 11,
            name:'html项目开发实战',
            price: 133,
            num: 0,
            remove: '移除',
        },
    ]
    export default {
        data () {
            return {
                list,
                
            }
        },
        computed: {
            
        },
        methods: {
            removeClack(index){
                let self = this;
                self.list.splice(index,1)
                // self.list[index] = '';
            },
            spanclick(num,index){
                let self = this;
                self.list[index].num ++;
                let add = self.list[index].num
                self.list[index].price = self.list[index].price * add
                console.log(num)
            },
            spancli(num,index){
                let self = this;
                if(self.list[index].num != 0){
                    self.list[index].num --;
                }
                let jina = self.list[index].num
                self.list[index].price = self.list[index].price * jina
            }
        }
    }
</script>

<style lang="less" scoped>

</style>