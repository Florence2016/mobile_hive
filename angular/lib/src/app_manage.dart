class Manage{
  final int id;
  String name;
  Manage(this.id, this.name);
  factory Manage.fromJson(Map<String, dynamic> manage) =>
      Manage(_toInt(manage['id']), manage['hive']);
  Map toJson() => {'id': id, 'hive': name};
}
int _toInt(id) => id is int ? id : int.parse(id);