import 'package:server/model/apps.dart';
import 'package:server/model/flag_reason.dart';
import 'package:server/server.dart';

class Flag extends ManagedObject<_Flag> implements _Flag {}

class _Flag{

  @primaryKey
  int id;

  @Column(unique: true)
  String flag;

  @Relate(#flag)
  App app;

  Reason reason;
}