(function() {var implementors = {};
implementors["chrono"] = [{"text":"impl Sub&lt;Duration&gt; for Duration","synthetic":false,"types":[]},{"text":"impl Sub&lt;FixedOffset&gt; for NaiveTime","synthetic":false,"types":[]},{"text":"impl Sub&lt;FixedOffset&gt; for NaiveDateTime","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone&gt; Sub&lt;FixedOffset&gt; for DateTime&lt;Tz&gt;","synthetic":false,"types":[]},{"text":"impl Sub&lt;Duration&gt; for NaiveDate","synthetic":false,"types":[]},{"text":"impl Sub&lt;NaiveDate&gt; for NaiveDate","synthetic":false,"types":[]},{"text":"impl Sub&lt;Duration&gt; for NaiveTime","synthetic":false,"types":[]},{"text":"impl Sub&lt;NaiveTime&gt; for NaiveTime","synthetic":false,"types":[]},{"text":"impl Sub&lt;Duration&gt; for NaiveDateTime","synthetic":false,"types":[]},{"text":"impl Sub&lt;NaiveDateTime&gt; for NaiveDateTime","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone&gt; Sub&lt;Duration&gt; for Date&lt;Tz&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone&gt; Sub&lt;Date&lt;Tz&gt;&gt; for Date&lt;Tz&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone&gt; Sub&lt;Duration&gt; for DateTime&lt;Tz&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone&gt; Sub&lt;DateTime&lt;Tz&gt;&gt; for DateTime&lt;Tz&gt;","synthetic":false,"types":[]}];
implementors["hashbrown"] = [{"text":"impl&lt;T, S, '_, '_&gt; Sub&lt;&amp;'_ HashSet&lt;T, S&gt;&gt; for &amp;'_ HashSet&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Eq + Hash + Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher + Default,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["hashbrown_tstd"] = [{"text":"impl&lt;T, S, '_, '_&gt; Sub&lt;&amp;'_ HashSet&lt;T, S&gt;&gt; for &amp;'_ HashSet&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Eq + Hash + Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher + Default,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["num_bigint"] = [{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'b BigInt&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;BigInt&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a BigInt&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Sub&lt;BigInt&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a u8&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;BigInt&gt; for &amp;'a u8","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;u8&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a BigInt&gt; for u8","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'b u8&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a BigInt&gt; for &amp;'b u8","synthetic":false,"types":[]},{"text":"impl Sub&lt;u8&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Sub&lt;BigInt&gt; for u8","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a u16&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;BigInt&gt; for &amp;'a u16","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;u16&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a BigInt&gt; for u16","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'b u16&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a BigInt&gt; for &amp;'b u16","synthetic":false,"types":[]},{"text":"impl Sub&lt;u16&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Sub&lt;BigInt&gt; for u16","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a usize&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;BigInt&gt; for &amp;'a usize","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;usize&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a BigInt&gt; for usize","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'b usize&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a BigInt&gt; for &amp;'b usize","synthetic":false,"types":[]},{"text":"impl Sub&lt;usize&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Sub&lt;BigInt&gt; for usize","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a i8&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;BigInt&gt; for &amp;'a i8","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;i8&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a BigInt&gt; for i8","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'b i8&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a BigInt&gt; for &amp;'b i8","synthetic":false,"types":[]},{"text":"impl Sub&lt;i8&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Sub&lt;BigInt&gt; for i8","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a i16&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;BigInt&gt; for &amp;'a i16","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;i16&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a BigInt&gt; for i16","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'b i16&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a BigInt&gt; for &amp;'b i16","synthetic":false,"types":[]},{"text":"impl Sub&lt;i16&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Sub&lt;BigInt&gt; for i16","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a isize&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;BigInt&gt; for &amp;'a isize","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;isize&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a BigInt&gt; for isize","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'b isize&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a BigInt&gt; for &amp;'b isize","synthetic":false,"types":[]},{"text":"impl Sub&lt;isize&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Sub&lt;BigInt&gt; for isize","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a u32&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;BigInt&gt; for &amp;'a u32","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;u32&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a BigInt&gt; for u32","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'b u32&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a BigInt&gt; for &amp;'b u32","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a u64&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;BigInt&gt; for &amp;'a u64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;u64&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a BigInt&gt; for u64","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'b u64&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a BigInt&gt; for &amp;'b u64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a u128&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;BigInt&gt; for &amp;'a u128","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;u128&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a BigInt&gt; for u128","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'b u128&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a BigInt&gt; for &amp;'b u128","synthetic":false,"types":[]},{"text":"impl Sub&lt;u32&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Sub&lt;BigInt&gt; for u32","synthetic":false,"types":[]},{"text":"impl Sub&lt;BigInt&gt; for u64","synthetic":false,"types":[]},{"text":"impl Sub&lt;BigInt&gt; for u128","synthetic":false,"types":[]},{"text":"impl Sub&lt;u64&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Sub&lt;u128&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a i32&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;BigInt&gt; for &amp;'a i32","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;i32&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a BigInt&gt; for i32","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'b i32&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a BigInt&gt; for &amp;'b i32","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a i64&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;BigInt&gt; for &amp;'a i64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;i64&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a BigInt&gt; for i64","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'b i64&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a BigInt&gt; for &amp;'b i64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a i128&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;BigInt&gt; for &amp;'a i128","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;i128&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a BigInt&gt; for i128","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'b i128&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a BigInt&gt; for &amp;'b i128","synthetic":false,"types":[]},{"text":"impl Sub&lt;i32&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Sub&lt;BigInt&gt; for i32","synthetic":false,"types":[]},{"text":"impl Sub&lt;i64&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Sub&lt;BigInt&gt; for i64","synthetic":false,"types":[]},{"text":"impl Sub&lt;i128&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Sub&lt;BigInt&gt; for i128","synthetic":false,"types":[]},{"text":"impl Sub&lt;BigUint&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'b BigUint&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a BigUint&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;BigUint&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a u8&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;BigUint&gt; for &amp;'a u8","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;u8&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a BigUint&gt; for u8","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'b u8&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a BigUint&gt; for &amp;'b u8","synthetic":false,"types":[]},{"text":"impl Sub&lt;u8&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl Sub&lt;BigUint&gt; for u8","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a u16&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;BigUint&gt; for &amp;'a u16","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;u16&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a BigUint&gt; for u16","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'b u16&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a BigUint&gt; for &amp;'b u16","synthetic":false,"types":[]},{"text":"impl Sub&lt;u16&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl Sub&lt;BigUint&gt; for u16","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a usize&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;BigUint&gt; for &amp;'a usize","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;usize&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a BigUint&gt; for usize","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'b usize&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a BigUint&gt; for &amp;'b usize","synthetic":false,"types":[]},{"text":"impl Sub&lt;usize&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl Sub&lt;BigUint&gt; for usize","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a u32&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;BigUint&gt; for &amp;'a u32","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;u32&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a BigUint&gt; for u32","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'b u32&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a BigUint&gt; for &amp;'b u32","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a u64&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;BigUint&gt; for &amp;'a u64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;u64&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a BigUint&gt; for u64","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'b u64&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a BigUint&gt; for &amp;'b u64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a u128&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;BigUint&gt; for &amp;'a u128","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;u128&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a BigUint&gt; for u128","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'b u128&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a BigUint&gt; for &amp;'b u128","synthetic":false,"types":[]},{"text":"impl Sub&lt;u32&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl Sub&lt;BigUint&gt; for u32","synthetic":false,"types":[]},{"text":"impl Sub&lt;u64&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl Sub&lt;BigUint&gt; for u64","synthetic":false,"types":[]},{"text":"impl Sub&lt;u128&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl Sub&lt;BigUint&gt; for u128","synthetic":false,"types":[]}];
implementors["num_complex"] = [{"text":"impl&lt;'a, 'b, T:&nbsp;Clone + Num&gt; Sub&lt;&amp;'b Complex&lt;T&gt;&gt; for &amp;'a Complex&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Clone + Num&gt; Sub&lt;Complex&lt;T&gt;&gt; for &amp;'a Complex&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Clone + Num&gt; Sub&lt;&amp;'a Complex&lt;T&gt;&gt; for Complex&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone + Num&gt; Sub&lt;Complex&lt;T&gt;&gt; for Complex&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone + Num&gt; Sub&lt;T&gt; for Complex&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Clone + Num&gt; Sub&lt;&amp;'a T&gt; for Complex&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Clone + Num&gt; Sub&lt;T&gt; for &amp;'a Complex&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, T:&nbsp;Clone + Num&gt; Sub&lt;&amp;'a T&gt; for &amp;'b Complex&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a Complex&lt;usize&gt;&gt; for usize","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;Complex&lt;usize&gt;&gt; for &amp;'a usize","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a Complex&lt;usize&gt;&gt; for &amp;'b usize","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a Complex&lt;u8&gt;&gt; for u8","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;Complex&lt;u8&gt;&gt; for &amp;'a u8","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a Complex&lt;u8&gt;&gt; for &amp;'b u8","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a Complex&lt;u16&gt;&gt; for u16","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;Complex&lt;u16&gt;&gt; for &amp;'a u16","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a Complex&lt;u16&gt;&gt; for &amp;'b u16","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a Complex&lt;u32&gt;&gt; for u32","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;Complex&lt;u32&gt;&gt; for &amp;'a u32","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a Complex&lt;u32&gt;&gt; for &amp;'b u32","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a Complex&lt;u64&gt;&gt; for u64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;Complex&lt;u64&gt;&gt; for &amp;'a u64","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a Complex&lt;u64&gt;&gt; for &amp;'b u64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a Complex&lt;u128&gt;&gt; for u128","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;Complex&lt;u128&gt;&gt; for &amp;'a u128","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a Complex&lt;u128&gt;&gt; for &amp;'b u128","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a Complex&lt;isize&gt;&gt; for isize","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;Complex&lt;isize&gt;&gt; for &amp;'a isize","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a Complex&lt;isize&gt;&gt; for &amp;'b isize","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a Complex&lt;i8&gt;&gt; for i8","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;Complex&lt;i8&gt;&gt; for &amp;'a i8","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a Complex&lt;i8&gt;&gt; for &amp;'b i8","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a Complex&lt;i16&gt;&gt; for i16","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;Complex&lt;i16&gt;&gt; for &amp;'a i16","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a Complex&lt;i16&gt;&gt; for &amp;'b i16","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a Complex&lt;i32&gt;&gt; for i32","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;Complex&lt;i32&gt;&gt; for &amp;'a i32","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a Complex&lt;i32&gt;&gt; for &amp;'b i32","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a Complex&lt;i64&gt;&gt; for i64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;Complex&lt;i64&gt;&gt; for &amp;'a i64","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a Complex&lt;i64&gt;&gt; for &amp;'b i64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a Complex&lt;i128&gt;&gt; for i128","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;Complex&lt;i128&gt;&gt; for &amp;'a i128","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a Complex&lt;i128&gt;&gt; for &amp;'b i128","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a Complex&lt;f32&gt;&gt; for f32","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;Complex&lt;f32&gt;&gt; for &amp;'a f32","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a Complex&lt;f32&gt;&gt; for &amp;'b f32","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a Complex&lt;f64&gt;&gt; for f64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;Complex&lt;f64&gt;&gt; for &amp;'a f64","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a Complex&lt;f64&gt;&gt; for &amp;'b f64","synthetic":false,"types":[]},{"text":"impl Sub&lt;Complex&lt;usize&gt;&gt; for usize","synthetic":false,"types":[]},{"text":"impl Sub&lt;Complex&lt;u8&gt;&gt; for u8","synthetic":false,"types":[]},{"text":"impl Sub&lt;Complex&lt;u16&gt;&gt; for u16","synthetic":false,"types":[]},{"text":"impl Sub&lt;Complex&lt;u32&gt;&gt; for u32","synthetic":false,"types":[]},{"text":"impl Sub&lt;Complex&lt;u64&gt;&gt; for u64","synthetic":false,"types":[]},{"text":"impl Sub&lt;Complex&lt;u128&gt;&gt; for u128","synthetic":false,"types":[]},{"text":"impl Sub&lt;Complex&lt;isize&gt;&gt; for isize","synthetic":false,"types":[]},{"text":"impl Sub&lt;Complex&lt;i8&gt;&gt; for i8","synthetic":false,"types":[]},{"text":"impl Sub&lt;Complex&lt;i16&gt;&gt; for i16","synthetic":false,"types":[]},{"text":"impl Sub&lt;Complex&lt;i32&gt;&gt; for i32","synthetic":false,"types":[]},{"text":"impl Sub&lt;Complex&lt;i64&gt;&gt; for i64","synthetic":false,"types":[]},{"text":"impl Sub&lt;Complex&lt;i128&gt;&gt; for i128","synthetic":false,"types":[]},{"text":"impl Sub&lt;Complex&lt;f32&gt;&gt; for f32","synthetic":false,"types":[]},{"text":"impl Sub&lt;Complex&lt;f64&gt;&gt; for f64","synthetic":false,"types":[]}];
implementors["num_rational"] = [{"text":"impl&lt;'a, 'b, T:&nbsp;Clone + Integer&gt; Sub&lt;&amp;'b Ratio&lt;T&gt;&gt; for &amp;'a Ratio&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, T:&nbsp;Clone + Integer&gt; Sub&lt;&amp;'b T&gt; for &amp;'a Ratio&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; Sub&lt;Ratio&lt;T&gt;&gt; for &amp;'a Ratio&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Clone + Integer,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; Sub&lt;T&gt; for &amp;'a Ratio&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Clone + Integer,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; Sub&lt;&amp;'a Ratio&lt;T&gt;&gt; for Ratio&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Clone + Integer,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; Sub&lt;&amp;'a T&gt; for Ratio&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Clone + Integer,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone + Integer&gt; Sub&lt;Ratio&lt;T&gt;&gt; for Ratio&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone + Integer&gt; Sub&lt;T&gt; for Ratio&lt;T&gt;","synthetic":false,"types":[]}];
implementors["png"] = [{"text":"impl Sub&lt;Transformations&gt; for Transformations","synthetic":false,"types":[]}];
implementors["rulinalg"] = [{"text":"impl&lt;'a, T&gt; Sub&lt;T&gt; for MatrixSlice&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, T&gt; Sub&lt;&amp;'b T&gt; for MatrixSlice&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, T&gt; Sub&lt;T&gt; for &amp;'b MatrixSlice&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, 'c, T&gt; Sub&lt;&amp;'c T&gt; for &amp;'b MatrixSlice&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; Sub&lt;T&gt; for MatrixSliceMut&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, T&gt; Sub&lt;&amp;'b T&gt; for MatrixSliceMut&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, T&gt; Sub&lt;T&gt; for &amp;'b MatrixSliceMut&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, 'c, T&gt; Sub&lt;&amp;'c T&gt; for &amp;'b MatrixSliceMut&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Sub&lt;T&gt; for Matrix&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; Sub&lt;&amp;'a T&gt; for Matrix&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; Sub&lt;T&gt; for &amp;'a Matrix&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, T&gt; Sub&lt;&amp;'b T&gt; for &amp;'a Matrix&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, T&gt; Sub&lt;MatrixSlice&lt;'b, T&gt;&gt; for MatrixSlice&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, 'c, T&gt; Sub&lt;MatrixSlice&lt;'b, T&gt;&gt; for &amp;'c MatrixSlice&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, 'c, T&gt; Sub&lt;&amp;'c MatrixSlice&lt;'b, T&gt;&gt; for MatrixSlice&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, 'c, 'd, T&gt; Sub&lt;&amp;'d MatrixSlice&lt;'b, T&gt;&gt; for &amp;'c MatrixSlice&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, T&gt; Sub&lt;MatrixSlice&lt;'b, T&gt;&gt; for MatrixSliceMut&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, 'c, T&gt; Sub&lt;MatrixSlice&lt;'b, T&gt;&gt; for &amp;'c MatrixSliceMut&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, 'c, T&gt; Sub&lt;&amp;'c MatrixSlice&lt;'b, T&gt;&gt; for MatrixSliceMut&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, 'c, 'd, T&gt; Sub&lt;&amp;'d MatrixSlice&lt;'b, T&gt;&gt; for &amp;'c MatrixSliceMut&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, T&gt; Sub&lt;MatrixSliceMut&lt;'b, T&gt;&gt; for MatrixSlice&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, 'c, T&gt; Sub&lt;MatrixSliceMut&lt;'b, T&gt;&gt; for &amp;'c MatrixSlice&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, 'c, T&gt; Sub&lt;&amp;'c MatrixSliceMut&lt;'b, T&gt;&gt; for MatrixSlice&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, 'c, 'd, T&gt; Sub&lt;&amp;'d MatrixSliceMut&lt;'b, T&gt;&gt; for &amp;'c MatrixSlice&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, T&gt; Sub&lt;MatrixSliceMut&lt;'b, T&gt;&gt; for MatrixSliceMut&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, 'c, T&gt; Sub&lt;MatrixSliceMut&lt;'b, T&gt;&gt; for &amp;'c MatrixSliceMut&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, 'c, T&gt; Sub&lt;&amp;'c MatrixSliceMut&lt;'b, T&gt;&gt; for MatrixSliceMut&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, 'c, 'd, T&gt; Sub&lt;&amp;'d MatrixSliceMut&lt;'b, T&gt;&gt; for &amp;'c MatrixSliceMut&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; Sub&lt;Matrix&lt;T&gt;&gt; for MatrixSlice&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, T&gt; Sub&lt;Matrix&lt;T&gt;&gt; for &amp;'b MatrixSlice&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, T&gt; Sub&lt;&amp;'b Matrix&lt;T&gt;&gt; for MatrixSlice&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, 'c, T&gt; Sub&lt;&amp;'c Matrix&lt;T&gt;&gt; for &amp;'b MatrixSlice&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; Sub&lt;MatrixSlice&lt;'a, T&gt;&gt; for Matrix&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, T&gt; Sub&lt;MatrixSlice&lt;'a, T&gt;&gt; for &amp;'b Matrix&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, T&gt; Sub&lt;&amp;'b MatrixSlice&lt;'a, T&gt;&gt; for Matrix&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, 'c, T&gt; Sub&lt;&amp;'c MatrixSlice&lt;'a, T&gt;&gt; for &amp;'b Matrix&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; Sub&lt;Matrix&lt;T&gt;&gt; for MatrixSliceMut&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, T&gt; Sub&lt;Matrix&lt;T&gt;&gt; for &amp;'b MatrixSliceMut&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, T&gt; Sub&lt;&amp;'b Matrix&lt;T&gt;&gt; for MatrixSliceMut&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, 'c, T&gt; Sub&lt;&amp;'c Matrix&lt;T&gt;&gt; for &amp;'b MatrixSliceMut&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; Sub&lt;MatrixSliceMut&lt;'a, T&gt;&gt; for Matrix&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, T&gt; Sub&lt;MatrixSliceMut&lt;'a, T&gt;&gt; for &amp;'b Matrix&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, T&gt; Sub&lt;&amp;'b MatrixSliceMut&lt;'a, T&gt;&gt; for Matrix&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, 'c, T&gt; Sub&lt;&amp;'c MatrixSliceMut&lt;'a, T&gt;&gt; for &amp;'b Matrix&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Sub&lt;Matrix&lt;T&gt;&gt; for Matrix&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; Sub&lt;Matrix&lt;T&gt;&gt; for &amp;'a Matrix&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; Sub&lt;&amp;'a Matrix&lt;T&gt;&gt; for Matrix&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, T&gt; Sub&lt;&amp;'b Matrix&lt;T&gt;&gt; for &amp;'a Matrix&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;T, Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Copy + Sub&lt;T, Output = T&gt;&gt; Sub&lt;T&gt; for Vector&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Copy + Sub&lt;T, Output = T&gt;&gt; Sub&lt;&amp;'a T&gt; for Vector&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Copy + Sub&lt;T, Output = T&gt;&gt; Sub&lt;T&gt; for &amp;'a Vector&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, T:&nbsp;Copy + Sub&lt;T, Output = T&gt;&gt; Sub&lt;&amp;'b T&gt; for &amp;'a Vector&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Copy + Sub&lt;T, Output = T&gt;&gt; Sub&lt;Vector&lt;T&gt;&gt; for Vector&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Copy + Sub&lt;T, Output = T&gt;&gt; Sub&lt;&amp;'a Vector&lt;T&gt;&gt; for Vector&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Copy + Sub&lt;T, Output = T&gt;&gt; Sub&lt;Vector&lt;T&gt;&gt; for &amp;'a Vector&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, T:&nbsp;Copy + Sub&lt;T, Output = T&gt;&gt; Sub&lt;&amp;'b Vector&lt;T&gt;&gt; for &amp;'a Vector&lt;T&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()