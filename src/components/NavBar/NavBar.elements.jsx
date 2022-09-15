import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 70px;
background-color: #f9c6b7;
flex-direction: column;
`;

export const Wrapper = styled.div`
width: 100%;
max-width: 1300px;
height: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin: auto;

`;

export const LogoContainer = styled.div`
margin-left: 0.5rem;
display: block;
align-items: center;
font-size: 1.2rem;
`;

export const Menu = styled.ul`
height: 100%;
display: flex;
list-style: none;

@media screen and (max-width: 960px){
    background-color: #f9c6b7;
    position: absolute;
    padding-left: 0;
    top: 70px;
    left: ${({open}) => (open ? "0" : "-100%" )};
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
}

`;

export const MenuItem = styled.li`
height: 100%;

@media screen and (max-width: 960px){
width: 100%;
height: 40px;
//display: flex;
justify-content: center;
align-items: center;

}
`;

export const MenuItemLink = styled.a`
display: inline-flex;
justify-content: center;
align-items: center;
height: 100%;
padding: 1.5rem 2.5rem;
color: #ce863e;
font-family: sans-serif;
font-size: 1rem;
font-weight: 300;
cursor: pointer;
transition: 0.5s all ease;
text-decoration: none;

&:hover {
color: #fff;
background-color: #ce863e;
transition: 0.5s all ease;


div{
     svg {
        fill: #f9c6b7;
    }
 }
}

div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
svg{
    display: none;
    fill:#ce863e;
    margin-right: 0.5rem;
}

@media screen and (max-width: 960px){
    display: flex;
    background-color: #f9c6b7;
    width: 100%;
    div {
    width: 30%;
    justify-content: left;

        svg {
        display: flex;
        }
    }
}
@media screen and (max-width: 880px){
    div {
    width: 40%;
    justify-content: left;

        svg {
        display: flex;
        }
    }
}
@media screen and (max-width: 500px){
    div {
    width: 60%;
    justify-content: left;

        svg {
        display: flex;
        }
    }
}
@media screen and (max-width: 268px){
    div {
    width: 100%;
    justify-content: left;

        svg {
        display: flex;
        }
    }
}

`;

export const CarShoppin = styled.div`
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 1rem 1rem;
        cursor: pointer;
        svg {
        fill: #ce863e;
       // margin-right:  0.5rem;
    }
`;




export const MobileIcon = styled.div`
     display: none;
    @media screen and (max-width: 960px) {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 1rem 1rem;
        cursor: pointer;
    svg{
        fill: #ce863e;
        margin-right:  0.5rem;
    }
    }
`;