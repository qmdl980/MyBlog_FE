import Header from "./Header"

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