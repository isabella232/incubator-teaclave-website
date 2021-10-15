initSidebarItems({"enum":[["Diff","A type returned by the `diff_with` function."],["Either","The enum `Either` with variants `Left` and `Right` is a general purpose sum type with two cases."],["EitherOrBoth","Value that either holds a single A or B, or both."],["FoldWhile","An enum used for controlling the execution of `.fold_while()`."],["MinMaxResult","`MinMaxResult` is an enum returned by `minmax`. See `Itertools::minmax()` for more detail."],["Position","A value yielded by `WithPosition`. Indicates the position of this element in the iterator results."]],"fn":[["all","Test whether the predicate holds for all elements in the iterable."],["any","Test whether the predicate holds for any elements in the iterable."],["assert_equal","Assert that two iterables produce equal sequences, with the same semantics as equal(a, b)."],["chain","Create an iterator that first iterates `i` and then `j`."],["cloned","Create an iterator that clones each element from &T to T"],["concat","Combine all an iterator's elements into one element by using `Extend`."],["cons_tuples","Create an iterator that maps for example iterators of `((A, B), C)` to `(A, B, C)`."],["diff_with","Compares every element yielded by both `i` and `j` with the given function in lock-step and returns a `Diff` which describes how `j` differs from `i`."],["enumerate","Iterate `iterable` with a running index."],["equal","Return `true` if both iterables produce equal sequences (elements pairwise equal and sequences of the same length), `false` otherwise."],["fold","Perform a fold operation over the iterable."],["interleave","Create an iterator that interleaves elements in `i` and `j`."],["iterate","Creates a new iterator that infinitely applies function to value and yields results."],["max","Return the maximum value of the iterable."],["merge","Create an iterator that merges elements in `i` and `j`."],["merge_join_by","Return an iterator adaptor that merge-joins items from the two base iterators in ascending order."],["min","Return the minimum value of the iterable."],["multizip","An iterator that generalizes .zip() and allows running multiple iterators in lockstep."],["partition","Partition a sequence using predicate `pred` so that elements that map to `true` are placed before elements which map to `false`."],["process_results","“Lift” a function of the values of an iterator so that it can process an iterator of `Result` values instead."],["put_back","Create an iterator where you can put back a single item"],["repeat_call","An iterator source that produces elements indefinitely by calling a given closure."],["repeat_n","Create an iterator that produces `n` repetitions of `element`."],["rev","Iterate `iterable` in reverse."],["unfold","Creates a new unfold source with the specified closure as the \"iterator function\" and an initial state to eventually pass to the closure"],["zip","Iterate `i` and `j` in lock step."],["zip_eq","Iterate `i` and `j` in lock step."]],"macro":[["iproduct","Create an iterator over the “cartesian product” of iterators."],["izip","Create an iterator running multiple iterators in lockstep."]],"mod":[["structs","The concrete iterator types."]],"trait":[["Itertools","An `Iterator` blanket implementation that provides extra adaptors and methods."],["PeekingNext","An iterator that allows peeking at an element before deciding to accept it."]]});