drop database if exists qlct;
create database qlct default character set utf8 collate utf8_unicode_ci;

USE qlct;


CREATE TABLE PHONGBAN (
    id int primary key auto_increment,
    TenPhong VARCHAR(100),
    TruongPhong_id INT
);

CREATE TABLE NHANVIEN (
  id int primary key auto_increment,
  HoTen VARCHAR(100),
  GioiTinh varchar(20),
  NgaySinh DATE,
  CCCD VARCHAR(20),
  SDT VARCHAR(20),
  ChucVu VARCHAR(50),
  PhongBan_id INT
);

ALTER TABLE PHONGBAN
ADD FOREIGN KEY (TruongPhong_id) REFERENCES NHANVIEN(id);
ALTER TABLE NHANVIEN
ADD FOREIGN KEY (PhongBan_id) REFERENCES PHONGBAN(id);

CREATE TABLE QUYEN (
    id int primary key auto_increment,
    TenQuyen VARCHAR(100)
);

CREATE TABLE TAIKHOAN (
    TenTaiKhoan VARCHAR(50) NOT NULL,
    MatKhau VARCHAR(50) NOT NULL,
    Email VARCHAR(100),
    NV_id INT,
    Quyen_id INT,
    PRIMARY KEY (TenTaiKhoan),
    FOREIGN KEY (NV_id) REFERENCES NHANVIEN(id),
    FOREIGN KEY (Quyen_id) REFERENCES QUYEN(id)
);


CREATE TABLE SUKIEN (
    id int primary key auto_increment,
    TieuDe VARCHAR(100),
    ThoiGian DATE,
    Thu VARCHAR(10),
    GioBatDau TIME,
    TomTatSK TEXT
);

CREATE TABLE CTSK (
    SK_id INT NOT NULL,
    NV_id INT NOT NULL,
    PRIMARY KEY (SK_id, NV_id),
    FOREIGN KEY (SK_id) REFERENCES SUKIEN(id),
    FOREIGN KEY (NV_id) REFERENCES NHANVIEN(id)
);

CREATE TABLE THONGBAO (
    id int primary key auto_increment,
    TieuDe VARCHAR(100),
    NoiDung TEXT,
    SK_id INT,
    FOREIGN KEY (SK_id) REFERENCES SUKIEN(id)
);
CREATE TABLE BANTIN (
    id int primary key auto_increment,
    TieuDe VARCHAR(100),
    NoiDung TEXT,
    SK_id INT,
    FOREIGN KEY (SK_id) REFERENCES SUKIEN(id)
);

CREATE TABLE PHONG (
    id int primary key auto_increment,
    TenPhong VARCHAR(100)
);

CREATE TABLE LICHPHONG (
    id int primary key auto_increment,
    ThoiGian DATE,
    TieuDe VARCHAR(100),
    GioBatDau TIME,
    Phong_id INT,
    FOREIGN KEY (Phong_id) REFERENCES PHONG(id)
);

CREATE TABLE PHIEUNGHIPHEP (
    id int primary key auto_increment,
    LoaiNP VARCHAR(50),
    NgayBDNP DATE,
    NgayKTNP DATE,
    LyDo TEXT,
    NV_id INT,
    FOREIGN KEY (NV_id) REFERENCES NHANVIEN(id)
);

CREATE TABLE YEUCAUNGHIPHEP (
    id int primary key auto_increment,
    STT INT,
    TrangThai VARCHAR(50),
    PhieuNP_id INT,
    FOREIGN KEY (PhieuNP_id) REFERENCES PHIEUNGHIPHEP(id)
);

ALTER TABLE PHIEUNGHIPHEP
ADD CONSTRAINT chk_LoaiNP CHECK (LoaiNP IN ('Nghỉ phép năm', 'Nghỉ ốm', 'Nghỉ thai sản', 'Nghỉ kết hôn', 'Nghỉ không lương', 'Nghỉ phép khác'));

ALTER TABLE YEUCAUNGHIPHEP
ADD CONSTRAINT chk_TrangThai CHECK (TrangThai IN ('Duyệt', 'Chờ duyệt', 'Không duyệt'));

ALTER TABLE NHANVIEN
ADD CONSTRAINT chk_GioiTinh CHECK (GioiTinh IN ('Nam', 'Nữ'));

-- Bảng PHONGBAN
INSERT INTO PHONGBAN (TenPhong, TruongPhong_id) VALUES
('Phòng Kế Toán', NULL),
('Phòng Nhân Sự', NULL),
('Phòng Kỹ Thuật', NULL),
('Phòng Kinh Doanh', NULL),
('Phòng Marketing', NULL);

-- Bảng NHANVIÊN
INSERT INTO NHANVIEN (HoTen, GioiTinh, NgaySinh, CCCD, SDT, ChucVu, PhongBan_id) VALUES
('Nguyễn Văn Tùng', 'Nam', '1990-01-01', '123456789', '0987654321', 'Trưởng phòng', 1),
('Nguyễn Thị Thủy', 'Nữ', '1996-01-09', '987654321', '0123456789', 'Nhân viên', 2),
('Lê Văn Sơn', 'Nam', '1988-03-12', '135792468', '0912345678', 'Nhân viên', 3),
('Phạm Thị Hồng', 'Nữ', '1992-12-10', '246813579', '0918765432', 'Nhân viên', 4),
('Võ Văn Úy', 'Nam', '1987-09-22', '192837465', '0923456789', 'Nhân viên', 5);

