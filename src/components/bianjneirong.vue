<template>
  <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
  <el-form-item label="用户名">
    <el-input v-model="formLabelAlign.name" @keyup.native="keyup_"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="formLabelAlign.pass" @keyup.native="keyup_"></el-input>
  </el-form-item>
  </el-form>
</template>

<script>
 export default {
    data() {
      return {
        labelPosition: 'top',
        formLabelAlign: {
          name: '',
          pass: '',
        }
      };
    },
    methods: {
    	
    	keyup_(){
    		this.bus.$emit('keyup_data',this.formLabelAlign)
    	}

    },
    created(){
        //接收点击编辑后事件传来的用户信息
        this.bus.$on("bianji_user",data=>{
             this.formLabelAlign.name=data.name
             this.formLabelAlign.pass=data.pass
        })
    }
  }
</script>

