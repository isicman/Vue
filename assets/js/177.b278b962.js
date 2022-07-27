(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{657:function(s,t,a){"use strict";a.r(t);var n=a(19),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"制作windows-server2019-qcow2镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#制作windows-server2019-qcow2镜像"}},[s._v("#")]),s._v(" 制作Windows server2019 qcow2镜像")]),s._v(" "),a("h3",{attrs:{id:"利用vm环境制作该镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利用vm环境制作该镜像"}},[s._v("#")]),s._v(" 利用VM环境制作该镜像")]),s._v(" "),a("h3",{attrs:{id:"_1-制作准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-制作准备"}},[s._v("#")]),s._v(" 1.制作准备")]),s._v(" "),a("blockquote",[a("ul",[a("li",[s._v("准备一个window_server2019.iso镜像")]),s._v(" "),a("li",[s._v("准备一个win10的virtio驱动 （这里我没有找到server2019的virtio驱动所以用的是win10的驱动）")]),s._v(" "),a("li",[s._v("准备好一个qcow2存储盘")])])]),s._v(" "),a("p",[s._v("提前将准备好的镜像放进一个新的目录中，然后需要用到该目录的路径。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls /root/")]),s._v("\ncn_windows_server_2019_updated_march_2019_x64_dvd_c1ffb46c.iso\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd windows/ ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost windows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pwd")]),s._v("\n/root/windows\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost windows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls ")]),s._v("\nwindows_server2019.qcow2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"_2-安装virtio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装virtio"}},[s._v("#")]),s._v(" 2.安装virtio")]),s._v(" "),a("p",[s._v("因为linux本身并没有virtio驱动合适windows，所以需要借助windos10的virtio的驱动。不然安装系统的时候会报错，而且没有网络驱动模块。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost windows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#yum install -y https://fedorapeople.org/groups/virt/virtio-win/repo/stable/virtio-win-0.1.185-2.noarch.rpm")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_3-创建一个存储磁盘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建一个存储磁盘"}},[s._v("#")]),s._v(" 3.创建一个存储磁盘")]),s._v(" "),a("p",[s._v("qemu-img的命令是创建qcow2镜像，可以当作系统盘或者是启动盘。")]),s._v(" "),a("p",[s._v("这里选择创建qcow2的类型，大小为40G。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost windows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# qemu-img create  -f qcow2 windows_server2019.qcow2 40G")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_4-创建一台windows-server2019的实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-创建一台windows-server2019的实例"}},[s._v("#")]),s._v(" 4.创建一台windows_server2019的实例")]),s._v(" "),a("p",[s._v("使用virt-install命令创建")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost windows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# virt-install  --name winserver2019       \\")]),s._v("\n    --ram "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" --vcpus "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" --arch"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("x86_64         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --network "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("network")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("default,model"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("virtio      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --cdrom"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root/cn_windows_server_2019_updated_march_2019_x64_dvd_c1ffb46c.iso "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --disk"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root/windows/windows_server2019.qcow2,format"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("qcow2,device"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("disk,bus"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("virtio   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --disk"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/share/virtio-win/virtio-win-0.1.185.iso      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --disk"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/share/virtio-win/virtio-win-0.1.185_amd64.vfd,device"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("floppy   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --graphics vnc,listen"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0 --video qxl --channel spicevmc       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --os-type windows --os-variant win2k19\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("运行完命令之后会出现如下开始安装然后弹出窗口。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/isicman/images/raw/master/202202091621230.png",alt:"img"}})]),s._v(" "),a("h3",{attrs:{id:"_5-加载驱动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-加载驱动"}},[s._v("#")]),s._v(" 5.加载驱动")]),s._v(" "),a("p",[s._v("创建完成之后进去装系统会遇到问题没有加载驱动，按照我的操作解决。")]),s._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://raw.githubusercontent.com/2756864799zhang/image/main/img/202205070145317.png",alt:"img"}}),s._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://raw.githubusercontent.com/2756864799zhang/image/main/img/202205070145284.png",alt:"img"}}),s._v(" "),a("img",{attrs:{src:"https://raw.githubusercontent.com/2756864799zhang/image/main/img/202205070145386.png",alt:"img"}}),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/2756864799zhang/image/main/img/202205070145227.png",alt:"img"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/2756864799zhang/image/main/img/202205070146089.png",alt:"img"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/2756864799zhang/image/main/img/202204111247182.png",alt:"img"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/2756864799zhang/image/main/img/202205070146566.png",alt:"img"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/2756864799zhang/image/main/img/202205070146516.png",alt:"img"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/2756864799zhang/image/main/img/202205070146038.png",alt:"img"}})]),s._v(" "),a("h3",{attrs:{id:"_6-安装驱动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-安装驱动"}},[s._v("#")]),s._v(" 6.安装驱动")]),s._v(" "),a("p",[s._v("系统安装完成之后，需要安装以太网适配器（原本是坏的是需要安装）")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/2756864799zhang/image/main/img/202204111247141.png",alt:"img"}})]),s._v(" "),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://raw.githubusercontent.com/2756864799zhang/image/main/img/202205070146077.png",alt:"img"}}),s._v(" "),a("p",[s._v("然后关机，保存退出。")]),s._v(" "),a("h3",{attrs:{id:"_7-查看当前的qcow2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-查看当前的qcow2"}},[s._v("#")]),s._v(" 7.查看当前的qcow2")]),s._v(" "),a("p",[s._v("可以发现这个镜像已经14GB，因为带有环境。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/2756864799zhang/image/main/img/202205070146943.png",alt:"img"}})]),s._v(" "),a("h3",{attrs:{id:"_8-镜像压缩-压缩磁盘文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-镜像压缩-压缩磁盘文件"}},[s._v("#")]),s._v(" 8.镜像压缩（"),a("strong",[s._v("压缩磁盘文件")]),s._v("）")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost windows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# virt-sparsify  --compress  /root/windows/windows_server2019.qcow2  /opt/windows_server2019.qcow2 ")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);