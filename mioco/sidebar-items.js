initSidebarItems({"enum":[["ExitStatus","Coroutine exit status (value returned or panic)"]],"fn":[["get_userdata","Gets a reference to the user data set through `set_userdata`. Returns `None` if `T` does not match or if no data was set"],["in_coroutine","Returns true when executing inside a mioco coroutine, false otherwise."],["select_wait","Wait till an event is readyUse `select!` macro instead.**Warning**: Mioco can't guarantee that the returned `EventSource` will not block when actually attempting to `read` or `write`. You must use `try_read` and `try_write` instead.The returned value contains event type and the id of the `EventSource`. See `EventSource::id()`."],["set_children_userdata","Sets new user data that will inherit to newly spawned coroutines. Use `None` to clear."],["set_userdata","Sets new user data for the current coroutine"],["sleep","Block coroutine for a given timeWarning: The precision of this call (and other `timer()` like functionality) is limited by `mio` event loop settings. Any small value of `time_ms` will effectively be rounded up to `mio_orig::EventLoop::timer_tick_ms()`."],["spawn","Spawn a mioco coroutine.If called inside an existing mioco instance - spawn and run a new coroutine in it.If called outside of existing mioco instance - spawn a new mioco instance in a separate thread or use existing mioco instance to run new mioco coroutine. The API intention is to guarantee: * this call will not block * coroutine will be executing in some mioco instance the exact details might change."],["spawn_ext","Spawn a `mioco` coroutineCan't be used outside of existing coroutine.Returns a `CoroutineHandle` that can be used to perform additional operations."],["start","Start mioco instance.Will start new mioco instance and return only after it's done.Shorthand for creating new `Mioco` instance with default settings and starting it right away."],["start_threads","Start mioco instance using a given number of threads.Returns after mioco instance exits.Shorthand for `mioco::start()` running given number of threads."],["sync","Execute a block of synchronous operationsThis will execute a block of synchronous operations without blocking cooperative coroutine scheduling. This is done by offloading the synchronous operations to a separate thread, a notifying the coroutine when the result is available.TODO: find some wise people to confirm if this is sound TODO: use threadpool to prevent potential system starvation?"],["thread_num","Get number of threads of the Mioco instance that coroutine is running in.This is useful for load balancing: spawning as many coroutines as there is handling threads that can run them."],["yield_now","Yield coroutine executionCoroutine can yield execution without blocking on anything particular to allow scheduler to run other coroutines before resuming execution of the current one.For this to be effective, custom scheduler must be implemented. See `trait Scheduler`.Note: named `yield_now` as `yield` is reserved word."]],"macro":[["select!","**Warning**: Mioco can't guarantee that the returned `EventSource` will not block when actually attempting to `read` or `write`. You must use `try_read` and `try_write` instead."]],"mod":[["mio","Re-export of some `mio` symbols, that are part of the mioco API."],["sync","Useful synchronization primitives"],["tcp","TCP IO"],["timer","Timers"],["udp","UDP IO"],["unix","Unix sockets IO"]],"struct":[["Config","Mioco instance builder."],["CoroutineControl","Coroutine control blockThrough this interface Coroutine can be resumed and migrated in the scheduler."],["CoroutineHandle","Handle to spawned coroutine"],["Event","Event delivered to the coroutineRead and/or Write + event source ID"],["EventSourceId","Id of an event source used to enumerate themIt's unique within coroutine of an event source, but not globally."],["Handler","Mioco event loop `Handler`Registered in `mio_orig::EventLoop` and implementing `mio_orig::Handler`.  This `struct` is quite internal so you should not have to worry about it."],["MioAdapter","Adapt raw `mio` type to mioco `Evented` requirements.See source of `src/tcp.rs` for example of usage."],["Mioco","Mioco instanceMain mioco structure."],["RW","Read/Write/Both/None"]],"trait":[["Evented","Mioco event source.All types used as asynchronous event sources implement this trait.A generic implementation: `MioAdapter` implements this trait, wrapping native mio types (implementing `mio::Evented` trait)."],["Scheduler","Coroutine SchedulerCustom implementations of this trait allow users to change the order in which Coroutines are being scheduled."],["SchedulerThread","Per-thread Scheduler"]]});