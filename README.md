# mioco

<p align="center">
  <a href="https://travis-ci.org/dpc/mioco">
      <img src="https://img.shields.io/travis/dpc/mioco/master.svg?style=flat-square" alt="Travis CI Build Status">
  </a>
  <a href="https://ci.appveyor.com/project/dpc/mioco/branch/master">
      <img src="https://ci.appveyor.com/api/projects/status/p5rjfbqw2a3pxc4o/branch/master?svg=true" alt="App Veyor Build Status">
  </a>
  <a href="https://crates.io/crates/mioco">
      <img src="http://meritbadge.herokuapp.com/mioco?style=flat-square" alt="crates.io">
  </a>
  <a href="https://gitter.im/dpc/mioco">
      <img src="https://img.shields.io/badge/GITTER-join%20chat-green.svg?style=flat-square" alt="Gitter Chat">
  </a>
  <br>
  <strong><a href="//dpc.github.io/mioco/">Documentation</a></strong>
</p>


## Code snippet

``` rust
fn main() {
    mioco::start(||{
        let addr = listend_addr();

        let listener = TcpListener::bind(&addr).unwrap();

        println!("Starting tcp echo server on {:?}", listener.local_addr().unwrap());

        loop {
            let mut conn = listener.accept().unwrap();

            mioco::spawn(move || -> io::Result<()> {
                let mut buf = [0u8; 1024 * 16];
                loop {
                    let size = try!(conn.read(&mut buf));
                    if size == 0 {/* eof */ break; }
                    let _ = try!(conn.write_all(&mut buf[0..size]));
                }

                Ok(())
            });
        }
    }).unwrap();
}
```

This trivial code scales very well. See [benchmarks](BENCHMARKS.md).

## Contributors welcome!

Mioco is looking for contributors. See
[Contributing page](https://github.com/dpc/mioco/wiki/Contributing)
for details.

## Introduction

Scalable, coroutine-based, asynchronous IO handling library for Rust
programming language.

Mioco uses asynchronous event loop, to cooperatively switch between
coroutines (aka. green threads), depending on data availability. You
can think of `mioco` as of *Node.js for Rust* or Rust *[green
threads][green threads] on top of [`mio`][mio]*.

Read [Documentation](//dpc.github.io/mioco/) for details and features.

If you want to say hi, or need help use [#mioco gitter.im][mioco gitter].

To report a bug or ask for features use [github issues][issues].

[rust]: http://rust-lang.org
[mio]: //github.com/carllerche/mio
[colerr]: //github.com/dpc/colerr
[mioco gitter]: https://gitter.im/dpc/mioco
[rust user forum]: https://users.rust-lang.org/
[issues]: //github.com/dpc/mioco/issues
[green threads]: https://en.wikipedia.org/wiki/Green_threads

## Building & running

Note: You must be using [nightly Rust][nightly rust] release. If you're using
[multirust][multirust], which is highly recommended, switch with `multirust default
nightly` command.

### Standalone

To start test echo server:

    cargo run --release --example echo

For daily work:

    make all

[nightly rust]: https://doc.rust-lang.org/book/nightly-rust.html
[multirust]: https://github.com/brson/multirust

### In your project

In Cargo.toml:

```
[dependencies]
mioco = "*"
```

In your `main.rs`:

```
#[macro_use]
extern crate mioco;
```

## Projects using mioco:

* [colerr][colerr] - colorize stderr;

Send PR or drop a link on gitter.
