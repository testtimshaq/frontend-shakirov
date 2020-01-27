const gulp = require('gulp');
const concat = require('gulp-concat');
const autopref = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');

const cssFiles = [
    './src/css/_fonts.css',
    './src/css/_global.css',
    './src/css/_button.css',
    './src/css/_header.css',
    './src/css/_present-me.css',
    './src/css/_my-skills.css',
    './src/css/_examples.css',
    './src/css/_cost.css',
    './src/css/_footer.css',
    './src/css/_copyright.css',
    './src/css/_popup.css',
    './src/css/_media.css'
]

const jsFiles = [
    './src/js/popup.js',
    './src/js/button.js',
    './src/js/slider.js'
]

function styles() {
    return gulp.src(cssFiles)

    .pipe(concat('styles.css'))
    .pipe(autopref({
        browserlist: ['> 1%'],
        cascade: false
    }))
    .pipe(cleanCSS({
        level: 2 
    }))
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream())
}

function scripts() {
    return gulp.src(jsFiles)

    .pipe(concat('script.js'))
    .pipe(uglify({
        toplevel: true
    }))

    .pipe(gulp.dest('./build/js'))
    .pipe(browserSync.stream())
}

function clean() {
    return del(['build/*', 'img/*'])
}


 function compress() {
  return gulp.src('src/img/*')
  .pipe(imagemin({
  	quality: 60
  }))
  .pipe(gulp.dest('./img'))
  .pipe(browserSync.stream())
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./src/css/**/*.css', styles)
    gulp.watch('./src/js/**/*.js', scripts)
    gulp.watch('./src/img/**/*', compress)
    gulp.watch("./*.html").on('change', browserSync.reload);
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch);
gulp.task('build', gulp.series(clean, gulp.parallel(styles, scripts, compress)));
gulp.task('dev', gulp.series('build', 'watch'));
gulp.task('del', clean);
gulp.task('compress', compress);