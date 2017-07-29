##############################
# Makefile for Ludum Dare 39 #
##############################

# CSS BUILD PIPELINE
#
#              _*.scss
#                 |
# *.scss ->[SCSS_COMPILER]-> *.css ->[CSS_MINIFIER]-> *.min.css
# *.css ---------------------------->[CSS_MINIFIER]-> *.min.css

# JAVASCRIPT BUILD PIPELINE
#
#                      *.js
#                       |
# main.src.js ---->[JS_BUNDLER]-> *.js ->[JS_MINIFIER]-> *.min.js

# NOTE: If you need to use deployment in this file, make sure to set the
# following environment variables before running make:
#
# ld39_remote_production: the RSync remote for production deployment
# ld39_remote_development: the RSync remote for development deployment

# CONFIG
CSS_MINIFIER = yuicompressor
CSS_MINIFIER_FLAGS =
SCSS_COMPILER = scss
SCSS_COMPILER_FLAGS =
JS_BUNDLER = ./node_modules/webpack/bin/webpack.js
JS_BUNDLER_FLAGS =
JS_BUNDLED = src/main.js
JS_MINIFIER = closure-compiler
JS_MINIFIER_FLAGS =
MINIFY_EXCLUDE = src/lib/%
REMOTE_SYNCER = rsync
REMOTE_SYNCER_FLAGS = -avlt --progress --delete --delete-during
LOCAL_PRODUCTION = ./src/
REMOTE_PRODUCTION = $(if $(ld39_remote_production), $(ld39_remote_production), ./src/)
SYNC_PRODUCTION_FLAGS = --exclude *.scss --exclude .DS_Store --exclude error_log
LOCAL_DEVELOPMENT = ./src/
REMOTE_DEVELOPMENT = $(if $(ld39_remote_development), $(ld39_remote_development), ./src/)
SYNC_DEVELOPMENT_FLAGS = --exclude .DS_Store --exclude error_log
JS_DEPENDENCY_MANAGER = bower
JS_DEPENDENCY_MANAGER_INSTALL_FLAGS =
JS_DEPENDENCY_MANAGER_UPDATE_FLAGS =
JS_SERVER_DEPENDENCY_MANAGER = npm
JS_SERVER_DEPENDENCY_MANAGER_INSTALL_FLAGS =
JS_SERVER_DEPENDENCY_MANAGER_UPDATE_FLAGS =

# FUNCTIONS
FILTER_OUT_MATCH = $(foreach v,$(2),$(if $(findstring $(1),$(v)),,$(v)))

