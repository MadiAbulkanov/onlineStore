import { Link } from "react-router-dom"

export const LoginForm = () => {
    return (
        <div>
            <h1 className="logo-name">Login Form</h1>
            <Link to={'/'}>
                <div className="">
                    <p className="">На главную страницу</p>
                </div>
            </Link>
        </div>
    )
}