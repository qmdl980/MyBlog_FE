import Header from "./Header/Header"

function Layout(props) {
    return(
        <div>
            <Header></Header>
            <div>
                {props.children}
            </div>

        </div>
    )
}
export default Layout