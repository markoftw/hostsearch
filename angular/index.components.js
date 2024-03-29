import {ProfileSettingsComponent} from './app/components/profile_settings/profile_settings.component';
import {SystemInfoComponent} from './app/components/system_info/system_info.component';
import {DetailsCloudComponent} from './app/components/details_cloud/details_cloud.component';
import {DetailsVpsComponent} from './app/components/details_vps/details_vps.component';
import {TweetsComponent} from './app/components/tweets/tweets.component';
import {HomepageInfoComponent} from './app/components/homepage_info/homepage_info.component';
import {GitVersionComponent} from './app/components/git_version/git_version.component';
import {ScrollFabComponent} from './app/components/scroll_fab/scroll_fab.component';
import {DetailsDedicatedComponent} from './app/components/details_dedicated/details_dedicated.component';
import {ContactFormComponent} from './app/components/contact_form/contact_form.component';
import {ResetPasswordComponent} from './app/components/reset-password/reset-password.component';
import {ForgotPasswordComponent} from './app/components/forgot-password/forgot-password.component';
import {LoginFormComponent} from './app/components/login-form/login-form.component';
import {RegisterFormComponent} from './app/components/register-form/register-form.component';
import {SidenavButtonComponent} from './app/components/sidenav_button/sidenav_button.component';
import {AuthButtonsComponent} from './app/components/auth_buttons/auth_buttons.component';
import {SidenavLeftComponent} from './app/components/sidenav_left/sidenav_left.component';
import {AdvSearchComponent} from './app/components/adv_search/adv_search.component';
import {LoginDialogController} from './dialogs/login/login.dialog';
import {RegisterDialogController} from './dialogs/register/register.dialog';
import {ReportServerDialogController} from './dialogs/report_server/report_server.dialog';

angular.module('app.components')
	.component('profileSettings', ProfileSettingsComponent)
    .component('systemInfo', SystemInfoComponent)
    .component('detailsCloud', DetailsCloudComponent)
    .component('detailsVps', DetailsVpsComponent)
    .component('detailsDedicated', DetailsDedicatedComponent)
    .component('tweets', TweetsComponent)
    .component('homepageInfo', HomepageInfoComponent)
    .component('gitVersion', GitVersionComponent)
    .component('scrollFab', ScrollFabComponent)
    .component('contactForm', ContactFormComponent)
    .component('resetPassword', ResetPasswordComponent)
    .component('forgotPassword', ForgotPasswordComponent)
    .component('loginForm', LoginFormComponent)
    .component('registerForm', RegisterFormComponent)
    .component('sidenavButton', SidenavButtonComponent)
    .component('authButtons', AuthButtonsComponent)
    .component('advSearch', AdvSearchComponent)
    .component('sidenavLeft', SidenavLeftComponent);


angular.module('app.components')
    .controller('ReportServerDialogController', ReportServerDialogController)
    .controller('RegisterDialogController', RegisterDialogController)
    .controller('LoginDialogController', LoginDialogController);
