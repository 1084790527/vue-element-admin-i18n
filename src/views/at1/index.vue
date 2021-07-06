<template>
  <div class="app-container">
    <span>from搜索条件查询</span>
    <template>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="审批人">
          <el-input v-model="formInline.user" placeholder="审批人" />
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="formInline.region" placeholder="活动区域">
            <el-option v-for="reg in formInlineDate.region" :key="reg.id" :label="reg.name" :value="reg.id" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </template>
    <template>
      <hr>
    </template>
    <template>
      <span>table头部按钮</span>
      <el-row>
        <el-button @click="onBtn">默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
        <el-button type="danger" @click="popUpWindow">弹出出窗口</el-button>
      </el-row>
    </template>
    <template>
      <span>table</span>
      <el-table :data="tableData" style="width: 100%" max-height="700">
        <el-table-column label="操作" fixed width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleClick(scope.row)">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
        <el-table-column type="selection" fixed width="55" />
        <el-table-column type="index" fixed width="50" />
        <el-table-column prop="date" label="日期" width="180" />
        <el-table-column prop="name" label="姓名" width="180" />
        <el-table-column prop="state" label="状态" width="90">
          <template slot-scope="scope">
            <p v-if="scope.row.state == '1'">状态1</p>
            <p v-if="scope.row.state == '2'">状态2</p>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="地址" width="180" />
      </el-table>
      <div class="block">
        <el-pagination
          :current-page="currentPage4"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </template>
    <template>
      <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
        <el-form :model="formInline">
          <el-form-item label="活动名称">
            <el-input v-model="formInline.user" autocomplete="off" />
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="formInline.region" placeholder="请选择活动区域">
              <el-option v-for="reg in formInlineDate.region" :key="reg.id" :label="reg.name" :value="reg.id" />
            </el-select>
          </el-form-item>
        </el-form>
        <el-table :data="tableData">
          <el-table-column property="date" label="日期" width="150" />
          <el-table-column property="name" label="姓名" width="200" />
          <el-table-column property="address" label="地址" />
        </el-table>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogTableVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </template>
  </div>
</template>

<script>
// import { httpGet, httpPut, httpPost, httpDel } from '@/api/httpUtils'
export default {
  name: 'At1',
  data() {
    return {
      formInlineDate: {
        region: [
          {
            id: '111',
            name: '1111'
          },
          {
            id: '112',
            name: '1122'
          }
        ]
      },
      formInline: {
        user: 'fwfw',
        region: ''
      }, tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          state: '1',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          state: '2',
          address: '上海市普陀区金沙江路 1517 弄'
        }
      ],
      dialogTableVisible: false,
      currentPage4: 2,
      total: 900
    };
  },
  /* 方法函数 */
  methods: {
    onSubmit() {
      console.log('submit!');
      console.log(JSON.stringify(this.formInline));
      // httpGet('/uuuuu/get', { id: 'ooo' }).then(res => {
      //   console.log(JSON.stringify(res))
      // })
      // httpPut('/uuuuu/put', { id: 'ooo' }).then(res => {
      //   console.log(JSON.stringify(res))
      // })
      // httpDel('/uuuuu/del', { id: 'ooo' }).then(res => {
      //   console.log(JSON.stringify(res))
      // })
      // httpPost('/uuuuu/post', { id: 'ooo' }).then(res => {
      //   console.log(JSON.stringify(res))
      // })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleClick(row) {
      console.log(row);
    },
    onBtn() {
      console.log('aaaaa');
    },
    popUpWindow() {
      this.dialogTableVisible = true;
    }
  }
};
</script>

<style scoped>

</style>
