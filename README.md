# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## データベース設計 (2019.7.29)

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

---

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, add_index|
|email|string|null: false, unique: true|
|password|string|null: false|

### Association
- has_many :groups, through :members
- has_many :messages
- has_many :members

---

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false, add_index|

### Association
- has_many :users, through :members
- has_many :messages
- has_many :members

---

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string| |
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group
