import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'package:http/browser_client.dart';

import 'app.dart';
import 'package:http/http.dart';

class MobileService {

  static const _applicationUrl = 'http://localhost:8888/mobileapps'; // URL to web API
  static final _headers = {'Content-Type': 'application/json'};

  final Client _http;
  MobileService(this._http);

 Future <List<App>> getAll() async {
   try {
     final response = await _http.get(_applicationUrl);
     final application = (_extractData(response) as List)
         .map((value) => App.fromJson(value)).toList();
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

 Future<App> get(int id) async {
   try {
     final response = await _http.get('$_applicationUrl/$id');
     return App.fromJson(_extractData(response));
   } catch (e) {
     throw _handleError(e);
   }
 }
  Future<App> create(String name) async {
    try {
      final response = await _http.post(_applicationUrl,
          headers: _headers, body: json.encode({'name': name}));
      return App.fromJson(_extractData(response));
    } catch (e) {
      throw _handleError(e);
    }
  }


  Future<App> save(App app) async {
    try {
      final url = '$_applicationUrl/${app.id}';
      final response =
      await _http.put(url, headers: _headers, body: json.encode(app));
      return App.fromJson(_extractData(response));
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