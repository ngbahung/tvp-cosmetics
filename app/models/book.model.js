const db = require("../common/connect")
const Book = function(book) {
  this.id = book.id;
  this.name = book.name;
  this.image = book.image;
  this.author_id = book.author_id;
}

Book.get_all = function(result) {
  // var data = [
  //   {"id" : 1, "name":"book 1"},
  //   {"id" : 2, "name":"book 2"},
  //   {"id" : 3, "name":"book 3"}
  // ];

  db.query("select * from book", function(err, book){
    if (err) {
      result(null);
      return;
    }
    else {
      result(book);
    }
  });


}

Book.getById = function(id, result) {
  db.query(`select * from book where id = ${id}`, function(err, book){
    if (err || book.length == 0) {
      result(null);
      return;
    }

    result(book[0]);
  })
}

Book.create = function(data, result) {
  db.query(`insert into book set ?`, data, function(err, book) {
    if (err) {
      result(null);
      return;
    }
    result({id: book.insertId, ...data});
  })
}

Book.remove = function(id, result) {
  db.query(`delete from book where id = ${id}`, function(err, book) {
    if (err) {
      result(null);
      return;
    }
    result("Xoa sach co id " + id + " thanh cong !");
  })
}

Book.update = function(b, result) {
  db.query("update book set name=?, image=?, author_id=? where id=?", [b.name, b.image, b.author_id, b.id], function(err, book) {
    if (err) {
      result(null);
      return;
    }
    result(b);
  })
}

module.exports = Book;