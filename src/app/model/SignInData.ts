export class SignInData {
    public login: string;
    private password: string;
    ans: boolean = false;
    constructor(login: string, password: string) {
        this.login = login;
        this.password = password;
    }

    getLogin(): string {
        return this.login;
    }

    getPassword(): string {
        return this.password;
    }
}