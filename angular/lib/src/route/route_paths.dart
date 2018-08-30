import 'package:angular_router/angular_router.dart';


const idParam = 'id';

class RoutePaths {
  static final category = RoutePath(path: 'category');
  static final assessment = RoutePath(path: 'assessment');
  static final management = RoutePath(path: 'management');
  static final applications = RoutePath(path: 'applications');
  static final dashboard = RoutePath(path: 'dashboard');
  static final app = RoutePath(path: '${applications.path}/:$idParam');
}

int getId(Map<String, String> parameters) {
  final id = parameters[idParam];
  return id == null ? null : int.tryParse(id);
}

