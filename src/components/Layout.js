import Header from "./Header/Header"
import "../App.css"

function Layout(props) {
    console.log(props.children)

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