# locate all SCSS files except those under COMPILE_EXCLUDE directories or _*.scss files
SCSS_FILES = $(call FILTER_OUT_MATCH,/_, $(filter-out $(COMPILE_EXCLUDE), $(wildcard \
	src/*.scss \
	src/**/*.scss \
	src/**/**/*.scss \
	src/**/**/**/*.scss \
	src/**/**/**/**/*.scss \
	src/**/**/**/**/**/*.scss \
	src/**/**/**/**/**/**/*.scss \
	src/**/**/**/**/**/**/**/*.scss \
	src/**/**/**/**/**/**/**/**/*.scss \
))) # the redundant christmas tree of paths is because Xcode's make doesn't work right.

# locate all compiled SCSS files (or would-be compiled files)
SCSS_COMPILED = $(SCSS_FILES:.scss=.css)

# locate all _*.scss files except those under COMPILE_EXCLUDE
SCSS_INCLUDES = $(filter-out $(COMPILE_EXCLUDE) $(SCSS_FILES), $(wildcard \
	src/*.scss \
	src/**/*.scss \
	src/**/**/*.scss \
	src/**/**/**/*.scss \
	src/**/**/**/**/*.scss \
	src/**/**/**/**/**/*.scss \
	src/**/**/**/**/**/**/*.scss \
	src/**/**/**/**/**/**/**/*.scss \
	src/**/**/**/**/**/**/**/**/*.scss \
))

# locate all CSS files except those under MINIFY_EXCLUDE directories or .min.css files
CSS_MINIFY_FILES = $(filter-out %.min.css $(MINIFY_EXCLUDE), $(wildcard \
	src/*.css \
	src/**/*.css \
	src/**/**/*.css \
	src/**/**/**/*.css \
	src/**/**/**/**/*.css \
	src/**/**/**/**/**/*.css \
	src/**/**/**/**/**/**/*.css \
	src/**/**/**/**/**/**/**/*.css \
	src/**/**/**/**/**/**/**/**/*.css \
))

# locate all minified CSS files (or would-be minified files)
CSS_MINIFIED = $(CSS_MINIFY_FILES:.css=.min.css)

# locate all minified bundled JS files (or would be minified files)
JS_MINIFIED = $(JS_BUNDLED:.js=.min.js)

# target: all                   - build all files.
.PHONY: all
all: # actions instead of dependencies because see below
	$(MAKE) prepare
	$(MAKE) compile
	$(MAKE) minify
# this recursive make operation is done so that the minify option knows about
# any CSS files produced during the compilation of SCSS, which would
# otherwise be skipped due to them not existing at initial run time.

# HACK: okay, so this isn't ideal, but make REALLY HATES files with spaces.
# target: prepare               - prepare source code for makefile. (basically get rid of spaces in paths)
.PHONY: prepare
prepare:
	@echo '==> Installing Dependencies...'
	$(MAKE) install-deps
	@echo '==> Removing Spaces From Directory Names...'
	find src -depth -name "* *" -type d -execdir rename ' ' '_' "{}" \;
	@echo '==> Removing Spaces From File Names...'
	find src -depth -name "* *" -type f -execdir rename ' ' '_' "{}" \;
	@echo

# target: compile               - compile all compilable source code.
.PHONY: compile
compile: scss-compile js-bundle

# target: scss-compile          - compile all SCSS to CSS.
.PHONY: scss-compile
scss-compile: $(SCSS_FILES) $(SCSS_COMPILED)

# target: %.css                 - compile individual SCSS file.
%.css: %.scss $(SCSS_INCLUDES) # always recompile every SCSS file if ANY dependency file changes
	@echo '==> Compiling $<'
	$(SCSS_COMPILER) $(SCSS_COMPILER_FLAGS) $< > $@
	@echo

# target: js-bundle             - bundle all JavaScript into bundles.
.PHONY: js-bundle
js-bundle:
	@echo '==> Bundling JavaScript...'
	$(JS_BUNDLER) $(JS_BUNDLER_FLAGS)
	@echo

# target: minify                - minify CSS and JavaScript files.
.PHONY: minify
minify: minify-css minify-js

# target: minify-css            - minify CSS files.
.PHONY: minify-css
minify-css: $(CSS_MINIFY_FILES) $(CSS_MINIFIED)

# target: %.min.css             - minify individual CSS file.
%.min.css: %.css
	@echo '==> Minifying $<'
	$(CSS_MINIFIER) $(CSS_MINIFIER_FLAGS) $< > $@
	@echo

# target: minify-js             - minify JavaScript files.
.PHONY: minify-js
minify-js: $(JS_BUNDLED) $(JS_MINIFIED)

# target: %.min.js              - minify individual JavaScript file.
%.min.js: %.js
	@echo '==> Minifying $<'
	$(JS_MINIFIER) $(JS_MINIFIER_FLAGS) $< > $@
	@echo

# target: clean                 - delete all built files.
.PHONY: clean
clean: clean-minified clean-compiled

# target: clean-minified        - delete all minified files.
.PHONY: clean-minified
clean-minified: clean-minified-css clean-minified-js

# target: clean-minified-css    - delete all minified CSS files.
.PHONY: clean-minified-css
clean-minified-css:
	@echo '==> Removing Minified CSS Files...'
	rm -fv $(CSS_MINIFIED)
	@echo

# target: clean-minified-js     - delete all minified JavaScript files.
.PHONY: clean-minified-js
clean-minified-js:
	@echo '==> Removing Minified JavaScript Files...'
	rm -fv $(JS_MINIFIED)
	@echo

# target: clean-compiled        - delete all compiled SCSS and JavaScript.
.PHONY: clean-compiled
clean-compiled: clean-compiled-scss clean-bundled-js

# target: clean-compiled-scss   - delete all compiled SCSS files (the CSS equivalents).
.PHONY: clean-compiled-scss
clean-compiled-scss:
	@echo '==> Removing Compiled SCSS Files...'
	rm -fv $(SCSS_COMPILED)
	@echo

# target: clean-bundled-js     - delete all bundled JavaScript files.
.PHONY: clean-bundled-js
clean-bundled-js:
	@echo '==> Removing Bundled JavaScript Files...'
	rm -fv $(JS_BUNDLED)
	@echo

# target: publish-all           - publish current version to both development-site and production-site.
.PHONY: publish-all
publish-all: publish publish-dev

# target: publish               - publish current version to production-site.
.PHONY: publish
publish:
	@echo '==> Publishing Production Copy...'
	$(REMOTE_SYNCER) $(REMOTE_SYNCER_FLAGS) $(LOCAL_PRODUCTION) $(REMOTE_PRODUCTION) $(SYNC_PRODUCTION_FLAGS)
	@echo

# target: publish-dev           - publish current version to development-site.
.PHONY: publish-dev
publish-dev:
	@echo '==> Publishing Development Copy...'
	$(REMOTE_SYNCER) $(REMOTE_SYNCER_FLAGS) $(LOCAL_DEVELOPMENT) $(REMOTE_DEVELOPMENT) $(SYNC_DEVELOPMENT_FLAGS)
	@echo

# target: install-deps          - install library dependencies
.PHONY: install-deps
install-deps: install-js-deps install-js-serv-deps

# target: install-js-deps       - install Javascript library dependencies
.PHONY: install-js-deps
install-js-deps:
	@echo '==> Installing JavaScript Dependencies...'
	$(JS_DEPENDENCY_MANAGER) $(JS_DEPENDENCY_MANAGER_INSTALL_FLAGS) install
	@echo

# target: install-js-serv-deps  - install JavaScript (npm) dependencies
.PHONY: install-js-serv-deps
install-js-serv-deps:
	@echo '==> Installing JavaScript Server-Side Dependencies...'
	$(JS_SERVER_DEPENDENCY_MANAGER) $(JS_SERVER_DEPENDENCY_MANAGER_INSTALL_FLAGS) install
	@echo

# target: update-deps           - update library dependencies
.PHONY: update-deps
update-deps: update-js-deps update-js-server-deps

# target: update-js-deps        - update JavaScript library dependencies
.PHONY: update-js-deps
update-js-deps:
	@echo '==> Updating JavaScript Dependencies...'
	$(JS_DEPENDENCY_MANAGER) $(JS_DEPENDENCY_MANAGER_UPDATE_FLAGS) update
	@echo

# target: update-js-serv-deps   - update JavaScript (npm) dependencies
.PHONY: update-js-serv-deps
update-js-serv-deps:
	@echo '==> Updating JavaScript Server-Side Dependencies...'
	$(JS_SERVER_DEPENDENCY_MANAGER) $(JS_SERVER_DEPENDENCY_MANAGER_UPDATE_FLAGS) update
	@echo

# target: help                  - display this help info.
.PHONY: help
help:
	@egrep '^# target:' makefile

# target: print-%               - print the value of a variable %.
print-%:
	@echo '$*=$($*)'
