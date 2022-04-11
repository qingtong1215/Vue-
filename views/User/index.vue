<template>
<div>
    <el-col :span="8" style="margin-top:5px :height:20px :width:20px">
      <el-card>
          <span>输入参数</span>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm">
          <el-form-item label="分辨率" required>
          <el-select v-model="ruleForm.fenbian" placeholder="请选择分辨率">
          <el-option label="702x576" value="001"></el-option>
          <el-option label="1024x768" value="002"></el-option>
          <el-option label="1280x720" value="003"></el-option>
          <el-option label="1920x1080" value="004"></el-option>
          </el-select>
          </el-form-item>

          <el-form-item label="帧率" required>
          <el-select v-model="ruleForm.FPS" placeholder="请选择帧率">
          <el-option label="30帧" value="005"></el-option>
          <el-option label="60帧" value="006"></el-option>
          <el-option label="90帧" value="007"></el-option>
          <el-option label="120帧" value="008"></el-option>
          </el-select>
          </el-form-item>

        <el-form-item label="预留输入1" prop="yuliu1">
        <el-input v-model="ruleForm.yuliu1"></el-input>
        </el-form-item>

        <el-form-item label="预留输入2" prop="yuliu2">
        <el-input v-model="ruleForm.yuliu2"></el-input>
        </el-form-item>

        <el-form-item label="预留输入3" prop="yuliu3">
        <el-input v-model="ruleForm.yuliu3"></el-input>
        </el-form-item>

        <el-form-item label="预留输入4" prop="yuliu4">
        <el-input v-model="ruleForm.yuliu4"></el-input>
        </el-form-item>

        <el-form-item label="预留输入5" prop="yuliu5">
        <el-input v-model="ruleForm.yuliu5"></el-input>
        </el-form-item>

        <el-form-item label="预留输入6" prop="yuliu6">
        <el-input v-model="ruleForm.yuliu6"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
        
          </el-form>
        </el-card>
    </el-col>

</div>
</template>  

<script>

export default {
    name:'vueUser',
    data() {
          return {
            ruleForm: {
              fenbian: '',
              FPS: '',
              yuliu1: '',
              yuliu2: '',
              yuliu3: '',
              yuliu4: '',
              yuliu5: '',
              yuliu6: ''
              }, 
        rules:{
        fenbian:[
          {requied:true, message:'请输入分辨率', trigger: 'change'}
        ],
        FPS:[
          {requied:true, message:'请输入FPS',trigger: 'change'}
        ],
        yuliu1:[
          { required: true, message: '请输入预留输入1', trigger: 'blur' }
        ],
         yuliu2:[
          { required: true, message: '请输入预留输入2', trigger: 'blur' }
        ],
         yuliu3:[
          { required: true, message: '请输入预留输入3', trigger: 'blur' }
        ],
         yuliu4:[
          { required: true, message: '请输入预留输入4', trigger: 'blur' }
        ],
         yuliu5:[
          { required: true, message: '请输入预留输入5', trigger: 'blur' }
        ],
        yuliu6:[
          { required: true, message: '请输入预留输入6', trigger: 'blur' }
        ]
        }
        };
    },
 methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>