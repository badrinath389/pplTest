'use strict';

const gulp = require('gulp');
const rimraf = require('gulp-rimraf');
const tslint = require('gulp-tslint');
const lab = require('gulp-lab');
const ts = require('gulp-typescript');
const tsoa = require('tsoa');
const pkg = require('./package.json');
const sourcemaps = require('gulp-sourcemaps');
// Remove build directory.
const clean = () => { return gulp.src('build/', { read: false, allowEmpty: true }).pipe(rimraf()) };
// Lint all custom TypeScript files.
const lint = () => { return gulp.src(['src/**/*.ts']).pipe(tslint()).pipe(tslint.report('prose')) };

const tscompile = () => {
    const tsProject = ts.createProject('tsconfig.json');
    return tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build'));
};

const routeOptions = {
    basePath: "/api",
    entryFile: "./src/controllers/index.ts",
    routesDir: "./src/routes",
    middleware: "hapi"
};

const swaggerOptions = {
    basePath: "/api",
    entryFile: "./src/routes/routes.ts",
    outputDirectory: "./build/swagger",
    specMerging: "recursive",
    noImplicitAdditionalProperties: "throw-on-extras",
    spec: {
        info: {
            title: "Sample domain services",
            version: pkg.version,
            description: pkg.description
        }
    },
    specVersion: 3
};

// generate routing file from decorated controller classes using tsoa module
const routes = () => {
    return tsoa.generateRoutes(routeOptions, swaggerOptions);
};

// generate swagger.json form API documentation
const swagger = () => {
    return tsoa.generateSwaggerSpec(swaggerOptions, routeOptions);
};

// Build the project
const build = gulp.parallel(lint, gulp.series(clean, routes, tscompile, swagger));

module.exports = {
    clean,
    lint,
    tscompile,
    build
};

module.exports.default = build;