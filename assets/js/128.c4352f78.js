(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{450:function(e,t,s){"use strict";s.r(t);var a=s(29),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"leveldb-rs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#leveldb-rs"}},[e._v("#")]),e._v(" leveldb-rs")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://ci.mesalock-linux.org/mesalock-linux/rusty_leveldb_sgx",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://ci.mesalock-linux.org/api/badges/mesalock-linux/rusty_leveldb_sgx/status.svg",alt:"Build Status"}})]),e._v(" "),s("a",{attrs:{href:"https://crates.io/crates/rusty-leveldb",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/crates/v/rusty-leveldb.svg",alt:"crates.io"}})])]),e._v(" "),s("p",[e._v("A fully compatible implementation of LevelDB in Rust. (any incompatibility is a\nbug!)")]),e._v(" "),s("p",[e._v("The implementation is very close to the original; often, you can see the same\nalgorithm translated 1:1, and class (struct) and method names are similar or\nthe same.")]),e._v(" "),s("p",[s("strong",[e._v("NOTE: I do not endorse using this library for any data that you care about.")]),e._v("\nI do care, however, about bug reports.")]),e._v(" "),s("h2",{attrs:{id:"status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),s("ul",[s("li",[e._v("User-facing methods exist: Read/Write/Delete; snapshots; iteration")]),e._v(" "),s("li",[e._v("Compaction is supported, including manual ones.")]),e._v(" "),s("li",[e._v("Fully synchronous: Efficiency gains by using non-atomic types, but writes may\noccasionally block during a compaction. In --release mode, an average compaction\ntakes 0.2-0.5 seconds.")]),e._v(" "),s("li",[e._v("Compatibility with the original: Compression is not implemented so far; this works\nas long as compression is disabled in the original.")]),e._v(" "),s("li",[e._v("Performance is decent; while usually not par with the original, due to multi-threading\nin the original and language-inherent overhead (we are doing things the right way),\nit will be enough for most use cases.")]),e._v(" "),s("li",[e._v("Safe: While using many shared pointers, the implementation is generally safe. Many\nplaces use asserts though, so you may see a crash -- in which case you should file a bug.")])]),e._v(" "),s("h2",{attrs:{id:"goals"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#goals"}},[e._v("#")]),e._v(" Goals")]),e._v(" "),s("p",[e._v("Some of the goals of this implementation are")]),e._v(" "),s("ul",[s("li",[e._v("As few copies of data as possible; most of the time, slices of bytes ("),s("code",[e._v("&[u8]")]),e._v(")\nare used. Owned memory is represented as "),s("code",[e._v("Vec<u8>")]),e._v(" (and then possibly borrowed\nas slice).")]),e._v(" "),s("li",[e._v("Correctness -- self-checking implementation, good test coverage, etc. Just\nlike the original implementation.")]),e._v(" "),s("li",[e._v("Clarity; commented code, clear structure (hopefully doing a better job than\nthe original implementation).")]),e._v(" "),s("li",[e._v("Coming close-ish to the original implementation; clarifying the translation of\ntypical C++ constructs to Rust.")])])])}),[],!1,null,null,null);t.default=i.exports}}]);