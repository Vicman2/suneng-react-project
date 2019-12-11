import React, {Component} from 'react'
import Aux from '../../hoc/Aux'
import Navbar from '../../components/Navbar/Navbar';
import Backdrop from '../../components/UI/Backdrop/Backdrop'
import IntroLayer from '../../components/IntroLayer/IntroLayer'
import ProductLayer from '../../components/ProductLayers/ProductLayers'
import Services from '../../components/Services/Services'
import Team from '../../components/Team/Team';
import Contact from '../Contact/Contact'
import NavBarMin from '../../components/UI/NavBarMin/NavBarMin'
import './Structure.css'


class Structure extends Component{
    state={
        isTop: true, 
        toggled: false
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleNavbar);
    }
    handleNavbar = (e)=>{
        if(window.scrollY < 100){
            this.setState({isTop: true})
        }else{
            this.setState({isTop:false})
        }
    }
    navigationToggler = () => {
        const toggledState = this.state.toggled
        this.setState({toggled: !toggledState})
    }
    render(){
        return (
            <Aux>
                <section className="Structure">
                    <NavBarMin toggled={this.state.toggled}/>
                    <Backdrop toggled={this.state.toggled} clicked={this.navigationToggler}/>
                    <section className="subStructure">
                        <section className="NavBar_Top">
                             <Navbar toToggle={this.navigationToggler} isTop={this.state.isTop}/>
                        </section>
                        <IntroLayer />
                    </section>
                </section>
                <ProductLayer />
                <Services />
                <Team />
                <Contact />
            </Aux>
        )
    }
}

export default Structure