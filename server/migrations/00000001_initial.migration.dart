import 'dart:async';

import 'package:aqueduct/aqueduct.dart';   

class Migration1 extends Migration { 
  @override
  Future upgrade() async {
   database.createTable(SchemaTable("_App", [
SchemaColumn("id", ManagedPropertyType.bigInteger, isPrimaryKey: true, autoincrement: true, isIndexed: false, isNullable: false, isUnique: false),
SchemaColumn("name", ManagedPropertyType.string, isPrimaryKey: false, autoincrement: false, isIndexed: false, isNullable: false, isUnique: false),
SchemaColumn("appDescription", ManagedPropertyType.string, isPrimaryKey: false, autoincrement: false, isIndexed: false, isNullable: true, isUnique: false),
SchemaColumn("appBundle", ManagedPropertyType.string, isPrimaryKey: false, autoincrement: false, isIndexed: false, isNullable: true, isUnique: true),
SchemaColumn("users", ManagedPropertyType.integer, isPrimaryKey: false, autoincrement: false, isIndexed: false, isNullable: true, isUnique: false),
SchemaColumn("reviews", ManagedPropertyType.integer, isPrimaryKey: false, autoincrement: false, isIndexed: false, isNullable: true, isUnique: false),
SchemaColumn("ratings", ManagedPropertyType.integer, isPrimaryKey: false, autoincrement: false, isIndexed: false, isNullable: true, isUnique: false),
SchemaColumn("created", ManagedPropertyType.string, isPrimaryKey: false, autoincrement: false, isIndexed: false, isNullable: true, isUnique: false),
SchemaColumn("updated", ManagedPropertyType.string, isPrimaryKey: false, autoincrement: false, isIndexed: false, isNullable: true, isUnique: false),
],
));

database.createTable(SchemaTable("_Category", [
SchemaColumn("id", ManagedPropertyType.bigInteger, isPrimaryKey: true, autoincrement: true, isIndexed: false, isNullable: false, isUnique: false),
SchemaColumn("category", ManagedPropertyType.string, isPrimaryKey: false, autoincrement: false, isIndexed: false, isNullable: false, isUnique: true),
SchemaColumn.relationship("app", ManagedPropertyType.bigInteger, relatedTableName: "_App", relatedColumnName: "id", rule: DeleteRule.nullify, isNullable: true, isUnique: true),
],
));

database.createTable(SchemaTable("_Flag", [
SchemaColumn("id", ManagedPropertyType.bigInteger, isPrimaryKey: true, autoincrement: true, isIndexed: false, isNullable: false, isUnique: false),
SchemaColumn("flag", ManagedPropertyType.string, isPrimaryKey: false, autoincrement: false, isIndexed: false, isNullable: false, isUnique: true),
SchemaColumn.relationship("app", ManagedPropertyType.bigInteger, relatedTableName: "_App", relatedColumnName: "id", rule: DeleteRule.nullify, isNullable: true, isUnique: true),
],
));

database.createTable(SchemaTable("_Owned", [
SchemaColumn("id", ManagedPropertyType.bigInteger, isPrimaryKey: true, autoincrement: true, isIndexed: false, isNullable: false, isUnique: false),
SchemaColumn("owned", ManagedPropertyType.string, isPrimaryKey: false, autoincrement: false, isIndexed: false, isNullable: false, isUnique: true),
SchemaColumn.relationship("app", ManagedPropertyType.bigInteger, relatedTableName: "_App", relatedColumnName: "id", rule: DeleteRule.nullify, isNullable: true, isUnique: true),
],
));

database.createTable(SchemaTable("_Reason", [
SchemaColumn("id", ManagedPropertyType.bigInteger, isPrimaryKey: true, autoincrement: true, isIndexed: false, isNullable: false, isUnique: false),
SchemaColumn("name", ManagedPropertyType.string, isPrimaryKey: false, autoincrement: false, isIndexed: false, isNullable: false, isUnique: true),
SchemaColumn("reason", ManagedPropertyType.string, isPrimaryKey: false, autoincrement: false, isIndexed: false, isNullable: true, isUnique: false),
SchemaColumn.relationship("flag", ManagedPropertyType.bigInteger, relatedTableName: "_Flag", relatedColumnName: "id", rule: DeleteRule.nullify, isNullable: true, isUnique: true),
],
));

database.createTable(SchemaTable("_Hive", [
SchemaColumn("id", ManagedPropertyType.bigInteger, isPrimaryKey: true, autoincrement: true, isIndexed: false, isNullable: false, isUnique: false),
SchemaColumn("hive", ManagedPropertyType.string, isPrimaryKey: false, autoincrement: false, isIndexed: false, isNullable: false, isUnique: true),
SchemaColumn.relationship("app", ManagedPropertyType.bigInteger, relatedTableName: "_App", relatedColumnName: "id", rule: DeleteRule.nullify, isNullable: true, isUnique: true),
],
));


  }
  
  @override
  Future downgrade() async {}
  
  @override
  Future seed() async {
    final appNames = [
      "Super Fast RAM Cleaner",
      "Cache Cleaner Smart",
      "Ram Booster & Cleaner",
      "Boost Cleaner",
      "Blast Phone Guard"
    ];

    for (final appName in appNames) {
      await database.store.execute(
          "INSERT INTO _App (name) VALUES (@name)", substitutionValues: {
        "name": appName,
      });
    }


    final catNames = [
      "Communication", "Dating", "Lifestyle", "Finance", "Medical"];

    for (final catName in catNames) {
      await database.store.execute(
          "INSERT INTO _Category (category) VALUES (@category)",
          substitutionValues: {
            "category": catName
          });
    }

    final flagNames = ["Safe", "High Risk", "Duplicate"];

    for (final flagName in flagNames) {
      await database.store.execute(
          "INSERT INTO _Flag (flag) VALUES (@flag)", substitutionValues: {
        "flag": flagName
      });
    }

    final hiveNames = ["Better Cleaner", "Startshield", "Sample App"];

    for (final hiveName in hiveNames) {
      await database.store.execute(
          "INSERT INTO _Hive (hive) VALUES (@hive)", substitutionValues: {
        "hive": hiveName
      });
    }

    final reasonNames = ["Test1", "Test2", "Test3"];

    for (final reasonName in reasonNames) {
      await database.store.execute(
          "INSERT INTO _Reason (name) VALUES (@name)", substitutionValues: {
        "name": reasonName
      });
    }

    final ownedNames = ["Yes", "No"];

    for (final ownedName in ownedNames) {
      await database.store.execute(
          "INSERT INTO _Owned (owned) VALUES (@owned)",
          substitutionValues: {
            "owned": ownedName
          });
    }
  }
}
    