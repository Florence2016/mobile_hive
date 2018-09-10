import 'package:server/model/category.dart';
import 'package:server/model/flag.dart';
import 'package:server/model/hive.dart';
import 'package:server/model/owned.dart';
import 'package:server/server.dart';

class App extends ManagedObject<_App> implements _App {}

class _App {
  @primaryKey
  int id;

  @Column()
  String name;

  @Column(nullable: true)
  String appDescription;

  @Column(unique: true, nullable: true)
  String appBundle;

  Category category;

  Flag flag;

  Hive hive;

  Owned owned;

  @Column(nullable: true)
  int users;

  @Column(nullable: true)
  int reviews;

  @Column(nullable: true)
  int ratings;

  @Column(nullable: true)
  String created;

  @Column(nullable: true)
  String updated;
}