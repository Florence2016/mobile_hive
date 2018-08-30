import 'dart:async';
import 'package:mobile_hive/src/app_manage_service.dart';
import 'package:mobile_hive/src/app_manage.dart';
import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:angular_components/focus/focus.dart';
import 'package:angular_components/laminate/components/modal/modal.dart';
import 'package:angular_components/laminate/overlay/module.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_components/material_dialog/material_dialog.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel_auto_dismiss.dart';
import 'package:angular_components/material_expansionpanel/material_expansionpanel_set.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_input/material_input.dart';
import 'package:angular_components/material_yes_no_buttons/material_yes_no_buttons.dart';
import 'package:angular_router/angular_router.dart';

@Component(
  selector: 'my-app-manage',
  templateUrl: 'app_manage_component.html',
  styleUrls: ['app_manage_component.css'],
  providers: [ClassProvider(ManageService), overlayBindings],
  directives: [coreDirectives, formDirectives,
  AutoFocusDirective,
  MaterialIconComponent,
  MaterialButtonComponent,
  MaterialExpansionPanel,
  MaterialExpansionPanelAutoDismiss,
  MaterialExpansionPanelSet,
  MaterialDialogComponent,
  MaterialInputComponent,
  materialInputDirectives,
  MaterialYesNoButtonsComponent,
  ModalComponent,
  NgModel,],

  preserveWhitespace: true,
  pipes: [commonPipes],
)
class AppManagementComponent implements OnInit{

  final ManageService _manageService;
  AppManagementComponent(this._manageService);

  List<Manage> manageAppList;
  Manage selected;


  Future <void> _getManageApp()  async{
     manageAppList =  await _manageService.getAll();
  }

  void ngOnInit() => _getManageApp();
  void onSelect(Manage manage) => selected = manage;
}