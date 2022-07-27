(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{759:function(s,a,e){"use strict";e.r(a);var t=e(19),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"cka测试3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cka测试3"}},[s._v("#")]),s._v(" CKA测试3")]),s._v(" "),e("h3",{attrs:{id:"【题目1】rbac"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#【题目1】rbac"}},[s._v("#")]),s._v(" 【题目1】RBAC")]),s._v(" "),e("p",[s._v("创建一个名为 pvviewer-role 的适当集群角色和名为 pvviewer-role-binding 的 ClusterRoleBinding授予此服务帐户访问权限以列出集群中的所有 PersistentVolume。")]),s._v(" "),e("p",[s._v("接下来，使用默认命名空间中的镜像：redis 和 serviceAccount：pvviewer 创建一个名为 pvviewer 的 pod。")]),s._v(" "),e("ul",[e("li",[s._v("ServiceAccount: pvviewer")]),s._v(" "),e("li",[s._v("ClusterRole: pvviewer-role")]),s._v(" "),e("li",[s._v("ClusterRoleBinding: pvviewer-role-binding")]),s._v(" "),e("li",[s._v("Pod: pvviewer")]),s._v(" "),e("li",[s._v("Pod configured to use ServiceAccount pvviewer ?")])]),s._v(" "),e("p",[s._v("Now, create a service account "),e("code",[s._v("pvviewer")]),s._v(":")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ kubectl create serviceaccount pvviewer\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("To create a clusterrole:")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ kubectl create clusterrole pvviewer-role --resource"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("persistentvolumes --verb"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("list\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("To create a clusterrolebinding:")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ kubectl create clusterrolebinding pvviewer-role-binding --clusterrole"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("pvviewer-role --serviceaccount"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("default:pvviewer\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("Solution manifest file to create a new pod called "),e("code",[s._v("pvviewer")]),s._v(" as follows:")]),s._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Pod\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" pvviewer\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" pvviewer\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" redis\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" pvviewer\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Add service account name")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("serviceAccountName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" pvviewer\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("h3",{attrs:{id:"【题目2】集群监控"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#【题目2】集群监控"}},[s._v("#")]),s._v(" 【题目2】集群监控")]),s._v(" "),e("p",[s._v("列出集群所有节点的InternalIP。将结果保存到文件 /root/CKA/node_ips。")]),s._v(" "),e("blockquote",[e("p",[s._v("答案应该是以下格式：InternalIP of controlplane"),e("space",[s._v("InternalIP of node01 (in a single line)")])],1)]),s._v(" "),e("p",[s._v("探索 jsonpath 循环")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ kubectl get nodes -o "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("jsonpath")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{.items[*].status.addresses[?(@.type==\"InternalIP\")].address}'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /root/CKA/node_ips\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"【题目3】多容器pod"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#【题目3】多容器pod"}},[s._v("#")]),s._v(" 【题目3】多容器Pod")]),s._v(" "),e("p",[s._v("使用两个容器创建一个名为 multi-pod 的 pod。")]),s._v(" "),e("p",[s._v("容器 1，名称：alpha，镜像：nginx")]),s._v(" "),e("p",[s._v("容器 2：名称：beta，镜像：busybox，命令：sleep 4800")]),s._v(" "),e("ul",[e("li",[s._v("Environment Variables:\ncontainer 1:\n"),e("code",[s._v("name: alpha")])]),s._v(" "),e("li",[s._v("Container 2:\n"),e("code",[s._v("name: beta")])])]),s._v(" "),e("p",[s._v("创建多容器pod multi-pod的解决方案")]),s._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Pod\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" multi"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pod\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" alpha\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("env")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" name\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" alpha\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" busybox\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" beta\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sleep"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"4800"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("env")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" name\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" beta\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])]),e("h3",{attrs:{id:"【题目4】podsecurity"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#【题目4】podsecurity"}},[s._v("#")]),s._v(" 【题目4】PodSecurity")]),s._v(" "),e("p",[s._v("创建一个名为 non-root-pod 的 Pod，镜像：redis: alpine。")]),s._v(" "),e("p",[s._v("runAsUser: 1000\nfsGroup: 2000")]),s._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Pod\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" non"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pod\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("securityContext")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("runAsUser")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("fsGroup")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" non"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pod\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" redis"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("alpine\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("p",[s._v("使用以下命令验证用户和组 ID：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ kubectl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it non-root-pod -- "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"【题目5】networkpolicy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#【题目5】networkpolicy"}},[s._v("#")]),s._v(" 【题目5】NetworkPolicy")]),s._v(" "),e("p",[s._v("创建 NetworkPolicy，名称为 ingress-to-nptest，允许通过端口 80 进入服务连接。")]),s._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" networking.k8s.io/v1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" NetworkPolicy\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ingress"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("nptest\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("namespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" default\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("podSelector")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("matchLabels")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" np"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("policyTypes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" Ingress\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ingress")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("protocol")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" TCP\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("h3",{attrs:{id:"【题目6】污点容忍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#【题目6】污点容忍"}},[s._v("#")]),s._v(" 【题目6】污点容忍")]),s._v(" "),e("p",[s._v("将工作节点 node01 污染为不可调度。完成后，创建一个名为 dev-redis 的 pod，镜像 redis:alpine，以确保工作负载不会被调度到这个工作节点。最后，创建一个名为 prod-redis 和 image:redis:alpine 的新 pod，具有要在 node01 上调度的容忍度。")]),s._v(" "),e("ul",[e("li",[s._v("key: "),e("code",[s._v("env_type")])]),s._v(" "),e("li",[s._v("value: "),e("code",[s._v("production")])]),s._v(" "),e("li",[s._v("operator: "),e("code",[s._v("Equal")])]),s._v(" "),e("li",[s._v("effect: "),e("code",[s._v("NoSchedule")])])]),s._v(" "),e("p",[s._v("在 node01 工作节点上添加污点：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ kubectl taint "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" node01 "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("env_type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("production:NoSchedule\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("现在，部署 dev-redis pod 并确保工作负载不会被调度到这个 node01 工作节点。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ kubectl run dev-redis --image"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("redis:alpine\n$ kubectl get pods -o wide\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("部署名为 prod-redis 的新 Pod 的解决方案清单文件，具有要在 node01 工作节点上调度的容忍度")]),s._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Pod\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" prod"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("redis\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" prod"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("redis\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" redis"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("alpine\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tolerations")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("effect")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" NoSchedule\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("key")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" env_type\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("operator")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Equal\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" production    \n    \n$ kubectl get pods "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("o wide "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v(" grep prod"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("redis\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("h3",{attrs:{id:"【题目7】label"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#【题目7】label"}},[s._v("#")]),s._v(" 【题目7】Label")]),s._v(" "),e("p",[s._v("在属于生产环境和前端层的 hr 命名空间中创建一个名为 hr-pod 的 pod。如果系统中尚不存在，请使用适当的标签并创建所有必需的对象。")]),s._v(" "),e("ul",[e("li",[s._v("image: "),e("code",[s._v("redis:alpine")])])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ kubectl create namespace hr\n\n$ kubectl run hr-pod --image"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("redis:alpine --namespace"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("hr --labels"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("environment"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("production,tier"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("frontend\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"【题目8】故障排查"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#【题目8】故障排查"}},[s._v("#")]),s._v(" 【题目8】故障排查")]),s._v(" "),e("p",[s._v("在 /root/CKA 下创建了一个名为 super.kubeconfig 的 kubeconfig 文件。配置有问题。排除故障并修复它。")]),s._v(" "),e("blockquote",[e("p",[s._v("验证 kube-apiserver 的主机和端口是否正确。")])]),s._v(" "),e("p",[s._v("在 vi 编辑器中打开 super.kubeconfig。 将 9999 端口更改为 6443 并运行以下命令进行验证：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ kubectl cluster-info --kubeconfig"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root/CKA/super.kubeconfig\nTo further debug and diagnose cluster problems, use "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'kubectl cluster-info dump'")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\nThe connection to the server controlplane:9999 was refused - did you specify the right "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" or port?\n\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" super.kubeconfig\n    server: https://controlplane:9999   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#该配置文件是这里出错了需要改成6443")]),s._v("\n  name: kubernetes\ncontexts:\n- context:\n    cluster: kubernetes\n    user: kubernetes-admin\n  name: kubernetes-admin@kubernetes\ncurrent-context: kubernetes-admin@kubernetes\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("root@controlplane:~/CKA$ kubectl cluster-info --kubeconfig"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root/CKA/super.kubeconfig \nKubernetes control plane is running at https://controlplane:6443\nKubeDNS is running at https://controlplane:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy\n\nTo further debug and diagnose cluster problems, use "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'kubectl cluster-info dump'")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h3",{attrs:{id:"【题目9】故障排查"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#【题目9】故障排查"}},[s._v("#")]),s._v(" 【题目9】故障排查")]),s._v(" "),e("p",[s._v("我们创建了一个名为 nginx-deploy 的新部署。将部署扩展到 3 个副本。副本增加了吗？解决问题并修复它。")]),s._v(" "),e("blockquote",[e("p",[s._v("Kubernetes集群节点的controller-manager组件")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("root@controlplane:~/CKA$ kubectl get pods -n kube-system \nNAME                                   READY   STATUS             RESTARTS   AGE\ncoredns-74ff55c5b-4kx9s                "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running            "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          39m\ncoredns-74ff55c5b-5m274                "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running            "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          39m\netcd-controlplane                      "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running            "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          39m\nkube-apiserver-controlplane            "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running            "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          39m\nkube-contro1ler-manager-controlplane   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("/1     ImagePullBackOff   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          6m54s   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#名字错误")]),s._v("\nkube-proxy-c8mhk                       "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running            "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          39m\nkube-proxy-wdgns                       "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running            "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          38m\nkube-scheduler-controlplane            "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running            "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          39m\nweave-net-msws5                        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("/2     Running            "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          38m\nweave-net-nngpc                        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("/2     Running            "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          39m\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])])]),s._v(" "),e("p",[s._v("使用命令 kubectl scale 将副本数增加到 3。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ kubectl scale deploy nginx-deploy --replicas"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n\n$ kubectl get deployments.apps \nNAME           READY   UP-TO-DATE   AVAILABLE   AGE\nnginx-deploy   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/3     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("            "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("           12m\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("控制器管理器负责扩展副本集的 pod。如果您检查 kube-system 命名空间中的控制平面组件，您将看到控制器管理器没有运行。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ kubectl get pods -n kube-system\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("在控制器管理器 pod 内运行的命令不正确。 修复文件中的所有值后，等待控制器管理器 pod 重新启动。 或者，您可以运行 sed 命令一次更改所有值：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/kube-contro1ler-manager/kube-controller-manager/g'")]),s._v(" /etc/kubernetes/manifests/kube-controller-manager.yaml\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这将解决控制器管理器 yaml 文件中的问题。 最后，使用以下命令检查部署：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ kubectl get deploy\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);