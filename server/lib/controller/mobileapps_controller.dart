import 'package:aqueduct/aqueduct.dart';
import 'package:server/model/apps.dart';
import 'package:server/server.dart';

class MobileAppController extends ResourceController{

  MobileAppController(this.context);

  final ManagedContext context;

  @Operation.get()
  Future<Response> getAllApplications({@Bind.query('name') String name}) async {

    final appQuery = Query<App>(context);
    if (name != null) {
      appQuery.where((h) => h.name).contains(name, caseSensitive: false);
    }
    final apps = await appQuery.fetch();
    return Response.ok(apps);
  }

  @Operation.get('id')
  Future<Response> getAppByID(@Bind.path('id') int id) async {
    final appQuery = Query<App>(context)
      ..where((h) => h.id).equalTo(id);

    final app = await appQuery.fetchOne();

    if (app == null) {
      return Response.notFound();
    }
    return Response.ok(app);
  }

  @Operation.post()
  Future<Response> createApp(@Bind.body() App inputApp) async {
    final query = Query<App>(context)
      ..values = inputApp;

    final insertedApp = await query.insert();

    return Response.ok(insertedApp);
  }

  @Operation.put('id')
  Future<Response> updateApp(@Bind.path('id') int id, @Bind.body() App name) async {
    final appQuery = Query<App>(context)
      ..values = name
      ..where((h) => h.id).equalTo(id);

    final app = await appQuery.updateOne();

    if (app == null) {
      return Response.notFound();
    }
    return Response.ok(app);
  }

  @Operation.delete('id')
  Future<Response> deleteApp(@Bind.path('id') int id) async {
    final appQuery = Query<App>(context)
      ..where((h) => h.id).equalTo(id);

    final app = await appQuery.delete();
    return Response.ok(app);
  }
}