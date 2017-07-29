Ludum Dare 39
=============

My project for Ludum Dare 39

[Click to view the demo!](https://dangerbarber.com/ld39/)

Theme
-----

Running Out of Power

License
-------

MIT (see LICENSE)

Description
-----------

This will be a 2D strategy game where you will be responsible for keeping a
power company afloat. The controls will consist of a large map of the city,
providing you with an overview of your resources and their status. But then
stuff is going to happen... you know, people running into power poles, everybody
turning on their air conditioning all at the same time, a crazy dude tries to
build a time machine and decides he needs the full power of a transmission line
to do so. That's when things get interesting.

As time goes on, these emergencies will occur and will down power in an area.
Depending on what specific infrastructure is downed, it could affect a whole
district, or maybe just a small area. Either way, you're going to have to route
repair crews to clean up the mess because the loss of power means the loss of
revenue, and a power company operates on a tighter budget than you might expect
when you look at your power bill.

In addition, as the game goes on, power consumption will increase, and the
likelihood of certain issues will increase as a result. Additionally, your power
plants will be subject to continuous government regulation and resource
shortages, and this will increase the cost of doing business.

To keep playing, you just have to keep your company's net worth in the green. If
you run out of money, your company goes under, and it's game over.

Your final score will be the gross revenue over the life of your company, but
you'll also be able to look at the highest net worth and the amount of time your
company survived.

The game will be a web-based game written primarily in JavaScript. It should be
able to run in any up-to-date browser.

Run-Time Dependencies
---------------------

This project is built on top of the excellent Phaser (phaser-ce) HTML5 game
engine/framework. This is the only dependency that needs to be present to run
the game. Phaser is, like this game, licensed with the MIT license. I've
provided a link to the license below. It can be installed using either `make`
or `bower install` from the root of the repository.
- [Website](https://phaser.io/)
- [GitHub](https://github.com/photonstorm/phaser-ce/)
- [License](https://github.com/photonstorm/phaser-ce/blob/master/license.txt)

Supported Browsers
------------------

Due to some of the advanced features used by the code in this web application,
we are unable to provide indefinite backwards compatibility. The following is a
list of the supported browsers. Note that browsers not supported *might* work,
it just means we won't be putting any effort in getting it to work on that
browser.

- Chrome 50+
- Firefox 45+
- Edge 14+
- Internet Explorer 11
- Safari 10+
- iOS 9.3+
- Android 4.4+
- Opera 42+

Building
--------

To build this software, assuming you possess all dependencies, then all you need
to do is execute the following command from the source code root:

```sh
make
```

Yep, that's seriously all there is to it. Unless you don't have all of the
dependencies, then look over the build dependencies list.

- GNU make
    - Build system
    - [Website](https://www.gnu.org/software/make/)
    - OSX: install Xcode
    - Debian: ```sudo apt-get install make```
- FindUtils
    - The command `find` and `xargs` among others (used for preparing the source code)
    - [Website](https://www.gnu.org/software/findutils/)
    - OSX: included by default
    - Debian: included by default
- Rename (util-linux)
    - The command `rename` (also used for preparing the source code)
    - [Git Repo](http://git.kernel.org/cgit/utils/util-linux/util-linux.git)
    - OSX: ```brew install rename```
    - Debian: included by default
- Sass
    - SCSS-to-CSS compiler
    - [Website](http://sass-lang.com/)
    - [GitHub](https://github.com/sass/sass)
    - ```gem install sass```
- Webpack
    - JavaScript bundler/compiler/build-system
    - [Website](https://webpack.js.org/)
    - [GitHub](https://github.com/webpack/webpack/)
    - ```npm install```
- Babel
    - JavaScript ES6+ transpiler
    - [Website](https://babeljs.io/)
    - [GitHub](https://github.com/babel/babel)
    - ```npm install```
- Babel Loader
    - Babel loader for Webpack
    - [GitHub](https://github.com/babel/babel-loader)
    - ```npm install```
- Babel Env Preset
    - Our chosen preset for Babel (don't install this globally, it doesn't work that way)
    - [GitHub](https://github.com/babel/babel-preset-env)
    - ```npm install```
- Google Closure Compiler (as ```closure-compiler```, use symlink if different)
    - JavaScript minifier and optimizer
    - [Website](https://developers.google.com/closure/compiler/?hl=en)
    - [GitHub](https://github.com/google/closure-compiler)
    - OSX: ```brew install closure-compiler```
    - Debian: ```sudo apt-get install closure-compiler```
- Yahoo! YUI Compressor (as ```yuicompressor```, use symlink if different)
    - CSS minifier and optimizer
    - [Website](http://yui.github.io/yuicompressor/)
    - [GitHub](https://github.com/yui/yuicompressor)
    - OSX: ```brew install yuicompressor```
    - Debian: ```sudo apt-get install yui-compressor; sudo ln -s $(which yui-compressor) /usr/local/bin/yuicompressor```

Also note that if you're missing ```gem``` or ```npm``` (and therefore, probably
don't have Sass or Browserify), then you'll need to get those as well.

- Ruby (and Gem Package Manager)
    - Needed for installing and running Ruby Gems (like Sass).
    - [Website](https://www.ruby-lang.org/)
    - [GitHub](https://github.com/ruby/ruby)
    - OSX: Comes pre-installed, or ```brew install ruby```
    - Debian: ```sudo apt-get install ruby```
- Node.JS (and Node Package Manager)
    - Needed for installing and running Node packages (like Browserify).
    - [Website](https://nodejs.org/)
    - [GitHub](https://github.com/nodejs/node)
    - OSX: ```brew install node```
    - Debian: ```sudo apt-get install nodejs```

And last but not least, if you're on OSX and ```brew``` commands aren't working,
then you need to download HomeBrew from [here](http://brew.sh/).

Additionally, if you're on any non-debian-based distro, you can probably change
the commands from ```apt-get install``` to ```yum install``` or ```pacman -S```,
and if not, hopefully you're a resourceful linux user, and you can figure it out
somehow.

If you're on windows, there's probably a way to do it, and some Google-fu can
help you with that. You might be better off building it in a linux virtual
machine, though, so don't rule that out.

Publishing
----------

The build system (makefile) also includes some methods for publishing the code
online. For this, you have three targets:

- ```make publish-all``` (publishes to development and production sites)
- ```make publish``` (publishes to production site only)
- ```make publish-dev``` (publishes to development site only)

The publishing functionality of the build system has one dependency (beside GNU
make, see above for info on that).

- rsync
    - Needed for remote synchronization over SFTP (all publish targets).
    - [Website](https://rsync.samba.org/)
    - [Git](https://git.samba.org/rsync.git/?p=rsync.git)
    - OSX: Comes pre-installed, or ```brew install rsync```
    - Debian: ```sudo apt-get install rsync```

Before you are able to publish to anything, you have to define targets as
environment variables. By default, it will do nothing at all. You need to define
a couple of target variables. These targets can be a location on your own file
system, or it can be any remote protocol that rsync supports (like SSH).

- ```ld39_remote_production``` is the environment variable for the production remote.
    - ```export ld39_remote_production=user@domain.tld:path/to/hosting```
- ```ld39_remote_development``` is the environment variable for the development remote
    - ```export ld39_remote_development=user@domain.tld:path/to/hosting```

Dependencies
------------

If you want to deal with the composer or bower dependencies, which may be
necessary for certain development operations (namely updating them or adding new
ones), you will need the following in addition to all of these. Note that not
all of the dependencies are being managed with these tools, and as such, some
dependency updates may require manual updating.

- Composer
    - PHP dependency/package manager.
    - [Website](https://getcomposer.org/)
    - [GitHub](https://github.com/composer/composer)
    - OSX: ```brew install composer```
    - Debian ```sudo apt-get install composer```
- Bower
    - Client-side JavaScript dependency/package manager.
    - [Website](https://bower.io/)
    - [GitHub](https://github.com/bower/bower)
    - ```npm install -g bower```

Hosting Requirements
--------------------

Just a webserver that can serve static files. That can be anything you want. It
probably won't work if you open the files locally though, because of browser
security standards.
