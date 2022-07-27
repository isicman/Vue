(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{654:function(s,n,a){"use strict";a.r(n);var t=a(19),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"使用virt-install安装虚拟机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用virt-install安装虚拟机"}},[s._v("#")]),s._v(" 使用virt-install安装虚拟机")]),s._v(" "),a("h3",{attrs:{id:"命令参数参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令参数参考"}},[s._v("#")]),s._v(" 命令参数参考")]),s._v(" "),a("ul",[a("li",[s._v("通过本地的iso文件来进行安装")]),s._v(" "),a("li",[s._v("Kickstart安装")]),s._v(" "),a("li",[s._v("网络安装")]),s._v(" "),a("li",[s._v("PXE安装")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@Dell ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# virt-install --help")]),s._v("\nusage: virt-install --name NAME --memory MB STORAGE INSTALL "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n从指定安装源创建新虚拟机。\n\noptional arguments:\n  -h, --help            show this "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" message and "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n  --version             show program"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'s version number and exit\n  --connect URI         通过 libvirt URI 连接到虚拟机管理程序\n\n通用选项:\n  -n NAME, --name NAME  客户机实例名称\n  --memory MEMORY         Configure guest memory allocation. Ex:\n                        --memory 1024 (in MiB)\n                        --memory 512,maxmemory=1024\n                        --memory 512,maxmemory=1024,hotplugmemorymax=2048,hotplugmemoryslots=2\n  --vcpus VCPUS         配置客户机虚拟 CPU(vcpu) 数量。例如：\n                        --vcpus 5\n                        --vcpus 5,maxcpus=10,cpuset=1-4,6,8\n                        --vcpus sockets=2,cores=4,threads=2\n  --cpu CPU             CPU model and features. Ex:\n                        --cpu coreduo,+x2apic\n                        --cpu host-passthrough\n                        --cpu host\n  --metadata METADATA   配置客户机元数据。例如：\n                        --metadata name=foo,title="My pretty title",uuid=...\n                        --metadata description="My nice long description"\n\n安装方法选项:\n  --cdrom CDROM         光驱安装介质\n  -l LOCATION, --location LOCATION\n                        安装源 (例如：nfs:host:/path, http://host/path,\n                        ftp://host/path)\n  --pxe                 使用 PXE 协议从网络引导\n  --import              在已有的磁盘镜像中构建客户机\n  --livecd              将光驱介质视为 Live CD\n  -x EXTRA_ARGS, --extra-args EXTRA_ARGS\n                        将附加参数添加到由 --location\n                        引导的内核中\n  --initrd-inject INITRD_INJECT\n                        添加指定文件到由 --location 指定的 initrd\n                        根中\n  --os-variant DISTRO_VARIANT\n                        在客户机上安装的操作系统，例如：\'')]),s._v("fedor\n                        a18"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'、'")]),s._v("rhel6"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'、'")]),s._v("winxp"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("' 等。\n  --boot BOOT           配置客户机引导设置。例如：\n                        --boot hd,cdrom,menu=on\n                        --boot init=/sbin/init (针对容器)\n  --idmap IDMAP         为 LXC 容器启用用户名称空间。例如：\n                        --idmap uid_start=0,uid_target=1000,uid_count=10\n\n设备选项:\n  --disk DISK           指定存储的各种选项。例如：\n                        --disk size=10 (在默认位置创建 10GiB 镜像)\n                        --disk /my/existing/disk,cache=none\n                        --disk device=cdrom,bus=scsi\n                        --disk=?\n  -w NETWORK, --network NETWORK\n                        配置客户机网络接口。例如：\n                        --network bridge=mybr0\n                        --network network=my_libvirt_virtual_net\n                        --network network=mynet,model=virtio,mac=00:11...\n                        --network none\n                        --network help\n  --graphics GRAPHICS   配置客户机显示设置。例如：\n                        --graphics vnc\n                        --graphics spice,port=5901,tlsport=5902\n                        --graphics none\n                        --graphics vnc,password=foobar,port=5910,keymap=ja\n  --controller CONTROLLER\n                        配置客户机控制器设备。例如：\n                        --controller type=usb,model=ich9-ehci1\n  --input INPUT         配置客户机输入设备。例如：\n                        --input tablet\n                        --input keyboard,bus=usb\n  --serial SERIAL       配置客户机串口设备\n  --parallel PARALLEL   配置客户机并口设备\n  --channel CHANNEL     配置客户机通信通道\n  --console CONSOLE     配置文本控制台连接主机与客户机\n  --hostdev HOSTDEV     配置物理 USB/PCI 等主机设备与客户机共享\n  --filesystem FILESYSTEM\n                        传递主机目录到客户机。例如：\n                        --filesystem /my/source/dir,/dir/in/guest\n                        --filesystem template_name,/,type=template\n  --sound [SOUND]       配置客户机声音设备仿真\n  --watchdog WATCHDOG   配置客户机 watchdog 设备\n  --video VIDEO         配置客户机视频硬件。\n  --smartcard SMARTCARD\n                        配置客户机智能卡设备。例如：\n                        --smartcard mode=passthrough\n  --redirdev REDIRDEV   配置客户机重定向设备。例如：\n                        --redirdev usb,type=tcp,server=192.168.1.1:4000\n  --memballoon MEMBALLOON\n                        配置客户机 memballoon 设备。例如：\n                        --memballoon model=virtio\n  --tpm TPM             配置客户机 TPM 设备。例如：\n                        --tpm /dev/tpm\n  --rng RNG             Configure a guest RNG device. Ex:\n                        --rng /dev/urandom\n  --panic PANIC         配置客户机 panic 设备。例如：\n                        --panic default\n  --memdev MEMDEV       Configure a guest memory device. Ex:\n                        --memdev dimm,target_size=1024\n\n客户机配置选项:\n  --security SECURITY   设置域安全驱动配置。\n  --cputune CPUTUNE     Tune CPU parameters for the domain process.\n  --numatune NUMATUNE   为域进程调整 NUMA 策略。\n  --memtune MEMTUNE     为域进程调整内存策略。\n  --blkiotune BLKIOTUNE\n                        为域进程调整 blkio 策略。\n  --memorybacking MEMORYBACKING\n                        为域进程设置内存后备策略。例如：\n                        --memorybacking hugepages=on\n  --features FEATURES   设置域 <features> XML。例如：\n                        --features acpi=off\n                        --features apic=on,eoi=on\n  --clock CLOCK         设置域 <clock> XML。例如：\n                        --clock offset=localtime,rtc_tickpolicy=catchup\n  --pm PM               配置 VM 电源管理功能\n  --events EVENTS       配置 VM 生命周期管理策略\n  --resource RESOURCE   配置 VM 资源分区(cgroups)\n  --sysinfo SYSINFO     Configure SMBIOS System Information. Ex:\n                        --sysinfo emulate\n                        --sysinfo host\n                        --sysinfo bios_vendor=Vendor_Inc.,bios_version=1.2.3-abc,...\n                        --sysinfo system_manufacturer=System_Corp.,system_product=Computer,...\n                        --sysinfo baseBoard_manufacturer=Baseboard_Corp.,baseBoard_product=Motherboard,...\n  --qemu-commandline QEMU_COMMANDLINE\n                        Pass arguments directly to the qemu emulator. Ex:\n                        --qemu-commandline='")]),s._v("-display gtk,gl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on'\n                        --qemu-commandline "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("env")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("DISPLAY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(":0.1\n\n虚拟化平台选项:\n  -v, --hvm                这个客户机应该是一个全虚拟化客户机\n  -p, --paravirt          这个客户机应该是一个半虚拟化客户机\n  --container             这个客户机应该是一个容器客户机\n  --virt-type HV_TYPE   要使用的管理程序名称 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("kvm, qemu, xen, "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  --arch ARCH           模拟 CPU 架构\n  --machine MACHINE     机器类型为仿真类型\n\n其它选项:\n  --autostart           主机启动时自动启动域。\n  --transient           Create a transient domain.\n  --wait WAIT           请等待数分钟以便完成安装。\n  --noautoconsole       不要自动尝试连接到客户端控制台\n  --noreboot            安装完成后不启动客户机。\n  --print-xml "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("XMLONLY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n                        打印生成的 XML 域，而不是创建客户机。\n  --dry-run             运行安装程序，但不创建设备或定义客户\n                        机。\n  --check CHECK         启用或禁用验证检查。例如：\n                        --check "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("path_in_use")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("off\n                        --check "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("all")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("off\n  -q, --quiet           抑制非错误输出\n  -d, --debug           输入故障排除信息\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br"),a("span",{staticClass:"line-number"},[s._v("102")]),a("br"),a("span",{staticClass:"line-number"},[s._v("103")]),a("br"),a("span",{staticClass:"line-number"},[s._v("104")]),a("br"),a("span",{staticClass:"line-number"},[s._v("105")]),a("br"),a("span",{staticClass:"line-number"},[s._v("106")]),a("br"),a("span",{staticClass:"line-number"},[s._v("107")]),a("br"),a("span",{staticClass:"line-number"},[s._v("108")]),a("br"),a("span",{staticClass:"line-number"},[s._v("109")]),a("br"),a("span",{staticClass:"line-number"},[s._v("110")]),a("br"),a("span",{staticClass:"line-number"},[s._v("111")]),a("br"),a("span",{staticClass:"line-number"},[s._v("112")]),a("br"),a("span",{staticClass:"line-number"},[s._v("113")]),a("br"),a("span",{staticClass:"line-number"},[s._v("114")]),a("br"),a("span",{staticClass:"line-number"},[s._v("115")]),a("br"),a("span",{staticClass:"line-number"},[s._v("116")]),a("br"),a("span",{staticClass:"line-number"},[s._v("117")]),a("br"),a("span",{staticClass:"line-number"},[s._v("118")]),a("br"),a("span",{staticClass:"line-number"},[s._v("119")]),a("br"),a("span",{staticClass:"line-number"},[s._v("120")]),a("br"),a("span",{staticClass:"line-number"},[s._v("121")]),a("br"),a("span",{staticClass:"line-number"},[s._v("122")]),a("br"),a("span",{staticClass:"line-number"},[s._v("123")]),a("br"),a("span",{staticClass:"line-number"},[s._v("124")]),a("br"),a("span",{staticClass:"line-number"},[s._v("125")]),a("br"),a("span",{staticClass:"line-number"},[s._v("126")]),a("br"),a("span",{staticClass:"line-number"},[s._v("127")]),a("br"),a("span",{staticClass:"line-number"},[s._v("128")]),a("br"),a("span",{staticClass:"line-number"},[s._v("129")]),a("br"),a("span",{staticClass:"line-number"},[s._v("130")]),a("br"),a("span",{staticClass:"line-number"},[s._v("131")]),a("br"),a("span",{staticClass:"line-number"},[s._v("132")]),a("br"),a("span",{staticClass:"line-number"},[s._v("133")]),a("br"),a("span",{staticClass:"line-number"},[s._v("134")]),a("br"),a("span",{staticClass:"line-number"},[s._v("135")]),a("br"),a("span",{staticClass:"line-number"},[s._v("136")]),a("br"),a("span",{staticClass:"line-number"},[s._v("137")]),a("br"),a("span",{staticClass:"line-number"},[s._v("138")]),a("br"),a("span",{staticClass:"line-number"},[s._v("139")]),a("br"),a("span",{staticClass:"line-number"},[s._v("140")]),a("br"),a("span",{staticClass:"line-number"},[s._v("141")]),a("br"),a("span",{staticClass:"line-number"},[s._v("142")]),a("br"),a("span",{staticClass:"line-number"},[s._v("143")]),a("br"),a("span",{staticClass:"line-number"},[s._v("144")]),a("br"),a("span",{staticClass:"line-number"},[s._v("145")]),a("br"),a("span",{staticClass:"line-number"},[s._v("146")]),a("br"),a("span",{staticClass:"line-number"},[s._v("147")]),a("br"),a("span",{staticClass:"line-number"},[s._v("148")]),a("br"),a("span",{staticClass:"line-number"},[s._v("149")]),a("br"),a("span",{staticClass:"line-number"},[s._v("150")]),a("br"),a("span",{staticClass:"line-number"},[s._v("151")]),a("br"),a("span",{staticClass:"line-number"},[s._v("152")]),a("br"),a("span",{staticClass:"line-number"},[s._v("153")]),a("br"),a("span",{staticClass:"line-number"},[s._v("154")]),a("br"),a("span",{staticClass:"line-number"},[s._v("155")]),a("br"),a("span",{staticClass:"line-number"},[s._v("156")]),a("br")])]),a("h3",{attrs:{id:"权限调整"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#权限调整"}},[s._v("#")]),s._v(" 权限调整")]),s._v(" "),a("p",[s._v("将user和group前面的#去掉，让root用户可以操作")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@Dell ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim /etc/libvirt/qemu.conf")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Some examples of valid values are:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#       user = "qemu"   # A user named "qemu"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#       user = "+0"     # Super user (uid=0)')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#       user = "100"    # A user named "100" or a user with uid=100')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\nuser "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The group for QEMU processes run by the system instance. It can be")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# specified in a similar way to user.")]),s._v("\ngroup "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h3",{attrs:{id:"重启libvirtd服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重启libvirtd服务"}},[s._v("#")]),s._v(" 重启libvirtd服务")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@Dell ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl daemon-reload        //重载配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@Dell ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl restart libvirtd        //重启libvirtd服务")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@Dell ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl status libvirtd        //查看libvirtd服务状态")]),s._v("\n● libvirtd.service - Virtualization daemon\n   Loaded: loaded "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/usr/lib/systemd/system/libvirtd.service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" enabled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" vendor preset: enabled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   Active: active "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("running"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" since 二 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-04-23 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":00:47 CST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 7s ago\n     Docs: man:libvirtd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n           https://libvirt.org\n Main PID: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23595")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("libvirtd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    Tasks: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("limit: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32768")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   CGroup: /system.slice/libvirtd.service\n           ├─ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5716")]),s._v(" /usr/sbin/dnsmasq --conf-file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/lib/libvirt/dnsmasq/default.conf --leasefile-ro --dhcp-script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/libexec/libvirt_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n           ├─ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5717")]),s._v(" /usr/sbin/dnsmasq --conf-file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/lib/libvirt/dnsmasq/default.conf --leasefile-ro --dhcp-script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/libexec/libvirt_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n           └─23595 /usr/sbin/libvirtd\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h3",{attrs:{id:"镜像文件存放"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#镜像文件存放"}},[s._v("#")]),s._v(" 镜像文件存放")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@Dell ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir images")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@Dell ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd images/")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@Dell ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ls")]),s._v("\nrhel-8.0-x86_64-dvd.iso\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"安装虚拟机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装虚拟机"}},[s._v("#")]),s._v(" 安装虚拟机")]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("用cdrom引导安装虚拟机")])])]),s._v(" "),a("ol",[a("li",[a("h5",{attrs:{id:"创建镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建镜像"}},[s._v("#")]),s._v(" 创建镜像")])])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost images"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# qemu-img create -f qcow2 vm1-disk1.qcow2 10G")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[a("h5",{attrs:{id:"创建虚拟机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建虚拟机"}},[s._v("#")]),s._v(" 创建虚拟机")])])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost images"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# virt-install \\")]),s._v("\n        --name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("redhat  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n        --disk "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root/images/vm1-disk1.qcow2  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n        --vcpus"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" --ram"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n        --cdrom"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root/images/rhel-8.0-x86_64-dvd.iso  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n        --network "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("network")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("default  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("     --netwoek "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bridge")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("br0，model"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("virtio "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n        --graphics vnc,listen"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n        --os-type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("linux  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n        --os-variant rhel8.0  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"查看虚拟机状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看虚拟机状态"}},[s._v("#")]),s._v(" 查看虚拟机状态")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/2756864799zhang/image/main/img/202204111248598.png",alt:"img"}})])])}),[],!1,null,null,null);n.default=e.exports}}]);