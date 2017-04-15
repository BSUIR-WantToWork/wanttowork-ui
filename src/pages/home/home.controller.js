export default class HomeController {
    constructor(UserForm) {
        'ngInject';

        this.user = {};

        this.userFields = UserForm;
    }
}
