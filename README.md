hello
=====
Download and unzip source code from
http://www.apuebook.com/apue3e.html


For Mac,
change this before `make`,
might need to comment out [this line](https://github.com/anglee/hello/blob/0e1a597aeedd84ab5f5515abe75346243a87cfa0/apue.3e/db/Makefile#L21)


Figure 1.3
```
$ cc -c myls.c
$ cc -o myls myls.o apue.3e/lib/error.o
$ ./myls ../
```
