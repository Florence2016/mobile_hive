import 'dart:async';

import 'package:aqueduct/aqueduct.dart';   

class Migration1 extends Migration { 
  @override
  Future upgrade() async {
   database.createTable(SchemaTable("_App", [
SchemaColumn("id", ManagedPropertyType.bigInteger, isPrimaryKey: true, autoincrement: true, isIndexed: false, isNullable: false, isUnique: false),
SchemaColumn("name", ManagedPropertyType.string, isPrimaryKey: false, autoincrement: false, isIndexed: false, isNullable: false, isUnique: true),
],
));


  }
  
  @override
  Future downgrade() async {}
  
  @override
  Future seed() async {
    final appNames = ["Mr. Nice", "Narco", "Bombasto", "Celeritas", "Magneta"];

    for (final appName in appNames) {
      await database.store.execute("INSERT INTO _App (name) VALUES (@name)", substitutionValues: {
        "name": appName
      });
    }

  }
}
    