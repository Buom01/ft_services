(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{Wkk1:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("q1tI"),a=n.n(r),o=n("kDLi"),i=n("Csm0"),u=n("R7n3");function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,d(t).call(this,e))).onChange=function(e){var t=n.props.datasources.find((function(t){return t.name===e.value}));t&&n.props.onChange(t)},n}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.datasources,n=e.current,r=e.autoFocus,c=e.hideTextValue,l=e.onBlur,s=e.openMenuOnFocus,d=e.showLoading,f=e.placeholder,p=e.invalid,m=t.map((function(e){return{value:e.name,label:e.name,imgUrl:e.meta.info.logos.small,meta:e.meta}})),b=n&&{label:n.name.substr(0,37),value:n.name,imgUrl:n.meta.info.logos.small,loading:d,hideText:c,meta:n.meta};return a.a.createElement("div",{"aria-label":i.selectors.components.DataSourcePicker.container},a.a.createElement(o.Select,{className:"ds-picker select-container",isMulti:!1,isClearable:!1,backspaceRemovesValue:!1,onChange:this.onChange,options:m,autoFocus:r,onBlur:l,openMenuOnFocus:s,maxMenuHeight:500,menuPlacement:"bottom",placeholder:f,noOptionsMessage:"No datasources found",value:b,invalid:p,getOptionLabel:function(e){return Object(u.b)(e.meta.signature)&&e!==b?a.a.createElement(o.HorizontalGroup,{align:"center",justify:"space-between"},a.a.createElement("span",null,e.label)," ",a.a.createElement(u.a,{status:e.meta.signature})):e.label||""}}))}}])&&l(n.prototype,r),c&&l(n,c),t}(r.PureComponent);p.defaultProps={autoFocus:!1,openMenuOnFocus:!1,placeholder:"Select datasource"},t.b=p},gzYa:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("kDDq"),i=n("Obii"),u=n("kDLi"),c=n("ZGyg"),l=n("hBny"),s=n("/MKj"),d=n("fL47"),f=n("Wkk1"),p=n("d4Ek"),m=n("t8hP"),b=function(e){try{return JSON.parse(e),!0}catch(e){return"Not valid JSON"}},h=function(e){var t=/(^\d+$)|dashboards\/(\d+)/.exec(e);return!(!t||!t[1]&&!t[2])||"Could not find a valid Grafana.com id"},y=function(e){return Object(m.getBackendSrv)().get("/api/dashboards/uid/".concat(e)).then((function(e){return"Dashboard named '".concat(null==e?void 0:e.dashboard.title,"' in folder '").concat(null==e?void 0:e.meta.folderTitle,"' has the same uid")})).catch((function(e){return e.isHandled=!0,!0}))};function v(e,t,n,r,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,a)}function g(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){v(o,r,a,i,u,"next",e)}function u(e){v(o,r,a,i,u,"throw",e)}i(void 0)}))}}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var E=function(e){var t,n,o,i=e.register,c=e.errors,l=e.control,s=e.getValues,m=e.uidReset,b=e.inputs,h=e.initialFolderId,v=e.onUidReset,E=e.onCancel,j=e.onSubmit,S=O(Object(r.useState)(!1),2),D=S[0],F=S[1];return Object(r.useEffect)((function(){D&&(c.title||c.uid)&&j(s({nest:!0}),{})}),[c]),a.a.createElement(a.a.Fragment,null,a.a.createElement(u.Legend,null,"Options"),a.a.createElement(u.Field,{label:"Name",invalid:!!c.title,error:c.title&&c.title.message},a.a.createElement(u.Input,{name:"title",type:"text",ref:i({required:"Name is required",validate:(o=g(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n=t,r=s().folder.id,p.a.validateNewDashboardName(r,n).then((function(){return!0})).catch((function(e){if("EXISTING"===e.type)return e.message}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}var n,r}),e)}))),function(e){return o.apply(this,arguments)})})})),a.a.createElement(u.Field,{label:"Folder"},a.a.createElement(u.InputControl,{as:d.a,name:"folder",useNewForms:!0,enableCreateNew:!0,initialFolderId:h,control:l})),a.a.createElement(u.Field,{label:"Unique identifier (uid)",description:"The unique identifier (uid) of a dashboard can be used for uniquely identify a dashboard between multiple Grafana installs. The uid allows having consistent URL’s for accessing dashboards so changing the title of a dashboard will not break any bookmarked links to that dashboard.",invalid:!!c.uid,error:c.uid&&c.uid.message},a.a.createElement(a.a.Fragment,null,m?a.a.createElement(u.Input,{name:"uid",ref:i({required:!0,validate:(t=g(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})})}):a.a.createElement(u.Input,{name:"uid",disabled:!0,ref:i({validate:(n=g(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(e){return n.apply(this,arguments)})}),addonAfter:!m&&a.a.createElement(u.Button,{onClick:v},"Change uid")}))),b.dataSources&&b.dataSources.map((function(e,t){var n="dataSources[".concat(t,"]");return a.a.createElement(u.Field,{label:e.label,key:n,invalid:c.dataSources&&!!c.dataSources[t],error:c.dataSources&&c.dataSources[t]&&"A data source is required"},a.a.createElement(u.InputControl,{as:f.b,name:"".concat(n),datasources:e.options,control:l,placeholder:e.info,rules:{required:!0}}))})),b.constants&&b.constants.map((function(e,t){var n="constants[".concat(t,"]");return a.a.createElement(u.Field,{label:e.label,error:c.constants&&c.constants[t]&&"".concat(e.label," needs a value"),invalid:c.constants&&!!c.constants[t],key:n},a.a.createElement(u.Input,{ref:i({required:!0}),name:"".concat(n),defaultValue:e.value}))})),a.a.createElement(u.HorizontalGroup,null,a.a.createElement(u.Button,{type:"submit",variant:w(c),onClick:function(){F(!0)}},function(e){return e&&(e.title||e.uid)?"Import (Overwrite)":"Import"}(c)),a.a.createElement(u.Button,{type:"reset",variant:"secondary",onClick:E},"Cancel")))};function w(e){return e&&(e.title||e.uid)?"destructive":"primary"}var j=n("5LyR"),S=n("nFP0");function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var R=function(e){function t(){var e,n;I(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=N(this,(e=x(t)).call.apply(e,[this].concat(a)))).state={uidReset:!1},n.onSubmit=function(e){n.props.importDashboard(e)},n.onCancel=function(){n.props.clearLoadedDashboard()},n.onUidReset=function(){n.setState({uidReset:!0})},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this,t=this.props,n=t.dashboard,r=t.inputs,o=t.meta,c=t.source,l=t.folder,s=this.state.uidReset;return a.a.createElement(a.a.Fragment,null,c===S.a.Gcom&&a.a.createElement("div",{style:{marginBottom:"24px"}},a.a.createElement("div",null,a.a.createElement(u.Legend,null,"Importing Dashboard from"," ",a.a.createElement("a",{href:"https://grafana.com/dashboards/".concat(n.gnetId),className:"external-link",target:"_blank"},"Grafana.com"))),a.a.createElement("table",{className:"filter-table form-inline"},a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"Published by"),a.a.createElement("td",null,o.orgName)),a.a.createElement("tr",null,a.a.createElement("td",null,"Updated on"),a.a.createElement("td",null,Object(i.dateTimeFormat)(o.updatedAt)))))),a.a.createElement(u.Form,{onSubmit:this.onSubmit,defaultValues:P({},n,{constants:[],dataSources:[],folder:l}),validateOnMount:!0,validateFieldsOnMount:["title","uid"],validateOn:"onChange"},(function(t){var n=t.register,o=t.errors,i=t.control,u=t.getValues;return a.a.createElement(E,{register:n,errors:o,control:i,getValues:u,uidReset:s,inputs:r,onCancel:e.onCancel,onUidReset:e.onUidReset,onSubmit:e.onSubmit,initialFolderId:l.id})})))}}])&&C(n.prototype,r),o&&C(n,o),t}(r.PureComponent),J={clearLoadedDashboard:j.a,importDashboard:j.f},T=Object(s.connect)((function(e){return{dashboard:e.importDashboard.dashboard,meta:e.importDashboard.meta,source:e.importDashboard.source,inputs:e.importDashboard.inputs,folder:e.location.routeParams.folderId?{id:Number(e.location.routeParams.folderId)}:{id:0}}}),J)(R);T.displayName="ImportDashboardOverview";var L=n("Xmxp"),q=n("lzJ5");function U(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n      margin-bottom: 32px;\n    "]);return U=function(){return e},e}function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(e,t){return!t||"object"!==G(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"DashboardImportPage",(function(){return K}));var H=function(e){function t(){var e,n;A(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=B(this,(e=V(t)).call.apply(e,[this].concat(a)))).onFileUpload=function(e){var t=n.props.importDashboardJson,r=e.currentTarget.files&&e.currentTarget.files.length>0&&e.currentTarget.files[0];if(r){var a=new FileReader;a.onload=function(e){var n;try{n=JSON.parse(e.target.result)}catch(e){return void L.b.emit(i.AppEvents.alertError,["Import failed","JSON -> JS Serialization failed: "+e.message])}t(n)},a.readAsText(r)}},n.getDashboardFromJson=function(e){n.props.importDashboardJson(JSON.parse(e.dashboardJson))},n.getGcomDashboard=function(e){var t,r=/(^\d+$)|dashboards\/(\d+)/.exec(e.gcomDashboard);r&&r[1]?t=r[1]:r&&r[2]&&(t=r[2]),t&&n.props.fetchGcomDashboard(t)},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(t,e),n=t,(r=[{key:"renderImportForm",value:function(){var e=X();return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:e.option},a.a.createElement(u.FileUpload,{accept:"application/json",onFileUpload:this.onFileUpload},"Upload JSON file")),a.a.createElement("div",{className:e.option},a.a.createElement(u.Legend,null,"Import via grafana.com"),a.a.createElement(u.Form,{onSubmit:this.getGcomDashboard,defaultValues:{gcomDashboard:""}},(function(e){var t=e.register,n=e.errors;return a.a.createElement(u.Field,{invalid:!!n.gcomDashboard,error:n.gcomDashboard&&n.gcomDashboard.message},a.a.createElement(u.Input,{name:"gcomDashboard",placeholder:"Grafana.com dashboard url or id",type:"text",ref:t({required:"A Grafana dashboard url or id is required",validate:h}),addonAfter:a.a.createElement(u.Button,{type:"submit"},"Load")}))}))),a.a.createElement("div",{className:e.option},a.a.createElement(u.Legend,null,"Import via panel json"),a.a.createElement(u.Form,{onSubmit:this.getDashboardFromJson,defaultValues:{dashboardJson:""}},(function(e){var t=e.register,n=e.errors;return a.a.createElement(a.a.Fragment,null,a.a.createElement(u.Field,{invalid:!!n.dashboardJson,error:n.dashboardJson&&n.dashboardJson.message},a.a.createElement(u.TextArea,{name:"dashboardJson",ref:t({required:"Need a dashboard json model",validate:b}),rows:10})),a.a.createElement(u.Button,{type:"submit"},"Load"))}))))}},{key:"render",value:function(){var e=this.props,t=e.isLoaded,n=e.navModel;return a.a.createElement(c.a,{navModel:n},a.a.createElement(c.a.Contents,null,t?a.a.createElement(T,null):this.renderImportForm()))}}])&&M(n.prototype,r),o&&M(n,o),t}(r.PureComponent),W={fetchGcomDashboard:j.e,importDashboardJson:j.g},K=Object(l.a)((function(e){return{navModel:Object(q.a)(e.navIndex,"import",void 0,!0),isLoaded:e.importDashboard.isLoaded}}),W,(function(e){return e.importDashboard}))(H);t.default=K;K.displayName="DashboardImport";var X=Object(u.stylesFactory)((function(){return{option:Object(o.css)(U())}}))},hBny:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("/MKj"),a=n("zVNn"),o=n("q1tI"),i=n.n(o),u=n("2mql"),c=n.n(u),l=function(e,t,n){return function(u){var l=Object(r.connect)(e,t)(u),s=function(e){var t=Object(r.useDispatch)();return Object(o.useEffect)((function(){return function(){t(Object(a.a)({stateSelector:n}))}}),[]),i.a.createElement(l,e)};return s.displayName="ConnectWithCleanUp(".concat(l.displayName,")"),c()(s,u),s}}}}]);
//# sourceMappingURL=DashboardImport.591ee81e63053ad31983.js.map