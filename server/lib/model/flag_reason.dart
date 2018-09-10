import 'package:server/model/flag.dart';
import 'package:server/server.dart';

class Reason extends ManagedObject<_Reason> implements _Reason{}

class _Reason {

  @primaryKey
  int id;

  @Column(unique: true)
  String name;

  @Column(nullable: true)
  String reason;

  @Relate(#reason)
  Flag flag;
}