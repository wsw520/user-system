<template>
  <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
  <el-form-item label="标题">
    <el-input
      placeholder="请输入文章标题"
      v-model="formLabelAlign.biaoti"
      @keyup.native="keyup_"
    >
    </el-input>
  </el-form-item>
  <el-form-item label="内容">
    <el-input
	  type="textarea"
	  :rows="8"
	  placeholder="请输入内容"
	  v-model="formLabelAlign.neirong"
	  @keyup.native="keyup_"
	>
	</el-input>
  </el-form-item>
  </el-form>
</template>

<script>
 export default {
    data() {
      return {
        labelPosition: 'top',
        formLabelAlign: {
          biaoti: '',
          neirong: '',
        }
      };
    },
    methods: {
    	
    	keyup_(){

         //获取内容部分
         var nr=this.formLabelAlign.neirong;
         //使用正则/\n/g替换成<br>
         var str= nr.replace(/</g,"&lt;");
         this.formLabelAlign.neirong=str;
    		 this.bus.$emit('keyup_data',this.formLabelAlign);
    	}

    },
    created(){
        // 接收点击编辑后事件传来的文章信息
        this.bus.$on("bianji_user",data=>{
             this.formLabelAlign.biaoti=data.biaoti
             this.formLabelAlign.neirong=data.neirong
        })
    },
    computed:{

    }
  }
</script>

