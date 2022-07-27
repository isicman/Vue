(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{618:function(t,e,r){"use strict";r.r(e);var v=r(19),i=Object(v.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"kubevirt简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kubevirt简介"}},[t._v("#")]),t._v(" KubeVirt简介")]),t._v(" "),r("h3",{attrs:{id:"什么是-kubevirt"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是-kubevirt"}},[t._v("#")]),t._v(" 什么是 KubeVirt？")]),t._v(" "),r("p",[r("code",[t._v("Kubevirt")]),t._v(" 是Redhat开源的以容器方式运行虚拟机的项目，以k8s add-on方式，利用k8s CRD为增加资源类型VirtualMachineInstance（VMI）， 使用容器的image registry去创建虚拟机并提供VM生命周期管理。 CRD的方式是的kubevirt对虚拟机的管理不局限于pod管理接口，但是也无法使用pod的RS DS Deployment等管理能力，也意味着 kubevirt如果想要利用pod管理能力，要自主去实现，目前kubevirt实现了类似RS的功能。 kubevirt目前支持的runtime是docker和runv。")]),t._v(" "),r("h3",{attrs:{id:"为什么使用-kubevirt"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用-kubevirt"}},[t._v("#")]),t._v(" 为什么使用 KubeVirt？")]),t._v(" "),r("p",[t._v("KubeVirt 技术可满足已采用或想要采用Kubernetes开发团队的需求，但他们拥有现有的基于虚拟机的工作负载，无法轻松地对其进行容器化。更具体地说，该技术提供了一个统一的开发平台，开发人员可以在该平台上构建，修改和部署驻留在公共共享环境中的应用程序容器和虚拟机中的应用程序。")]),t._v(" "),r("p",[t._v("好处是广泛而重大的。依赖现有基于虚拟机的工作负载团队有权快速将应用程序容器化。通过将虚拟化工作负载直接放置在开发工作流中，团队可以随时间分解它们，同时仍然可以按需使用剩余的虚拟化组件。")]),t._v(" "),r("h3",{attrs:{id:"kubevirt-能做什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kubevirt-能做什么"}},[t._v("#")]),t._v(" KubeVirt 能做什么？")]),t._v(" "),r("ul",[r("li",[t._v("利用 KubeVirt 和 Kubernetes 来管理虚拟机")]),t._v(" "),r("li",[t._v("一个平台上将现有的虚拟化与容器化打通并管理")]),t._v(" "),r("li",[t._v("支持虚拟机应用与容器化应用实现内部交互访问")])]),t._v(" "),r("h3",{attrs:{id:"kubevirt-架构设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kubevirt-架构设计"}},[t._v("#")]),t._v(" Kubevirt 架构设计")]),t._v(" "),r("p",[t._v("Kubevirt 主要实现了下面几种资源，以实现对虚拟机的管理：")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("VirtualMachineInstance（VMI）")]),t._v(" : 类似于 kubernetes Pod，是管理虚拟机的最小资源。一个 VirtualMachineInstance 对象即表示一台正在运行的虚拟机实例，包含一个虚拟机所需要的各种配置。")]),t._v(" "),r("li",[r("code",[t._v("VirtualMachine（VM）")]),t._v(" : 为群集内的 VirtualMachineInstance 提供管理功能，例如开机/关机/重启虚拟机，确保虚拟机实例的启动状态，与虚拟机实例是 1:1 的关系，类似与 spec.replica 为 1 的 StatefulSet。")]),t._v(" "),r("li",[r("code",[t._v("VirtualMachineInstanceReplicaSet :")]),t._v(" 类似 ReplicaSet，可以启动指定数量的 VirtualMachineInstance，并且保证指定数量的 VirtualMachineInstance 运行，可以配置 HPA。")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/2756864799zhang/image/main/img/202204151313008.webp",alt:"img"}})]),t._v(" "),r("p",[r("strong",[t._v("virt-api :")]),t._v(" 负责提供一些 KubeVirt 特有的 api，像是 "),r("code",[t._v("console, vnc, startvm, stopvm")]),t._v(" 等。")]),t._v(" "),r("p",[r("strong",[t._v("virt-controller :")]),t._v(" 管理和监控 VMI 对象及其关联的 Pod，对其状态进行更新。")]),t._v(" "),r("p",[r("strong",[t._v("virt-hander :")]),t._v(" 以 DaemonSet 运行在每一个节点上，监听 VMI 的状态向上汇报，管理 VMI 的生命周期。")]),t._v(" "),r("p",[r("strong",[t._v("virt-launcher :")]),t._v(" 以 Pod 方式运行，每个 VMI Object 都会对应一个 virt-launcher Pod，容器内有单独的 "),r("code",[t._v("libvirtd")]),t._v("，用于启动和管理虚拟机。")]),t._v(" "),r("p",[t._v("这里还有一个简化版：")]),t._v(" "),r("p",[t._v("这个图里的 Agent 其实就是 virt-hander。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/2756864799zhang/image/main/img/202204151313716.png",alt:"在 k8s 中使用 Kubevirt 运行管理 Windows 10 操作系统_java_04"}})]),t._v(" "),r("h3",{attrs:{id:"虚拟机创建流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机创建流程"}},[t._v("#")]),t._v(" 虚拟机创建流程")]),t._v(" "),r("ul",[r("li",[t._v("client 发送创建VMI命令达到k8s API server.")]),t._v(" "),r("li",[t._v("K8S API 创建VMI")]),t._v(" "),r("li",[t._v("virt-controller监听到VMI创建时，根据VMI spec生成pod spec文件，创建pods")]),t._v(" "),r("li",[t._v("k8s调度创建pods")]),t._v(" "),r("li",[t._v("virt-controller监听到pods创建后，根据pods的调度node，更新VMI 的nodeName")]),t._v(" "),r("li",[t._v("virt-handler监听到VMI nodeName与自身节点匹配后，与pod内的virt-launcher通信，virt-laucher创建虚拟机，并负责虚拟机生命周期管理")])]),t._v(" "),r("h3",{attrs:{id:"磁盘和卷"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#磁盘和卷"}},[t._v("#")]),t._v(" 磁盘和卷")]),t._v(" "),r("p",[t._v("虚拟机镜像（磁盘）是启动虚拟机必不可少的部分，KubeVirt 中提供多种方式的虚拟机磁盘，虚拟机镜像（磁盘）使用方式非常灵活。这里列出几种比较常用的：")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("PersistentVolumeClaim :")]),t._v(" 使用 "),r("code",[t._v("PVC")]),t._v(" 做为后端存储，适用于数据持久化，即在虚拟机重启或者重建后数据依旧存在。使用的 PV 类型可以是 block 和 filesystem，使用 filesystem 时，会使用 PVC 上的 /disk.img，格式为 RAW 格式的文件作为硬盘。"),r("code",[t._v("block")]),t._v(" 模式时，使用 block volume 直接作为原始块设备提供给虚拟机。")]),t._v(" "),r("li",[r("strong",[t._v("ephemeral :")]),t._v(" 基于后端存储在本地做一个写时复制（COW）镜像层，所有的写入都在本地存储的镜像中，VM 实例停止时写入层就被删除，后端存储上的镜像不变化。")]),t._v(" "),r("li",[r("strong",[t._v("containerDisk :")]),t._v(" 基于 "),r("code",[t._v("scratch")]),t._v(" 构建的一个 docker image，镜像中包含虚拟机启动所需要的虚拟机镜像，可以将该 docker image push 到 registry，使用时从 registry 拉取镜像，直接使用 containerDisk 作为 VMI 磁盘，数据是无法持久化的。")]),t._v(" "),r("li",[r("strong",[t._v("hostDisk :")]),t._v(" 使用节点上的磁盘镜像，类似于 "),r("code",[t._v("hostpath")]),t._v("，也可以在初始化时创建空的镜像。")]),t._v(" "),r("li",[r("strong",[t._v("dataVolume :")]),t._v(" 提供在虚拟机启动流程中自动将虚拟机磁盘导入 pvc 的功能，在不使用 DataVolume 的情况下，用户必须"),r("code",[t._v("先准备带有磁盘映像的 pvc")]),t._v("，然后再将其分配给 VM 或 VMI。dataVolume 拉取镜像的来源可以时 http，对象存储，另一块 PVC 等。")])])])}),[],!1,null,null,null);e.default=i.exports}}]);