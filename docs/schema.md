# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## pins
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title   | string    | not null
description   | string    | not null
tags   | string    
author_id   | integer   | not null, foreign key (references users), indexed
board_id    | integer   | not null, foreign key (references boards), indexed

## boards
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | string    |
user_id     | integer   | not null, foreign key (references users), indexed



## follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users), indexed, unique
followee_id | integer   | not null, foreign key (references boards), indexed

## tags
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name        | string    | not null
