<template>
   <div>
     <section>
       <el-table
         :show-header="false"
         :data="tableData"
         :span-method="objectSpanMethod"
         border
         :cell-style="columnStyle"
         style="width: 100%; margin-top: 20px"
       >
         <el-table-column prop="id" label="ID" width="240">
           <template slot-scope="scope">
             <div>
               <img :src="scope.row.id|setPicUrl" />
             </div>
           </template>
         </el-table-column>
         <el-table-column width="180" prop="name"></el-table-column>
         <el-table-column prop="amount1"></el-table-column>
         <el-table-column width="180" prop="amount2"></el-table-column>
         <el-table-column prop="amount3"></el-table-column>
       </el-table>
     </section>
   </div>
</template>
<script>



export default {
  name: "output",
  data() {
    return {
    //请求回来的数据
      dataForm: {},
    };
  },
  computed: {
  //因为数据用到了dataform中的数据，所以写在了computed中
    tableData() {
      return [
        {
          id: this.dataForm.headImg,
          name: "Download",
          amount1: this.dataForm.id,
          amount2: "Upload",
          amount3: this.dataForm.createDate
        },
        {
          id: this.dataForm.headImg,
          name: "Ping",
          amount1: this.dataForm.nickName,
          amount2: "预留输出1",
          amount3: this.dataForm.phone
        },
        {
          id: this.dataForm.headImg,
          name: "预留输出2",
          amount1: this.dataForm.gradeName,
          amount2: "预留输出3",
          amount3: this.dataForm.gradeCode
        },
        {
          id: this.dataForm.headImg,
          name: "预留输出4",
          amount1: this.dataForm.channel,
          amount2: "预留输出5",
          amount3:
            this.dataForm.provinceName +
            this.dataForm.cityName +
            this.dataForm.districtName
        }
      ];
    }
  },
  methods: {
    // 自定义列背景色
    columnStyle({columnIndex }) {
      if (columnIndex == 0 || columnIndex == 1 || columnIndex == 3) {
        //第三第四列的背景色就改变了2和3都是列数的下标
        return "background:#f3f6fc;";
      }else{
        return "background:#ffffff;";
      }
    },
    // 和并列
    objectSpanMethod({rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 4 === 0) {
          return {
            rowspan: 4,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    },
  }
};
</script>