DROP DATABASE IF EXISTS ShopDB;

CREATE DATABASE ShopDB;

USE ShopDB;


CREATE TABLE inventory (
  id integer NOT NULL auto_increment PRIMARY KEY,
  item varchar(50) NOT NULL,
  price integer NOT NULL,
  quantity integer NOT NULL
);