-- Cập nhật trưởng phòng cho bảng PHONGBAN
UPDATE PHONGBAN SET TruongPhong_id = 1 WHERE id = 1;

-- Bảng QUYỀN
INSERT INTO QUYEN (TenQuyen) VALUES
('Quản trị viên'),
('Nhân viên');

-- Bảng TÀI KHOẢN
INSERT INTO TAIKHOAN (TenTaiKhoan, MatKhau, Email, NV_id, Quyen_id) VALUES
('admin', 'admin123', 'admin@example.com', 1, 1),
('user1', 'password1', 'user1@example.com', 2, 2),
('user2', 'password2', 'user2@example.com', 3, 2),
('user3', 'editor123', 'user3@example.com', 4, 2),
('user4', 'guest123', 'user4@example.com', 5, 2);

-- Bảng SỰ KIỆN
INSERT INTO SUKIEN (TieuDe, ThoiGian, Thu, GioBatDau, TomTatSK) VALUES
('Họp tháng 1', '2024-01-10', 'Thứ Tư', '09:00:00', 'Họp công ty tháng 1'),
('Họp tháng 2', '2024-02-10', 'Thứ Năm', '09:00:00', 'Họp công ty tháng 2'),
('Họp tháng 3', '2024-03-10', 'Thứ Sáu', '09:00:00', 'Họp công ty tháng 3'),
('Họp tháng 4', '2024-04-10', 'Thứ Bảy', '09:00:00', 'Họp công ty tháng 4'),
('Họp tháng 5', '2024-05-10', 'Chủ Nhật', '09:00:00', 'Họp công ty tháng 5');

-- Bảng CT SK
INSERT INTO CTSK (SK_id, NV_id) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

-- Bảng THÔNG BÁO
INSERT INTO THONGBAO (TieuDe, NoiDung, SK_id) VALUES
('Thông báo họp tháng 1', 'Họp công ty vào ngày 10 tháng 1', 1),
('Thông báo họp tháng 2', 'Họp công ty vào ngày 10 tháng 2', 2),
('Thông báo họp tháng 3', 'Họp công ty vào ngày 10 tháng 3', 3),
('Thông báo họp tháng 4', 'Họp công ty vào ngày 10 tháng 4', 4),
('Thông báo họp tháng 5', 'Họp công ty vào ngày 10 tháng 5', 5);

-- Bảng BẢN TIN
INSERT INTO BANTIN (TieuDe, NoiDung, SK_id) VALUES
('Bản tin tháng 1', 'Nội dung bản tin tháng 1', 1),
('Bản tin tháng 2', 'Nội dung bản tin tháng 2', 2),
('Bản tin tháng 3', 'Nội dung bản tin tháng 3', 3),
('Bản tin tháng 4', 'Nội dung bản tin tháng 4', 4),
('Bản tin tháng 5', 'Nội dung bản tin tháng 5', 5);

-- Bảng PHÒNG
INSERT INTO PHONG (TenPhong) VALUES
('Phòng họp A'),
('Phòng họp B'),
('Phòng họp C'),
('Phòng họp D'),
('Phòng họp E');

-- Bảng LỊCH PHÒNG
INSERT INTO LICHPHONG (ThoiGian, TieuDe, GioBatDau, Phong_id) VALUES
('2024-01-10', 'Họp tháng 1', '09:00:00', 1),
('2024-02-10', 'Họp tháng 2', '09:00:00', 2),
('2024-03-10', 'Họp tháng 3', '09:00:00', 3),
('2024-04-10', 'Họp tháng 4', '09:00:00', 4),
('2024-05-10', 'Họp tháng 5', '09:00:00', 5);

-- Bảng PHIẾU NGHỈ PHÉP
INSERT INTO PHIEUNGHIPHEP (LoaiNP, NgayBDNP, NgayKTNP, LyDo, NV_id) VALUES
('Nghỉ phép năm', '2024-06-01', '2024-06-05', 'Đi du lịch', 1),
('Nghỉ ốm', '2024-06-10', '2024-06-15', 'Bị ốm', 2),
('Nghỉ thai sản', '2024-06-20', '2024-06-25', 'Sinh con', 3),
('Nghỉ kết hôn', '2024-07-01', '2024-07-05', 'Kết hôn', 4),
('Nghỉ không lương', '2024-07-10', '2024-07-15', 'Công việc gia đình', 5);

-- Bảng YÊU CẦU NGHỈ PHÉP
INSERT INTO YEUCAUNGHIPHEP (STT, TrangThai, PhieuNP_id) VALUES
(1, 'Chờ duyệt', 1),
(2, 'Duyệt', 2),
(3, 'Không duyệt', 3),
(4, 'Chờ duyệt', 4),
(5, 'Duyệt', 5);

