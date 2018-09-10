import 'package:aqueduct/aqueduct.dart';
import 'package:server/model/hive.dart';

import 'package:server/server.dart';

class HiveAppsController extends ResourceController{

  ManagedContext context;
  HiveAppsController(this.context);


  @Operation.get()
  Future<Response> getAllApplications({@Bind.query('hive') String hive}) async {

    final appQuery = Query<Hive>(context);
    if (hive != null) {
      appQuery.where((h) => h.hive).contains(hive, caseSensitive: false);
    }
    final apps = await appQuery.fetch();
    return Response.ok(apps);
  }

  @Operation.get('id')
  Future<Response> getAppByID(@Bind.path('id') int id) async {
    final appQuery = Query<Hive>(context)
      ..where((h) => h.id).equalTo(id);

    final app = await appQuery.fetchOne();

    if (app == null) {
      return Response.notFound();
    }
    return Response.ok(app);
  }

  @Operation.post()
  Future<Response> createApp(@Bind.body() Hive inputApp) async {
    final query = Query<Hive>(context)
      ..values = inputApp;

    final insertedApp = await query.insert();

    return Response.ok(insertedApp);
  }

  @Operation.put('id')
  Future<Response> updateApp(@Bind.path('id') int id, @Bind.body() Hive hive) async {
    final appQuery = Query<Hive>(context)
      ..values = hive
      ..where((h) => h.id).equalTo(id);

    final app = await appQuery.updateOne();

    if (app == null) {
      return Response.notFound();
    }
    return Response.ok(app);
  }

  @Operation.delete('id')
  Future<Response> deleteApp(@Bind.path('id') int id) async {
    final appQuery = Query<Hive>(context)
      ..where((h) => h.id).equalTo(id);

    final app = await appQuery.delete();
    return Response.ok(app);
  }

}