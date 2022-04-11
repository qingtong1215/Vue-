<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @close="handleClose"
    :collapse="isCollapse"
  >

  <h3>后台通用管理系统</h3>
    <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :index="item.path" :key="item.path">
      <i :class="`el-icon-`+ item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
    <el-submenu v-for="item in hasChildren" :index="item.path" :key="item.path">

      <template slot="title">
        <i :class="`el-icon-`+ item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </template>
      <el-menu-item-group v-for="(subItem,subIndex) in item.children" :key="subItem.path">
        <el-menu-item :index="subIndex">{{subItem.label}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

//
<style lang="less" scopedS>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 800px;
}
.el-menu {
    height: 100%;
    border: node;
    h3 {
        color: #fff;
        text-align:center;
        line-height: 48px
    }
}
</style>

<script>
//import { FormItem } from 'element-ui';
export default {
  data() {
    return {
      isCollapse: false,
      menu: [
            {
            path: '/',
            name: 'home',
            label: '测试页面',
            icon: 's-home',
            url: 'Home/Home'
            },
            {
            path: '/user',
            name: 'user',
            label: '输入页面',
            icon: 'video-play',
            url: 'MallManage/MallManage'
            },
            {
            path: '/output',
            name: 'output',
            label: '输出页面',
            icon: 'user',
            url: 'UserManage/UserManage'
            },
        {
          label: '预留页面',
          icon: 'location',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '页面1',
              icon: 'setting',
              url: 'Other/PageOne'
            },
            {
              path: '/page2',
              name: 'page2',
              label: '页面2',
              icon: 'setting',
              url: 'Other/PageTwo'
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item){
      this.$router.push({
        name:item.name
      })
    }
  },

  computed:{
      noChildren(){
          return this.menu.filter(item => !item.children)
      },
      hasChildren(){
          return this.menu.filter(item => item.children)

      }
  }
};
</script>