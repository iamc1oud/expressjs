import { LoginUser } from "./LoginUser";

const TYPES = {
    AuthController: Symbol.for("AuthController"),
    LoginUser: Symbol.for("LoginUser"),
}

export {
    LoginUser,
    TYPES,
}