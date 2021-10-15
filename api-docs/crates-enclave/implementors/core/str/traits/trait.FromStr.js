(function() {var implementors = {};
implementors["chrono"] = [{"text":"impl FromStr for NaiveDate","synthetic":false,"types":[]},{"text":"impl FromStr for NaiveTime","synthetic":false,"types":[]},{"text":"impl FromStr for NaiveDateTime","synthetic":false,"types":[]},{"text":"impl FromStr for DateTime&lt;Utc&gt;","synthetic":false,"types":[]},{"text":"impl FromStr for DateTime&lt;FixedOffset&gt;","synthetic":false,"types":[]},{"text":"impl FromStr for Weekday","synthetic":false,"types":[]}];
implementors["http"] = [{"text":"impl FromStr for HeaderName","synthetic":false,"types":[]},{"text":"impl FromStr for HeaderValue","synthetic":false,"types":[]},{"text":"impl FromStr for Method","synthetic":false,"types":[]},{"text":"impl FromStr for StatusCode","synthetic":false,"types":[]},{"text":"impl FromStr for Authority","synthetic":false,"types":[]},{"text":"impl FromStr for PathAndQuery","synthetic":false,"types":[]},{"text":"impl FromStr for Scheme","synthetic":false,"types":[]},{"text":"impl FromStr for Uri","synthetic":false,"types":[]}];
implementors["humantime"] = [{"text":"impl FromStr for Duration","synthetic":false,"types":[]},{"text":"impl FromStr for Timestamp","synthetic":false,"types":[]}];
implementors["jsonwebtoken"] = [{"text":"impl FromStr for Algorithm","synthetic":false,"types":[]}];
implementors["log"] = [{"text":"impl FromStr for Level","synthetic":false,"types":[]},{"text":"impl FromStr for LevelFilter","synthetic":false,"types":[]}];
implementors["num_bigint"] = [{"text":"impl FromStr for BigInt","synthetic":false,"types":[]},{"text":"impl FromStr for BigUint","synthetic":false,"types":[]}];
implementors["num_complex"] = [{"text":"impl&lt;T&gt; FromStr for Complex&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: FromStr + Num + Clone,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["num_rational"] = [{"text":"impl&lt;T:&nbsp;FromStr + Clone + Integer&gt; FromStr for Ratio&lt;T&gt;","synthetic":false,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl FromStr for TokenStream","synthetic":false,"types":[]}];
implementors["regex"] = [{"text":"impl FromStr for Regex","synthetic":false,"types":[]},{"text":"impl FromStr for Regex","synthetic":false,"types":[]}];
implementors["serde_json"] = [{"text":"impl FromStr for Number","synthetic":false,"types":[]},{"text":"impl FromStr for Value","synthetic":false,"types":[]}];
implementors["termcolor"] = [{"text":"impl FromStr for Color","synthetic":false,"types":[]}];
implementors["toml"] = [{"text":"impl FromStr for Value","synthetic":false,"types":[]},{"text":"impl FromStr for Datetime","synthetic":false,"types":[]}];
implementors["url"] = [{"text":"impl FromStr for Url","synthetic":false,"types":[]}];
implementors["uuid"] = [{"text":"impl FromStr for Uuid","synthetic":false,"types":[]}];
implementors["yasna"] = [{"text":"impl FromStr for ObjectIdentifier","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()