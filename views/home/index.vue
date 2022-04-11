<template>
<el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top:5px :height:20px :width:20px">
    <el-card shadow="hover">
        <div class="user">
            <img :src="userImg" />
                <div class="userinfo">
                <p class="name">Admin账户</p>
                <!-- <p class="acess">超级管理员</p> -->
                </div>
        </div>
    </el-card>
    <span>Network</span>
    <el-card style="margin-top:20px">
        <el-table :data="tableData" style=":height:20px width:2000px">
            <el-table-column v-for="(val,key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
            >
            </el-table-column>
        </el-table>
    </el-card>
    <h3>Audio</h3>
    <el-card style="margin-top:20px;">
        <el-table :data="tableData1">
            <el-table-column v-for="(val,key) in tableLabel1"
            :key="key"
            :prop="key"
            :label="val"
            >
            </el-table-column>
        </el-table>
    </el-card>
    <h3>Video</h3>
        <el-card style="margin-top:20px;">
        <el-table :data="tableData2">
            <el-table-column v-for="(val,key) in tableLabel2"
            :key="key"
            :prop="key"
            :label="val"
            >
            </el-table-column>
        </el-table>
    </el-card>


    </el-col>
    </el-row>
</template>  

<script>
import {getData} from '../../api/data.js'
export default {

    name:'Vue-home',
    
    data(){
        return{
            userImg: require('../../src/assets/images/user.png'),
            tableData:[
            {
                Banwidth: '695kbs',
                Packetloss:'0%',
                Network:'Wi-Fi',
                Proxy:'Proxy not set'

            },
            {
                Banwidth: '1010kbs',
                Packetloss:'0%',
                Network:'WLAN',
                Proxy:'Proxy not set'

            },
        ],
            tableLabel:{
            Banwidth:'Bandwidth',
            Packetloss:'Packet loss',
            Network:'Network',
            Proxy:'Proxy',
        },
            tableData1:[
            {
                Bandwidth: '0kps',
                Proxy:'127kbps',
                Network:'0dB',
                Packetloss:'61dB'

            },

        ],
            tableLabel1:{
            Bandwidth:'Bitrate-up',
            Proxy:'Bitrate-down',
            Packetloss:'Mic',
            Network:'Speaker',
        },

            tableData2:[
            {
                Resolution: '1280*720',
                Packetloss:'7fps',
                Network:'396kbps',

            },
            {
                Banwidth: '480*270',
                Packetloss:'12fps',
                Network:'83kbps',
            },
        ],
            tableLabel2:{
            Banwidth:'Resolution',
            Packetloss:'Frame rate',
            Network:'Bitrate',

        },


        }
        },
        mounted(){
            getData().then(res =>{
                const {code, data} = res.getData
                if (code ===20000){
                    this.tableData = data.tableData
                }
                console.log(res)
            })
        }
    
    }
    

</script>