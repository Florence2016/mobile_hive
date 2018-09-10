import 'dart:async';
import 'package:mobile_hive/src/app_manage_service.dart';
import 'package:mobile_hive/src/app_manage.dart';
import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/angular_components.dart';
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