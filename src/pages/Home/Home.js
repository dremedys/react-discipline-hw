export const Home = ({isLogin}) => {
    return (
        <div>
            <h1>
                {
                    isLogin? 'Welcome to home page. You are authorized now': 'Hello from home, go to login page'
                }
            </h1>
        </div>
    )
}
