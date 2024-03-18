/** 
 * Para não concentrar muitas tasks dentro da pasta gulpfile, foi criada
 * uma pasta gulpTasks, que conterá outras tasks.
 */

/** Módulos de terceiros */
const gulp = require("gulp")
const { series, parallel } = require("gulp")

/* Módulos próprios */
const {appHTML, appCSS,appJS, appIMG }  = require("./gulpTasks/app") 
const {depsCSS, depsFonts } = require("./gulpTasks/deps")
const { watchFiles, server } = require("./gulpTasks/server")

module.exports.default = series(
    parallel(
       series(appHTML, appCSS, appJS, appIMG),
       series(depsCSS, depsFonts)
    ),
    server,
    watchFiles
)

