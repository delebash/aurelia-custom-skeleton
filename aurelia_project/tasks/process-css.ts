import * as gulp from 'gulp';
import * as changedInPlace from 'gulp-changed-in-place';
import * as sourcemaps from 'gulp-sourcemaps';
import * as less from 'gulp-less';
import * as concat  from 'gulp-concat';
import * as project from '../aurelia.json';
import {build} from 'aurelia-cli';

export default function processCSS() {
    return gulp.src(project.cssProcessor.source)
        .pipe(changedInPlace({firstPass: true}))
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(concat(project.cssProcessor.filename))
        .pipe(gulp.dest(project.copyCss.output));
};
