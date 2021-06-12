#vue之learn
一.获取表单对象
1.添加属性 ref="methodsName"
2.methods中添加方法{
this.$refs.methodsName.form自带方法
}


2.路由守卫beforeEach
next() 表示路由成功，直接进入to路由，不会再次调用router.beforeEach()
next('login') 表示路由拦截成功，重定向至login，会再次调用router.beforeEach()
也就是说beforeEach()必须调用next(),否则就会出现无限循环，next() 和 next('xxx') 是不一样的，区别就是前者不会再次调用router.beforeEach()，后者会！！！
router.beforeEach((to，form，next)=> {
  //在router.js中的挂载组件添加一个 meta:{}属性对象
  document.title = to.meta.title
  document.title = to.matched[0].meta.title

  next()
})


3.消除esline语法警告
1.新建.prettierrrc配置文件
2.{
//末尾引号
"semi":true,
//单引号
"singleQuote":true
}


4.数组操作
...arr   //展开数组
可用arr1.push(...ary)；

5.stop修饰符的使用
阻止冒泡

6.监听键盘的点击keyup
keyup.enter按下回车键
.native监听组件的事件

7.vue内部的virtualdom
用于提高性能
渲染时候，遇到相同的dom会覆盖（直接重复使用），若要重新加载新的dom只需要加一个key属性

8.v-if和v-show的区别
v-if="flase"则不会创建一个标签
v-show="flase"则是给样式添加一个 display:none

9.v-for遍历数组
加一个key，当在数组中间插入一个元素时，用slice方法可以直接插入相应的位置，而不需要挪位置再添加（vue的优化）
**属性加上:key性能会更高

10.不定传值
	function(...values){
	//可传入多个参数
	}

11.过滤器filters
用法和methods平级:{{value | filterName}}
	filters:{
		filterName(value){
			//返回一个新数值用以覆盖原value
			return newValue;
		}
	}

12.v-model
相当于v-bind和v-on的语法糖
与单选框的联合使用：添加一个Boolean标记值
与复选框的使用使用：添加一个[数组]标记值，直接用v-model绑定

13.v-model的值绑定（从服务器获取可选择的数据）
<label v-for="item in items" :for="item">
	<input type="checkbox" :id="item" :value="item" v-model="arrName">{{item}}
</label>

14.v-model的修饰符
v-model.lazy 当失去焦点或者敲回车键时实现双向绑定 

15.slot插槽
<slot name="nameaaa"><默认标签，引用时可被覆盖></slot>

父组件中引用
<cpn> <span slot="nameaaa">内容</span> </cpn>

16.z作用域插槽
一般插槽拿到的数据是父组件的，为了拿到子组件的数据，需要用到作用域插槽
1）父组件中引用
    <template slot-scope="aName">
    	{{aName.data}}
    </template>
2）子组件中的slot中声明和绑定
<slot :data(data为自定义名字)="子组件中数据"></slot>

17.vue中在style中导入css样式
@import

**18.跨域注意**
axios。default.baseURL 必须注释掉，不然会直接走端口 不走本地代理
**配置项目开发环境，使用process.env.VUE_APP_HOST可以解决跨域（不能解决cookie问题）**

19.vue的函数
activeted      ->进入组件调用
deactiveted    ->离开组件调用

**20.slot**
**不常用**作用域插条（插条向组件传值）
（1）插槽中<slot :customizedSlotName=""></slot>
(2)调用的组件<template v-slot="customizedName">customizedName.customizedSlotName</template>
**
二.computed属性与methods的区别
1.在模板文件中，computed属性只需要写{{reverseMessage}}，而methods需要写成{{reverseMessage()}}，最明显的区别就是methods是方法，需要执行；
2.computed属性只有在依赖的data放生变化时，才会重新执行，否则会使用缓存中的值，而methods是每次进入页面都要执行的，有些需要每次进入页面都执行的方法，需要使用methods，而computed属性比较节约。
3.computed的get和set方法
	computed:{
	//此种写法，可见computed也是一种 对象方式
		set:{},
		get:{
			//语句
			return ;
			}

	}
