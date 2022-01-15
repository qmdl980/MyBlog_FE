import {Container, Nav, Navbar} from "react-bootstrap"

function Header() {
    return(
        <Navbar className="headerBar" >
            <Container>
                <Navbar.Brand href="/">개발이야기!</Navbar.Brand>
            </Container>
        </Navbar>
    )
}
export default Header