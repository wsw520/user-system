<template>
<div id="contents">
     <!-- 头部组件 -->
     <component :is="header_"></component>
     <!--  -->
    <el-container style="height: 100vh; border: 1px solid #eee">
      <el-aside width="200px" style="background: #e6e6e6;">
        <el-menu :default-openeds="['', '2']" style="background: #e6e6e6;">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-tickets"></i>文章管理</template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <router-link to='/wz'>文章列表</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-message"></i>用户管理</template>
            <el-menu-item-group>
              <el-menu-item index="2-1">
                <router-link to='/'>用户信息</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      
      <el-container>
        <el-main>
          <el-table :data="tableData">
            <el-table-column prop="id" label="序号">
            </el-table-column>
            <el-table-column prop="name" label="用户名">
            </el-table-column>
            <el-table-column prop="pass" label="密码">
            </el-table-column>
            <el-table-column width="90">
              <!-- slot-scope(自定义列的内容)获取id -->
              <template slot-scope="scope">
                  <el-button type="success" prop="id" @click="bianji(scope.row)">
                     编辑 
                  </el-button>
              </template>
            </el-table-column>
            <el-table-column width="90">
              <template slot-scope="scope">
                  <el-button type="danger" @click="del(scope.row.id)">
                    删除
                  </el-button>
              </template>
            </el-table-column>
          </el-table>
          <!-- 分页 -->
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-size="8" 
            layout="total, prev, pager, next"
            :total="total">
          </el-pagination>

          </el-main>
      </el-container>
    </el-container>
</div>
</template>

<script>
//头部组件
import header_ from './header_.vue'
//提示框
import bianjikuang from './bianjikuang.vue'
//提示框内容
import bianjneirong from './bianjneirong.vue'
export default {
  name: 'header_',
   data() {
      return {
        tableData: null,
        total:null,
        header_:header_,
      }
    },
     methods: {
      bianji(row) {
         //通过父parent->组件名ref_bianjikuang->找到组件下的方法
         //把组件bianjikuang_(bianjneirong)传过去
         this.$parent.$refs.ref_bianjikuang.bianjikuang_(bianjneirong);

         //点击编辑信息/用事件传递用户信息
         this.bus.$emit("bianji_user",row);

      },
      del(del_id){
          this.$http.post("http://bk.wsw520.top/user.php",{del_id},{emulateJSON:true}).then(data=>{
              //删除数据后更新页面数据
              this.tableData=data.body.slice(0,8);;
              //提示消息
              this.$notify({
                title: '删除',
                message: '已经删除成功！',
                type: 'success'
              })
          })
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
          this.$http.get("http://bk.wsw520.top/user.php").then(res=>{
              //从(val-1)*5开始取
              var kaishi=(val-1)*8;
              //取val*5个
              var geshu=val*8;
              this.tableData=res.body.slice(kaishi,geshu)
          });
      }


    },
    created(){

      //请求获取用户数据
      this.$http.get("http://bk.wsw520.top/user.php").then(res=>{
          //数据总条数
          this.total=res.body.length;
          this.tableData=res.body.slice(0,8)
      });
      //接收修改成功后的数据
      this.bus.$on('formdata_show',data=>{
          this.tableData=data
      });
       
    }
}
</script>


<style scoped>

</style>