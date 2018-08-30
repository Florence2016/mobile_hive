class Manage{
  final int ma_id;
  String ma_name;
  Manage(this.ma_id, this.ma_name);
  factory Manage.fromJson(Map<String, dynamic> manage) =>
      Manage(_toInt(manage['ma_id']), manage['ma_name']);
  Map toJson() => {'ma_id': ma_id, 'ma_name': ma_name};
}
int _toInt(ma_id) => ma_id is int ? ma_id : int.parse(ma_id);