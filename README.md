hello gulp
=====

```
# install gulp globally if you haven't
$ npm install -g gulp

# Still need to install gulp dependencies locally
$ npm install --save-dev gulp

# The 2 steps above can be replaced with
# just installing gulp locally
#$ npm install gulp

# install plugins
$ npm install gulp-concat gulp-rename gulp-uglify
```

run the default task
```
$ gulp
```

run 'hello' task
```
$ gulp hello
```

run 'script' task
```
$ gulp script
$ cat dist/all.js
```

===
ref:
http://travismaynard.com/writing/getting-started-with-gulp

