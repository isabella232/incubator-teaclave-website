(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{353:function(e,t,n){e.exports=n.p+"assets/img/teaclave-architecture.999fd110.png"},527:function(e,t,n){"use strict";n.r(t);var a=n(29),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("RouterLink",{attrs:{to:"/blog/2020-10-21-announcing-teaclave-0-1-0/"}},[e._v("English")]),e._v(" | "),a("RouterLink",{attrs:{to:"/blog/2020-10-28-announcing-teaclave-0-1-0-cn/"}},[e._v("中文")])],1),e._v(" "),a("p",[e._v("On behalf of the Teaclave community, I am happy to announce the "),a("em",[e._v("first")]),e._v(" Apache\nIncubator release of Teaclave, 0.1.0. Teaclave is a universal secure computing\nplatform, making computation on privacy-sensitive data safe and simple.")]),e._v(" "),a("p",[e._v("The 0.1.0 release marks an important milestone for the Teaclave community. This\nis the first public release of the Teaclave platform. Moreover, this is the\nfirst official release since we entered Apache Incubator on August 19, 2019.")]),e._v(" "),a("h2",{attrs:{id:"project-highlights"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#project-highlights"}},[e._v("#")]),e._v(" Project highlights")]),e._v(" "),a("p",[e._v("Since this is our first public release, I still want to emphasize the highlights\nof the Teaclave project.")]),e._v(" "),a("p",[e._v("Apache Teaclave (incubating) has following highlights:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Security")]),e._v(": Teaclave adopts multiple security technologies to enable secure\ncomputing. In particular, Teaclave uses Intel SGX to serve the most\nsecurity-sensitive tasks with "),a("em",[e._v("hardware-based isolation")]),e._v(", "),a("em",[e._v("memory encryption")]),e._v(",\nand "),a("em",[e._v("attestation")]),e._v(". Also, Teaclave is written in Rust to prevent\n"),a("em",[e._v("memory-safety")]),e._v(" issues.")]),e._v(" "),a("li",[a("strong",[e._v("Functionality")]),e._v(": Teaclave is provided as a "),a("em",[e._v("function-as-a-service platform")]),e._v(".\nWith many built-in functions, it supports tasks like machine learning, private\nset intersection, crypto computation, etc. In addition, developers can also\ndeploy and execute Python scripts in Teaclave. More importantly, unlike\ntraditional FaaS, Teaclave supports both general secure computing tasks and\n"),a("em",[e._v("flexible single- and multi-party computation")]),e._v(".")]),e._v(" "),a("li",[a("strong",[e._v("Usability")]),e._v(": Teaclave builds its components in containers, therefore, it\nsupports deployment both locally and within cloud infrastructures. Teaclave\nalso provides convenient endpoint APIs, client SDKs, and command-line tools.")]),e._v(" "),a("li",[a("strong",[e._v("Modularity")]),e._v(": Components in Teaclave are designed in modular, and some components\nlike remote attestation can be easily embedded in other projects. In addition,\nTeaclave SGX SDK can also be used separately to write standalone SGX enclaves\nfor other purposes.")])]),e._v(" "),a("p",[a("img",{attrs:{src:n(353),alt:"Teaclave Architecture"}})]),e._v(" "),a("h2",{attrs:{id:"changes-since-entering-apache-incubator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changes-since-entering-apache-incubator"}},[e._v("#")]),e._v(" Changes since entering Apache Incubator")]),e._v(" "),a("p",[e._v("Since we entered Apache Incubator, we started an ambitious task of refactoring\nand improving the project in many perspectives. These include:")]),e._v(" "),a("ul",[a("li",[e._v("Supporting function and data registration.\n"),a("ul",[a("li",[e._v("input data of a function can be fetched from external storage")]),e._v(" "),a("li",[e._v("reuse registered function in new tasks")])])]),e._v(" "),a("li",[e._v("Redesigning function development workflow.\n"),a("ul",[a("li",[e._v("developers only need to write python script with native libraries written in Rust")])])]),e._v(" "),a("li",[e._v("Providing persistent database implementation.\n"),a("ul",[a("li",[e._v("port rusty-leveldb to SGX enclave using protected FS to secure file I/O")]),e._v(" "),a("li",[e._v('add dedicated database service called "storage service" for data persistency')])])]),e._v(" "),a("li",[e._v("Supporting protobuf compatible RPC protocol.\n"),a("ul",[a("li",[e._v("refactor existing service protocol with "),a("code",[e._v(".proto")]),e._v(" files")]),e._v(" "),a("li",[e._v("redesign PRC protocol with remote attestation")])])]),e._v(" "),a("li",[e._v("Supporting distributed workers.\n"),a("ul",[a("li",[e._v("support docker deployment")]),e._v(" "),a("li",[e._v("decouple services into different containers")])])]),e._v(" "),a("li",[e._v("Supporting customized workers.\n"),a("ul",[a("li",[e._v("service provider can deploy with other kinds of customized workers besides builtin worker")])])]),e._v(" "),a("li",[e._v("Providing better documentation.")]),e._v(" "),a("li",[e._v("Providing better error handling.\n"),a("ul",[a("li",[e._v("errors can be propagated through RPC")]),e._v(" "),a("li",[e._v("better error triage")])])]),e._v(" "),a("li",[e._v("Testsuite cleanup/refactoring.")]),e._v(" "),a("li",[e._v("Implementing more built-in functions: we have nine built-in functions, including\necho, face detection, gbdt predict/train, logistic regression predict/train,\nonline decrypt, ordered set intersect, private join and compute, and RSA sign.")]),e._v(" "),a("li",[e._v("Supporting more flexible attestation mechanisms (DCAP): providing a reference\nimplementation of DCAP attestation service and supporting DCAP in our\nattestation library and build system as well.")]),e._v(" "),a("li",[e._v("RPC enhancement.\n"),a("ul",[a("li",[e._v("multi-language client")])])]),e._v(" "),a("li",[e._v("Many other changes.")])]),e._v(" "),a("p",[e._v("These changes include 876 files changed, 78,237 insertions, and 54,846 deletions.\nWe have also closed 102 issues on GitHub to answer questions from the community\nand implementing feature requests.")]),e._v(" "),a("h2",{attrs:{id:"download"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download"}},[e._v("#")]),e._v(" Download")]),e._v(" "),a("p",[e._v("Teaclave 0.1.0 can be downloaded at "),a("RouterLink",{attrs:{to:"/download/"}},[e._v("the download page")]),e._v(". Note that\nit is essential to verify the integrity of the downloaded file using the\nPGP signature (.asc file) or a hash (.md5 or .sha* file).")],1),e._v(" "),a("h2",{attrs:{id:"documentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#documentation"}},[e._v("#")]),e._v(" Documentation")]),e._v(" "),a("p",[e._v("If it is the first time to try Teaclave, we provide a simple but clear tutorial\nto guide you getting stated with Teaclave by invoking\n"),a("RouterLink",{attrs:{to:"/docs/my-first-function/"}},[e._v("your first function")]),e._v(" in Teaclave.")],1),e._v(" "),a("p",[e._v("Basically, you can build the Teaclave platform using docker with these commands:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ cd incubator-teaclave\n$ docker run --rm -v $(pwd):/teaclave -w /teaclave \\\n  -it teaclave/teaclave-build-ubuntu-1804-sgx-2.9.1:latest \\\n   bash -c ". /root/.cargo/env && \\\n     . /opt/sgxsdk/environment && \\\n     mkdir -p build && cd build && \\\n     cmake -DTEST_MODE=ON .. && \\\n     make"\n')])])]),a("p",[e._v("Launch all services with "),a("code",[e._v("docker-compose")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ (cd docker && docker-compose -f docker-compose-ubuntu-1804.yml up --build)\n")])])]),a("p",[e._v("And invoke function with a Python client:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ cd examples/python\n$ PYTHONPATH=../../sdk/python python3 builtin_echo.py 'Hello, Teaclave!'\n[+] registering user\n[+] login\n[+] registering function\n[+] creating task\n[+] approving task\n[+] invoking task\n[+] getting result\n[+] done\n[+] function return:  b'Hello, Teaclave!'\n")])])]),a("p",[e._v("If you want to understand the internals of Teaclave, we provide several\ndocuments about the "),a("RouterLink",{attrs:{to:"/docs/#design"}},[e._v("design")]),e._v(" of Teaclave. Also, we extensively\ndocument our "),a("RouterLink",{attrs:{to:"/blog/docs/#codebase"}},[e._v("codebase")]),e._v(" in each sub directories. At last, "),a("RouterLink",{attrs:{to:"/blog/docs/#api-references"}},[e._v("API references")]),e._v("\nare automatically generated and uploaded to our homepage.")],1),e._v(" "),a("h2",{attrs:{id:"community"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#community"}},[e._v("#")]),e._v(" Community")]),e._v(" "),a("p",[e._v("Along our road to the first public release, we also see the growth of the\ncommunity who started to follow the project and using in their products. We have\nseen at least four "),a("RouterLink",{attrs:{to:"/blog/community/#organizations"}},[e._v("organizations")]),e._v(" using Teaclave in\ntheir products, and more than nine open source "),a("RouterLink",{attrs:{to:"/blog/community/#projects"}},[e._v("projects")]),e._v("\nbuilding on top of Teaclave platform or Teaclave SGX SDK.")],1),e._v(" "),a("p",[e._v("We build several channels to communicate with the community including GitHub issues,\n"),a("a",{attrs:{href:"https://lists.apache.org/list.html?dev@teaclave.apache.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("mailing lists")]),e._v(", and\nTwitter account ("),a("a",{attrs:{href:"https://twitter.com/ApacheTeaclave",target:"_blank",rel:"noopener noreferrer"}},[e._v("@ApacheTeaclave")]),e._v(").")]),e._v(" "),a("p",[e._v("We also attended ApacheCon this year to introduce Teaclave to the Apache community.\nIf you missed the talk, please find the slides and other materials of talks,\npapers, and related articles at "),a("RouterLink",{attrs:{to:"/docs/papers-talks/"}},[e._v("this page")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"thanks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#thanks"}},[e._v("#")]),e._v(" Thanks")]),e._v(" "),a("p",[e._v("I'd like to thank all "),a("RouterLink",{attrs:{to:"/contributors/"}},[e._v("contributors")]),e._v(" to build this community.\nThanks to our project "),a("RouterLink",{attrs:{to:"/contributors/#mentors"}},[e._v("mentors")]),e._v(", who help us to\nunderstand the Apache way of open source. Furthermore,\nthanks to all "),a("RouterLink",{attrs:{to:"/contributors/#committers"}},[e._v("PPMC members and committers")]),e._v("\nfor governing and expanding the community, organizing meetups, discussing\nroadmap, designing components, writing documents, contributing code, and\nadvertising the project. Moreover, thanks to all "),a("RouterLink",{attrs:{to:"/contributors/#contributors-2"}},[e._v("external contributors")]),e._v("\nwho send pull requests to fix bugs\nand implementing features. In addition, I'd like to thank people who tries\nTeaclave themselves, files bugs or feature requests. This also helps us to\nunderstand the project and figure out where we can improve.\nFinally, I'd like to thank companies who use Teaclave and contribute back to\nthe community.")],1),e._v(" "),a("p",[e._v("At last, 0.1.0 is just the start of Teaclave. We will continue working hard with\nthe community implementing new features, writing documents, and expanding the\ncommunity.")]),e._v(" "),a("p",[e._v("Happy Teaclaving. Cheers!")])])}),[],!1,null,null,null);t.default=i.exports}}]);