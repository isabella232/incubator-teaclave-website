(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{463:function(e,t,a){"use strict";a.r(t);var s=a(29),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"teaclave-sgx-sdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#teaclave-sgx-sdk"}},[e._v("#")]),e._v(" Teaclave SGX SDK")]),e._v(" "),a("p",[a("a",{attrs:{href:"LICENSE"}},[a("img",{attrs:{src:"https://img.shields.io/badge/license-Apache-green.svg",alt:"License"}})]),e._v(" "),a("a",{attrs:{href:"https://teaclave.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/site-homepage-blue",alt:"Homepage"}})])]),e._v(" "),a("p",[e._v("Apache Teaclave (incubating) SGX SDK helps developers to write Intel SGX\napplications in the Rust programming language, and also known as Rust SGX SDK.")]),e._v(" "),a("h2",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),a("p",[e._v("The SDK container can either be built from source or pulled from docker hub and\nrun as a docker container.")]),e._v(" "),a("h3",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("p",[e._v("The docker image now supports Intel ME. If you need it, please refer to the\nsgxtime "),a("RouterLink",{attrs:{to:"/teaclave-sgx-sdk/documents/sgxtime.html"}},[e._v("readme")]),e._v(" for instructions.")],1),e._v(" "),a("h3",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("ul",[a("li",[a("h4",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[e._v("#")]),e._v(" Docker")])]),e._v(" "),a("li",[a("h4",{attrs:{id:"intel-sgx-oot-2-11-0-driver-or-dcap-1-36-2-driver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intel-sgx-oot-2-11-0-driver-or-dcap-1-36-2-driver"}},[e._v("#")]),e._v(" Intel SGX OOT 2.11.0 Driver or DCAP 1.36.2 Driver")])]),e._v(" "),a("li",[a("h4",{attrs:{id:"intel-sgx-sdk-v2-12"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intel-sgx-sdk-v2-12"}},[e._v("#")]),e._v(" Intel SGX SDK v2.12")])]),e._v(" "),a("li",[a("h4",{attrs:{id:"intel-sgx-psw"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intel-sgx-psw"}},[e._v("#")]),e._v(" Intel SGX PSW")])]),e._v(" "),a("li",[a("h4",{attrs:{id:"rust-nightly-2020-10-25"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rust-nightly-2020-10-25"}},[e._v("#")]),e._v(" Rust nightly-2020-10-25")])])]),e._v(" "),a("p",[e._v("You can find the "),a("a",{attrs:{href:"https://download.01.org/intel-sgx/sgx-linux/2.9/docs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("installation guides")]),e._v(" for Intel SGX software on the 01.org website.")]),e._v(" "),a("p",[a("strong",[e._v("Note")]),e._v(": if you are running our SDK on a machine without SGX support, you will still need the simulation versions of the Intel PSW and SDK.")]),e._v(" "),a("h3",{attrs:{id:"pulling-a-pre-built-docker-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pulling-a-pre-built-docker-container"}},[e._v("#")]),e._v(" Pulling a Pre-Built Docker Container")]),e._v(" "),a("p",[e._v("It is assumed that the user has "),a("a",{attrs:{href:"https://docs.docker.com/get-docker/",target:"_blank",rel:"noopener noreferrer"}},[e._v("correctly installed docker")]),e._v(". We provide 5 containers:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("baiduxlab/sgx-rust:1604-1.1.3")])]),e._v(" "),a("li",[a("code",[e._v("baiduxlab/sgx-rust:1804-1.1.3")])]),e._v(" "),a("li",[a("code",[e._v("baiduxlab/sgx-rust:2004-1.1.3")])]),e._v(" "),a("li",[a("code",[e._v("baiduxlab/sgx-rust:fedora31-1.1.3")])]),e._v(" "),a("li",[a("code",[e._v("baiduxlab/sgx-rust:centos8-1.1.3")])])]),e._v(" "),a("p",[e._v("With "),a("code",[e._v("latest")]),e._v(" pinned to "),a("code",[e._v("1604-1.1.3")]),e._v(".")]),e._v(" "),a("p",[e._v("First, pull the docker container of your choosing, this command will download "),a("code",[e._v("latest")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ docker pull baiduxlab/sgx-rust\n")])])]),a("p",[e._v("To run the container, we recommend that you download our samplecode")]),e._v(" "),a("h4",{attrs:{id:"running-with-intel-sgx-drivers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-with-intel-sgx-drivers"}},[e._v("#")]),e._v(" Running with Intel SGX Drivers:")]),e._v(" "),a("p",[e._v("We recommend starting by using the github repository as a first volume to run the container on:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git clone https://github.com/apache/incubator-teaclave-sgx-sdk.git\n")])])]),a("p",[e._v("To run the container with SGX support, run:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ docker run -v /path/to/rust-sgx:/root/sgx --device /dev/libsgx -ti baiduxlab/sgx-rust\n")])])]),a("p",[e._v("If instead, you are using DCAP drivers you must run:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ docker run -v /path/to/rust-sgx:/root/sgx -ti --device /dev/sgx/enclave --device /dev/sgx/provision baiduxlab/sgx-rust\n")])])]),a("p",[e._v("Whilst inside the container, we must start the AESM daemon and define "),a("code",[e._v("LD_LIBRARY_PATH")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# LD_LIBRARY_PATH=/opt/intel/sgx-aesm-service/aesm/\n\n# /opt/intel/sgx-aesm-service/aesm/aesm_service\n")])])]),a("p",[e._v("If everything has been properly configured, it is now possible to run a quick "),a("code",[e._v("helloworld")]),e._v(" program inside the container:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# cd sgx/samplecode/helloworld\n\n# make\n\n# cd bin\n\n# ./app\n")])])]),a("p",[e._v("We recommend you look at other files in the "),a("code",[e._v("samplecode")]),e._v(" folder to familiarize yourself with programming in our SDK.")]),e._v(" "),a("h4",{attrs:{id:"running-without-intel-sgx-drivers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-without-intel-sgx-drivers"}},[e._v("#")]),e._v(" Running without Intel SGX Drivers:")]),e._v(" "),a("p",[a("strong",[e._v("Note")]),e._v(": Intel provides a simulation mode so you can develop on regular machines, by building the enclave app using the libraries sgx_urts_sim, lsgx_uae_service_sim, sgx_trts_sim, sgx_tservice_sim.")]),e._v(" "),a("p",[e._v("We recommend starting by using the github repository as a first volume to run the container on:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git clone https://github.com/apache/incubator-teaclave-sgx-sdk.git\n")])])]),a("p",[e._v("To run the container without SGX support, run:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ docker run -v /path/to/rust-sgx:/root/sgx -ti baiduxlab/sgx-rust\n")])])]),a("p",[e._v("Once inside the container, when running any of the "),a("code",[e._v("samplecode")]),e._v(" you may either:")]),e._v(" "),a("ul",[a("li",[e._v("Modify the Makefile and set "),a("code",[e._v("SGX_MODE")]),e._v(" to "),a("code",[e._v("SW")])]),e._v(" "),a("li",[e._v("Run "),a("code",[e._v("export SGX_MODE=SW")])]),e._v(" "),a("li",[e._v("Run "),a("code",[e._v("make")]),e._v(" with the build flag "),a("code",[e._v("SGX_MODE=SW")])])]),e._v(" "),a("p",[e._v("We may now run our "),a("code",[e._v("helloworld")]),e._v(" example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# cd sgx/samplecode/helloworld\n\n# make SGX_MODE=SW\n\n# cd bin\n\n# ./app\n")])])]),a("h3",{attrs:{id:"building-a-docker-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-a-docker-image"}},[e._v("#")]),e._v(" Building a Docker Image")]),e._v(" "),a("p",[e._v("Make sure Intel SGX SDK is properly installed and service started on the host OS. Then "),a("code",[e._v("cd dockerfile")]),e._v(" and run "),a("code",[e._v("docker build -t rust-sgx-docker -f Dockerfile.1604.nightly .")]),e._v(" to build.")]),e._v(" "),a("h2",{attrs:{id:"code-samples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-samples"}},[e._v("#")]),e._v(" Code Samples")]),e._v(" "),a("p",[e._v("We provide eighteen code samples to help developers understand how to write Enclave code in Rust. These samples are located in the "),a("code",[e._v("samplecode")]),e._v(" directory.")]),e._v(" "),a("details",[a("summary",[e._v("See Code Samples")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("helloworld")]),e._v(" is a very simple app. It shows some basic usages of argument passing, Rust string and ECALL/OCALLs.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("crypto")]),e._v(" shows the usage of crypto APIs provided by Intel SGX libraries. It does some crypto calculations inside the enclave, which is recommended in most circumstances.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("localattestation")]),e._v(" is a sample ported from the original Intel SGX SDK. It shows how to do local attestation in Rust programming language.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("sealeddata")]),e._v(" sample shows how to seal secret data in an enclave and how to verify the sealed data.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("thread")]),e._v(" sample is a sample ported from the original Intel SGX SDK, showing some basic usages of threading APIs.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("remoteattestation")]),e._v(" sample shows how to make remote attestation with Rust SGX SDK. The sample is forked from "),a("a",{attrs:{href:"https://github.com/svartkanin/linux-sgx-remoteattestation",target:"_blank",rel:"noopener noreferrer"}},[e._v("linux-sgx-attestation")]),e._v(" and credits to Blackrabbit (blackrabbit256@gmail.com). The enclave in Rust is shipped in this sample and Makefiles are modified accordingly.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("hugemem")]),e._v(" sample shows how to use huge mem in SGX enclave. In this sample, we allocate reserve 31.75GB heap space and allocate 31.625GB buffers!")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("file")]),e._v(" sample shows how to read/write files in SGX enclave.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("hello-rust")]),e._v(" is the helloworld sample writtin in pure Rust.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("backtrace")]),e._v(" is a sample showing how to enabling backtrace mechanism inside the enclave.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("unit-test")]),e._v(" shows the way of writing unit tests and conduct unit testing.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("zlib-lazy-static-sample")]),e._v(" shows how to use ported third party crates inside enclave.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("machine-learning")]),e._v(" shows how to use "),a("a",{attrs:{href:"https://github.com/AtheMathmo/rusty-machine",target:"_blank",rel:"noopener noreferrer"}},[e._v("rusty-machine")]),e._v(" for machine learning inside Intel SGX enclave.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("tls")]),e._v(" contains a pair of TLS client/server runs perfectly in SGX enclave!")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("sgxtime")]),e._v(" shows how to acquire trusted timestamp via Intel ME. Please refer to this "),a("RouterLink",{attrs:{to:"/teaclave-sgx-sdk/documents/sgxtime.html"}},[e._v("instruction")]),e._v(" for detail.")],1)]),e._v(" "),a("li",[a("p",[a("code",[e._v("protobuf")]),e._v(" shows how to use the ported "),a("code",[e._v("rust-protobuf")]),e._v(" to pass messages to the enclave using protobuf. Please install protobuf-compiler by "),a("code",[e._v("apt-get install protobuf-compiler")]),e._v(" and protobuf-codegen by "),a("code",[e._v("cargo install protobuf-codegen --vers=2.8.1")]),e._v(" before compiling this sample.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("wasmi")]),e._v(" shows how to pass WebAssembly test suites using the ported WebAssembly interpreter.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("psi")]),e._v(" is a prototype solution of the Private-Set-Intersection problem.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("secretsharing")]),e._v(" shows the usage of Shamir sharing in Rust-SGX environment (provided by @davidp94).")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("switchless")]),e._v(' shows the usage of latest "switchless" execution model provided by intel. Please pay attention to the Makefile and the position of link flag "-lsgx_tswitchless".')])]),e._v(" "),a("li",[a("p",[a("code",[e._v("mutual-ra")]),e._v(" provides remote attestation based TLS connection between SGX enclaves. See the "),a("RouterLink",{attrs:{to:"/teaclave-sgx-sdk/samplecode/mutual-ra/"}},[e._v("readme")]),e._v(" for details.")],1)]),e._v(" "),a("li",[a("p",[a("code",[e._v("ue-ra")]),e._v(" provides remote attestation based TLS connection between an untrusted party and one SGX enclave. See the "),a("RouterLink",{attrs:{to:"/teaclave-sgx-sdk/samplecode/ue-ra/"}},[e._v("readme")]),e._v(" for details.")],1)]),e._v(" "),a("li",[a("p",[a("code",[e._v("sgx-cov")]),e._v(" shows how to use lcov with Rust SGX enclave to generate code coverage report. See the "),a("RouterLink",{attrs:{to:"/teaclave-sgx-sdk/samplecode/sgx-cov/"}},[e._v("readme")]),e._v(" for details.")],1)]),e._v(" "),a("li",[a("p",[a("code",[e._v("tcmalloc")]),e._v(" shows how to link Rust-SGX enclave with tcmalloc (provided by Intel SGX SDK), and test its performance with different kinds of workload.\n")])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"tips-for-writing-enclaves-in-rust"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tips-for-writing-enclaves-in-rust"}},[e._v("#")]),e._v(" Tips for writing enclaves in Rust")]),e._v(" "),a("details",[a("summary",[e._v("See tips")]),e._v(" "),a("h2",{attrs:{id:"writing-edl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#writing-edl"}},[e._v("#")]),e._v(" Writing EDL")]),e._v(" "),a("ul",[a("li",[e._v("For fixed-length array in ECALL/OCALL definition, declare it as an array.  For dynamic-length array, use the keyword "),a("code",[e._v("size=")]),e._v(" to let the Intel SGX knows how many bytes should be copied.")])]),e._v(" "),a("h2",{attrs:{id:"ecall-function-naming"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ecall-function-naming"}},[e._v("#")]),e._v(" ECALL Function Naming")]),e._v(" "),a("ul",[a("li",[e._v("Add "),a("code",[e._v("#[no_mangle]")]),e._v(" for every ECALL function.")])]),e._v(" "),a("h2",{attrs:{id:"passing-returning-arrays"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#passing-returning-arrays"}},[e._v("#")]),e._v(" Passing/returning arrays")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("For dynamic-length array, the only way is to use raw pointers in Rust. There are several functions to get/set data using raw pointers such as "),a("a",{attrs:{href:"https://doc.rust-lang.org/1.9.0/std/primitive.pointer.html#method.offset",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("offset")])]),e._v(" method. One can also use "),a("a",{attrs:{href:"https://doc.rust-lang.org/std/slice/fn.from_raw_parts.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("slice::from_raw_parts")])]),e._v(" to convert the array to a slice.")])]),e._v(" "),a("li",[a("p",[e._v("For Fixed-length array, the above method is acceptable. And according to discussions in "),a("a",{attrs:{href:"https://github.com/rust-lang/rust/issues/30382",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue 30382")]),e._v(" and "),a("a",{attrs:{href:"https://github.com/rust-lang/rust/issues/31227",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue 31227")]),e._v(", thin-pointers (such as fixed-length array) are FFI-safe for now, but undocumented. In the sample codes, we use fixed-length arrays for passing and returning some fixed-length data.\n")])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"pre-apache-releases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-apache-releases"}},[e._v("#")]),e._v(" Pre-Apache Releases")]),e._v(" "),a("h3",{attrs:{id:"latest-v1-1-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#latest-v1-1-3"}},[e._v("#")]),e._v(" Latest: v1.1.3")]),e._v(" "),a("p",[e._v("Supports Intel SGX SDK v2.12, and Rust nightly-2020-10-25. Added support to Ubuntu 20.04. "),a("strong",[e._v("We strongly recommend users to upgrade to Intel SGX SDK v2.12 and drivers to DCAP 1.36.2 and OOT 2.11.0.")]),e._v(" "),a("RouterLink",{attrs:{to:"/teaclave-sgx-sdk/release_notes.html"}},[e._v("release_notes")]),e._v(".")],1),e._v(" "),a("details",[a("summary",[e._v("Version 1.1.2")]),e._v(" "),a("h3",{attrs:{id:"v1-1-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v1-1-2"}},[e._v("#")]),e._v(" v1.1.2")]),e._v(" "),a("p",[e._v("Supports Intel SGX SDK v2.9.1, and Rust nightly-2020-04-07. v1.1.2 provides a handy crate "),a("code",[e._v("sgx_signal")]),e._v(", which enables signal capture. One can easily find the place where exception happens and finally triggered "),a("code",[e._v("ud2")]),e._v(". And we added "),a("code",[e._v("Backtrace::capture")]),e._v(" in sgx_tstd. With the help of Intel SGX SDk v2.9.1's patch, dtor of thread local storage finally works on regular SGX thread and pthread thread. Removed sgx_core_futures since Rust is supporting "),a("code",[e._v("async")]),e._v("/"),a("code",[e._v("await")]),e._v(" in "),a("code",[e._v("no_std")]),e._v(" environment. Please refer to "),a("RouterLink",{attrs:{to:"/teaclave-sgx-sdk/release_notes.html"}},[e._v("release_notes")]),e._v(" for more details.\n")],1)]),a("p"),e._v(" "),a("details",[a("summary",[e._v("Version 1.1.1")]),e._v(" "),a("h3",{attrs:{id:"v1-1-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v1-1-1"}},[e._v("#")]),e._v(" v1.1.1")]),e._v(" "),a("p",[e._v("Supports Intel SGX SDK v2.9, and Rust nightly-2020-03-12. v1.1.1 contains a bunch of bug fix and new proc macro "),a("code",[e._v("sgx_align")]),e._v(" to help with aligning given structure. For LVI migigation, it only works on C/C++ parts (EDL headers/Intel's libs) and supports both two modes: "),a("code",[e._v("MITIGATION-CVE-2020-0551=LOAD")]),e._v(" or "),a("code",[e._v("MITIGATION-CVE-2020-0551=CF")]),e._v(". To enable it, one need "),a("code",[e._v('env "MITIGATION-CVE-2020-0551=LOAD"')]),e._v(" to set this environment variable. For detailed information, please refer to "),a("RouterLink",{attrs:{to:"/teaclave-sgx-sdk/release_notes.html"}},[e._v("release_notes")]),e._v(" for more details.\n")],1)]),a("p"),e._v(" "),a("details",[a("summary",[e._v("Version 1.1.0")]),e._v(" "),a("h3",{attrs:{id:"v1-1-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v1-1-0"}},[e._v("#")]),e._v(" v1.1.0")]),e._v(" "),a("p",[e._v("Supports Intel SGX SDK v2.7.1, and Rust nightly-2019-11-25. v1.1.0 brings up dynamic static supports by "),a("code",[e._v("thread::spawn")]),e._v(", and almost everything of "),a("code",[e._v("std::sync")]),e._v(". Also v1.1.0 benefits from Intel SGX SDK's aligned memory allocation primitives to mitigate "),a("a",{attrs:{href:"https://github.com/apache/incubator-mesatee-sgx/wiki/Mitigation-of-Intel-SA-00219-in-Rust-SGX",target:"_blank",rel:"noopener noreferrer"}},[e._v("INTEL-SA-00219")]),e._v(". Besides, we enabled "),a("a",{attrs:{href:"https://github.com/apache/incubator-mesatee-sgx/wiki/%60is_x86_feature_detected%60-in-Rust-SGX-SDK",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("is_x86_feature_detected!")])]),e._v(" by parsing a hidden global CPU feature indicator initialized by Intel SGX urts/trts. And we provided Dockerfile for Fedora 27. For detailed information, please refer to "),a("RouterLink",{attrs:{to:"/teaclave-sgx-sdk/release_notes.html"}},[e._v("release_notes")]),e._v(" for more details.\n")],1)]),a("p"),e._v(" "),a("details",[a("summary",[e._v("Version 1.0.9")]),e._v(" "),a("h3",{attrs:{id:"v1-0-9-release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v1-0-9-release"}},[e._v("#")]),e._v(" v1.0.9 Release")]),e._v(" "),a("p",[e._v("Supports Intel SGX SDK v2.6, and Rust nightly-2019-08-01. Bumps everything to edition. Removed third_party directory since we have all of those dependencies forked and maintained with merge bot. Since Intel SGX SDK v2.6 imports some breaking changes in global thread metata, thread local features of v1.0.9 is not works on Intel SGX SDK v2.5. EDL and common headers are changed respectively. For detailed information, please refer to "),a("RouterLink",{attrs:{to:"/teaclave-sgx-sdk/release_notes.html"}},[e._v("release_notes")]),e._v(" for more details.\n")],1)]),a("p"),e._v(" "),a("details",[a("summary",[e._v("Version 1.0.8")]),e._v(" "),a("h3",{attrs:{id:"v1-0-8-release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v1-0-8-release"}},[e._v("#")]),e._v(" v1.0.8 Release")]),e._v(" "),a("p",[e._v("Supports the most recent Rust nightly (nightly-2019-05-22) and Rust stable (stable-2019-05-14). Code coverage support has been added to sgx_cov. Bug fixes in memory allocator and panicking routines. New third party libraries to support kvdb-memorydb. Please refer to "),a("RouterLink",{attrs:{to:"/teaclave-sgx-sdk/release_notes.html"}},[e._v("release_notes")]),e._v(" for more details.\n")],1)]),a("p"),e._v(" "),a("details",[a("summary",[e._v("Version 1.0.7")]),e._v(" "),a("h3",{attrs:{id:"v1-0-7-release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v1-0-7-release"}},[e._v("#")]),e._v(" v1.0.7 Release")]),e._v(" "),a("p",[e._v("Supports Intel SGX SDK v2.5. Master branch supports Rust nightly build (nightly-2019-04-26) and stable branch supports Rust stable build (stable-2019-04-25).  Refactored "),a("code",[e._v("sgx_tstd")]),e._v(" to support "),a("code",[e._v("mio")]),e._v(". More sample codes added, including Java/Go clients for ue-ra (Thanks to @bradyjoestar)!. And we are maintaining forks of popular crates on Github organization "),a("a",{attrs:{href:"https://github.com/mesalock-linux",target:"_blank",rel:"noopener noreferrer"}},[e._v("mesalock-linux")]),e._v(". The ported crates are syncing with the original crates with the help of "),a("a",{attrs:{href:"https://pull.now.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pull")]),e._v(" bot and we manually port almost all tests from the original crates to test if the ported crate works well in SGX. Please refer to "),a("RouterLink",{attrs:{to:"/teaclave-sgx-sdk/release_notes.html"}},[e._v("release_notes")]),e._v(" for further details.")],1),e._v(" "),a("p",[e._v("We changed the built-in EDL files. Please carefully upgrade your EDL files on "),a("code",[e._v("import")]),e._v(" statements. If you encountered any problems during compilation, please create issue and let me know. Thanks!")]),e._v(" "),a("p",[a("strong",[e._v("ATTENTION")]),e._v(": (Ubuntu Channel) Starts from Intel SGX SDK 2.8, "),a("code",[e._v("aesmd")]),e._v(" requires a environment variable to start. If you are using docker, please start "),a("code",[e._v("aesmd")]),e._v(" as:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("LD_LIBRARY_PATH=/opt/intel/sgx-aesm-service/aesm /opt/intel/sgx-aesm-service/aesm/aesm_service\n")])])]),a("p",[e._v("Starts from Intel SGX SDK 2.5, "),a("code",[e._v("aesmd")]),e._v(" requires a environment variable to start. If you are using docker, please start "),a("code",[e._v("aesmd")]),e._v(" as:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("LD_LIBRARY_PATH=/opt/intel/libsgx-enclave-common/aesm /opt/intel/libsgx-enclave-common/aesm/aesm_service\n")])])]),a("p",[e._v("(CentOS Channel) As of 2.6, CentOS branch of Intel SGX SDK is still in format of bin executable. Please start the "),a("code",[e._v("aesmd")]),e._v(" as past:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("LD_LIBRARY_PATH=/opt/intel/sgxpsw/aesm /opt/intel/sgxpsw/aesm/aesm_service\n")])])])]),e._v(" "),a("details",[a("summary",[e._v("Version 1.0.6")]),e._v(" "),a("h3",{attrs:{id:"v1-0-6-release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v1-0-6-release"}},[e._v("#")]),e._v(" v1.0.6 Release")]),e._v(" "),a("p",[e._v("Fix bugs in sgx_alloc, sgx_types, ucd-generate and improve sgx_tunittest. Added rust-base58. Thanks to @elichai, @cbeck88, @brenzi and @nhynes.\n")])]),a("p"),e._v(" "),a("details",[a("summary",[e._v("Version 1.0.5")]),e._v(" "),a("h3",{attrs:{id:"v1-0-5-release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v1-0-5-release"}},[e._v("#")]),e._v(" v1.0.5 Release")]),e._v(" "),a("p",[e._v("This version supports Rust nightly build (nightly-2019-01-28, v1.34.0) in the master branch and the most recent stable build (stable-2019-01-16, v1.32.0) in the rust-stable branch. It supports the latest Intel SGX SDK "),a("strong",[e._v("v2.4.0")]),e._v(" and Ubuntu Linux 16.04+18.04. We provide support to Intel's Protected Code Loader. We provide sgx_ucrypto and sgx_crypto_helper for using SGX-style crypto primitives in untrusted app and RSA keypair serialization/deserialization in both trusted and untrusted programs. We re-organize ocall related interfaces and provide them in a new crate sgx_libc with a bunch of new ocall functions. In addition, we port net2 to SGX. Please refer to "),a("RouterLink",{attrs:{to:"/teaclave-sgx-sdk/release_notes.html"}},[e._v("release_notes")]),e._v(" for further details.\n")],1)]),e._v(" "),a("details",[a("summary",[e._v("Version 1.0.4")]),a("p"),e._v(" "),a("h3",{attrs:{id:"v1-0-4-release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v1-0-4-release"}},[e._v("#")]),e._v(" v1.0.4 Release")]),e._v(" "),a("p",[e._v("This version supports Rust nightly build (nightly-2018-10-01) in the master branch and the most recent stable build (stable-2018-09-25) in the rust-stable branch. It supports the latest Intel SGX SDK "),a("strong",[e._v("v2.3.1")]),e._v(" and Ubuntu Linux 18.04. It now contains further third party libraries including: bit-vec, chrono, erased-serde, fxhash, nan-preserving-float, num-bigint, quick-error, raft-rs, time, webpki-roots, and yasna. Some third party libraries, like untrusted, parity-wasm and lazy-static, are removed because they support "),a("code",[e._v("no_std")]),e._v(" and can be used directly from crates.io. We strongly recommend developers upgrade to v1.0.4 and use the most recent Rust release to build it due to the "),a("a",{attrs:{href:"https://blog.rust-lang.org/2018/09/21/Security-advisory-for-std.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Security advisory for the standard library")]),e._v(". Please refer to "),a("RouterLink",{attrs:{to:"/teaclave-sgx-sdk/release_notes.html"}},[e._v("release_notes")]),e._v(" for further details.\n")],1)]),a("p"),e._v(" "),a("details",[a("summary",[e._v("Version 1.0.1")]),e._v(" "),a("h3",{attrs:{id:"v1-0-1-release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v1-0-1-release"}},[e._v("#")]),e._v(" v1.0.1 Release")]),e._v(" "),a("p",[e._v("This version supports the Rust nightly build (nightly-2018-07-16) in master branch and the most recent Rust stable build (stable-2018-07-10). And it supports the latest Intel SGX SDK "),a("strong",[e._v("v2.2")]),e._v(". New third party libraries include: bytes, http, iovec, rust-crypto, rust-fnv and rust-threshold-secret-sharing. New code sample 'secretsharing' and 'rust-threshold-secret-sharing' is provided by @davidp94. Please refer to "),a("RouterLink",{attrs:{to:"/teaclave-sgx-sdk/release_notes.html"}},[e._v("release_notes")]),e._v(" for further details.\n")],1)]),a("p"),e._v(" "),a("details",[a("summary",[e._v("Version 1.0.0")]),e._v(" "),a("h3",{attrs:{id:"v1-0-0-release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v1-0-0-release"}},[e._v("#")]),e._v(" v1.0.0 Release")]),e._v(" "),a("p",[e._v("We proudly announce v1.0.0 of rust-sgx-sdk! We port Parity's "),a("a",{attrs:{href:"https://github.com/paritytech/wasmi",target:"_blank",rel:"noopener noreferrer"}},[e._v("Webassembly Interpreter")]),e._v(" to Intel SGX and provide a full functional in-enclave "),a("a",{attrs:{href:"samplecode/wasmi"}},[e._v("wasmi sample")]),e._v(", and a "),a("a",{attrs:{href:"samplecode/psi"}},[e._v("sample solution")]),e._v(" of two-party private-set-intersection resisting side-channel attacks! From this version, we start to support most recent stable branch of Rust instead of nightly for better stability and future production use. Thus, the "),a("a",{attrs:{href:"https://github.com/apache/teaclave-sgx-sdk/tree/rust-stable",target:"_blank",rel:"noopener noreferrer"}},[e._v("stable branch")]),e._v(" of v1.0.0 supports the most recent Rust stable toolchain (1.26.0 stable-2018-05-07), while the master only supports Rust nightly toolchain of nightly-2018-04-11. Please refer to "),a("RouterLink",{attrs:{to:"/teaclave-sgx-sdk/release_notes.html"}},[e._v("release_notes")]),e._v(" for further details.\n")],1)]),a("p"),e._v(" "),a("details",[a("summary",[e._v("Version 0.9.8")]),e._v(" "),a("h3",{attrs:{id:"v0-9-8-release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v0-9-8-release"}},[e._v("#")]),e._v(" v0.9.8 Release")]),e._v(" "),a("p",[e._v("This version provides security updates regards to recent Spectre attacks in Intel SGX, and supports "),a("strong",[e._v("Rust stable (2018-03-01)")]),e._v(" (in branch named 'rust-stable'). It contains support of "),a("a",{attrs:{href:"https://download.01.org/intel-sgx/linux-2.1.2/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intel SGX SDK 2.1.2")]),e._v(" and a series of API functions to stop speculative execution on demand. In addition, we provide a ported version of "),a("a",{attrs:{href:"https://crates.io/crates/protobuf",target:"_blank",rel:"noopener noreferrer"}},[e._v("rust-protobuf")]),e._v(" v1.4.4. Please refer to "),a("RouterLink",{attrs:{to:"/teaclave-sgx-sdk/release_notes.html"}},[e._v("release_notes")]),e._v(" for further details.\n")],1)]),a("p"),e._v(" "),a("details",[a("summary",[e._v("Version 0.9.7")]),e._v(" "),a("h3",{attrs:{id:"v0-9-7-release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v0-9-7-release"}},[e._v("#")]),e._v(" v0.9.7 Release")]),e._v(" "),a("p",[e._v("This version provides a new namespace: "),a("code",[e._v("sgx_tstd::untrusted")]),e._v(", including "),a("code",[e._v("sgx_tstd::untrusted::fs")]),e._v(" "),a("code",[e._v("sgx_tstd::untrusted::time")]),e._v(" and "),a("code",[e._v("sgx_tstd::untrusted::path")]),e._v(", providing supports to operation to ocalls in a "),a("strong",[e._v("untrusted")]),e._v(" namespace. The "),a("strong",[e._v("untrusted")]),e._v(" namespace is always enabled no matter "),a("code",[e._v("untrusted_*")]),e._v(" is set or not. We "),a("strong",[e._v("urge")]),e._v(" the developers to use the "),a("code",[e._v("sgx_tstd::untrusted")]),e._v(" namespace to port their crates, instead of using the "),a("code",[e._v("untrusted_")]),e._v(" series of features. Also, we renamed the "),a("code",[e._v("untrusted_net")]),e._v(" feature to "),a("code",[e._v("net")]),e._v(" for feature name unification. Please refer to "),a("RouterLink",{attrs:{to:"/teaclave-sgx-sdk/release_notes.html"}},[e._v("release_notes")]),e._v(" for further details.\n")],1)]),a("p"),e._v(" "),a("h2",{attrs:{id:"contributing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contributing"}},[e._v("#")]),e._v(" Contributing")]),e._v(" "),a("p",[e._v("Teaclave is open source in "),a("a",{attrs:{href:"https://www.apache.org/theapacheway/",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Apache Way")]),e._v(",\nwe aim to create a project that is maintained and owned by the community. All\nkinds of contributions are welcome. Read this "),a("RouterLink",{attrs:{to:"/teaclave-sgx-sdk/CONTRIBUTING.html"}},[e._v("document")]),e._v(" to\nlearn more about how to contribute. Thanks to our\n"),a("a",{attrs:{href:"https://teaclave.apache.org/contributors/",target:"_blank",rel:"noopener noreferrer"}},[e._v("contributors")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"community"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#community"}},[e._v("#")]),e._v(" Community")]),e._v(" "),a("ul",[a("li",[e._v("Join us on our "),a("a",{attrs:{href:"https://lists.apache.org/list.html?dev@teaclave.apache.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("mailing list")]),e._v(".")]),e._v(" "),a("li",[e._v("Follow us at "),a("a",{attrs:{href:"https://twitter.com/ApacheTeaclave",target:"_blank",rel:"noopener noreferrer"}},[e._v("@ApacheTeaclave")]),e._v(".")]),e._v(" "),a("li",[e._v("See "),a("a",{attrs:{href:"https://teaclave.apache.org/community/",target:"_blank",rel:"noopener noreferrer"}},[e._v("more")]),e._v(".")])])])}),[],!1,null,null,null);t.default=r.exports}}]);