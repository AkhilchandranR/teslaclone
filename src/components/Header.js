import React,{ useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/Car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
    const[menuOpen,setMenuOpen] = useState(false);
    const cars = useSelector(selectCars);

    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="tesla-logo"/>
            </a>
            <Menu>
                {cars && cars.map((car,index)=>(
                    <a href="#" key={index}>{car}</a>
                ))}
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={()=>setMenuOpen(false)}/>
            </RightMenu>
            <BurgerNavMenu show={menuOpen}>
                <CloseWrapper>
                    <CustomClose onClick={()=>setMenuOpen(true)}/>
                </CloseWrapper>
                {cars && cars.map((car,index)=>(
                    <li><a href="#" key={index}>{car}</a></li>
                ))}
                <li><a href="#">Existing</a></li>
                <li><a href="#">cyber truck</a></li>
                <li><a href="#">Roadster</a></li>
            </BurgerNavMenu>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

`

const Menu = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
    justify-content: center;
    @media(max-width: 769px){
        display: none;
    }
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`
const BurgerNavMenu = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    list-style-type: none;
    padding: 20px;
    text-align: start;
    transform: ${props => props.show ? 'translateX(100%)': 'translateX(0)'};
    transition: 0.3s;
    li{
        padding: 15px 0px;
        border-bottom: 1px solid rgba(0,0,0,0.2);
        a{
            font-weight: 600;
        }
    }
`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`