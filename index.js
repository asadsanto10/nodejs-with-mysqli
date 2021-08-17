const mysql = require('mysql');

const  connect = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_mysqli'
};

const con = mysql.createConnection(connect);

con.connect(err => {
    if (err) {
        console.log('connect faild');
    }
    else {
        console.log('connected');
        // insert(con);
        // deleteQuery(con);
        // update(con);
        select(con);
    }
});

// insert
function insert() {
    const SQLQuery = "INSERT INTO `user`(`name`, `roll`, `depertment`, `phone`) VALUES ('santo', '103218', 'CSE', '01722044555')";
    con.query(SQLQuery, (err) => {
        if(!err) {
            console.log('data insert');
        }
        else {
            console.log(err);
        }
    })
}

// delete
function deleteQuery(con){
    const deleteQuery = "DELETE FROM `user` WHERE `id` = 3";
    con.query(deleteQuery, err => {
        if(!err){
            console.log('delete data');
        }
        else{
            console.log(err);
        }
    })
}

//update
function update(con){
    const updateQuery = "UPDATE `user` SET `roll` = '191015124' where `id` = 5";
    con.query(updateQuery, err => {
        if (err) throw err
        console.log('databease update');
    })
}

// select 
function select(con){
    const selectQuery = "SELECT * FROM `user` WHERE `id` = 1";
    con.query(selectQuery, (err, result) => {
        if(err) throw err
        console.log(result);
    })
}

