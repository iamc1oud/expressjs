import { LoginUserDTO } from "../dto/LoginUserDTO";

export class LoginUser {
    async execute(command: LoginUserDTO): Promise<any> {
        return command;
    }
}