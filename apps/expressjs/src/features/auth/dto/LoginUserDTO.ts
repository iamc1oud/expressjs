import { IsString, IsStrongPassword, MinLength } from 'class-validator';


export class LoginUserDTO {
    @IsStrongPassword()
    password: String;

    @IsString()
    @MinLength(3)
    username: String;
}