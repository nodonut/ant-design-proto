(this["webpackJsonpant-design-table-proto"]=this["webpackJsonpant-design-table-proto"]||[]).push([[0],{232:function(e,t,a){},233:function(e,t,a){},388:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a(0),c=a.n(r),o=a(32),i=a.n(o),l=(a(232),a(233),a(389)),s=a(392),u=a(90),g=a(391),d=a(141),h=a(393),m=l.a.Header,p=s.a.Title,y={display:"flex",justifyContent:"flex-start",alignItems:"center",paddingTop:"2em",paddingBottom:"2em"},j="";function f(){var e=Object(n.jsxs)(u.a,{className:"categories",children:[Object(n.jsx)(u.a.Item,{onClick:j="Airlines",children:Object(n.jsx)("a",{target:"_blank",children:"Airlines"})}),Object(n.jsx)(u.a.Item,{onClick:j="Airports",children:Object(n.jsx)("a",{target:"_blank",children:"Airports"})}),Object(n.jsx)(u.a.Item,{children:Object(n.jsx)("a",{target:"_blank",children:"Hotels"})}),Object(n.jsx)(u.a.Item,{children:Object(n.jsx)("a",{target:"_blank",children:"Mobility"})}),Object(n.jsx)(u.a.Item,{children:Object(n.jsx)("a",{target:"_blank",children:"Activities/Events"})}),Object(n.jsx)(u.a.Item,{children:Object(n.jsx)("a",{target:"_blank",children:"Amusement Parks"})}),Object(n.jsx)(u.a.Item,{children:Object(n.jsx)("a",{target:"_blank",children:"Museums"})}),Object(n.jsx)(u.a.Item,{children:Object(n.jsx)("a",{target:"_blank",children:"Cruises"})}),Object(n.jsx)(u.a.Item,{children:Object(n.jsx)("a",{target:"_blank",children:"Short Term Rentals"})})]});return Object(n.jsxs)(m,{style:y,children:[Object(n.jsx)(p,{style:{color:"whitesmoke",marginTop:"0.5em"},children:Object(n.jsx)(g.a,{src:"https://app.safetravelbarometer.com/images/logos/stb-white-250-63.png",height:40,width:170})}),Object(n.jsx)(u.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],style:{margin:"2em 2em"},children:Object(n.jsx)(u.a.Item,{children:"Dashboard"},"1")}),Object(n.jsx)(d.a,{overlay:e,children:Object(n.jsxs)("a",{className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()},children:["Categories ",Object(n.jsx)(h.a,{})]})}),","]})}var b=a(91),v=a(9),O=a(14),x=a(16),k=a(18),_=a(24),C=a(112),I=a(394),S=a(390),q=a(61);function w(){var e=Object(b.a)(["\n      query($country: Mixed!, $category: Mixed!) {\n        companies(\n          hasCountry: { column: NAME, value: $country }\n          hasCategory: { column: NAME, value: $category }\n        ) {\n          data {\n            id\n            name\n            rating\n            logo\n            category {\n              id\n              name\n            }\n            all_company_parameter_values {\n              parameter {\n                name\n                id\n              }\n              value\n              value_text\n            }\n          }\n        }\n      }\n    "]);return w=function(){return e},e}function E(){var e=Object(b.a)(["\n      query {\n        countries {\n          name\n        }\n      }\n    "]);return E=function(){return e},e}function M(){var e=Object(b.a)(["\n      query($searchInput: Mixed!, $category: Mixed!) {\n        companies(\n          where: { column: NAME, value: $searchInput }\n          hasCategory: { column: NAME, value: $category }\n        ) {\n          data {\n            id\n            name\n            logo\n            rating\n            category {\n              id\n              name\n            }\n            all_company_parameter_values {\n              parameter {\n                name\n                id\n              }\n              value\n              value_text\n            }\n          }\n        }\n      }\n    "]);return M=function(){return e},e}function A(){var e=Object(b.a)(["\n          query {\n            buckets {\n              id\n              name\n              description\n              parameters {\n                id\n                name\n                category {\n                  id\n                  name\n                }\n                description\n              }\n            }\n          }\n        "]);return A=function(){return e},e}function $(){var e=Object(b.a)(["\n      query companies($page: Int!, $pageSize: Int!, $category: Mixed!) {\n        companies(\n          page: $page\n          first: $pageSize\n          hasCategory: { column: NAME, value: $category }\n        ) {\n          paginatorInfo {\n            perPage\n            hasMorePages\n            currentPage\n            total\n          }\n          data {\n            id\n            name\n            logo\n            rating\n            category {\n              id\n              name\n            }\n            all_company_parameter_values {\n              parameter {\n                name\n                id\n              }\n              value\n              value_text\n            }\n          }\n        }\n      }\n    "]);return $=function(){return e},e}function N(){var e=Object(b.a)(["\n      query companies($page: Int!, $category: Mixed!) {\n        companies(\n          page: $page\n          first: 100\n          hasCategory: { column: NAME, value: $category }\n        ) {\n          paginatorInfo {\n            perPage\n            hasMorePages\n            currentPage\n            total\n          }\n          data {\n            id\n            name\n            logo\n            rating\n            category {\n              id\n              name\n            }\n            all_company_parameter_values {\n              parameter {\n                name\n                id\n              }\n              value\n              value_text\n            }\n          }\n        }\n      }\n    "]);return N=function(){return e},e}var P=new q.ApolloClient({uri:"https://dev.app.safetravelbarometer.com/api",cache:new q.InMemoryCache}),D=[],T=C.a.Option,L=C.a.OptGroup,B=[{key:"01",dataIndex:"imageurl",render:function(e){return Object(n.jsx)("img",{src:e,height:50,width:50})}},{key:"02",title:"Name",dataIndex:"name",sorter:function(e,t){return e.name.length-t.name.length},sortDirections:["descend"]},{key:"03",title:"Rating",dataIndex:"rating",sorter:function(e,t){return e.rating-t.rating},sortDirections:["descend"]}],F=j;console.log(F);var z=[],H="Airlines",R=[],V=function(e){Object(k.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(O.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={columns:[].concat(B),filteredCols:[],defaultValue:[].concat(R),columnIds:z,data:[],pagination:{current:1},loading:!1,buckets:[],searchInput:"",countries:[],category:H,airlineCols:[]},e.handleChange=function(t){console.log(t),e.setState({filteredCols:[].concat(Object(v.a)(B.filter((function(e){return"imageurl"===e.dataIndex}))),Object(v.a)(B.filter((function(e){return"Name"===e.title}))),Object(v.a)(B.filter((function(e){return"Rating"===e.title}))),Object(v.a)(B.filter((function(e){return t.includes(e.key)}))))})},e}return Object(x.a)(a,[{key:"componentDidMount",value:function(){this.loadData(),this.populateBuckets(),this.populateCountrySelect(),this.setState({defaultValue:[].concat(z)})}},{key:"loadData",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.setState({loading:!0});var a=Object(q.gql)(N());P.query({query:a,variables:{page:t,category:this.state.category}}).then((function(t){console.log(t);var a=t.data.companies.paginatorInfo.currentPage,n=t.data.companies.paginatorInfo.total;t.data.companies.data.forEach((function(t){if(t.category.name===e.state.category){var a={key:t.id,rating:t.rating,imageurl:t.logo,name:t.name,category:t.category.name},n=t.all_company_parameter_values,r="";return n.forEach((function(e){r=e.value,e.value_text,a[e.parameter.name.toLowerCase().replace(/[ ]/g,"_")]=r})),D.push(a)}})),e.setState({loading:!1,data:D,pagination:{current:a,total:n}})}))}},{key:"handleTableChange",value:function(e){var t=this;console.log(e);var a=Object(q.gql)($());P.query({query:a,variables:{page:e.current,pageSize:e.pageSize,category:this.state.category}}).then((function(e){var a=e.data.companies.paginatorInfo.total,n=e.data.companies.paginatorInfo.currentPage,r=[];e.data.companies.data.forEach((function(e){if(e.category.name===t.state.category){var a={key:e.id,rating:e.rating,imageurl:e.logo,name:e.name,category:e.category.name},n=e.all_company_parameter_values,c="";return n.forEach((function(e){c=e.value,e.value_text,a[e.parameter.name.toLowerCase().replace(/[ ]/g,"_")]=c})),r.push(a)}})),t.setState({loading:!1,data:r,pagination:{current:n,total:a}})}))}},{key:"populateBuckets",value:function(){var e=this;P.query({query:Object(q.gql)(A())}).then((function(t){var a=[];t.data.buckets.forEach((function(t){var r=t.id,c=t.name,o=t.parameters;o.forEach((function(t){t.category.name===e.state.category&&B.push({key:t.id,title:t.name,dataIndex:t.name.toLowerCase().replace(/[ ]/g,"_"),group:t.name.toLowerCase(),category:t.category.name})})),B.forEach((function(t){t.category===e.state.category&&R.length<6&&R.push(t.key)}));var i=[];o.forEach((function(e){i.push(Object(n.jsx)(T,{value:e.id,children:e.name},e.id))})),a.push(Object(n.jsx)(L,{label:c,children:i},r)),i=[]})),e.setState({buckets:a,filteredCols:[].concat(Object(v.a)(B.slice(0,3)),Object(v.a)(B.filter((function(e){return R.includes(e.key)}))))})}))}},{key:"handleSearch",value:function(e){var t=this;this.setState({loading:!0});var a=Object(q.gql)(M());P.query({query:a,variables:{searchInput:e,category:H}}).then((function(e){var a=[];e.data.companies.data.forEach((function(e){var n={key:e.id,rating:e.rating,imageurl:e.logo,name:e.name,category:e.category.name};if(e.category.name===t.state.category){var r=e.all_company_parameter_values,c="";return r.forEach((function(e){c=e.value,n[e.parameter.name.toLowerCase().replace(/[ ]/g,"_")]=c})),a.push(n)}})),t.setState({loading:!1,data:a})})).catch((function(e){return t.loadData()}))}},{key:"populateCountrySelect",value:function(){var e=this,t=Object(q.gql)(E());P.query({query:t}).then((function(t){var a=[];t.data.countries.forEach((function(e,t){return a.push(Object(n.jsx)(T,{value:e.name.toLowerCase(),children:e.name},t+1))})),e.setState({countries:[].concat(a)})}))}},{key:"countrySearch",value:function(e){var t=this;this.state.countries.forEach((function(a){a.props.value===e&&t.setState({countries:[a]})}))}},{key:"selectCountrySearch",value:function(e){var t=this,a=Object(q.gql)(w());P.query({query:a,variables:{country:e,category:this.state.category}}).then((function(e){var a=[];e.data.companies.data.forEach((function(e){var n={key:e.id,rating:e.rating,imageurl:e.logo,name:e.name,category:e.category.name};if(e.category.name===t.state.category){var r=e.all_company_parameter_values,c="";return r.forEach((function(e){c=e.value,e.value_text,n[e.parameter.name.toLowerCase().replace(/[ ]/g,"_")]=c})),a.push(n)}})),t.setState({loading:!1,data:a})})).catch((function(e){return t.loadData()}))}},{key:"render",value:function(){var e=this;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(C.a,{mode:"multiple",style:{width:"100%",marginBottom:"1em"},placeholder:"Select parameters",onChange:this.handleChange,defaultValue:R,children:this.state.buckets}),Object(n.jsx)(C.a,{showSearch:!0,style:{width:200,marginTop:"1em"},placeholder:"Select country",onSearch:function(t){return e.selectCountrySearch(t)},children:this.state.countries}),",",Object(n.jsx)(I.a,{placeholder:"Search",bordered:!1,style:{marginBottom:"2em",left:"80%"},onChange:function(t){return e.handleSearch(t.target.value)}}),Object(n.jsx)(S.a,{columns:this.state.filteredCols,dataSource:this.state.data,loading:this.state.loading,pagination:this.state.pagination,onChange:function(t){return e.handleTableChange(t)}})]})}}]),a}(r.Component);new q.ApolloClient({uri:"https://dev.app.safetravelbarometer.com/api",cache:new q.InMemoryCache}),l.a.Header,l.a.Footer,l.a.Content;var J=l.a.Footer,G=l.a.Content;var K=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(f,{}),Object(n.jsx)(l.a,{children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(G,{style:{padding:"0 50px"},children:Object(n.jsx)("div",{className:"site-layout-content",children:Object(n.jsx)(V,{})})}),Object(n.jsx)(J,{style:{textAlign:"center"},children:"Safe Travel"})]})})]})})},Q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,395)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(K,{})}),document.getElementById("root")),Q()}},[[388,1,2]]]);
//# sourceMappingURL=main.7f4d4175.chunk.js.map