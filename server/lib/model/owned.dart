import 'package:server/model/apps.dart';
import 'package:server/server.dart';

class Owned extends ManagedObject<_Owned> implements _Owned{}

class _Owned {

  @primaryKey
  int id;

  @Column(unique: true)
  String owned;

  @Relate(#owned)
  App app;
}