import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'package:mobile_hive/src/app_manage.dart';
import 'package:http/http.dart';



class ManageService {
  static const _managesUrl = 'http://localhost:8888/mobileapps';

  final Client _http;

  ManageService(this._http);

  Future <List<Manage>> getAll() async {
    try{
      final response = await _http.get(_managesUrl);
      final manages = (_extractData(response) as List).map((json) => Manage.fromJson(json)).toList();

      return manages;
    }
    catch(e){
      throw _handleError(e);
    }
  }
  dynamic _extractData(Response resp) => json.decode(resp.body)['data'];

  Exception _handleError(dynamic e){
    print(e);
    return Exception ('Server error; cause: $e');
  }
}
