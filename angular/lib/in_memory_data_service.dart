import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'dart:math';
import 'package:mobile_hive/src/app_manage.dart';
import 'package:http/http.dart';
import 'package:http/testing.dart';
import 'src/app.dart';

 
 
class InMemoryDataService extends MockClient {

  static final _initialApplication = [
    {'id': 11, 'name': 'Better Cleaner'},
    {'id': 12, 'name': 'Super Cleaner'},
    {'id': 13, 'name': 'Clean Master'},
    {'id': 14, 'name': 'Fast Ram Cleaner'},
    {'id': 15, 'name': 'Speed Junk Secure Cleaner'},
    {'id': 16, 'name': 'Space Booster Cleaner'},
    {'id': 17, 'name': 'Rocket Junk Cleaner'},
    {'id': 18, 'name': 'Phone Booster Junk Cleaner'},
    {'id': 19, 'name': 'Antivirus Cleaner'},
    {'id': 20, 'name': 'Halo Cleaner'},
  ];

  static List<App> _applicationDb;
  static int _nextId;

  static Future<Response> _handler(Request request) async {
    if (_applicationDb == null) resetDb();
    var data;
    switch (request.method) {
      case 'GET':
        final id = int.tryParse(request.url.pathSegments.last);
        if (id != null) {
          data = _applicationDb.firstWhere((app) => app.id == id); // throws if no match
        } else {
          String prefix = request.url.queryParameters['name'] ?? '';
          final regExp = RegExp(prefix, caseSensitive: false);
          data = _applicationDb.where((app) => app.name.contains(regExp)).toList();
        }
        break;
      case 'POST':
        var name = json.decode(request.body)['name'];
        var newApp = App(_nextId++, name);
        _applicationDb.add(newApp);
        data = newApp;
        break;
      case 'PUT':
        var appChanges = App.fromJson(json.decode(request.body));
        var targetApp = _applicationDb.firstWhere((h) => h.id == appChanges.id);
        targetApp.name = appChanges.name;
        data = targetApp;
        break;
      case 'DELETE':
        var id = int.parse(request.url.pathSegments.last);
        _applicationDb.removeWhere((app) => app.id == id);
        // No data, so leave it as null.
        break;
      default:
        throw 'Unimplemented HTTP method ${request.method}';
    }

    return Response(json.encode({'data': data}), 200, headers: {'content-type': 'application/json'});
    //return Response(json.encode({'data': data}), 200, headers: {'content-type': 'application/json'});
  }

  static resetDb() {
    _applicationDb = _initialApplication.map((json) => App.fromJson(json)).toList();
    _nextId = _applicationDb.map((app) => app.id).fold(0, max) + 1;
  }

  static String lookUpName(int id) =>
      _applicationDb.firstWhere((app) => app.id == id, orElse: null)?.name;

  InMemoryDataService() : super(_handler) ;
}
