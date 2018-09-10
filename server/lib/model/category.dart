
import 'package:server/model/apps.dart';
import 'package:server/server.dart';

class Category extends ManagedObject<_Category> implements _Category{}

class _Category{

  @primaryKey
  int id;

  @Column(unique: true)
  String category;

  @Relate(#category)
  App app;
}