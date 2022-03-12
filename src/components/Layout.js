import Header from "./Header/Header"
import "../App.css"

function Layout(props) {
    return (
        <div className="wrap">
            <Header></Header>
            <section id="container">
                {props.children}
            </section>

        </div>
    )
}

export default Layout