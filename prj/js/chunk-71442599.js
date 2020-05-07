(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71442599"],{"09ee":function(t,e,n){"use strict";var a=n("91fe"),r=n("407d").find,o=n("5751"),l=n("6885"),s="find",i=!0,c=l(s);s in[]&&Array(1)[s]((function(){i=!1})),a({target:"Array",proto:!0,forced:i||!c},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),o(s)},"4e54":function(t,e,n){},6808:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-form",{ref:"searchForm",staticClass:"search-form",attrs:{model:t.searchForm,inline:!0,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"业务类型",prop:"S_EQ_apt__Job_Type_ID"}},[n("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.searchForm.S_EQ_apt__Job_Type_ID,callback:function(e){t.$set(t.searchForm,"S_EQ_apt__Job_Type_ID",e)},expression:"searchForm.S_EQ_apt__Job_Type_ID"}},[n("el-option",{attrs:{value:""}},[t._v("全部")]),t._l(t.jobTypes,(function(t){return n("el-option",{key:t.jobTypeId,attrs:{label:t.jobTypeName,value:t.jobTypeId}})}))],2)],1),n("el-form-item",{attrs:{label:"车队名称",prop:"S_LIKE_tenant__Tenant_Name"}},[n("el-autocomplete",{staticClass:"inline-input",attrs:{"fetch-suggestions":t.queryTenantSearch,placeholder:"请输入车队名称查询"},model:{value:t.searchForm.S_LIKE_tenant__Tenant_Name,callback:function(e){t.$set(t.searchForm,"S_LIKE_tenant__Tenant_Name",e)},expression:"searchForm.S_LIKE_tenant__Tenant_Name"}})],1),n("el-form-item",{attrs:{label:"计划时间",prop:"estTime"}},[n("el-date-picker",{attrs:{type:"daterange",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.searchForm.estTime,callback:function(e){t.$set(t.searchForm,"estTime",e)},expression:"searchForm.estTime"}})],1),n("el-form-item",{attrs:{label:"状态",prop:"S_EQ_apt__Status"}},[n("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.searchForm.S_EQ_apt__Status,callback:function(e){t.$set(t.searchForm,"S_EQ_apt__Status",e)},expression:"searchForm.S_EQ_apt__Status"}},[n("el-option",{attrs:{value:""}},[t._v("全部")]),t._l(t.aptStatus,(function(t){return n("el-option",{key:t.status,attrs:{label:t.name,value:t.status}})}))],2)],1),n("el-form-item",[n("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(e){return t.onSearch(1)}}},[t._v("查询")]),n("el-button",{attrs:{type:"default",icon:"el-icon-refresh"},on:{click:function(e){return t.resetForm("searchForm")}}},[t._v("重置")])],1)],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.source.loading,expression:"source.loading"}],ref:"table",staticStyle:{width:"100%"},attrs:{data:t.source.data,border:"",stripe:""}},[n("el-table-column",{attrs:{type:"index",width:"60",label:"序号",index:function(t){return t+1},align:"center"}}),n("el-table-column",{attrs:{label:"车队",prop:"tenantName","header-align":"center","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(null==e.row.tenant?null:e.row.tenant.tenantName))]}}])}),n("el-table-column",{attrs:{label:"提单号",prop:"blNo","header-align":"center","min-width":"150"}}),n("el-table-column",{attrs:{label:"计划号",prop:"planNo","header-align":"center",align:"center","min-width":"100"}}),n("el-table-column",{attrs:{label:"业务类型",prop:"jobTypeName","header-align":"center",align:"center","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.jobType.jobTypeName))]}}])}),n("el-table-column",{attrs:{label:"预约箱数",prop:"aptJobs","header-align":"center",align:"center","min-width":"100"}}),n("el-table-column",{attrs:{label:"预配箱数",prop:"allocatedJobs","header-align":"center",align:"center","min-width":"100"}}),n("el-table-column",{attrs:{label:"安排车辆数",prop:"truckJobs","header-align":"center",align:"center","min-width":"110"}}),n("el-table-column",{attrs:{label:"预约日期",prop:"applyTime","header-align":"center",align:"center","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("FormatDate")(e.row.applyTime,"yy-MM-dd HH:mm")))]}}])}),n("el-table-column",{attrs:{label:"预约起始时间",prop:"estStart","header-align":"center",align:"center","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("FormatDate")(e.row.estStart,"yy-MM-dd HH:mm")))]}}])}),n("el-table-column",{attrs:{label:"预约截止时间",prop:"estEnd","header-align":"center",align:"center","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("FormatDate")(e.row.estEnd,"yy-MM-dd HH:mm")))]}}])}),n("el-table-column",{attrs:{label:"状态",prop:"status","header-align":"center",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("statusFilter")(e.row.status,t.aptStatus)))]}}])}),n("el-table-column",{attrs:{label:"操作",width:"120",align:"center",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[4!=e.row.status?n("el-button",{attrs:{type:"primary",circle:"",plain:"",icon:"el-icon-edit",title:"修改"},nativeOn:{click:function(n){return n.preventDefault(),t.rowEdit(e)}}}):t._e(),1==e.row.status?n("el-button",{attrs:{type:"danger",circle:"",plain:"",icon:"el-icon-delete",title:"作废"},nativeOn:{click:function(n){return n.preventDefault(),t.cancelRow(e)}}}):t._e(),n("el-button",{attrs:{type:"primary",circle:"",plain:"",icon:"el-icon-view",title:"详情"},nativeOn:{click:function(n){return n.preventDefault(),t.viewRow(e)}}})]}}])})],1),n("pager",{attrs:{source:t.source},on:{pagerChange:t.onSearch}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:function(e){return t.handleAdd()}}},[t._v("新增")])],1),t.formEdit.show?n("edit",{attrs:{model:t.formEdit},on:{close:t.onSearch}}):t._e(),t.formView.show?n("view-form",{attrs:{model:t.formView}}):t._e()],1)},r=[],o=(n("af82"),n("c354"),n("9a14"),n("b90e")),l=n("872c"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-dialog",{attrs:{title:null!=this.model.aptId?"修改":"新增",visible:t.model.show,width:"80%","close-on-click-modal":!1},on:{"update:visible":function(e){return t.$set(t.model,"show",e)}}},[n("el-steps",{attrs:{active:t.active,simple:""}},[n("el-step",{attrs:{title:"基本信息",icon:"el-icon-edit"}}),n("el-step",{attrs:{title:"箱任务",icon:"el-icon-box"}}),n("el-step",{attrs:{title:"车辆选择",icon:"el-icon-shopping-cart-2"}})],1),n("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"ruleForm",staticClass:"edit-form",attrs:{"label-width":"120px",model:t.ruleForm,rules:t.rules},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSave()}}},[n("div",{style:{display:0==t.active?"block":"none"}},[n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"计划号",prop:"planNo"}},[n("el-autocomplete",{staticClass:"inline-input",attrs:{"fetch-suggestions":t.querySearch,placeholder:"请输入内容","trigger-on-focus":!1},on:{select:t.handleSearch},model:{value:t.ruleForm.planNo,callback:function(e){t.$set(t.ruleForm,"planNo",e)},expression:"ruleForm.planNo"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search",disabled:null!=this.model.aptId},on:{click:t.handleSearch},slot:"append"},[t._v("获取任务")])],1)],1)],1),n("el-col",{attrs:{span:8}},[n("el-form-item",{attrs:{label:"提单号",prop:"blNo"}},[n("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"提单号",readonly:""},model:{value:t.ruleForm.plan.blNo,callback:function(e){t.$set(t.ruleForm.plan,"blNo",e)},expression:"ruleForm.plan.blNo"}})],1)],1)],1),n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"业务类型",prop:"jobTypeId"}},[t._v(" "+t._s(null==t.ruleForm.plan.jobType?null:t.ruleForm.plan.jobType.jobTypeName)+" ")])],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"计划提箱时间",prop:"estStart"}},[t._v(" "+t._s(t._f("FormatDate")(t.ruleForm.plan.estStart,"yy-MM-dd HH:mm"))+" 至 "+t._s(t._f("FormatDate")(t.ruleForm.plan.estEnd,"yy-MM-dd HH:mm"))+" ")])],1)],1),n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"预约时间",prop:"estTime"}},[n("el-time-picker",{attrs:{"is-range":"","value-format":"HH:mm:ss","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{blur:t.handleEstTime},model:{value:t.ruleForm.estTime,callback:function(e){t.$set(t.ruleForm,"estTime",e)},expression:"ruleForm.estTime"}})],1)],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"车队",prop:"tenantId"}},[n("el-select",{attrs:{clearable:"",placeholder:"请选择",filterable:"","filter-method":t.tenantFilter},on:{change:t.handleTenant},model:{value:t.ruleForm.tenantId,callback:function(e){t.$set(t.ruleForm,"tenantId",e)},expression:"ruleForm.tenantId"}},t._l(t.queryTenants,(function(t){return n("el-option",{key:t.tenantId,attrs:{label:t.tenantName,value:t.tenantId}})})),1)],1)],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:""}},[null!=t.countJob?n("span",[t._v("在时间段内有 "),n("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.countJob))]),t._v(" 任务待完成")]):t._e()])],1)],1)],1),n("div",{style:{display:1==t.active?"block":"none"}},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:16}},[n("el-row",[n("el-col",{attrs:{span:10}},[n("el-form-item",{attrs:{label:"","label-width":"0"}},[n("el-radio-group",{on:{change:function(e){return t.handleRadioCtnr(e)}},model:{value:t.ctnrRadio,callback:function(e){t.ctnrRadio=e},expression:"ctnrRadio"}},[n("el-radio",{attrs:{disabled:t.radioCtnr,label:1}},[t._v("计划箱数")]),n("el-radio",{attrs:{disabled:t.radioCtnrNo,label:2}},[t._v("限定箱号")])],1)],1)],1),2==t.isCtnr?n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"提箱尺寸",prop:"ctnsizeId"}},[n("el-select",{attrs:{clearable:"",placeholder:"请选择"},on:{change:t.handleSizeChange},model:{value:t.ruleForm.ctnsizeId,callback:function(e){t.$set(t.ruleForm,"ctnsizeId",e)},expression:"ruleForm.ctnsizeId"}},t._l(t.ctnsizes,(function(t){return n("el-option",{key:t.ctnsizeId,attrs:{label:t.sizeName,value:t.ctnsizeId}})})),1)],1)],1):t._e(),1==t.isCtnr?n("el-col",{attrs:{span:24}},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.ctnrs.loading,expression:"ctnrs.loading"}],ref:"ctnrTable",staticClass:"edit-table",staticStyle:{width:"100%"},attrs:{data:t.ctnrs.data,border:"",stripe:"","highlight-current-row":"","cell-style":t.cellStyle},on:{"current-change":t.handleCtnrChange}},[n("el-table-column",{attrs:{type:"index",width:"60",label:"序号",index:function(t){return t+1},align:"center"}}),n("el-table-column",{attrs:{label:"箱代",prop:"operatorName","header-align":"center"}}),n("el-table-column",{attrs:{label:"箱型",prop:"typeCode","header-align":"center",align:"center"}}),n("el-table-column",{attrs:{label:"计划箱数",prop:"planLimit","header-align":"center",align:"center"}}),n("el-table-column",{attrs:{label:"可预约数",prop:"noUseJobs","header-align":"center",align:"center"}}),n("el-table-column",{attrs:{label:"预约数",prop:"aptJobs","header-align":"center",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-form-item",{attrs:{"label-width":"0"}},[n("el-input",{staticStyle:{width:"100%"},on:{input:function(n){return t.handleAptJobsChange(n,e.row)}},model:{value:e.row.aptJobs,callback:function(n){t.$set(e.row,"aptJobs",n)},expression:"scope.row.aptJobs"}})],1)]}}],null,!1,307901394)})],1)],1):t._e(),2==t.isCtnr?n("el-col",{attrs:{span:24}},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.ctnrnos.loading,expression:"ctnrnos.loading"}],ref:"ctnrnoTable",staticStyle:{width:"100%"},attrs:{data:t.ctnrnos.data,border:"",stripe:""},on:{"selection-change":t.handleCtnrNoChange}},[n("el-table-column",{attrs:{type:"selection",width:"50",align:"center"}}),n("el-table-column",{attrs:{type:"index",width:"60",label:"序号",index:function(t){return t+1},align:"center"}}),n("el-table-column",{attrs:{label:"箱代",prop:"operatorName","header-align":"center"}}),n("el-table-column",{attrs:{label:"箱型",prop:"typeCode","header-align":"center",align:"center"}}),n("el-table-column",{attrs:{label:"箱号",prop:"ctnrNo","header-align":"center"}})],1)],1):t._e()],1)],1),n("el-col",{attrs:{span:8}},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("票号选择")]),n("el-row",[n("el-col",{attrs:{span:24}},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.aptJobCodes.loading,expression:"aptJobCodes.loading"}],ref:"jobcodeTable",staticStyle:{width:"100%"},attrs:{data:t.aptJobCodes.data,border:"",stripe:""},on:{"selection-change":t.handleJobCodeChange}},[n("el-table-column",{attrs:{type:"selection",width:"50",align:"center"}}),n("el-table-column",{attrs:{type:"index",width:"60",label:"序号",index:function(t){return t+1},align:"center"}}),n("el-table-column",{attrs:{label:"待选票号",prop:"jobCode","header-align":"center",align:"center"}})],1)],1)],1)],1)],1)],1),n("div",{style:{display:2==t.active?"block":"none"}},[n("el-row",[n("el-col",{attrs:{span:24}},[n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{span:7,offset:12}},[n("el-form-item",{attrs:{label:"车牌"}},[n("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"车牌号"},model:{value:t.truckNo,callback:function(e){t.truckNo=e},expression:"truckNo"}})],1)],1),n("el-col",{attrs:{span:2}},[n("el-button",{attrs:{icon:"el-icon-plus",type:"primary"},on:{click:t.handleAdd}},[t._v("新增")])],1)],1)],1),n("el-col",{staticStyle:{"text-align":"center"},attrs:{span:24}},[n("el-transfer",{staticStyle:{"text-align":"left",display:"inline-block"},attrs:{data:t.trucks.data,titles:["待选车辆","已选车辆"]},model:{value:t.trucks.value,callback:function(e){t.$set(t.trucks,"value",e)},expression:"trucks.value"}})],1)],1)],1)]),n("span",{attrs:{slot:"footer"},slot:"footer"},[n("el-button-group",{staticStyle:{"margin-right":"15px"}},[0!=t.active?n("el-button",{attrs:{type:"default",icon:"el-icon-arrow-left"},nativeOn:{click:function(e){return t.prve(e)}}},[t._v("上一步")]):t._e(),2!=t.active?n("el-button",{attrs:{type:"default"},nativeOn:{click:function(e){return t.next(e)}}},[t._v("下一步"),n("i",{staticClass:"el-icon-arrow-right el-icon--right"})]):t._e()],1),0!=t.active?n("el-button",{attrs:{icon:"el-icon-check",type:"primary"},on:{click:function(e){return t.handleSave()}}},[t._v("保存")]):t._e(),n("el-button",{attrs:{icon:"el-icon-close"},on:{click:function(e){t.model.show=!1}}},[t._v("关闭")])],1)],1)],1)},i=[],c=(n("86dd"),n("09ee"),n("4045"),n("6bf2")),u=n.n(c),d={name:"EditForm",props:["model"],mixins:[l["a"]],data:function(){return{active:0,loading:!0,truckNo:"",tenants:[],queryTenants:[],ctnsizes:[],ctnrRadio:1,radioCtnr:!1,radioCtnrNo:!0,isCtnr:1,countJob:null,ruleForm:{plan:{estStart:"",estEnd:"",jobType:{}},estDate:"",estTime:[,]},ctnrs:{loading:!0,data:[],value:null},ctnrnos:{loading:!0,data:[],value:[]},planCtnrnos:[],aptJobCodes:{loading:!0,data:[],value:[]},jobcodes:[],trucks:{value:[],data:[]},rules:{tenantId:[{required:!0,message:"租户代号不能为空",trigger:"change"}],planNo:[{required:!0,message:"计划号不能为空",trigger:"change"}],estTime:[{required:!0,message:"预约时间不能为空",trigger:"change"}],ctnsizeId:[{required:!0,message:"箱尺码不能为空",trigger:"change"}]}}},created:function(){var t=this;this.getTenants({}).then((function(){t.tenantFilter("")})),null!=this.model.aptId?this.$api("gate/pomsapt/info/"+this.model.aptId,{}).then((function(e){if(t.loading=!1,t.ctnrs.loading=!1,t.ctnrnos.loading=!1,t.aptJobCodes.loading=!1,0==e.code){t.ruleForm=e.data,t.ruleForm.plan={planId:e.data.planId,planJobs:e.data.planJobs,blNo:e.data.blNo,jobTypeId:e.data.jobTypeId,estStart:e.data.planEstStart,estEnd:e.data.planEstEnd,jobType:e.data.jobType},t.ruleForm.estTime=[u()(e.data.estStart).format("HH:mm:ss"),u()(e.data.estEnd).format("HH:mm:ss")],t.ruleForm.estDate=u()(e.data.estStart).format("YYYY-MM-DD"),t.ctnrs.data=t.ruleForm.planCtnrs,t.ctnrs.data.forEach((function(e){e.isSelect&&(t.ctnrs.value=e,t.$refs.ctnrTable.setCurrentRow(e))})),t.planCtnrnos=t.ruleForm.planCtnrnos,t.ctnrnos.data=t.planCtnrnos.filter((function(e){return e.ctnsizeId==t.ruleForm.ctnsizeId}));var n=[];t.ctnrnos.data.forEach((function(e){e.isSelect&&t.$nextTick((function(){t.$refs.ctnrnoTable.toggleRowSelection(e)}));var a=n.filter((function(t){return t.ctnsizeId==e.ctnsizeId}));0==a.length&&n.push({ctnsizeId:e.ctnsizeId,sizeCode:e.sizeCode,sizeName:e.sizeName})})),t.ctnsizes=n,t.jobcodes=t.ruleForm.pomsJobcodes,t.aptJobCodes.data=t.jobcodes.filter((function(e){return null==e.ctnsizeId||e.ctnsizeId==t.ruleForm.ctnsizeId})),t.aptJobCodes.data.forEach((function(e){e.aptId==t.ruleForm.aptId&&t.$nextTick((function(){t.$refs.jobcodeTable.toggleRowSelection(e)}))})),t.ruleForm.aptTrucks.forEach((function(e){t.trucks.data.push({key:e.truckNo,label:e.truckNo}),t.trucks.value.push(e.truckNo)})),null!=t.ctnrs.data&&t.ctnrs.data.length>0?t.radioCtnr=!1:t.radioCtnr=!0,null!=t.ctnrnos.data&&t.ctnrnos.data.length>0?t.radioCtnrNo=!1:t.radioCtnrNo=!0,t.ruleForm.lineNo?t.radioCtnr||(t.ctnrRadio=1,t.handleRadioCtnr(1)):t.radioCtnrNo||(t.ctnrRadio=2,t.handleRadioCtnr(2)),t.handleTenant()}else console.log(e.msg)})):(this.loading=!1,this.ctnrs.loading=!1,this.ctnrnos.loading=!1,this.aptJobCodes.loading=!1)},mounted:function(){this.keyupEvent()},methods:{keyupEvent:function(){var t=this;document.onkeydown=function(e){var n=window.event.keyCode;37==n?t.prve():39==n&&t.next()}},prve:function(){0!=this.active&&(this.active=this.active-1)},next:function(){var t=this;this.$refs["ruleForm"].validate((function(e){e&&2!=t.active&&(t.active=t.active+1)}))},querySearch:function(t,e){var n={planNo:t};this.$api("gate/pomsplan/planno/list",n).then((function(t){if(0==t.code){var n=[];t.data.forEach((function(t){n.push({value:t})})),e(n)}}))},handleSearch:function(){var t=this,e=this.ruleForm.planNo;this.ctnrs.value=null,this.ctnrnos.value=[],this.aptJobCodes.value=[],this.trucks.value=[],e?this.$api("gate/pomsplan/info/planno/"+e,{}).then((function(e){if(0==e.code){if(t.ruleForm.plan=e.data,t.ruleForm.estTime=[u()(new Date).format("HH:mm:ss"),u()(new Date).add(1,"hours").format("HH:mm:ss")],t.ruleForm.estDate=u()(new Date).format("YYYY-MM-DD"),t.ctnrs.data=t.ruleForm.plan.pomsPlanCtnrs,t.ctnrnos.data=t.ruleForm.plan.pomsPlanCtnrnos,t.planCtnrnos=t.ruleForm.plan.pomsPlanCtnrnos,t.aptJobCodes.data=t.ruleForm.plan.pomsJobCodes,t.jobcodes=t.ruleForm.plan.pomsJobCodes,null!=t.ctnrs.data&&t.ctnrs.data.length>0?(t.radioCtnr=!1,t.ctnrRadio=1,t.handleRadioCtnr(1)):t.radioCtnr=!0,null!=t.ctnrnos.data&&t.ctnrnos.data.length>0){t.radioCtnrNo=!1,t.radioCtnr&&(t.ctnrRadio=2,t.handleRadioCtnr(2));var n=[];t.planCtnrnos.forEach((function(t){var e=n.filter((function(e){return e.ctnsizeId==t.ctnsizeId}));0==e.length&&n.push({ctnsizeId:t.ctnsizeId,sizeCode:t.sizeCode,sizeName:t.sizeName})})),t.ruleForm.ctnsizeId=n[0].ctnsizeId,t.ctnsizes=n}else t.radioCtnrNo=!0;var a={S_LE_EST_Start:t.ruleForm.estDate+" "+t.ruleForm.estTime[0],S_GE_EST_End:t.ruleForm.estDate+" "+t.ruleForm.estTime[1]};t.$api("gate/pomsapt/count",a).then((function(e){0==e.code&&(t.countJob=e.data)}))}})).catch((function(e){t.ruleForm.planNo=""})):this.$refs["ruleForm"].validateField("planNo")},handleEstTime:function(){var t=this,e={S_LE_EST_Start:this.ruleForm.estDate+" "+this.ruleForm.estTime[0],S_GE_EST_End:this.ruleForm.estDate+" "+this.ruleForm.estTime[1]};this.$api("gate/pomsapt/count",e).then((function(e){0==e.code&&(t.countJob=e.data)}))},handleTenant:function(){var t=this,e=this.ruleForm.tenantId;e?this.$api("gate/pomstenanttruck/findAll",{S_EQ_tt__Tenant_ID:e,S_EQ_tt__Avail:1,sidx:"tt.Display_Order",order:"asc"}).then((function(e){0==e.code&&e.data.forEach((function(e,n){var a=t.trucks.data.find((function(t){return t.key==e.truck.truckNo}));a||t.trucks.data.push({key:e.truck.truckNo,label:e.truck.truckNo})}))})):this.$error("请先选择车队。"),this.tenantFilter("")},tenantFilter:function(t){t=t.toLowerCase(),this.queryTenants=this.tenants.filter((function(e){return null!=e.tenantCode&&e.tenantCode.toLowerCase().indexOf(t)>-1||e.tenantName.toLowerCase().indexOf(t)>-1||null!=e.qsCode1&&e.qsCode1.toLowerCase().indexOf(t)>-1||null!=e.qsCode2&&e.qsCode2.toLowerCase().indexOf(t)>-1}))},handleRadioCtnr:function(t){var e=this;this.isCtnr=t,1==t?this.$nextTick((function(){e.$refs.ctnrTable.setCurrentRow(e.ctnrs.value)})):2==t&&this.ctnrnos.value.forEach((function(t){e.$nextTick((function(){e.$refs.ctnrnoTable.toggleRowSelection(t)}))}))},handleAdd:function(){var t=this;if(this.truckNo){var e=this.trucks.data.filter((function(e){return e.key==t.truckNo}));0==e.length&&(this.trucks.data.push({key:this.truckNo,label:this.truckNo}),this.trucks.value.push(this.truckNo))}},handleSizeChange:function(t){this.ctnrnos.data=this.planCtnrnos.filter((function(e){return null==e.ctnsizeId||e.ctnsizeId==t})),this.ctnrnos.value=[]},handleCtnrChange:function(t){t&&(null!=this.ruleForm.lineNo&&this.ruleForm.lineNo==t.lineNo&&(t.aptJobs=this.ruleForm.aptJobs),null==t.aptJobs&&(t.aptJobs=t.noUseJobs),this.ctnrs.value=t,this.jobCodeSelected(t.ctnsizeId,t.aptJobs),this.ctnrs.data.forEach((function(e){e.lineNo!=t.lineNo&&(e.aptJobs=null)})))},handleAptJobsChange:function(t,e){t>e.noUseJobs?(this.$message({message:"预约数不能大于可预约数。",type:"warning"}),e.aptJobs=e.noUseJobs):e.aptJobs=t,this.jobCodeSelected(e.ctnsizeId,e.aptJobs),this.$forceUpdate()},handleCtnrNoChange:function(t){this.ctnrnos.value=t,this.jobCodeSelected(t.ctnsizeId,this.ctnrnos.value.length)},jobCodeSelected:function(t,e){var n=this;this.aptJobCodes.data=this.jobcodes.filter((function(e){return null==e.ctnsizeId||e.ctnsizeId==t})),this.$refs.jobcodeTable.clearSelection(),this.aptJobCodes.data.forEach((function(t,a){a<e&&n.$nextTick((function(){n.$refs.jobcodeTable.toggleRowSelection(t,!0)}))}))},handleJobCodeChange:function(t){this.aptJobCodes.value=t},handleSave:function(){var t=this;this.$refs["ruleForm"].validate((function(e){if(e){var n=new Object;if(n.aptId=t.model.aptId,n.planId=t.ruleForm.plan.planId,n.planJobs=t.ruleForm.plan.planJobs,n.jobTypeId=t.ruleForm.plan.jobTypeId,n.tenantId=t.ruleForm.tenantId,n.ctnsizeId=t.ruleForm.ctnsizeId,n.isAutoApt=null==t.ruleForm.isAutoApt?0:t.ruleForm.isAutoApt,null!=t.ruleForm.estTime&&t.ruleForm.estTime.length>0&&(n.estStartStr=t.ruleForm.estDate+" "+t.ruleForm.estTime[0],n.estEndStr=t.ruleForm.estDate+" "+t.ruleForm.estTime[1]),1==t.ctnrRadio){if(null==t.ctnrs.value)return void t.$error("请选择要预约的箱型箱数。");n.lineNo=t.ctnrs.value.lineNo,n.aptJobs=t.ctnrs.value.aptJobs,n.ctnsizeId=t.ctnrs.value.ctnsizeId}else if(2==t.ctnrRadio){if(0==t.ctnrnos.value.length)return void t.$error("请选择要预约的箱号。");n.aptJobs=t.ctnrnos.value.length,n.aptCtnrs=t.ctnrnos.value}if(0==t.aptJobCodes.value.length)return void t.$error("请选择要票号。");if(n.aptJobcodes=t.aptJobCodes.value,t.trucks.value.length>0){var a=[];t.trucks.value.forEach((function(t){a.push({truckNo:t})})),n.aptTrucks=a}var r=t.$load("保存中"),o="gate/pomsapt/save";null!=t.model.aptId&&(o="gate/pomsapt/update"),t.$api(o,n).then((function(e){r.close(),null!=t.model.aptId?(t.model.show=!1,t.$emit("close")):t.handleSearch()})).catch((function(){r.close()}))}}))},cellStyle:function(t){var e=t.row;t.column,t.rowIndex,t.columnIndex;if(null!=this.ctnrs.value&&this.ctnrs.value.lineNo==e.lineNo)return"background-color: #1fb562; color: #fff;"}}},p=d,m=n("e90a"),f=Object(m["a"])(p,s,i,!1,null,null,null),h=f.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{title:"查看详情",visible:t.model.show,width:"80%","close-on-click-modal":!1},on:{"update:visible":function(e){return t.$set(t.model,"show",e)}}},[n("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"ruleForm",attrs:{"label-width":"120px",model:t.ruleForm}},[n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"计划号"}},[t._v(t._s(t.ruleForm.planNo))])],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"提单号"}},[t._v(t._s(t.ruleForm.blNo))])],1)],1),n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"业务类型"}},[t._v(t._s(null==t.ruleForm.jobType?null:t.ruleForm.jobType.jobTypeName))])],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"车队"}},[t._v(t._s(null==t.ruleForm.tenant?null:t.ruleForm.tenant.tenantName))])],1)],1),n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"预约提箱时间"}},[t._v(" "+t._s(t._f("FormatDate")(t.ruleForm.estStart,"yy-MM-dd HH:mm"))+" 至 "+t._s(t._f("FormatDate")(t.ruleForm.estEnd,"yy-MM-dd HH:mm"))+" ")])],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"箱数"}},[t._v(t._s(t.ruleForm.aptJobs))])],1)],1),n("el-row",[n("el-col",{attrs:{span:24}},[n("el-form-item",{attrs:{label:"安排车辆"}},t._l(t.ruleForm.aptTrucks,(function(e){return n("span",{key:e.truckNo,staticStyle:{"padding-right":"10px"}},[t._v(t._s(e.truckNo))])})),0)],1)],1),n("el-row",[n("el-col",{attrs:{span:24}},[n("el-table",{ref:"jobTable",staticStyle:{width:"100%"},attrs:{data:t.ruleForm.pomsJobs,border:"",stripe:""}},[n("el-table-column",{attrs:{type:"index",width:"60",label:"序号",index:function(t){return t+1},align:"center"}}),n("el-table-column",{attrs:{label:"箱号",prop:"ctnrNo","header-align":"center"}}),n("el-table-column",{attrs:{label:"箱型",prop:"ctnIsoType","header-align":"center",align:"center"}}),n("el-table-column",{attrs:{label:"车牌",prop:"truckNo","header-align":"center",align:"center"}}),n("el-table-column",{attrs:{label:"作业时间",prop:"createdTime","header-align":"center",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("FormatDate")(e.row.createdTime,"yy-MM-dd HH:mm")))]}}])})],1)],1)],1)],1),n("span",{attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{icon:"el-icon-close"},on:{click:function(e){t.model.show=!1}}},[t._v("关闭")])],1)],1)},g=[],v={name:"ViewForm",props:["model"],data:function(){return{loading:!0,ruleForm:{aptTrucks:[]},jobs:[]}},created:function(){var t=this;null!=this.model.aptId?this.$api("gate/pomsapt/info/"+this.model.aptId,{}).then((function(e){t.loading=!1,0==e.code&&(t.ruleForm=e.data)})):this.loading=!1},methods:{}},_=v,y=Object(m["a"])(_,b,g,!1,null,null,null),w=y.exports,S={name:"PomsApt",components:{pager:o["a"],edit:h,viewForm:w},mixins:[l["a"]],data:function(){return{searchForm:{S_EQ_apt__Job_Type_ID:null,S_EQ_apt__Status:1,S_LIKE_tenant__Tenant_Name:"",estTime:[],sidx:"apt.EST_Start",order:"ASC"},source:this.$tableSource("gate/pomsapt/list","data"),jobTypes:[],aptStatus:[],formEdit:{show:!1},formView:{show:!1}}},created:function(){this.onSearch(1),this.getJobTypes(),this.getAptStatus()},methods:{queryTenantSearch:function(t,e){this.getTenants({searchName:t}).then((function(t){if(0==t.code){var n=[];t.data.forEach((function(t){n.push({value:t.tenantName})})),e(n)}}))},onSearch:function(t){var e=Object.assign({},this.searchForm);null!=e.estTime&&e.estTime.length>0&&(e.S_GE_apt__EST_Start=e.estTime[0],e.S_LE_apt__EST_End=e.estTime[1]),this.source.setParams(e).load(t)},resetForm:function(t){this.$refs[t].resetFields(),this.onSearch(1)},handleAdd:function(){this.formEdit={show:!0}},rowEdit:function(t){this.formEdit={show:!0,aptId:t.row.aptId}},handleAuto:function(){var t=this,e=this.$load("自动预约中");this.$api("gate/pomsapt/send",{}).then((function(n){t.onSearch(1),e.close()})).catch((function(){e.close()}))},cancelRow:function(t){var e=this;this.$confirm("您确认要作废选中对象吗?","提示",{type:"warning",lockScroll:!1}).then((function(){var n=e.$load("作废中");e.$api("gate/pomsapt/cancel/"+t.row.aptId,{}).then((function(t){e.onSearch(1),n.close()})).catch((function(){n.close()}))})).catch((function(){}))},viewRow:function(t){this.formView={show:!0,aptId:t.row.aptId}}},filters:{statusFilter:function(t,e){var n="";return e.forEach((function(e){if(e.status==t)return n=e.name,!1})),n}}},T=S,k=Object(m["a"])(T,a,r,!1,null,null,null);e["default"]=k.exports},"872c":function(t,e,n){"use strict";n("3a20"),n("7267");var a=n("c451"),r=(n("6bf2"),n("5013"),{});e["a"]={data:function(){return{users:[],tenants:[],truckTypes:[],jobTypes:[],planStatus:[],aptStatus:[],ctnsizes:[],dgTypeList:[],zoneList:[],trafficDirs:[],loadStatusList:[],exTypes:[],entrys:[],releaseStatusList:[],trucks:[]}},methods:{deepMerge:function(t,e){var n;for(n in e)t[n]=t[n]&&"[object Object]"===t[n].toString()?this.deepMerge(t[n],e[n]):t[n]=e[n];return t},getUsers:function(t){var e=this;return new Promise((function(n,r){e.$api("/user/list",Object(a["a"])({},t)).then((function(t){e.users=t.users.list,n(t)})).catch((function(){r("api[getUsers]error")}))}))},getTenants:function(t){var e=this;return new Promise((function(n,a){var r=Object.assign({},t);e.$api("/gate/pomstenantcode/findAll",r).then((function(t){e.tenants=t.data,n(t)})).catch((function(){a("api[getTenants]error")}))}))},handleUserRemote:function(t){var e={realName:t};this.getUsers(e)},handleTenantRemote:function(t){var e={searchName:t};this.getTenants(e)},rowClassName:function(t){var e=t.row;t.rowIndex;return-1===e.passedFlag?"no-passed":1===e.passedFlag?"is-passed":""},getTruckTypes:function(){var t=this;return new Promise((function(e,n){t.$api("gate/lgtrucktype/findList",{}).then((function(n){t.truckTypes=n.data,e(n)})).catch((function(){n("api[getTruckTypes]error")}))}))},getJobTypes:function(){var t=this;return new Promise((function(e,n){t.$api("gate/pomsjobtype/findList",{}).then((function(n){t.jobTypes=n.data,e(n)})).catch((function(){n("api[getJobTypes]error")}))}))},getPlanStatus:function(){var t=this;return new Promise((function(e,n){t.$api("gate/pomsplan/status/list",{}).then((function(n){t.planStatus=n.data,e(n)})).catch((function(){n("api[getPlanStatus]error")}))}))},getAptStatus:function(){var t=this;return new Promise((function(e,n){t.$api("gate/pomsapt/status/list",{}).then((function(n){t.aptStatus=n.data,e(n)})).catch((function(){n("api[getJobTypes]error")}))}))},getCtnsizes:function(){var t=this;return new Promise((function(e,n){t.$api("gate/ctnsize/findAll",{}).then((function(n){t.ctnsizes=n.data,e(n)})).catch((function(){n("api[getCtnsizes]error")}))}))},getDgTreeList:function(){var t=this;return new Promise((function(e,n){t.$api("gate/lgdangertype/findTreeList",{}).then((function(n){t.dgTypeList=n.data,e(n)})).catch((function(){n("api[getDgTreeList]error")}))}))},getZoneTreeList:function(){var t=this;return new Promise((function(e,n){t.$api("gate/gbzone/findTreeList",{}).then((function(n){t.zoneList=n.data,e(n)})).catch((function(){n("api[getZoneTreeList]error")}))}))},getTrafficDirs:function(){var t=this;return new Promise((function(e,n){t.$api("gate/gatetraffic/trafficdir/findList",{}).then((function(n){t.trafficDirs=n.data,e(n)})).catch((function(){n("api[getTrafficDirs]error")}))}))},getLoadStatusList:function(){var t=this;return new Promise((function(e,n){t.$api("gate/gatetraffic/loadstatus/findList",{}).then((function(n){t.loadStatusList=n.data,e(n)})).catch((function(){n("api[getLoadStatusList]error")}))}))},getExTypes:function(){var t=this;return new Promise((function(e,n){t.$api("gate/gateextype/findAll",{}).then((function(n){t.exTypes=n.data,e(n)})).catch((function(){n("api[getExTypes]error")}))}))},getEntrys:function(){var t=this;return new Promise((function(e,n){t.$api("gate/gateentry/findAll",{}).then((function(n){t.entrys=n.data,e(n)})).catch((function(){n("api[getEntrys]error")}))}))},getReleaseStatusList:function(){var t=this;return new Promise((function(e,n){t.$api("gate/gatetraffic/releasestatus/findList",{}).then((function(n){t.releaseStatusList=n.data,e(n)})).catch((function(){n("api[getReleaseStatusList]error")}))}))},getTenantTrucks:function(t){var e=this;return new Promise((function(n,a){var r=Object.assign({},t);e.$api("/gate/pomstenanttruck/findAll",r).then((function(t){e.trucks=t.data,n(t)})).catch((function(){a("api[getTenantTrucks]error")}))}))}},filters:Object(a["a"])({},r)}},9571:function(t,e,n){"use strict";var a=n("4e54"),r=n.n(a);r.a},b90e:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pager-wrap",staticStyle:{"text-align":"right"}},[n("div",{staticClass:"slot"},[t._t("default")],2),n("el-pagination",t._b({staticClass:"pager",attrs:{background:t.background,"current-page":t.source.pageIndex,"page-size":t.source.pageSize,"pager-count":5,layout:t.layout,"page-sizes":t.pageSizes,total:t.source.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},r=[],o=n("a534"),l={name:"pager",props:{source:{required:!0,type:o["a"]},pageSizes:{type:Array,default:function(){return[10,20,50,100]}},layout:{type:String,default:"slot, prev, pager, next, total, sizes, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},methods:{handleSizeChange:function(t){this.source.setPageSize(t),this.$emit("pagerChange",1)},handleCurrentChange:function(t){this.source.setPageIndex(t),this.$emit("pagerChange",t)}}},s=l,i=(n("9571"),n("e90a")),c=Object(i["a"])(s,a,r,!1,null,null,null);e["a"]=c.exports}}]);