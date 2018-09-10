import 'dart:async';
import 'dart:convert';
import 'package:mobile_hive/src/app_manage.dart';
import 'package:http/http.dart';

class ManageService {
  static const _applicationUrl = 'http://localhost:8888/hiveapps'; // URL to web API
  static final _headers = {'Content-Type': 'application/json'};

  final Client _http;
  ManageService(this._http);

  Future <List<Manage>> getAll() async {
    try {
      final response = await _http.get(_applicationUrl);
      final application = (_extractData(response) as List)
          .map((value) => Manage.fromJson(value)).toList();
      return application;

    }
    catch(e){
      throw _handleError(e);
    }
  }
  dynamic _extractData(Response resp) => json.decode(resp.body);

  Exception _handleError(dynamic e) {
    print(e); // for demo purposes only
    return Exception('Server error; cause: $e');
  }

  Future<Manage> get(int id) async {
    try {
      final response = await _http.get('$_applicationUrl/$id');
      return Manage.fromJson(_extractData(response));
    } catch (e) {
      throw _handleError(e);
    }
  }
  Future<Manage> create(String name) async {
    try {
      final response = await _http.post(_applicationUrl,
          headers: _headers, body: json.encode({'hive': name}));
      return Manage.fromJson(_extractData(response));
    } catch (e) {
      throw _handleError(e);
    }
  }


  Future<Manage> save(Manage manage) async {
    try {
      final url = '$_applicationUrl/${manage.id}';
      final response =
      await _http.put(url, headers: _headers, body: json.encode(manage));
      return Manage.fromJson(_extractData(response));
    } catch (e) {
      throw _handleError(e);
    }
  }

  Future<void> delete(int id) async {
    try {
      final url = '$_applicationUrl/$id';
      await _http.delete(url, headers: _headers);
    } catch (e) {
      throw _handleError(e);
    }
  }
}
