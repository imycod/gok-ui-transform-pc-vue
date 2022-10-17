<!--
 * @Author: lpj 1248708823@qq.com
 * @Date: 2022-10-13 17:03:20
 * @LastEditors: lpj 1248708823@qq.com
 * @LastEditTime: 2022-10-14 10:21:20
 * @FilePath: \college-teaching\src\view\project-trainning\home\excellent-project\components\detail\material.vue
 * @Description: 项目资料
-->
<template>
  <div class="table" :show-header="true">
    <Table :columns="columns" :data="data">
      <template slot-scope="{ row }" slot="action">
        <a class="download" @click="download(row)">下载</a>
      </template>
    </Table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      columns: [
        {
          title: '序号',
          key: 'NO',
          width: 100,
          align: 'center'
        },
        {
          title: '材料名称',
          key: 'name',
          width: 500,
          className: 'first',
          ellipsis: true,
          tooltip: true,
          align: 'center'
        },
        {
          title: '上传人',
          key: 'user',
          width: 120,
          className: 'second',
          align: 'center'
        },
        {
          title: '上传日期',
          key: 'date',
          width: 180,
          className: 'second',
          align: 'center'
        },
        {
          title: '操作',
          slot: 'action',
          width: 120,
          align: 'center'
        }
      ],
      data: [
        {
          NO: 1,
          name: '考卷名称考卷名称考卷名称考卷名称考考卷名称考卷名考卷名称考卷名称考卷名称考卷名称考卷名称考考卷名称考卷名考卷名称..考卷名称考卷名称考卷名称考卷名称考考卷名称考卷名考卷名称..',
          user: '鲨鱼辣椒',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    };
  },
  computed: {},
  methods: {
    download (item) {}
  },
  components: {}
};
</script>
<style lang="stylus" scoped>
.table {
  .download {
    font-size: 14px;
    font-weight: 400;
    color: #268AFF;
    line-height: 14px;
  }
}

/deep/ .ivu-table {
  font-size: 14px;
  font-weight: 400 !important;
  color: #333;
  // line-height: 14px;
}

/deep/ th .ivu-table-cell {
  color: #333;
}

/deep/ .second {
  font-size: 14px;  font-weight: 400;
  color: #8590A6;
}

/deep/ .ivu-table-row-hover td{
  .ivu-tooltip {
    color: #FE8836
  }
  background: #FEEDE6
}
</style>
