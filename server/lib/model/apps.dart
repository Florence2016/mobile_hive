import 'package:server/server.dart';

class App extends ManagedObject<_App> implements _App {}

class _App {
  @primaryKey
  int id;

  @Column(unique: true)
  String name;
}