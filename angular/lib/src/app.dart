class App {
  final int id;
  String name;
  String description;
  String bundle;
  final int users;
  final int reviews;
  final double ratings;

  App(this.id, this.name, this.description, this.bundle, this.users, this.reviews, this.ratings);

  factory App.fromJson(Map<String, dynamic> app) =>
      App(_toInt(
          app['id']),
          app['name'],
          app['appDescription'],
          app['appBundle'],
          app['users'],
          app['reviews'],
          app['ratings'],);

  Map toJson() => {'id' : id, 'name': name, 'appDescription' : description, 'appBundle' : bundle, 'users' : users, 'reviews':reviews, 'ratings' : ratings};
}
int _toInt(id) => id is int ? id : int.parse(id);