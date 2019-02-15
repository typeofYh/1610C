const gulp = require('gulp');
const Mock = require('mockjs');
const webserver = require('gulp-webserver');
gulp.task('page',()=>{
    return gulp.src('.').pipe(webserver({
        port:8080,
        fallback:'./index.html'
    }))
})
const data = Mock.mock({
    'data|4':[{
        'image|+1':1,
        'title':'@cname'
    }]
});
gulp.task('api',()=>{
    return gulp.src('.').pipe(webserver({
        port:8081,
        middleware(req,res,next){
            res.setHeader('Access-Control-Allow-Origin','*');
            res.end(JSON.stringify(data));
        }
    }))
})

gulp.task('dev',gulp.series('api','page'));