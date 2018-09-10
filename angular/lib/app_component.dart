

import 'package:http/browser_client.dart';
import 'package:mobile_hive/src/app_manage_service.dart';
import 'package:mobile_hive/src/mh_footer/footer_component.dart';
import 'package:mobile_hive/src/mh_header/header_component.dart';
import 'package:mobile_hive/src/route/route_paths.dart';
import 'package:mobile_hive/src/route/routes.dart';
import 'package:mobile_hive/src/mobile_service.dart';
import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/angular_components.dart';

@Component(
  selector: 'my-app',
  templateUrl: 'app_component.html',
  styleUrls: ['app_component.css'],
  directives: [AutoFocusDirective,
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
  NgModel,routerDirectives,HeaderComponent,
  FooterComponent],
  providers: [materialProviders, ClassProvider(MobileService)],
  exports: [RoutePaths, Routes],
)
class AppComponent {
  final title = 'Tour of Mobile Apps';
}
