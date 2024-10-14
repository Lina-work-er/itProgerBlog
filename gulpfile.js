// gulpfile.js
const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// Створюємо завдання для запуску BrowserSync
function serve() {
    browserSync.init({
        server: {
            baseDir: './' // Вказуємо базову директорію для сервера
        }
    });

    // Спостерігаємо за змінами в HTML, CSS і JS
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('css/*.css').on('change', browserSync.reload);
    gulp.watch('scss/**/*.scss').on('change', browserSync.reload);
    // Додайте інші файли, які потрібно спостерігати
}

// Експортуємо функцію serve як завдання за замовчуванням
exports.default = serve;
