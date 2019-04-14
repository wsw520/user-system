<template>
    <el-dialog
	  title="编辑信息"
	  :visible.sync="dialogVisible"
	  width="35%">

      <!-- 动态组件(内容) -->
      <component :is="neirong"></component>

	  <span slot="footer" class="dialog-footer">
	    <el-button @click="dialogVisible = false">取 消</el-button>
	    <el-button type="primary" @click="formdata">确 定</el-button>
	  </span>
	</el-dialog>
</template>

<script>
  export default {
  	name:'bianjikuang',
    data() {
      return {
        dialogVisible: false,
        neirong:null,
        yonghuming:null,
        pass:null,
        idx:null,
        biaoti:null,
        neirongs:null,
      };
    },
    methods: {
     
      bianjikuang_(zujian){
      	//显示编辑示框
    	this.dialogVisible=true;
    	//显示注入动态框内容
    	this.neirong=zujian;
      },

      //提交编辑数据
      formdata(){
         //编辑用户信息
         if(this.yonghuming!=null && this.yonghuming!='' && this.pass!=null && this.pass!=''){
            //向服务器提交数据
            this.$http.post("http://bk.wsw520.top/user.php",{idx:this.idx,name:this.yonghuming,pass:this.pass},{emulateJSON:true}).then(data=>{
                 //修改成功后发送到显示页面
                 this.bus.$emit('formdata_show',data.body.slice(0,8))
            })
            //提示消息
            this.$notify({
              title: '成功',
              message: '已经编辑成功！',
              type: 'success'
            });     
         }
         //编辑文章
         else if(this.biaoti!=null && this.biaoti!='' && this.neirongs!=null && this.neirongs!=''){
            //向服务器提交数据
            this.$http.post("http://bk.wsw520.top/post.php",{idx:this.idx,biaoti:this.biaoti,neirongs:this.neirongs},{emulateJSON:true}).then(data=>{
                 //修改成功后发送到显示页面
                 this.bus.$emit('formdata_show',data.body.slice(0,8))
            })
            //提示消息
            this.$notify({
              title: '成功',
              message: '已经编辑成功！',
              type: 'success'
            });     
         }else{
           //提示消息
             this.$notify.error({
               title: '错误',
               message: '未编辑任何信息！'
             });
         }
         //清空一下,防止存留最后一次输入的信息
         this.yonghuming=null;
         this.pass=null;
         this.biaoti=null;
         this.neirongs=null;
      	 //关闭编辑框
      	 this.dialogVisible = false;
       
      } 

    },
    created (){
    	//接收输入事件传来的数据
    	this.bus.$on('keyup_data',data=>{
            if(data.name!=null && data.name!=''){
               this.yonghuming=data.name
               this.pass=data.pass
            }
            else if(data.biaoti!=null && data.biaoti!=''){
               this.biaoti=data.biaoti
               this.neirongs=data.neirong
            }
         })

      //接收点击编辑后事件传来的用户id
        this.bus.$on("bianji_user",data=>{
             this.idx=data.id
        })
    }

  };
</script>