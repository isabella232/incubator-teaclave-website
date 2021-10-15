(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{573:function(t,e,r){"use strict";r.r(e);var a=r(29),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"dcap-pck-retrievaltool"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dcap-pck-retrievaltool"}},[t._v("#")]),t._v(" DCAP PCK RetrievalTool")]),t._v(" "),r("p",[r("strong",[t._v("This is a demo of using Teaclave Rust SGX with Intel SGX DCAP suite. More examples are coming up.")])]),t._v(" "),r("p",[t._v("Re-write most of Intel's "),r("a",{attrs:{href:"https://github.com/intel/SGXDataCenterAttestationPrimitives/tree/master/tools/PCKRetrievalTool",target:"_blank",rel:"noopener noreferrer"}},[t._v("PCKRetrieval")]),t._v(" tool in Rust:")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("app")]),t._v(" behaves like "),r("a",{attrs:{href:"https://github.com/intel/SGXDataCenterAttestationPrimitives/tree/master/tools/PCKRetrievalTool/App",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("App")])])]),t._v(" "),r("li",[r("code",[t._v("enclave")]),t._v(" is like "),r("a",{attrs:{href:"https://github.com/intel/SGXDataCenterAttestationPrimitives/tree/master/tools/PCKRetrievalTool/Enclave",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("Enclave")])])]),t._v(" "),r("li",[r("code",[t._v("qpl")]),t._v(" is like "),r("a",{attrs:{href:"https://github.com/intel/SGXDataCenterAttestationPrimitives/tree/master/tools/PCKRetrievalTool/Qpl",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("Qpl")])])])]),t._v(" "),r("p",[r("code",[t._v("enclave")]),t._v(" is configured to be a release mode enclave, and only supports DCAP on FLC enabled platform.")]),t._v(" "),r("h1",{attrs:{id:"usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),r("p",[r("code",[t._v("libsgx_dcap_ql.so")]),t._v(" is required for building the app. With the default setup of Intel DCAP package, only "),r("code",[t._v("libsg_dcap_ql.so.1")]),t._v(" presented at "),r("code",[t._v("/usr/lib/x86_64-linux-gnu")]),t._v(". You may probably need to create a symlink for it by")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("cd /usr/lib/x86_64-linux-gnu\nln -s libsgx_dcap_ql.so.1 libsgx_dcap_ql.so\n")])])]),r("p",[t._v("Then the project could be build smoothly:")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ make\n$ cd bin\n$ ./PCKIDRetrievalTool\n")])])]),r("h1",{attrs:{id:"development-tips"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#development-tips"}},[t._v("#")]),t._v(" Development tips")]),t._v(" "),r("h2",{attrs:{id:"hardware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hardware"}},[t._v("#")]),t._v(" Hardware")]),t._v(" "),r("p",[t._v("AFAIK, i7-9700k, i9-9900k, i9-9900ks, Celeron J5005 supports FLC. My platform is i9-9900ks + Gigabyte AORUS Z390 Master. DCAP suite v1.6 works fine. Also Xeon E-2100/E-2200 works.")]),t._v(" "),r("h2",{attrs:{id:"software"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#software"}},[t._v("#")]),t._v(" Software")]),t._v(" "),r("p",[t._v("Regular Intel SGX SDK + DCAP driver + DCAP libraries are enough. I use the following Dockerfile:")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("FROM ubuntu:18.04\nMAINTAINER Yu Ding\n\nENV DEBIAN_FRONTEND=noninteractive\nENV rust_toolchain  nightly-2020-04-07\nENV sdk_bin         https://download.01.org/intel-sgx/sgx-linux/2.9.1/distro/ubuntu18.04-server/sgx_linux_x64_sdk_2.9.101.2.bin\n\nRUN apt-get update && \\\n    apt-get install -y gnupg2 apt-transport-https ca-certificates curl software-properties-common build-essential automake autoconf libtool protobuf-compiler libprotobuf-dev git-core libprotobuf-c0-dev cmake pkg-config expect gdb\n\nRUN curl -fsSL https://download.01.org/intel-sgx/sgx_repo/ubuntu/intel-sgx-deb.key | apt-key add - && \\\n    add-apt-repository \"deb [arch=amd64] https://download.01.org/intel-sgx/sgx_repo/ubuntu bionic main\" && \\\n    apt-get update  && \\\n    apt-get install -y  libsgx-urts libsgx-dcap-ql libsgx-dcap-default-qpl sgx-dcap-pccs \\\n        libsgx-enclave-common-dbgsym libsgx-dcap-ql-dbgsym libsgx-dcap-default-qpl-dbgsym && \\\n    rm -rf /var/lib/apt/lists/* && \\\n    rm -rf /var/cache/apt/archives/* && \\\n    mkdir /var/run/aesmd && \\\n    mkdir /etc/init\n\nRUN curl 'https://static.rust-lang.org/rustup/dist/x86_64-unknown-linux-gnu/rustup-init' --output /root/rustup-init && \\\n    chmod +x /root/rustup-init && \\\n    echo '1' | /root/rustup-init --default-toolchain ${rust_toolchain} && \\\n    echo 'source /root/.cargo/env' >> /root/.bashrc && \\\n    /root/.cargo/bin/rustup component add rust-src rls rust-analysis clippy rustfmt && \\\n    /root/.cargo/bin/cargo install xargo && \\\n    rm /root/rustup-init && rm -rf /root/.cargo/registry && rm -rf /root/.cargo/git\n\nRUN mkdir /root/sgx && \\\n    curl --output /root/sgx/sdk.bin ${sdk_bin} && \\\n    cd /root/sgx && \\\n    chmod +x /root/sgx/sdk.bin && \\\n    echo -e 'no\\n/opt' | /root/sgx/sdk.bin && \\\n    echo 'source /opt/sgxsdk/environment' >> /root/.bashrc && \\\n    echo 'alias start-aesm=\"LD_LIBRARY_PATH=/opt/intel/sgx-aesm-service/aesm /opt/intel/sgx-aesm-service/aesm/aesm_service\"' >> /root/.bashrc && \\\n    rm -rf /root/sgx*\n\nRUN cd /usr/lib/x86_64-linux-gnu && \\\n    ln -s libsgx_dcap_ql.so.1 libsgx_dcap_ql.so\n\nWORKDIR /root\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);