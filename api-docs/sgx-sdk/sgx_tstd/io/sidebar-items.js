initSidebarItems({"enum":[["ErrorKind","A list specifying general categories of I/O error."],["SeekFrom","Enumeration of possible methods to seek within an I/O object."]],"fn":[["_eprint",""],["_print",""],["copy","Copies the entire contents of a reader into a writer."],["empty","Constructs a new handle to an empty reader."],["errno",""],["error_string",""],["repeat","Creates an instance of a reader that infinitely repeats one byte."],["set_errno",""],["sink","Creates an instance of a writer which will successfully consume all data."],["stderr","Constructs a new handle to the standard error of the current process."],["stdin","Constructs a new handle to the standard input of the current process."],["stdout","Constructs a new handle to the standard output of the current process."]],"mod":[["prelude","The I/O Prelude"]],"struct":[["BufReader","The `BufReader` struct adds buffering to any reader."],["BufWriter","Wraps a writer and buffers its output."],["Bytes","An iterator over `u8` values of a reader."],["Chain","Adaptor to chain together two readers."],["Cursor","A `Cursor` wraps an in-memory buffer and provides it with a [`Seek`] implementation."],["Empty","A reader which is always at EOF."],["Error","The error type for I/O operations of the [`Read`], [`Write`], [`Seek`], and associated traits."],["Initializer","A type used to conditionally initialize buffers passed to `Read` methods."],["IntoInnerError","An error returned by `into_inner` which combines an error that happened while writing out the buffer, and the buffered writer object which may be used to recover from the condition."],["IoSlice","A buffer type used with `Write::write_vectored`."],["IoSliceMut","A buffer type used with `Read::read_vectored`."],["Lazy",""],["LineWriter","Wraps a writer and buffers output to it, flushing whenever a newline (`0x0a`, `'\\n'`) is detected."],["Lines","An iterator over the lines of an instance of `BufRead`."],["Repeat","A reader which yields one byte over and over and over and over and over and..."],["Sink","A writer which will move data into the void."],["Split","An iterator over the contents of an instance of `BufRead` split on a particular byte."],["Stderr","A handle to the standard error stream of a process."],["StderrLock","A locked reference to the `Stderr` handle."],["Stdin","A handle to the standard input stream of a process."],["StdinLock","A locked reference to the `Stdin` handle."],["Stdout","A handle to the global standard output stream of the current process."],["StdoutLock","A locked reference to the `Stdout` handle."],["Take","Reader adaptor which limits the bytes read from an underlying reader."]],"trait":[["BufRead","A `BufRead` is a type of `Read`er which has an internal buffer, allowing it to perform extra ways of reading."],["Read","The `Read` trait allows for reading bytes from a source."],["Seek","The `Seek` trait provides a cursor which can be moved within a stream of bytes."],["Write","A trait for objects which are byte-oriented sinks."]],"type":[["Result","A specialized `Result` type for I/O operations."]]});