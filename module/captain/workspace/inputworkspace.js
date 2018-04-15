var express=require('express');
var mysql=require('mysql');
var sql=require('../.././db.js');
var conn=mysql.createConnection(sql);
conn.connect();
exports.inputworkspace=function (work_id,workaddress,captain_phonenumber,callback) {
    console.log("inpuworkspace start");
    conn.query('insert into workspace(work_id,workaddress,captain_phonenumber) values (?,?,?)',[work_id,workaddress,captain_phonenumber],function (err,row) {
        if(err){
            console.log(err);
            callback(err,null);
            return;

        }
        if(row.length=1){
            console.log("성공"+row);
            callback(null,"good");
            return;
        }


    });

}