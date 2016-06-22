class DetailsDedicatedController{
    constructor(API, ToastService, $state, DialogService, UserService, $auth) {
        'ngInject';

        this.API = API;
        this.$state = $state;
        this.ToastService = ToastService;
        this.DialogService = DialogService;
        this.UserService = UserService;
        this.$auth = $auth;
    }

    $onInit(){
        this.loaded = false;
        this.favored = false;
        this.details();
    }
    
    details() {
        let server_id = this.$state.params.id;
        let auth = this.$state.params.auth;

        this.API.all('dedicated').get('show', {
            server_id, auth
        }).then((response) => {
            this.server_info = response.data.data.server;
            this.favored = response.data.data.favored;
            this.loaded = true;
        }, () => {
            this.$state.go('app.advanced_search');
        });
    }
    
    favorite(server_id) {
        this.API.all('favorites/dedicated/' + server_id + '/add').post().then(() => {
            this.favored = true;
            this.ToastService.show('Successfully added to favorites!');
        }, (error) => {
            //this.ToastService.error(error);
        })
    }
    
    removeFavorite(server_id){
        this.API.all('favorites/dedicated/' + server_id + '/delete').post().then(() => {
            this.favored = false;
            this.ToastService.show('Removed to favorites!');
        }, (error) => {
            //this.ToastService.error(error);
        })
    }
    
    report(server_id) {
        let data = {
            server_id: server_id,
            server_type: 'dedicated'
        };

        this.DialogService.setData(data);
        this.DialogService.fromTemplate("report_server");
    }
}

export const DetailsDedicatedComponent = {
    templateUrl: './views/app/components/details_dedicated/details_dedicated.component.html',
    controller: DetailsDedicatedController,
    controllerAs: 'vm',
    bindings: {}
};
