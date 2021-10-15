(function() {var implementors = {};
implementors["base64"] = [{"text":"impl&lt;'a, R:&nbsp;Read&gt; Read for DecoderReader&lt;'a, R&gt;","synthetic":false,"types":[]}];
implementors["bytes"] = [{"text":"impl&lt;B:&nbsp;Buf + Sized&gt; Read for Reader&lt;B&gt;","synthetic":false,"types":[]}];
implementors["image"] = [{"text":"impl&lt;R:&nbsp;Read&gt; Read for DXTReader&lt;R&gt;","synthetic":false,"types":[]},{"text":"impl&lt;R&gt; Read for GifReader&lt;R&gt;","synthetic":false,"types":[]},{"text":"impl&lt;R:&nbsp;Read&gt; Read for PNGReader&lt;R&gt;","synthetic":false,"types":[]},{"text":"impl&lt;R&gt; Read for TiffReader&lt;R&gt;","synthetic":false,"types":[]}];
implementors["inflate"] = [{"text":"impl&lt;R:&nbsp;BufRead&gt; Read for DeflateDecoderBuf&lt;R&gt;","synthetic":false,"types":[]},{"text":"impl&lt;R:&nbsp;Read&gt; Read for DeflateDecoder&lt;R&gt;","synthetic":false,"types":[]}];
implementors["protected_fs"] = [{"text":"impl Read for ProtectedFile","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Read for &amp;'a ProtectedFile","synthetic":false,"types":[]}];
implementors["rand_core"] = [{"text":"impl Read for dyn RngCore","synthetic":false,"types":[]}];
implementors["rustls"] = [{"text":"impl&lt;'a, S, T&gt; Read for Stream&lt;'a, S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: 'a + Session,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: 'a + Read + Write,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S, T&gt; Read for StreamOwned&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Session,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Read + Write,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Read for ServerSession","synthetic":false,"types":[]},{"text":"impl Read for ClientSession","synthetic":false,"types":[]}];
implementors["sgx_tstd"] = [];
implementors["snap"] = [{"text":"impl&lt;R:&nbsp;Read&gt; Read for Reader&lt;R&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()