所以用computed相当于就是对象的一个键值，二不是一个函数。由于computed一种只用到get（只读属性），所以可以简写为：
	computed: {
		name1:function(){
		}
	}

三.父子组件
1.组件的使用
	//构造容器
	const cpnC = Vue.extend({
		template:``,
		components:{
			//局部注册
			}
	})
	//组件注册(全局注册)
	Vue.component(
		标签名:cpnC,
	})
	//组件使用

**组件找那个的data是一个函数而不是{对象}**
**函数在每次调用时都会创建一个新对象（相当于内存地址不同），所以多次调用一个组件时，保证里面的数据相互不影响**

2.父组件向子组件传值
1）子组件中用props:{
	propertis1:{
		type:String,
		default:'默认值',
		required:true,//true为必须有这个值

	}，
	prop2:{
		type:Array,
		default(){return []}  //当所接收的值为数组或者对象类型时，默认值需要以函数形式接收
	}
}接收
2）在父组件中传值声明
<componentName v-bind:prop2(子组件中变量名)="父组件中变量名"><componentName>
**1.使用props接收的参数必须在data中使用this.prop2挂载到data中才能使用   2.组件中的属性，其实就是对应组件data中的变量**
3.子组件向父组件传值
1）子组件中自定义事件methods:{
	emit(item){
		this.$emit('子组件中自定义名字',item)
	}
}
2）父组件中v-on监听
<componentName v-on:prop2(子组件中变量名)="父组件中变量名"><componentName>
**监听的是子组件变量名（或者子组件自定义名），即 子组件变量名（或者子组件自定义名）在=左边，父组件变量名（或者父组件自定义名）在=右边，并且=右边可以不传参数（不需要小括号），因为不是浏览器事件，不会自动传入event事件**


3.父组件访问子组件
this.$children   得到一个数组
this.$refs（得到组件或者元素）       得到一个对象（使用时需要在<template ref="flagName">）


