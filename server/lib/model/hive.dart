import 'package:server/model/apps.dart';
import 'package:server/server.dart';

class Hive extends ManagedObject<_Hive> implements _Hive {}

class _Hive {

  @primaryKey
  int id;

  @Column(unique: true)
  String hive;

  @Relate(#hive)
  App app;
}