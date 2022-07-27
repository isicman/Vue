(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{652:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"kvm安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kvm安装"}},[t._v("#")]),t._v(" KVM安装")]),t._v(" "),a("h3",{attrs:{id:"kvm虚拟机的创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kvm虚拟机的创建"}},[t._v("#")]),t._v(" Kvm虚拟机的创建")]),t._v(" "),a("ul",[a("li",[t._v("Centos 操作系统安装")]),t._v(" "),a("li",[t._v("启用网络连接")]),t._v(" "),a("li",[t._v("额外的软件包")]),t._v(" "),a("li",[t._v("修改虚拟化引擎配置")]),t._v(" "),a("li",[t._v("复制第一台KVM虚拟机")])]),t._v(" "),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://raw.githubusercontent.com/2756864799zhang/image/main/img/202205070145710.png",alt:"img"}}),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://raw.githubusercontent.com/2756864799zhang/image/main/img/202205070145529.png",alt:"img"}}),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://raw.githubusercontent.com/2756864799zhang/image/main/img/202205070145905.png",alt:"img"}}),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://raw.githubusercontent.com/2756864799zhang/image/main/img/202205070145505.png",alt:"img"}}),t._v(" "),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://raw.githubusercontent.com/2756864799zhang/image/main/img/202205070145647.png",alt:"img"}}),t._v(" "),a("h3",{attrs:{id:"自带kvm虚拟化平台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自带kvm虚拟化平台"}},[t._v("#")]),t._v(" 自带KVM虚拟化平台")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@rhel8 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# virsh list")]),t._v("\nId\t\tName\t\t\t\t\tState \n--------------------------------------------------\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"kvm远程管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kvm远程管理"}},[t._v("#")]),t._v(" KVM远程管理")]),t._v(" "),a("ul",[a("li",[t._v("SSH")]),t._v(" "),a("li",[t._v("VNC")]),t._v(" "),a("li",[t._v("X-Windows")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/2756864799zhang/image/main/img/202204111247651.png",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"web的管理方式-cockpit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web的管理方式-cockpit"}},[t._v("#")]),t._v(" web的管理方式：cockpit")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@rhel8 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# systemctl start cockpit.socket --now")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@rhel8 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# systemctl enable cockpit.socket --now")]),t._v("\nCreated symlink /etc/systemd/system/sockets.target.wants/cockpit.socket →/usr/lib/systemd/system/cockpit.socket.\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@rhel8 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# lsof -i:9090")]),t._v("\nCOMMAND PID "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("USER")]),t._v(" FD TYPE DEVICE SIZE/OFF NODE NAME\nsystemd "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" root 29u IPv6 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("65321")]),t._v(" 0t0 TCP *:websm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LISTEN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);