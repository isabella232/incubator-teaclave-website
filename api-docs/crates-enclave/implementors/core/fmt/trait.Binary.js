(function() {var implementors = {};
implementors["env_logger"] = [{"text":"impl&lt;'a, T:&nbsp;Binary&gt; Binary for StyledValue&lt;'a, T&gt;","synthetic":false,"types":[]}];
implementors["itertools"] = [{"text":"impl&lt;'a, I&gt; Binary for Format&lt;'a, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Iterator,<br>&nbsp;&nbsp;&nbsp;&nbsp;I::Item: Binary,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["num_bigint"] = [{"text":"impl Binary for BigInt","synthetic":false,"types":[]},{"text":"impl Binary for BigUint","synthetic":false,"types":[]}];
implementors["num_complex"] = [{"text":"impl&lt;T&gt; Binary for Complex&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Binary + Num + PartialOrd + Clone,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["png"] = [{"text":"impl Binary for Transformations","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()