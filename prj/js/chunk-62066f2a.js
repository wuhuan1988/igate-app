(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62066f2a"],{4974:function(e,t,r){"use strict";var a=r("aa11"),o=r.n(a);o.a},"4e54":function(e,t,r){},9571:function(e,t,r){"use strict";var a=r("4e54"),o=r.n(a);o.a},aa11:function(e,t,r){},b90e:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pager-wrap",staticStyle:{"text-align":"right"}},[r("div",{staticClass:"slot"},[e._t("default")],2),r("el-pagination",e._b({staticClass:"pager",attrs:{background:e.background,"current-page":e.source.pageIndex,"page-size":e.source.pageSize,"pager-count":5,layout:e.layout,"page-sizes":e.pageSizes,total:e.source.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},o=[],l=r("a534"),n={name:"pager",props:{source:{required:!0,type:l["a"]},pageSizes:{type:Array,default:function(){return[10,20,50,100]}},layout:{type:String,default:"slot, prev, pager, next, total, sizes, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},methods:{handleSizeChange:function(e){this.source.setPageSize(e),this.$emit("pagerChange",1)},handleCurrentChange:function(e){this.source.setPageIndex(e),this.$emit("pagerChange",e)}}},i=n,s=(r("9571"),r("e90a")),c=Object(s["a"])(i,a,o,!1,null,null,null);t["a"]=c.exports},f547:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-form",{ref:"searchForm",staticClass:"search-form",attrs:{model:e.searchForm,inline:!0,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"港口编码",prop:"S_LIKE_t__PORT_Code"}},[r("el-input",{attrs:{placeholder:"请输入港口编码查询"},model:{value:e.searchForm.S_LIKE_t__PORT_Code,callback:function(t){e.$set(e.searchForm,"S_LIKE_t__PORT_Code",t)},expression:"searchForm.S_LIKE_t__PORT_Code"}})],1),r("el-form-item",{attrs:{label:"港口中文名称",prop:"Port_Name"}},[r("el-input",{attrs:{placeholder:"请输入港口名称查询"},model:{value:e.searchForm.Port_Name,callback:function(t){e.$set(e.searchForm,"Port_Name",t)},expression:"searchForm.Port_Name"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){return e.onSearch(1)}}},[e._v("查询")]),r("el-button",{attrs:{type:"default",icon:"el-icon-refresh"},on:{click:function(t){return e.resetForm("searchForm")}}},[e._v("重置")])],1)],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.source.loading,expression:"source.loading"}],ref:"table",staticStyle:{width:"100%"},attrs:{data:e.source.data,border:"",stripe:""}},[r("el-table-column",{attrs:{type:"index",width:"60",label:"序号",index:function(e){return e+1},align:"center"}}),r("el-table-column",{attrs:{label:"港口编码",prop:"portCode","header-align":"center",align:"center","min-width":"100"}}),r("el-table-column",{attrs:{label:"港口中文名称",prop:"portCnName","header-align":"center","min-width":"120"}}),r("el-table-column",{attrs:{label:"港口英文名称",prop:"portEnName","header-align":"center","min-width":"120"}}),r("el-table-column",{attrs:{label:"港口类型",prop:"portTypeName","header-align":"center",align:"center","min-width":"100"}}),r("el-table-column",{attrs:{label:"交换编码",prop:"ediCode","header-align":"center",align:"center","min-width":"100"}}),r("el-table-column",{attrs:{label:"详细地址",prop:"fullAddress","header-align":"center","min-width":"150"}}),r("el-table-column",{attrs:{label:"速查码1",prop:"qsCode1","header-align":"center",align:"center"}}),r("el-table-column",{attrs:{label:"速查码2",prop:"qsCode2","header-align":"center",align:"center"}}),r("el-table-column",{attrs:{label:"服务接口URL",prop:"serviceUrl","header-align":"center","min-width":"120"}}),r("el-table-column",{attrs:{label:"系统覆盖港口",prop:"systemCovered","header-align":"center",align:"center","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.systemCovered?r("i",[e._v("是")]):e._e()]}}])}),r("el-table-column",{attrs:{label:"启用状态",prop:"disabled",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(e){return[0==e.row.disabled?r("i",{staticClass:"el-icon-check i_enable"}):r("i",{staticClass:"el-icon-close i_disable"})]}}])}),r("el-table-column",{attrs:{label:"操作",width:"80",align:"center",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",circle:"",plain:"",icon:"el-icon-edit",title:"修改"},nativeOn:{click:function(r){return r.preventDefault(),e.rowEdit(t)}}}),r("el-button",{directives:[{name:"show",rawName:"v-show",value:1==t.row.disabled,expression:"scope.row.disabled == 1"}],attrs:{type:"primary",circle:"",plain:"",icon:"el-icon-circle-check",title:"启用"},nativeOn:{click:function(r){return r.preventDefault(),e.changeStatus(t)}}}),r("el-button",{directives:[{name:"show",rawName:"v-show",value:0==t.row.disabled,expression:"scope.row.disabled == 0"}],attrs:{type:"primary",circle:"",plain:"",icon:"el-icon-circle-close",title:"禁用"},nativeOn:{click:function(r){return r.preventDefault(),e.changeStatus(t)}}})]}}])})],1),r("pager",{attrs:{source:e.source},on:{pagerChange:e.onSearch}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:function(t){return e.handleAdd()}}},[e._v("新增")])],1),e.formEdit.show?r("edit",{attrs:{model:e.formEdit},on:{close:e.onSearch}}):e._e()],1)},o=[],l=r("b90e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:null!=this.model.portId?"修改":"新增",visible:e.model.show,width:"500px","close-on-click-modal":!1},on:{"update:visible":function(t){return e.$set(e.model,"show",t)}}},[r("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"ruleForm",staticClass:"edit-form",attrs:{"label-width":"120px",model:e.ruleForm,rules:e.rules},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSave()}}},[r("el-form-item",{attrs:{label:"港口编码",prop:"portCode"}},[r("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"港口编码"},model:{value:e.ruleForm.portCode,callback:function(t){e.$set(e.ruleForm,"portCode",t)},expression:"ruleForm.portCode"}})],1),r("el-form-item",{attrs:{label:"港口中文名称",prop:"portCnName"}},[r("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"港口中文名称"},model:{value:e.ruleForm.portCnName,callback:function(t){e.$set(e.ruleForm,"portCnName",t)},expression:"ruleForm.portCnName"}})],1),r("el-form-item",{attrs:{label:"港口英文名称",prop:"portEnName"}},[r("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"港口英文名称"},model:{value:e.ruleForm.portEnName,callback:function(t){e.$set(e.ruleForm,"portEnName",t)},expression:"ruleForm.portEnName"}})],1),r("el-form-item",{attrs:{label:"港口类型代号",prop:"portTypeId"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.ruleForm.portTypeId,callback:function(t){e.$set(e.ruleForm,"portTypeId",t)},expression:"ruleForm.portTypeId"}},e._l(e.portTypeList,(function(e){return r("el-option",{key:e.portTypeId,attrs:{label:e.portTypeName,value:e.portTypeId}})})),1)],1),r("el-form-item",{attrs:{label:"交换编码",prop:"ediCode"}},[r("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"交换编码"},model:{value:e.ruleForm.ediCode,callback:function(t){e.$set(e.ruleForm,"ediCode",t)},expression:"ruleForm.ediCode"}})],1),r("el-form-item",{attrs:{label:"详细地址",prop:"addrId"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{remote:!0,"remote-method":e.findAddressRemoteMethod,loading:e.addressLoading,filterable:"",clearable:"",placeholder:"请选择车辆类型"},on:{change:e.changeAddressRemote},model:{value:e.ruleForm.addrId,callback:function(t){e.$set(e.ruleForm,"addrId",t)},expression:"ruleForm.addrId"}},e._l(e.addressOptions,(function(e){return r("el-option",{key:e.addrId,attrs:{label:e.fullAddress,value:e.addrId}})})),1)],1),r("el-form-item",{attrs:{label:"速查码1",prop:"qsCode1"}},[r("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"速查码1"},model:{value:e.ruleForm.qsCode1,callback:function(t){e.$set(e.ruleForm,"qsCode1",t)},expression:"ruleForm.qsCode1"}})],1),r("el-form-item",{attrs:{label:"速查码2",prop:"qsCode2"}},[r("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"速查码2"},model:{value:e.ruleForm.qsCode2,callback:function(t){e.$set(e.ruleForm,"qsCode2",t)},expression:"ruleForm.qsCode2"}})],1),r("el-form-item",{attrs:{label:"服务接口URL",prop:"serviceUrl"}},[r("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"服务接口URL"},model:{value:e.ruleForm.serviceUrl,callback:function(t){e.$set(e.ruleForm,"serviceUrl",t)},expression:"ruleForm.serviceUrl"}})],1),r("el-form-item",{attrs:{label:"是否系统覆盖",prop:"systemCovered"}},[r("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.ruleForm.systemCovered,callback:function(t){e.$set(e.ruleForm,"systemCovered",t)},expression:"ruleForm.systemCovered"}})],1)],1),r("span",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{icon:"el-icon-check",type:"primary"},on:{click:function(t){return e.handleSave()}}},[e._v("保存")]),r("el-button",{attrs:{icon:"el-icon-close"},on:{click:function(t){e.model.show=!1}}},[e._v("关闭")])],1)],1)},i=[],s={name:"EditForm",props:["model"],data:function(){return{loading:!0,portTypeList:[],addressLoading:!1,addressOptions:[],ruleForm:{systemCovered:0},rules:{portCode:[{required:!0,message:"港口编码不能为空",trigger:"change"}],portCnName:[{required:!0,message:"港口中文名称不能为空",trigger:"change"}],portEnName:[{required:!0,message:"港口英文名称不能为空",trigger:"change"}],serviceUrl:[{required:!0,message:"服务接口URL不能为空",trigger:"change"}],portTypeId:[{required:!0,message:"港口类型代号不能为空",trigger:"change"}],ediCode:[{required:!0,message:"交换编码不能为空",trigger:"change"}],addrId:[{required:!0,message:"地址代号不能为空",trigger:"change"}],qsCode1:[{required:!0,message:"速查码1不能为空",trigger:"change"}],qsCode2:[{required:!0,message:"速查码2不能为空",trigger:"change"}],systemCovered:[{required:!0,message:"是否系统覆盖港口不能为空",trigger:"change"}]}}},created:function(){var e=this;this.getPortTypeList(),null!=this.model.portId?this.$api("gate/lgport/info/"+this.model.portId,{}).then((function(t){e.loading=!1,0==t.code&&(e.ruleForm=t.data)})):this.loading=!1,this.findAddressRemoteMethod("")},methods:{getPortTypeList:function(){var e=this;this.$api("gate/lgporttype/listAll",{}).then((function(t){e.portTypeList=t.data}))},findAddressRemoteMethod:function(e){var t=this;this.addressLoading=!0,this.$api("gate/comaddress/list",{S_LIKE_Full_Address:e,pageNum:1,pageSize:10}).then((function(e){t.addressLoading=!1,t.addressOptions=e.data.list}))},changeAddressRemote:function(e){this.ruleForm.addrId=e},handleSave:function(){var e=this;this.$refs["ruleForm"].validate((function(t){if(t){var r=e.$load("保存中"),a="gate/lgport/save";null!=e.model.portId&&(a="gate/lgport/update"),e.$api(a,e.ruleForm).then((function(t){r.close(),e.model.show=!1,e.$emit("close")})).catch((function(){r.close()}))}}))}}},c=s,d=r("e90a"),u=Object(d["a"])(c,n,i,!1,null,null,null),p=u.exports,m={name:"LgPort",components:{pager:l["a"],edit:p},data:function(){return{searchForm:{S_LIKE_t__PORT_Code:"",Port_Name:""},source:this.$tableSource("gate/lgport/list","data"),formEdit:{show:!1}}},created:function(){this.onSearch(1)},methods:{onSearch:function(e){this.source.setParams(this.searchForm).setPageIndex(e).load()},resetForm:function(e){this.$refs[e].resetFields(),this.onSearch(1)},handleAdd:function(){this.formEdit={show:!0}},rowEdit:function(e){this.formEdit={show:!0,portId:e.row.portId}},changeStatus:function(e){var t=this,r="启用";0==e.row.disabled&&(r="禁用"),this.$confirm("您确认要"+r+e.row.portCnName+"港口吗?","提示",{type:"warning",lockScroll:!1}).then((function(){var a=t.$load(r+"中"),o="gate/lgport/enable";0==e.row.disabled&&(o="gate/lgport/disable"),t.$api(o+"/"+e.row.portId,{}).then((function(e){t.onSearch(1),a.close()})).catch((function(){a.close()}))})).catch((function(){}))}}},h=m,g=(r("4974"),Object(d["a"])(h,a,o,!1,null,"7ec23520",null));t["default"]=g.exports}}]);