#vue-cli
![](https://i.imgur.com/VFeiqM9.png)
##三.render函数
    new Vue({
      el:"#app",
      template:"<App/>"，//渲染时，会用app模板直接替换挂载的 #app
      components:{App}
    })
    
    new Vue({
      el:"#app",
      render: h => h(App);
      //相当于
      render: function(creatElement){
      return creatElement(组件)；
      // 2.creatElement函数的用法
    }
    })
  

###1.runtime-compiler      //解析过程  template->ast(abstract syntax tree抽象语法树) ->（解析） render->virtual dom -> ui

###2.runtime-only         //不需要虚拟语法树解析语句,1.性能更高2.代码更少  render->vdom->ui（有vue-loader和vue-template-compiler插件解析）


#四.router
**vue实现全局响应式。vue实例中$router是一个全局属性，用Object.defineProperty(Vue.prototype, '$router', {})方法给vue添加了一个$router的全局原型属性**
##1.动态路由（类似 动态路径）和参数获取
**URL:scheme://host:port/path?query**
**    协议  ：//主机:端口/路径?查询**
###动态路由的使用
1）使用<router-link  :to="'/home/params'">  //属性中使用变量，则要加v-bind绑定，否则会被解析为一个字符串
<router-link  :to="{path:'/home',query:{id:111,name:'Name'}}">
2）使用v-on监听一个函数,使用  this.$router.push()或者this.$router.replace()

3）在router.js中挂载组件时，在路由后面加上 /:variableName(变量名)

###路由参数的获取
（this.）$route.params.variableName
（this.）$route.query.id

##2.路由懒加载
router.js中导入组件时 用import()动态导入

##3.路由嵌套
步骤：
  1.在对应的父组件中加入<router-view>
  2.在对应的父级路由中（component对象下边）添加一个children**[数组]**（仿照父级格式）
**注意：添加路由路径的时：前面加/则替换为同级路由，若不加/则添加渲染子路由**


##4.导航守卫
前置钩子（hook），回调的意思
.路由守卫beforeEach（router.js页面添加一个方法）
    router.beforeEach((to，form，next)=> {
      //在router.js中的挂载组件添加一个 meta:{}属性对象
      document.title = to.meta.title
      document.title = to.matched[0].meta.title

      next()
    })

后置钩子（守卫）,跳转之后回调
    router.afterEach((to, from) => {
      
    })

##5.<keep-alive><router-view/></keep-alive>（组件的一个方法）
<keep-alive>标签可以使里面的内容缓存（不会被重复渲染）
属性：include="componentName1,componentName"（componentName代表导出组件额name属性，表示这些组件里面的内容才会“被缓存”，不会被重复渲染）和exclude（里面的组件会被重复渲染）


**一点点补充**：
$route(获取URL路由参数)  和 使用<keep-alive>h后可以使用方法activated(){//一个方法}      //页面活跃时，将被调用

#五.vuex（无this）
Vue.set('要增加的对象', '数组的序列号or对象的key', '要增加的值')
Vue.delect()
##1.结构
new Vuex.Store({
  //存放数据，类似data
  state:{
    message:'',
  },
  //(变异，突变)对state中的数据进行同步操作，雷士methods
  mutations:{
    //mutation中的方法分为两部分：1.事件类型f1，2.回调函数（f1后面的）
    f1(state, dataF1){//dataF1为组件通过commit事件传送过来的值，介意是一个对象{}
      
    }

  },
  //（行为）可对state中的数据进行异步修改
  actions:{
    a1(context){//context不是state，而是vuex.stire
      context.commit('')//action中要操作state，必须调用mutation，通过mutation来修改state
    }

  },
  //类似computed，
  getters:{
    g(state, getters){//可以将state和getters传进来
      return *
    }，
    g2(){
      return function(){//返回一个函数，则返回值就是函数，可以被当做函数调用
        return
      }
    }
  },
  //（模块，组件）,相当于子store
  modules:{
    //子模块中的state会被提取到store中的state
    //通过$store.state.a.variableName(state中的变量名)
    //其他核心方法有其他参数，可以通过打印查看
    a:moduleA
  }
  
})


##2.组件中调用vue
###1）调用state
this.$store.state.message
###2)调用mutations中的方法（提交mutation中的‘事件类型’）
this.$store.commit('f1', dataF1)//dataF1可以是一个对象{}
###3）调用action中方法
this.$store.dispatch('f1', dataF1)//dataF1可以是一个对象{}

#面向对象/函数式 编程
函数式编程 函数的参数也是一个函数
js高阶函数   filter   some  map  forEach  reduce
	作用机理：1.依次循环数组里面的每一个元素
			 2.将元素作为参数传入回调函数中
			 3.返回新元素（或者当返回值为Boolean中的true时），并返回一个新数组


#es6语法
###1.数组操作
...arr   //展开数组
可用arr1.push(...ary)；
###2.module的导出export  和  导入import
<script type="module" src="./aa.js">//声明类型为type="module"
####1）export
 export {name1,name,...}       //对象方式导出
 export function fName(){}     //直接导出（可以导出多个）
 ****export default            //同一个模块中，只能有一个默认导出方式。``因此导入时，不需要用{}接收``此种方式导出后，可以自定义名字。


###2.箭头函数
this 层层向上查找

###3.异步编程Promise(异步嵌套 转化为链式)
    new Promise((resolve, reject) => {
      setTimeout(() =>{
        resolve(data)//data传到then
        reject(err)//错误信息传到catch
      },1000)
    }).then((data) => {
        console.log()
        
        new Promise((resolve, reject) => {
          setTimeout(() =>{
            resolve()
           },1000)
        }).then(() +> {
              console.log()
            }).catch((err) => {})
    }).catch((err) => {})



等同与
    setTimeout(() =>{
       console.log()
    
        setTimeout(() =>{
           console.log()
        },1000)
    },1000)

#常用的数字
1.移动端TarBar（手机的按键栏）：49px
2.用slot封装插条时，给slot外面封装一层div添加属性，以此来改变样式
3.css3定义变量 
:root { //-> 获取根元素，也就是html
   --color: red,
}

使用：var(color) //var(变量名variableName)