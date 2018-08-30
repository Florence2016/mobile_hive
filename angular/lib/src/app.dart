class App {
  final int id;
  String name;

  App(this.id, this.name);

  factory App.fromJson(Map<String, dynamic> app) =>
      App(_toInt(app['id']), app['name']);

  Map toJson() => {'id' : id, 'name': name};
}
int _toInt(id) => id is int ? id : int.parse(id);