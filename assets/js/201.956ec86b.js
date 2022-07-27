(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{681:function(s,a,t){"use strict";t.r(a);var n=t(19),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"nginx高可用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx高可用"}},[s._v("#")]),s._v(" Nginx高可用")]),s._v(" "),t("h2",{attrs:{id:"什么是keepalived"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是keepalived"}},[s._v("#")]),s._v(" 什么是Keepalived")]),s._v(" "),t("p",[s._v("Keepalived是一个免费开源的，用C编写的类似于layer3, 4 & 7交换机制软件，具备我们平时说的第3层、第4层和第7层交换机的功能。主要提供loadbalancing（负载均衡）和 high-availability（高可用）功能，负载均衡实现需要依赖Linux的虚拟服务内核模块（ipvs），而高可用是通过VRRP协议实现多台机器之间的故障转移服务。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181114103932859.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3OTM5MjUx,size_16,color_FFFFFF,t_70",alt:"img"}})]),s._v(" "),t("p",[s._v("上图是Keepalived的功能体系结构，大致分两层：用户空间（user space）和内核空间（kernel space）。")]),s._v(" "),t("h2",{attrs:{id:"keepalived特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keepalived特点"}},[s._v("#")]),s._v(" Keepalived特点")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("**"),t("code",[s._v("内核空间：")]),s._v("**主要包括IPVS（IP虚拟服务器，用于实现网络服务的负载均衡）和NETLINK（提供高级路由及其他相关的网络功能）两个部份。")])]),s._v(" "),t("li",[t("p",[t("strong",[t("code",[s._v("用户空间：")])])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("WatchDog：负载监控checkers和VRRP进程的状况")])]),s._v(" "),t("li",[t("p",[s._v("VRRP Stack：负载负载均衡器之间的失败切换FailOver，如果只用一个负载均稀器，则VRRP不是必须的。")])]),s._v(" "),t("li",[t("p",[s._v("Checkers：负责真实服务器的健康检查healthchecking，是keepalived最主要的功能。换言之，可以没有VRRP Stack，但健康检查healthchecking是一定要有的。")])]),s._v(" "),t("li",[t("p",[s._v("IPVS wrapper：用户发送设定的规则到内核ipvs代码")])]),s._v(" "),t("li",[t("p",[s._v("Netlink Reflector：用来设定vrrp的vip地址等。")])]),s._v(" "),t("li",[t("p",[s._v("Keepalived的所有功能是配置keepalived.conf文件来实现的。")])])])])]),s._v(" "),t("h2",{attrs:{id:"keepalived实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keepalived实现"}},[s._v("#")]),s._v(" Keepalived实现")]),s._v(" "),t("ul",[t("li",[s._v("需要两台nginx服务器")]),s._v(" "),t("li",[s._v("需要keepalived")]),s._v(" "),t("li",[s._v("需要虚拟IP")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://i.bmp.ovh/imgs/2022/02/50cf6d99b1d04309.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"配置高可用准备工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置高可用准备工作"}},[s._v("#")]),s._v(" 配置高可用准备工作")]),s._v(" "),t("ul",[t("li",[s._v("需要两台服务器192.168.0.136和192.168.0.137")]),s._v(" "),t("li",[s._v("在两台服务器安装nginx")]),s._v(" "),t("li",[s._v("在两台服务器安装keepalived")])]),s._v(" "),t("h3",{attrs:{id:"_1、两台服务器安装nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、两台服务器安装nginx"}},[s._v("#")]),s._v(" 1、两台服务器安装nginx")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@apache ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# wget -O /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@apache ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum install -y  nginx")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"_2、两台服务器安装keepalived"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、两台服务器安装keepalived"}},[s._v("#")]),s._v(" 2、两台服务器安装Keepalived")]),s._v(" "),t("p",[s._v("安装之后，在etc/里面生成目录keepalived，有文件keepalived.conf")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@nginx1 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum install -y keepalived")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@nginx2 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum install -y keepalived")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@nginx1 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /etc/keepalived/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@nginx1 keepalived"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll")]),s._v("\ntotal "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n-rw-r--r-- "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3598")]),s._v(" Oct  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v(" keepalived.conf    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#基本的配置都是这这里完成")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"_2、配置keepalived"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、配置keepalived"}},[s._v("#")]),s._v(" 2、配置Keepalived")]),s._v(" "),t("p",[s._v("keepalived的配置文件详解，配置成如下配置")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@nginx1 keepalived"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# echo "127.0.0.1 LVS_DEVEL" >> /etc/hosts ')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@nginx2 keepalived"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# echo "127.0.0.1 LVS_DEVEL" >> /etc/hosts ')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@nginx1 keepalived"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat keepalived.conf")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" Configuration File "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" keepalived\n\t\nglobal_defs "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\t\t\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局模块")]),s._v("\n   notification_email "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     acassen@firewall.loc\n     failover@firewall.loc\n     sysadmin@firewall.loc\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n   notification_email_from Alexandre.Cassen@firewall.loc\n   smtp_server "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".200.1\n   smtp_connect_timeout "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("\n   router_id LVS_DEVELBACK  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 访问到主机")]),s._v("\n   vrrp_skip_check_adv_addr\n   vrrp_garp_interval "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n   vrrp_gna_interval "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nvrrp_script chk_http_port "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行脚本")]),s._v("\n\tscript "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/opt/nginx_check.sh"')]),s._v("   \n    interval "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检测脚本执行的间隔")]),s._v("\n    weight "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nvrrp_instance VI_1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    state MASTER        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 备份服务器上将MASTER修改成BACKUP")]),s._v("\n    interface eth0\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定网卡名称")]),s._v("\n    virtual_router_id "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("51")]),s._v("\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 主备机的virtual_router_id必须相同")]),s._v("\n    priority "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 主备机取值不同的优先级，主机值比较大，备份值比较小")]),s._v("\n    advert_int "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    authentication "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        auth_type PASS\n        auth_pass "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1111")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    track_script "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        chk_http_port\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    virtual_ipaddress "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 虚拟IP地址")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.119\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br")])]),t("h3",{attrs:{id:"_3、编写执行脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、编写执行脚本"}},[s._v("#")]),s._v(" 3、编写执行脚本")]),s._v(" "),t("p",[s._v("该脚本是存放在opt下面的")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@nginx1 opt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat nginx_check.sh")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("A")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -C nginx - no-header "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$A")]),s._v(" -eq "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        systemctl start nginx\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -C nginx --no-header "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" -eq "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("killall")]),s._v(" keepalived\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h3",{attrs:{id:"_4、启动测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、启动测试"}},[s._v("#")]),s._v(" 4、启动测试")]),s._v(" "),t("p",[s._v("重启服务之后通过访问192.168.0.119的虚拟ip")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@nginx1 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl restart keepalived")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@nginx2 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl restart keepalived")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://i.bmp.ovh/imgs/2022/02/cdb72fb92d1f65cf.png",alt:""}})])])}),[],!1,null,null,null);a.default=e.exports}}]);