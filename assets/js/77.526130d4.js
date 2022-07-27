(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{557:function(s,a,e){"use strict";e.r(a);var t=e(19),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"通过docker安装服务了解容器的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通过docker安装服务了解容器的使用"}},[s._v("#")]),s._v(" 通过Docker安装服务了解容器的使用")]),s._v(" "),e("h2",{attrs:{id:"docker安装mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker安装mysql"}},[s._v("#")]),s._v(" Docker安装Mysql")]),s._v(" "),e("h3",{attrs:{id:"拉取一个mysql镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#拉取一个mysql镜像"}},[s._v("#")]),s._v(" 拉取一个mysql镜像")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull mysql:5.7.32\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"设置mysql的参数指标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置mysql的参数指标"}},[s._v("#")]),s._v(" 设置Mysql的参数指标")]),s._v(" "),e("ul",[e("li",[s._v("Mysql服务的端口号为"),e("code",[s._v("3306")])]),s._v(" "),e("li",[s._v("基本的变量为如下：")]),s._v(" "),e("li",[s._v("MYSQL_ROOT_PASSWORD      "),e("code",[s._v("root用户的密码")])]),s._v(" "),e("li",[s._v("MYSQL_DATABASE           "),e("code",[s._v("指定创建数据库")])]),s._v(" "),e("li",[s._v("Mysql的配置文件为         /etc/mysql/conf.d  或者 /etc/mysql/mysql.conf.d")])]),s._v(" "),e("h3",{attrs:{id:"基本启动服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本启动服务"}},[s._v("#")]),s._v(" 基本启动服务")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run --name mysql -e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("  mysql:5.7.32 -e  "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("   给root用户指定密码\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"带参数启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#带参数启动"}},[s._v("#")]),s._v(" 带参数启动")]),s._v(" "),e("p",[s._v("启动一个Mysql后台运行 指定root用户密码和开放"),e("code",[s._v("3306")]),s._v("端口号 指定容器名字 "),e("code",[s._v("使用数据卷")]),s._v("将数据持久化到宿主机 以配置文件启动 要更改所有表使用 "),e("code",[s._v("UTF-8")]),s._v("的默认编码和整理:")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3307")]),s._v(":3306 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--name mysql "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v mysqldata:/var/lib/mysql "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--character-set-server"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8mb4  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v mysqlconfig:/etc/mysql "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nmysql:5.6 \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h2",{attrs:{id:"docker安装redis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker安装redis"}},[s._v("#")]),s._v(" Docker安装Redis")]),s._v(" "),e("h3",{attrs:{id:"下载redis镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载redis镜像"}},[s._v("#")]),s._v(" 下载redis镜像")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull redis:5.0.10\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"启动reids"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动reids"}},[s._v("#")]),s._v(" 启动reids")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(":6379 redis:5.0.10\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"开启redis持久化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开启redis持久化"}},[s._v("#")]),s._v(" 开启redis持久化")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run --name redis -d redis redis-server --appendonly "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n一旦开启持久化后 持久化生产aof文件会被放入容器的/data中\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"通过连接redis-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通过连接redis-cli"}},[s._v("#")]),s._v(" 通过连接redis-cli")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -it --network some-network --rm redis redis-cli -h some-redis\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"修改配置文件-以配置文件启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改配置文件-以配置文件启动"}},[s._v("#")]),s._v(" 修改配置文件 以配置文件启动")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6380")]),s._v(":6379 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /root/redis.conf:/usr/local/redis "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--name redis  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nredis:5.0.10 redis-server  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n/usr/local/etc/redis/redis.conf "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nredis:5.0.10\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);