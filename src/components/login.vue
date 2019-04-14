<template>
  <div class="login">
       <div class="login_content">
          <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="">
			  <el-form-item label="用户" prop="pass">
			    <el-input type="text" v-model="ruleForm2.pass" autocomplete="off"></el-input>
			  </el-form-item>
			  <el-form-item label="密码" prop="checkPass">
			    <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button style="width: 100%;" type="primary" @click="submitForm('ruleForm2')">登录</el-button>
			  </el-form-item>
		  </el-form>

       </div>
  </div>
</template>

<script>
export default{
	name:"login",
	data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: 'admin',
          checkPass: 'admin',
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //用户名存到sessionStorage
            sessionStorage.setItem("uname",this.ruleForm2.pass);
            //路由跳转
            this.$router.push({path:'/'})
          } else {
            console.log('error submit!');
            return false;
          }
        });
      }
    }
}
</script>

<style scoped>
.login{
	background: url(./../../static/web_login_bg.jpg) no-repeat;
	background-size: cover;
	width: 100vw;
	height: 100vh;
}
.login_content{
    max-width: 449px;
    min-width: 240px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background: url(./../../static/login_bg.png);
    padding: 3% 6% 3% 6%;
    border-radius: 10px;
}

</style>