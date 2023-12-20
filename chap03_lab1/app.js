const espress = require('express');
const exphbs = require('express-handlebars').engine;

const app = espress();
const port = process.env.PORT || 3000;
//cấu hình Handlebars làm view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
//middleware để phục vụ các tệp tĩnh từ thư mục public
app.use(espress.static(__dirname + '/public'));
//định nghĩa các route
app.get('/', (req, res) => {
    //render view 'home.handlebars' với dữ liệu truyền vào
    res.render('home', { title: 'Home Page', message: 'Welcome to our website!'})
});

app.get('/about', (req, res) => {
    //render view 'about.handlebars' với dữ liệu truyền vào
    res.render('about', { title: 'About Us', message: 'Learn more about our company.'})
});

//middleware xử lý lỗi 404
app.use((req, res) => {
    res.status(404).render('404', { title: '404 Not Found'});
});

//middleware xử lý các lỗi 500
app.use((req, res) => {
    res.status(500).render('500', { title: '500 Internal Server Error'});
});

//Khởi động server và lắng nghe trên cổng đã chọn
app.listen(port, () => {
    console.log(`Express started on http://localhost:${port}`);
});