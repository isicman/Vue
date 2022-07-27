(window.webpackJsonp=window.webpackJsonp||[]).push([[298],{778:function(s,t,n){"use strict";n.r(t);var a=n(19),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"docker-compose部署redis主从哨兵"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose部署redis主从哨兵"}},[s._v("#")]),s._v(" Docker-compose部署Redis主从哨兵")]),s._v(" "),n("h3",{attrs:{id:"_1-主从复制概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-主从复制概述"}},[s._v("#")]),s._v(" 1. 主从复制概述")]),s._v(" "),n("p",[s._v("主从复制，是指将一台Redis服务器的数据，复制到其他的Redis服务器。前者称为主节点(master)，后者称为从节点(slave)；数据的复制是单向的，只能由主节点到从节点。")]),s._v(" "),n("p",[s._v("默认情况下，每台Redis服务器都是主节点；且一个主节点可以有多个从节点(或没有从节点)，但一个从节点只能有一个主节点。")]),s._v(" "),n("p",[n("strong",[s._v("主从复制的作用")])]),s._v(" "),n("p",[s._v("主从复制的作用主要包括：")]),s._v(" "),n("ol",[n("li",[s._v("数据冗余：主从复制实现了数据的热备份，是持久化之外的一种数据冗余方式。")]),s._v(" "),n("li",[s._v("故障恢复：当主节点出现问题时，可以由从节点提供服务，实现快速的故障恢复；实际上是一种服务的冗余。")]),s._v(" "),n("li",[s._v("负载均衡：在主从复制的基础上，配合读写分离，可以由主节点提供写服务，由从节点提供读服务（即写Redis数据时应用连接主节点，读Redis数据时应用连接从节点），分担服务器负载；尤其是在写少读多的场景下，通过多个从节点分担读负载，可以大大提高Redis服务器的并发量。")]),s._v(" "),n("li",[s._v("高可用基石：除了上述作用以外，主从复制还是哨兵和集群能够实施的基础，因此说主从复制是Redis高可用的基础")])]),s._v(" "),n("h3",{attrs:{id:"_2-实验环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-实验环境"}},[s._v("#")]),s._v(" 2. 实验环境")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@control01 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker version")]),s._v("\nClient: Docker Engine - Community\n Version:           "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20.10")]),s._v(".12\n API version:       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.41")]),s._v("\n Go version:        go1.16.12\n Git commit:        e91ed57\n Built:             Mon Dec "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":45:41 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("\n OS/Arch:           linux/amd64\n Context:           default\n Experimental:      "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\nServer: Docker Engine - Community\n Engine:\n  Version:          "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20.10")]),s._v(".12\n  API version:      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.41")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("minimum version "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.12")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Go version:       go1.16.12\n  Git commit:       459d0df\n  Built:            Mon Dec "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":44:05 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("\n  OS/Arch:          linux/amd64\n  Experimental:     "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n containerd:\n  Version:          "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.4")]),s._v(".12\n  GitCommit:        7b11cfaabd73bb80907dd23182b9347b4245eb5d\n runc:\n  Version:          "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".2\n  GitCommit:        v1.0.2-0-g52b36a2\n docker-init:\n  Version:          "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.19")]),s._v(".0\n  GitCommit:        de40ad0\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br")])]),n("h3",{attrs:{id:"_3-架构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-架构"}},[s._v("#")]),s._v(" 3. 架构")]),s._v(" "),n("p",[s._v("典型的哨兵架构图如下所示：")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://raw.githubusercontent.com/2756864799zhang/image/main/img/202204111158522.png",alt:"img"}})]),s._v(" "),n("p",[s._v("它由两部分组成，哨兵节点和数据节点：")]),s._v(" "),n("ul",[n("li",[s._v("哨兵节点：哨兵系统由一个或多个哨兵节点组成，哨兵节点是特殊的redis节点，不存储数据。")]),s._v(" "),n("li",[s._v("数据节点：主节点和从节点都是数据节点。")])]),s._v(" "),n("h3",{attrs:{id:"_4-部署主从"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-部署主从"}},[s._v("#")]),s._v(" 4. 部署主从")]),s._v(" "),n("blockquote",[n("p",[s._v("目的：1个主节点、2个从节点和3个哨兵节点")])]),s._v(" "),n("p",[s._v("⚫创建一个家目录用于存放Redis集群的compose的文件。")]),s._v(" "),n("p",[s._v("⚫注意，如果设置了Redis客户端访问密码"),n("strong",[s._v("requirepass")]),s._v("， 那么也要设置相同的副本集同步密码"),n("strong",[s._v("masterauth")]),s._v("。")]),s._v(" "),n("p",[s._v("⚫另外我们后面使用哨兵模式能够完成故障转移，现有的Master可能会变成Slave，故在当前Master容器中也要携带masterauth参数。")]),s._v(" "),n("p",[s._v("⚫执行"),n("strong",[s._v("docker-compose up -d")]),s._v("会产生3个Redis容器，分别映射到宿主机"),n("strong",[s._v("6380、6381、6382")]),s._v("端口， 默认连接在"),n("strong",[s._v("go-default")]),s._v("网桥。")]),s._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@control01 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir -p /home/Docker/docker-compose/redis && cd /home/Docker/docker-compose/redis")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@control01 redis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat docker-compose.yaml ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("master")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" redis\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" redis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("master\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" redis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("requirepass 123456  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("masterauth 123456\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 6380"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("slave1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" redis\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" redis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("slave"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 6381"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  redis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("slaveof redis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("master 6379 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("requirepass 123456 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("masterauth 123456\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("slave2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" redis\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" redis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("slave"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 6382"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" redis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("slaveof redis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("master 6379 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("requirepass 123456 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("masterauth 123456\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("p",[s._v("运行并且查看当前的docker-compose进程。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@control01 redis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker-compose up -d ")]),s._v("\nCreating network "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"redis_default"')]),s._v(" with the default driver\nCreating redis-slave-2 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\nCreating redis-slave-1 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\nCreating redis-master  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@control01 redis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker-compose ps ")]),s._v("\n    Name                   Command               State                    Ports                  \n-------------------------------------------------------------------------------------------------\nredis-master    docker-entrypoint.sh redis "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".   Up      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:6380-"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("/tcp,:::6380-"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("/tcp\nredis-slave-1   docker-entrypoint.sh redis "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".   Up      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:6381-"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("/tcp,:::6381-"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("/tcp\nredis-slave-2   docker-entrypoint.sh redis "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".   Up      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:6382-"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("/tcp,:::6382-"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("/tcp\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h3",{attrs:{id:"_5-部署哨兵"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-部署哨兵"}},[s._v("#")]),s._v(" 5.部署哨兵")]),s._v(" "),n("p",[s._v("⚫很明显我们即将搭建的Sentinel容器需要能访问到以上3个容器，故需要在形成"),n("strong",[s._v("Sentinel的Dokcer-compose")]),s._v(" 使用外置的"),n("code",[s._v("redis-default")]),s._v("网桥。")]),s._v(" "),n("p",[s._v("⚫创建数据卷，将redis哨兵的需要的配置文件通过"),n("strong",[s._v("数据卷持久化挂载")]),s._v("。")]),s._v(" "),n("p",[s._v("⚫查看当前"),n("strong",[s._v("docker网络")]),s._v("，需要查看当前新增的redis主从是使用的那个网络。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@control01 sentinel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker network ls ")]),s._v("\nNETWORK ID     NAME            DRIVER    SCOPE\nf5cf83b79660   bridge          bridge    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("\ndc1bc35819ac   go_default      bridge    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#这里查看的是使用这个")]),s._v("\n7216b238150c   "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v("            "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("\nd0504c7747a7   none            null      "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("⚫编写"),n("strong",[s._v("docker-compose")]),s._v("的yaml文件。")]),s._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@control01 sentinel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pwd")]),s._v("\n/home/Docker/docker"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("compose/redis/sentinel\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@control01 sentinel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat docker-compose.yaml ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("sentinel1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" redis\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" redis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("sentinel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"26379:26379"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" redis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("sentinel /usr/local/etc/redis/sentinel.conf\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./sentinel1.conf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/usr/local/etc/redis/sentinel.conf\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("sentinel2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" redis\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" redis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("sentinel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"26380:26379"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" redis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("sentinel /usr/local/etc/redis/sentinel.conf\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./sentinel2.conf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/usr/local/etc/redis/sentinel.conf\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("sentinel3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" redis\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" redis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("sentinel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"26381:26379"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" redis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("sentinel /usr/local/etc/redis/sentinel.conf\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./sentinel3.conf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/usr/local/etc/redis/sentinel.conf\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("default")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("external")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" go_default\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br")])]),n("p",[s._v("⚫创建哨兵文件，将如下内容拷贝进去。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@control01 sentinel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat  sentinel1.conf ")]),s._v("\nport "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("26379")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v(" /tmp\nsentinel monitor mymaster "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.26")]),s._v(".0.4 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("    \nsentinel auth-pass mymaster "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\nsentinel down-after-milliseconds mymaster "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("30000")]),s._v("\nsentinel parallel-syncs mymaster "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nsentinel failover-timeout mymaster "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("180000")]),s._v("\nsentinel deny-scripts-reconfig "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("blockquote",[n("p",[s._v("注意，以上 172.26.0.4是之前Redis Master/slave启动之后Master节点的IP，通过"),n("strong",[s._v("docker inspect [containerIP]"),n("strong",[s._v("获取, 这里我们要配合设置")]),s._v("Master/Slave")]),s._v("访问密码。")])]),s._v(" "),n("p",[s._v("⚫复制两份"),n("strong",[s._v("sentinel1.conf")]),s._v("文件，容器挂载需要.")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@control01 sentinel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cp sentinel1.conf sentinel2.conf ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@control01 sentinel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cp sentinel1.conf sentinel3.conf ")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("⚫运行并且查看当前的进程。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@control01 sentinel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker-compose up -d ")]),s._v("\nCreating redis-sentinel-2 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\nCreating redis-sentinel-1 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\nCreating redis-sentinel-3 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@control01 sentinel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker-compose ps ")]),s._v("\n      Name                    Command               State                          Ports                       \n---------------------------------------------------------------------------------------------------------------\nredis-sentinel-1   docker-entrypoint.sh redis "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".   Up      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:26379-"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("26379")]),s._v("/tcp,:::26379-"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("26379")]),s._v("/tcp,6379/tcp                                                       \nredis-sentinel-2   docker-entrypoint.sh redis "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".   Up      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:26380-"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("26379")]),s._v("/tcp,:::26380-"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("26379")]),s._v("/tcp,6379/tcp                                                       \nredis-sentinel-3   docker-entrypoint.sh redis "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".   Up      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:26381-"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("26379")]),s._v("/tcp,:::26381-"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("26379")]),s._v("/tcp,6379/tcp       \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h3",{attrs:{id:"_6-验证"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-验证"}},[s._v("#")]),s._v(" 6.验证")]),s._v(" "),n("p",[s._v("⚫进入"),n("strong",[s._v("redis-master")]),s._v("容器查看主从关系。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@control01 redis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker exec -it redis-master /bin/bash ")]),s._v("\nroot@58af77dcfefa:/data"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-cli -h localhost")]),s._v("\nlocalhost:637"),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" auth "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\nOK\nlocalhost:637"),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" info replication\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Replication")]),s._v("\nrole:master\nconnected_slaves:2\nslave0:ip"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.27")]),s._v(".0.2,port"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(",state"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("online,offset"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("826")]),s._v(",lag"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nslave1:ip"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.27")]),s._v(".0.4,port"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(",state"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("online,offset"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("826")]),s._v(",lag"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nmaster_failover_state:no-failover\nmaster_replid:337f0e6d5d9cd7bf50c7b8f08997ea9c5807642b\nmaster_replid2:0000000000000000000000000000000000000000\nmaster_repl_offset:826\nsecond_repl_offset:-1\nrepl_backlog_active:1\nrepl_backlog_size:1048576\nrepl_backlog_first_byte_offset:1\nrepl_backlog_histlen:826\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);