
# Website nội bộ Công ty TVP Cosmetics

Đồ án môn học Quản lý dự án Công nghệ thông tin IS208.O21 được hướng dẫn bởi thầy Tạ Việt Phương.

Dự án website nội bộ thực hiện các chức năng cơ bản như: 

* Đăng nhập  
* Quản lý profile nhân viên
* Quản lý thông báo và bản tin
* Xử lý yêu cầu nghỉ phép
* Quản lý đăng ký lịch phòng họp




## Hướng dẫn cài đặt

Install tvp-cosmetics with npm

Frontend: sử dụng Nextjs, Clerk Authentication, TailwindCSS  (branch main)
* Tạo file .env.local ở / với nội dung như sau:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_c29saWQtZmluY2gtNjQuY2xlcmsuYWNjb3VudHMuZGV2JA
CLERK_SECRET_KEY=sk_test_ZfctMrHAXriMpJvmEWGJ8maCHvqPl4Gf8mHPZUpWci

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/login
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_OUT_URL=/login
NEXT_PUBLIC_CLERK_REDIRECT_URL=/login
```

```bash
  npm install
  npm run dev
```
Backend: sử dụng Nodejs, ExpressJS (code ở branch DHung)  
Database: MySQL  

* Đảm bảo đã insert dữ liệu từ file website_db.sql

```bash
npm install
npm run dev
```


