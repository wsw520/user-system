<template>
  <div class="header_">
    <!-- 导航 -->
    <el-row>
      <el-header style="text-align: right; font-size: 12px">
         <el-col :span="3" class="el_col">
             管理系统
         </el-col>
         <el-col :span="21">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="exit_login">退出</el-dropdown-item>
                <!-- <el-dropdown-item>新增</el-dropdown-item> -->
                <!-- <el-dropdown-item>删除</el-dropdown-item> -->
              </el-dropdown-menu>
            </el-dropdown>
            <span @click="exit_login">{{name}}</span>
         </el-col>
      </el-header>
    </el-row>

  </div>
</template>

<script>

export default {
  name: 'header_',
  data(){
     return{
         name:null
     }
  },
  created(){
     //获取sessionStorage的用户名
     this.name = sessionStorage.getItem("uname");
  },
  methods: {
     //退出用户
     exit_login(){
         this.$confirm('你确定退出用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          //删除sessionStorage
          sessionStorage.removeItem("uname");
          this.$message({
            type: 'success',
            message: '退出成功，即将跳转登录页！'
          });
          setTimeout(()=>{
            //跳转到登录
            this.$router.push({path:'/login'})
          },3000)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消成功！'
          });          
        });
     }
  }
}

</script>


<style scoped>
 .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el_col{
    text-align: left;
    font-size: 26px;
  }
  .el-aside {
    color: #333;
  }
  @media screen and (max-width: 800px) {
     .el_col{
        width: 65% !important;
     }
     .el-col-21 {
         width: 30% !important;
        float: right;
     }
  }
</style>
