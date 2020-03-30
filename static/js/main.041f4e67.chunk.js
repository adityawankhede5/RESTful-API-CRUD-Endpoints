(this["webpackJsonpcrud-template"]=this["webpackJsonpcrud-template"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),l=n.n(o),c=(n(13),n(1)),s=n(2),i=n(3),p=n(4),u=(n(14),function(e){Object(p.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).getStyle=function(){return{fontSize:e.props.fontSize||"large",color:e.props.color||"black",fontWeight:"bold",borderBottom:"2px solid #333333",padding:"3px",display:"flex",flexDirection:"row"}},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:this.getStyle()},r.a.createElement("div",{style:{flexGrow:1}},this.props.text),this.props.copyCallback?r.a.createElement("span",{style:this.props.getCopyButtonStyle(),onClick:function(){e.props.copyCallback(e.props.toCopy)}},"Copy"):"")}}]),n}(a.Component)),d=function(e){Object(p.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{display:"flex",flexDirection:"column",flexWrap:"wrap",padding:"15px 5px"}},a.getInputStyle=function(){return{padding:"5px",border:"0px",borderBottom:a.state.isInvalid?"1px solid crimson":"1px solid #333333",width:"100%",fontSize:"large",backgroundColor:"rgba(21,21,21)",color:"white"}},a.getSubmitButtonStyle=function(){return{color:"white",backgroundColor:"#333333",border:"0px",padding:"10px",fontWeight:"bold",margin:"5px"}},a.handleChange=function(e){!0===a.state.isInvalid&&a.setState({isInvalid:!1}),a.setState({value:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),""===a.state.value||a.props.schemaNames.includes(a.state.value)?a.setState({isInvalid:!0}):(a.props.submitNow(a.state.value),a.setState({value:""}))},a.state={value:"",isInvalid:!1},a}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{style:this.getStyle(),onSubmit:this.handleSubmit},r.a.createElement("input",{style:this.getInputStyle(),type:this.props.type,placeholder:this.props.placeholder,value:this.state.value,onChange:this.handleChange}),r.a.createElement("input",{style:this.getSubmitButtonStyle(),type:"submit",value:this.props.submit||"Submit"}))}}]),n}(a.Component),h=function(e){Object(p.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{}},a.state={value:""},a}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:this.getStyle()},r.a.createElement(u,{text:"New Schema",color:this.props.titleColor}),r.a.createElement(d,{type:"text",placeholder:"Name",submitNow:this.props.createNewSchema,submit:"Create",schemaNames:this.props.schemaNames}))}}]),n}(a.Component),y=function(e){Object(p.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).getStyle=function(){return{padding:"0px 10px",cursor:"pointer",opacity:e.props.selected===e.props.index?1:.5,backgroundColor:e.props.selected===e.props.index?"#26ae60":""}},e.getSchemaNameStyle=function(){return{padding:"5px",fontWeight:600,color:"white"}},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:this.getStyle(),onClick:function(){e.props.selectSchema(e.props.index)}},r.a.createElement("div",{style:this.getSchemaNameStyle()},this.props.schema.name))}}]),n}(a.Component),m=function(e){Object(p.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).getStyle=function(){return{height:"100%",display:"flex",flexDirection:"column"}},e.getAllSchemasContainerStyle=function(){return{position:"relative",height:"100%"}},e.getAllSchemasScrollableContainerStyle=function(){return{position:"absolute",top:0,bottom:0,left:0,right:0,overflow:"auto",marginLeft:"-10px",marginRight:"-10px"}},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:this.getStyle()},r.a.createElement(u,{text:"All Schemas",color:this.props.titleColor}),r.a.createElement("div",{style:this.getAllSchemasContainerStyle()},r.a.createElement("div",{style:this.getAllSchemasScrollableContainerStyle()},this.props.allSchemas.map((function(t,n){return r.a.createElement(y,{selected:e.props.selectedSchema,schema:t,index:n,key:n,selectSchema:e.props.selectSchema})})))))}}]),n}(a.Component),f=function(e){Object(p.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).getStyle=function(){return{display:"flex",flexDirection:"column",margin:"-10px",marginBottom:"10px",padding:"10px",fontWeight:"bold",boxShadow:"0 1px 3px rgba(0,0,0,1), 0 1px 2px rgba(0,0,0,0.24)",color:"white"}},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:this.getStyle()},r.a.createElement("span",null,"RESTful API CRUD Endpoints"),r.a.createElement("span",{style:{fontSize:"x-small"}},"for express"))}}]),n}(a.Component),g=function(e){Object(p.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).getStyle=function(){return{height:"100%",width:"15%",display:"flex",flexDirection:"column",padding:"10px",paddingBottom:"0px",backgroundColor:"rgba(21,21,21)"}},e.getSchemaNamesArray=function(){return e.props.allSchemas.map((function(e){return e.name}))},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:this.getStyle()},r.a.createElement(f,null),r.a.createElement(h,{createNewSchema:this.props.createNewSchema,schemaNames:this.getSchemaNamesArray(),titleColor:"white"}),r.a.createElement(m,{allSchemas:this.props.allSchemas,selectedSchema:this.props.selectedSchema,selectSchema:this.props.selectSchema,titleColor:"white"}))}}]),n}(a.Component),S=function(e){Object(p.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).getStyle=function(){return{border:"5px solid cadeblue",padding:"10px",borderBottom:"1px solid lightgrey",display:"flex",flexDirection:"row",alignItems:"center"}},e.getKeyValueStyle=function(){return{fontSize:"small",color:"grey",margin:"2px",fontWeight:"bold"}},e.getControlIconStyle=function(){return{fontSize:"1em",border:"1px solid lightgrey",padding:"2px",margin:"2px",cursor:"pointer",color:"#D63031"}},e.ControlIcon=function(t){return r.a.createElement("i",{className:"material-icons",style:e.getControlIconStyle(),onClick:function(){t.action(t.index)}},t.name)},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:this.getStyle()},r.a.createElement(this.ControlIcon,{name:"delete",action:this.props.deleteProperty,index:this.props.index}),r.a.createElement("span",{style:{fontSize:"large",fontWeight:"bold",margin:"3px"}},this.props.property.name),r.a.createElement("span",{style:this.getKeyValueStyle()},"type: ",this.props.property.type,","),this.props.property.defaultValue?r.a.createElement("span",{style:this.getKeyValueStyle()},"defalut: ",this.props.property.defaultValue,","):"",r.a.createElement("span",{style:this.getKeyValueStyle()},"required: ",this.props.property.isRequired.toString(),","),r.a.createElement("span",{style:this.getKeyValueStyle()},"select: ",this.props.property.isSelected.toString()))}}]),n}(a.Component),v=n(7),b=function(e){Object(p.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{display:"flex",flexDirection:"column",margin:"5px"}},a.getTitleStyle=function(){return{fontSize:"smaller",fontWeight:"bold",padding:"2px"}},a.getOptionsStyle=function(){return{display:"flex",flexDirection:"row",flexWrap:"wrap"}},a.getOptionStyle=function(e){return{padding:"5px 15px",fontSize:"small",cursor:"pointer",backgroundColor:a.props.selected===e?"#26ae60":"rgba(21,21,21)",color:"white"}},a.selectOption=function(e,t){a.props.setFormState(e,t)},a.state={selected:a.props.selected},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:this.getStyle()},r.a.createElement("div",{style:this.getTitleStyle()},this.props.title),r.a.createElement("div",{style:this.getOptionsStyle()},this.props.options.map((function(t,n){return r.a.createElement("span",{style:e.getOptionStyle(n),key:n,onClick:function(){e.selectOption(e.props.stateVar,n)}},t)}))))}}]),n}(a.Component),C=function(e){Object(p.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",borderBottom:"2px solid #333333",padding:"10px"}},a.getBooleanBoxStyle=function(){return{display:"flex",flexDirection:"row"}},a.getBooleanBoxOptionStyle=function(e){return{padding:"5px 15px",fontSize:"small",cursor:"pointer",backgroundColor:a.state.default.boolean===e?"#26ae60":"rgba(21,21,21)",color:"white"}},a.setFormState=function(e,t){a.setState(Object(v.a)({},e,t))},a.handleChange=function(e){a.setState({value:e.target.value,isInvalid:!1})},a.resetForm=function(){a.setState({value:"",isInvalid:!1,type:0,required:0,select:1,array:0,default:{string:"",number:"",date:"",buffer:"",boolean:2,mixed:"",objectid:"",decimal128:"",other:""}})},a.getType=function(){return a.state.array?"[".concat(a.types[a.state.type],"]"):a.types[a.state.type]},a.getDefaultValue=function(){return"Boolean"===a.types[a.state.type]?2===a.state.default.boolean?"":a.state.default.boolean?"true":"false":"String"===a.types[a.state.type]&&""!==a.state.default.string?'"'.concat(a.state.default[a.types[a.state.type].toLowerCase()],'"'):a.state.default["".concat(a.types[a.state.type].toLowerCase())]},a.handleSubmit=function(e){if(e.preventDefault(),""===a.state.value||a.props.allPropertyNames.includes(a.state.value))a.setState({isInvalid:!0});else{var t={name:a.state.value,type:a.getType(),isRequired:a.state.required?"true":"false",isSelected:a.state.select?"true":"false",defaultValue:a.getDefaultValue()};a.props.addNewProperty(t),a.resetForm()}},a.handleDefaultValueChange=function(e,t){var n=a.state.default;n[e]=t.target.value,a.setState({default:n})},a.handleDefaultBooleanValueChange=function(e){var t=a.state.default;t.boolean=e,a.setState({default:t})},a.getBooleanBox=function(){return r.a.createElement("div",{style:a.getBooleanBoxStyle()},["False","True","None"].map((function(e,t){return r.a.createElement("span",{style:a.getBooleanBoxOptionStyle(t),key:t,onClick:function(){a.handleDefaultBooleanValueChange(t)}},e)})))},a.getDefaultValueForm=function(){switch(a.types[a.state.type]){case"String":return r.a.createElement("input",{type:"text",placeholder:"String",value:a.state.default.string,onChange:function(e){a.handleDefaultValueChange("string",e)}});case"Number":return r.a.createElement("input",{type:"number",placeholder:"Number",value:a.state.default.number,onChange:function(e){a.handleDefaultValueChange("number",e)}});case"Date":return r.a.createElement("input",{type:"text",placeholder:"JS Date functions",value:a.state.default.date,onChange:function(e){a.handleDefaultValueChange("date",e)}});case"Buffer":return r.a.createElement("input",{type:"text",placeholder:"Buffer",value:a.state.default.buffer,onChange:function(e){a.handleDefaultValueChange("buffer",e)}});case"Boolean":return a.getBooleanBox();case"Mixed":return r.a.createElement("input",{type:"text",placeholder:"Mixed",value:a.state.default.mixed,onChange:function(e){a.handleDefaultValueChange("mixed",e)}});case"ObjectId":return r.a.createElement("input",{type:"text",placeholder:"ObjectId",value:a.state.default.objectid,onChange:function(e){a.handleDefaultValueChange("objectid",e)}});case"Decimal128":return r.a.createElement("input",{type:"number",placeholder:"Decimal128",value:a.state.default.decimal128,onChange:function(e){a.handleDefaultValueChange("decimal128",e)}});default:return r.a.createElement("input",{type:"text",placeholder:"Any",value:a.state.default.other,onChange:function(e){a.handleDefaultValueChange("other",e)}})}},a.types=["String","Number","Date","Buffer","Boolean","Mixed","ObjectId","Decimal128"],a.booleans=["False","True"],a.state={value:"",isInvalid:!1,type:0,required:0,select:1,array:0,default:{string:"",number:"",date:"",buffer:"",boolean:2,mixed:"",objectid:"",decimal128:"",other:""}},a}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit,style:this.getStyle()},r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("input",{type:"text",placeholder:"Property Name",onChange:this.handleChange,value:this.state.value,style:this.state.isInvalid?{borderBottom:"1px solid crimson",fontSize:"large"}:{borderBottom:"1px solid #333333",fontSize:"large"}})),r.a.createElement(b,{selected:this.state.array,title:"Array",options:this.booleans,setFormState:this.setFormState,stateVar:"array"}),r.a.createElement(b,{selected:this.state.type,title:"Type",options:this.types,setFormState:this.setFormState,stateVar:"type"}),r.a.createElement("div",{style:{marginRight:"5px"}},r.a.createElement("div",{style:{fontSize:"smaller",fontWeight:"bold",padding:"2px"}},"Default"),this.getDefaultValueForm(this.props.type)),r.a.createElement(b,{selected:this.state.required,title:"Required",options:this.booleans,setFormState:this.setFormState,stateVar:"required"}),r.a.createElement(b,{selected:this.state.select,title:"Select",options:this.booleans,setFormState:this.setFormState,stateVar:"select"}),r.a.createElement("div",{style:{width:"100%",textAlign:"right"}},r.a.createElement("input",{type:"reset",value:"Reset",onClick:this.resetForm}),r.a.createElement("input",{type:"submit",value:"Add"})))}}]),n}(a.Component),E=function(e){Object(p.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).getStyle=function(){return{flexGrow:1,display:"flex",flexDirection:"column"}},e.getScrollableStyle=function(){return{position:"absolute",top:0,bottom:0,left:0,right:0,overflow:"auto"}},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:this.getStyle()},r.a.createElement(C,{addNewProperty:this.props.addNewProperty,allPropertyNames:this.props.schema.properties.map((function(e){return e.name}))}),r.a.createElement("div",{style:{position:"relative",flexGrow:1}},r.a.createElement("div",{style:this.getScrollableStyle()},this.props.schema.properties.map((function(t,n){return r.a.createElement(S,{property:t,key:n,index:n,deleteProperty:e.props.deleteProperty})})))))}}]),n}(a.Component),x=function(e){Object(p.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).getStyle=function(){return{padding:"5px 15px",backgroundColor:"#D63031",color:"white",margin:"3px",cursor:"pointer"}},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("span",{style:this.getStyle(),onClick:this.props.onClick},this.props.text)}}]),n}(a.Component),w=function(e){Object(p.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).getStyle=function(){return{display:"flex",padding:"3px",flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:this.getStyle()},r.a.createElement(x,{text:"Delete",onClick:this.props.deleteSchema}))}}]),n}(a.Component),j=function(e){Object(p.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).getStyle=function(){return{height:"100%",width:"50%",padding:"10px",display:"flex",flexDirection:"column",paddingBottom:"0px"}},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:this.getStyle()},r.a.createElement(u,{text:this.props.schema?this.props.schema.name:"Select or Create Schema"}),this.props.schema?r.a.createElement(E,{schema:this.props.schema,addNewProperty:this.props.addNewProperty,deleteProperty:this.props.deleteProperty}):"",this.props.schema?r.a.createElement(w,{deleteSchema:this.props.deleteSchema}):"")}}]),n}(a.Component),O=function(e){Object(p.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).getPropertyCode=function(e){return"\t".concat(e.name,": {\n")+"\t\ttype: ".concat(e.type,",\n")+"\t\trequired: ".concat(e.isRequired,",\n")+"\t\tselect: ".concat(e.isSelected,",\n")+(e.defaultValue?"\t\tdefault: ".concat(e.defaultValue,",\n"):"")+"\t},\n"},e.getAllPropertiesCodes=function(){var t=e.props.schema.properties.map((function(t){return e.getPropertyCode(t)})),n="";return t.forEach((function(e){n+=e})),"".concat(n)},e.getSchemaCode=function(){return"const mongoose = require('mongoose');\nconst Schema = mongoose.Schema;\n\nconst ".concat(e.props.schema.name,"Schema = new Schema({\n").concat(e.getAllPropertiesCodes(),"});\n\nmodule.exports = mongoose.model('").concat(e.props.capitalize(e.props.schema.name),"', ").concat(e.props.schema.name,"Schema);\n\n")},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{onClick:function(){e.props.changeInView(0)}},r.a.createElement(u,{text:"Schema Code",getCopyButtonStyle:this.props.getCopyButtonStyle,toCopy:["schema"],copyCallback:this.props.copyContent}),r.a.createElement("div",{style:this.props.getContentStyle(0)},r.a.createElement("textarea",{wrap:"off",readOnly:"readonly",value:this.getSchemaCode(),id:"schema"})))}}]),n}(a.Component),k=function(e){Object(p.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).getProperty=function(e,t){var n=e.name,a=e.type,r="true"===e.isRequired?"Required.":"Not Required",o="true"===e.isSelected?"Selected":"Not Selected",l=e.defaultValue?"default=".concat(e.defaultValue,"."):"";return"\t\t\t".concat(n,": req.body.").concat(t.toLowerCase(),".").concat(n,", //").concat(a,". ").concat(l," ").concat(r,". ").concat(o,".\n")},e.getAllProperties=function(){var t=e.props.schema.properties.map((function(t,n){return e.getProperty(t,e.props.schema.name)})),n="";return t.forEach((function(e){n+=e})),n},e.getCreateOneCode=function(){var t=e.props.schema.name.toLowerCase(),n=e.props.capitalize(e.props.schema.name);return"// Create Endpoint\napp.post('/api/v1/".concat(t,"/new', (req, res)=>{\n\n    if(!req.body.").concat(t,'){\n        res.status(400).json({\n            resolved: "failure",\n            message: \'req.body.').concat(t," can not be empty',\n        });\n        return;\n    }\n        \n    const ").concat(t," = new ").concat(n,"({\n").concat(e.getAllProperties(),"\n    });\n\n    ").concat(t,".save()\n    .then((").concat(t,')=>{\n        res.status(201).json({\n            resolved: "success",\n            data: {\n                ').concat(t,": ").concat(t,',\n            }\n        });\n    })\n    .catch((err)=>{\n        res.status(409).json({\n            resolved: "failure",\n            message: "Maybe because data already exists.",\n            error: err\n        });\n    });\n});\n\n')},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:this.props.style,onClick:function(){e.props.changeInView(1)}},r.a.createElement(u,{text:"Create Endpoint",getCopyButtonStyle:this.props.getCopyButtonStyle,toCopy:["createone"],copyCallback:this.props.copyContent}),r.a.createElement("div",{style:this.props.getContentStyle(1)},r.a.createElement("div",{style:this.props.getSubEndpointStyle()},r.a.createElement("div",{style:this.props.getHeaderStyle()},r.a.createElement("div",{style:this.props.getEpNameStyle()},"Create One"),r.a.createElement("div",{style:this.props.getEpDescriptionStyle()}),r.a.createElement("span",{style:this.props.getCopyButtonStyle(),onClick:function(){e.props.copyContent(["createone"])}},"Copy")),r.a.createElement("textarea",{wrap:"off",readOnly:"readonly",value:this.getCreateOneCode(),id:"createone"}))))}}]),n}(a.Component),B=function(e){Object(p.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).getFindAllCode=function(){var t=e.props.schema.name.toLowerCase(),n=e.props.capitalize(e.props.schema.name);return"// Find All Endpoint.\napp.get('/api/v1/".concat(t,"s', (req, res)=>{\n\n    ").concat(n,".find()   //Returns an array.\n    .then((").concat(t,'s)=>{\n        res.status(200).json({\n            resolved: "success",\n            data: {\n                ').concat(t,"s: ").concat(t,'s,\n            },\n        });\n    })\n    .catch((err)=>{\n        res.stats(500).json({\n            resolved: "failure",\n            message: "Some error occurred while retrieving ').concat(n,'s.",\n            error: err,\n        });\n    });\n});\n\n')},e.getFindByIdCode=function(){var t=e.props.schema.name.toLowerCase(),n=e.props.capitalize(e.props.schema.name);return"// Find By Id Endpoint.\napp.get('/api/v1/".concat(t,"/:").concat(t,"Id', (req, res)=>{\n\n    ").concat(n,".findById(req.params.").concat(t,"Id)  //Returns single document.\n    .then((").concat(t,")=>{\n        if(!").concat(t,'){\n            res.status(404).json({\n                resolved: "success",\n                message: "').concat(n,' not found with id " + req.params.').concat(t,'Id,\n            });\n            return;\n        }\n        res.status(200).json({\n            resolved: "success",\n            data: {\n                ').concat(t,": ").concat(t,',\n            }\n        })\n    })\n    .catch((err)=>{\n        if(err.kind === \'ObjectId\') {\n            res.status(404).json({\n                resolved: "failure",\n                message: "').concat(n,' not found with id " + req.params.').concat(t,'Id,\n                error: err,\n            })\n            return;\n        }\n        res.status(500).json({\n            resolved: "failure",\n            message: "Error retreiving ').concat(t,' with id " + req.params.').concat(t,"Id,\n            error: err, \n        });\n    });\n});\n\n")},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:this.props.style,onClick:function(){e.props.changeInView(2)}},r.a.createElement(u,{text:"Read Endpoint",getCopyButtonStyle:this.props.getCopyButtonStyle,toCopy:["findall","findbyid"],copyCallback:this.props.copyContent}),r.a.createElement("div",{style:this.props.getContentStyle(2)},r.a.createElement("div",{style:this.props.getSubEndpointStyle()},r.a.createElement("div",{style:this.props.getHeaderStyle()},r.a.createElement("div",{style:this.props.getEpNameStyle()},"Find All"),r.a.createElement("div",{style:this.props.getEpDescriptionStyle()}),r.a.createElement("span",{style:this.props.getCopyButtonStyle(),onClick:function(){e.props.copyContent(["findall"])}},"Copy")),r.a.createElement("textarea",{wrap:"off",readOnly:"readonly",value:this.getFindAllCode(),id:"findall"})),r.a.createElement("div",{style:this.props.getSubEndpointStyle()},r.a.createElement("div",{style:this.props.getHeaderStyle()},r.a.createElement("div",{style:this.props.getEpNameStyle()},"Find By Id"),r.a.createElement("div",{style:this.props.getEpDescriptionStyle()}),r.a.createElement("span",{style:this.props.getCopyButtonStyle(),onClick:function(){e.props.copyContent(["findbyid"])}},"Copy")),r.a.createElement("textarea",{wrap:"off",readOnly:"readonly",value:this.getFindByIdCode(),id:"findbyid"}))))}}]),n}(a.Component),I=function(e){Object(p.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).getProperty=function(e,t){var n=e.name,a=e.type,r="true"===e.isRequired?"Required.":"Not Required",o="true"===e.isSelected?"Selected":"Not Selected",l=e.defaultValue?"default=".concat(e.defaultValue,"."):"";return"\t\t\t".concat(n,": req.body.").concat(t.toLowerCase(),".").concat(n,", //").concat(a,". ").concat(l," ").concat(r,". ").concat(o,".\n")},e.getAllProperties=function(){var t=e.props.schema.properties.map((function(t,n){return e.getProperty(t,e.props.schema.name)})),n="";return t.forEach((function(e){n+=e})),n},e.getUpdateCode=function(){var t=e.props.schema.name.toLowerCase(),n=e.props.capitalize(e.props.schema.name);return"// Update Endpoint.\napp.put('/api/v1/".concat(t,"/:").concat(t,"Id', (req, res)=>{\n\n    if(!req.body.").concat(t,'){\n        res.status(400).json({\n            resolved: "failure",\n            message: "req.body.').concat(t,' can not be empty.",\n        })\n    }\n\n    ').concat(n,".findByIdAndUpdate(req.params.").concat(t,"Id, {\n").concat(e.getAllProperties(),"\n    }, {new: true})  //Returns the updated document.\n    .then((").concat(t,")=>{\n        if(!").concat(t,'){\n            res.status(404).json({\n                resolved: "success",\n                message: "').concat(n,' not found with id " + req.params.').concat(t,'Id,\n            });\n            return;\n        }\n        res.status(200).json({\n            resolved: "success",\n            data: {\n                ').concat(t,": ").concat(t,',\n            }\n        })\n    })\n    .catch((err)=>{\n        if(err.kind === \'ObjectId\') {\n            res.status(404).json({\n                resolved: "failure",\n                message: "').concat(n,' not found with id " + req.params.').concat(t,'Id,\n                error: err,\n            })\n            return;\n        }\n        res.status(500).json({\n            resolved: "failure",\n            message: "Error updating ').concat(t,' with id " + req.params.').concat(t,"Id,\n            error: err, \n        });\n    });\n});\n\n")},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:this.props.style,onClick:function(){e.props.changeInView(3)}},r.a.createElement(u,{text:"Update Endpoint",getCopyButtonStyle:this.props.getCopyButtonStyle,toCopy:["update"],copyCallback:this.props.copyContent}),r.a.createElement("div",{style:this.props.getContentStyle(3)},r.a.createElement("div",{style:this.props.getSubEndpointStyle()},r.a.createElement("div",{style:this.props.getHeaderStyle()},r.a.createElement("div",{style:this.props.getEpNameStyle()},"Update"),r.a.createElement("div",{style:this.props.getEpDescriptionStyle()}),r.a.createElement("span",{style:this.props.getCopyButtonStyle(),onClick:function(){e.props.copyContent(["update"])}},"Copy")),r.a.createElement("textarea",{wrap:"off",readOnly:"readonly",value:this.getUpdateCode(),id:"update"}))))}}]),n}(a.Component),D=function(e){Object(p.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).getDeleteCode=function(){var t=e.props.schema.name.toLowerCase(),n=e.props.capitalize(e.props.schema.name);return"// Delete Endpoint.\napp.delete('/api/v1/".concat(t,"/:").concat(t,"Id', (req, res)=>{\n\n    ").concat(n,".findByIdAndRemove(req.params.").concat(t,"Id)  //Returns the updated document.\n    .then((").concat(t,")=>{\n        if(!").concat(t,'){\n            res.status(404).json({\n                resolved: "success",\n                message: "').concat(n,' not found with id " + req.params.').concat(t,'Id,\n            });\n            return;\n        }\n        res.status(200).json({\n            resolved: "success",\n            message: "').concat(n,' deleted successfully!",\n            data: {\n                ').concat(t,": ").concat(t,",\n            }\n        })\n    })\n    .catch((err)=>{\n        if(err.kind === 'ObjectId' || err.name === 'NotFound') {\n            res.status(404).json({\n                resolved: \"failure\",\n                message: \"").concat(n,' not found with id " + req.params.').concat(t,'Id,\n                error: err,\n            })\n            return;\n        }\n        res.status(500).json({\n            resolved: "failure",\n            message: "Error deleting ').concat(t,' with id " + req.params.').concat(t,"Id,\n            error: err, \n        });\n    });\n});\n\n")},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:this.props.style,onClick:function(){e.props.changeInView(4)}},r.a.createElement(u,{text:"Delete Endpoint",getCopyButtonStyle:this.props.getCopyButtonStyle,toCopy:["delete"],copyCallback:this.props.copyContent}),r.a.createElement("div",{style:this.props.getContentStyle(4)},r.a.createElement("div",{style:this.props.getSubEndpointStyle()},r.a.createElement("div",{style:this.props.getHeaderStyle()},r.a.createElement("div",{style:this.props.getEpNameStyle()},"Delete"),r.a.createElement("div",{style:this.props.getEpDescriptionStyle()}),r.a.createElement("span",{style:this.props.getCopyButtonStyle(),onClick:function(){e.props.copyContent(["delete"])}},"Copy")),r.a.createElement("textarea",{wrap:"off",readOnly:"readonly",value:this.getDeleteCode(),id:"delete"}))))}}]),n}(a.Component),N=function(e){Object(p.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).changeInView=function(e){a.setState({inView:e})},a.getStyle=function(){return{height:"100%",width:"35%",position:"relative"}},a.getScrollableStyle=function(){return{position:"absolute",top:0,bottom:0,left:0,right:0,overflow:"auto",padding:"10px"}},a.getContentStyle=function(e){return{padding:"5px",display:a.state.inView===e?"block":"none"}},a.getSubEndpointStyle=function(){return{display:"flex",flexDirection:"column"}},a.getHeaderStyle=function(){return{display:"flex",flexDirection:"row",alignItems:"center",padding:"3px"}},a.getEpNameStyle=function(){return{fontSize:"",fontWeight:600}},a.getEpDescriptionStyle=function(){return{fontSize:"small",fontWeight:"bold",color:"lightgrey",flexGrow:1}},a.getCopyButtonStyle=function(){return{backgroundColor:"rgb(21,21,21)",color:"white",fontSize:"small",padding:"5px",cursor:"pointer",float:"right"}},a.capitalize=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},a.copyContent=function(e){var t="";e.forEach((function(e,n){t+=document.getElementById(e).textContent}));var n=document.createElement("textarea");n.value=t,document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n)},a.state={inView:0},a}return Object(s.a)(n,[{key:"render",value:function(){return this.props.schema?r.a.createElement("div",{style:this.getStyle()},r.a.createElement("div",{style:this.getScrollableStyle()},r.a.createElement(O,{schema:this.props.schema,getContentStyle:this.getContentStyle,getSubEndpointStyle:this.getSubEndpointStyle,getHeaderStyle:this.getHeaderStyle,getEpNameStyle:this.getEpNameStyle,getEpDescriptionStyle:this.getEpDescriptionStyle,getCopyButtonStyle:this.getCopyButtonStyle,capitalize:this.capitalize,copyContent:this.copyContent,changeInView:this.changeInView}),r.a.createElement("div",null,r.a.createElement(u,{text:"Endpoints",fontSize:"x-large",getCopyButtonStyle:this.getCopyButtonStyle,toCopy:["createone","findall","findbyid","update","delete"],copyCallback:this.copyContent}),r.a.createElement(k,{schema:this.props.schema,getContentStyle:this.getContentStyle,getSubEndpointStyle:this.getSubEndpointStyle,getHeaderStyle:this.getHeaderStyle,getEpNameStyle:this.getEpNameStyle,getEpDescriptionStyle:this.getEpDescriptionStyle,getCopyButtonStyle:this.getCopyButtonStyle,capitalize:this.capitalize,copyContent:this.copyContent,changeInView:this.changeInView,copyCallback:this.copyContent}),r.a.createElement(B,{schema:this.props.schema,getContentStyle:this.getContentStyle,getSubEndpointStyle:this.getSubEndpointStyle,getHeaderStyle:this.getHeaderStyle,getEpNameStyle:this.getEpNameStyle,getEpDescriptionStyle:this.getEpDescriptionStyle,getCopyButtonStyle:this.getCopyButtonStyle,capitalize:this.capitalize,copyContent:this.copyContent,changeInView:this.changeInView,copyCallback:this.copyContent}),r.a.createElement(I,{schema:this.props.schema,getContentStyle:this.getContentStyle,getSubEndpointStyle:this.getSubEndpointStyle,getHeaderStyle:this.getHeaderStyle,getEpNameStyle:this.getEpNameStyle,getEpDescriptionStyle:this.getEpDescriptionStyle,getCopyButtonStyle:this.getCopyButtonStyle,capitalize:this.capitalize,copyContent:this.copyContent,changeInView:this.changeInView,copyCallback:this.copyContent}),r.a.createElement(D,{schema:this.props.schema,getContentStyle:this.getContentStyle,getSubEndpointStyle:this.getSubEndpointStyle,getHeaderStyle:this.getHeaderStyle,getEpNameStyle:this.getEpNameStyle,getEpDescriptionStyle:this.getEpDescriptionStyle,getCopyButtonStyle:this.getCopyButtonStyle,capitalize:this.capitalize,copyContent:this.copyContent,changeInView:this.changeInView,copyCallback:this.copyContent})))):""}}]),n}(a.Component),V=function(e){Object(p.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{flexGrow:1,height:"100%",display:"flex",flexDirection:"row"}},a.createNewSchema=function(e){var t=a.state.allSchemas;t.push({name:e,properties:[]}),a.setState({allSchemas:t,selecetedSchema:t.length-1})},a.selectSchema=function(e){a.setState({selecetedSchema:e})},a.deleteSchema=function(){var e=a.state.allSchemas;e.splice(a.state.selecetedSchema,1),a.setState({selecetedSchema:a.state.selecetedSchema-1,allSchemas:e})},a.addNewProperty=function(e){var t=a.state.allSchemas;t[a.state.selecetedSchema].properties.push(e),a.setState({allSchemas:t})},a.deleteProperty=function(e){var t=a.state.allSchemas;t[a.state.selecetedSchema].properties.splice(e,1),a.setState({allSchemas:t})},a.state={selecetedSchema:-1,allSchemas:[],isMobile:window.innerWidth<400},a}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:this.getStyle()},r.a.createElement(g,{allSchemas:this.state.allSchemas,selectedSchema:this.state.selecetedSchema,selectSchema:this.selectSchema,createNewSchema:this.createNewSchema}),r.a.createElement(j,{schema:this.state.allSchemas[this.state.selecetedSchema],deleteSchema:this.deleteSchema,addNewProperty:this.addNewProperty,deleteProperty:this.deleteProperty}),r.a.createElement(N,{schema:this.state.allSchemas[this.state.selecetedSchema]}))}}]),n}(a.Component),q=function(e){Object(p.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).getStyle=function(){return{display:"flex",flexDirection:"column",height:"100%"}},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:this.getStyle()},r.a.createElement(V,null))}}]),n}(a.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.041f4e67.chunk.js.map