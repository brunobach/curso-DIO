import Styled from 'styled-components'


import Play from '../../assets/images/play.svg'

export const Container = Styled.div`
flex:1;
margin-top: 110px;
display: flex;
flex-direction: column;

`

export const Title = Styled.h1`
font-size:48px;
`

export const List = Styled.div`
margin-top:20px;
display: flex;
`

export const Playlist = Styled.a`
    display: flex;
    flex-direction: column;
    margin-left:20px;
    width: 250px;
    text-decoration: none;

    img{
        height: 250px;
    }
    strong{
        color: #fff;
        font-size:13px;
        margin-top:10px;
    }
    p{
        line-height:22px;
        margin-top: 5px;
        font-size:13px;
        color:#b3b3b3;

    }
    &:hover img{
        opacity: 0.4;
        background: #fff url(${Play}) no-repeat 25px center
    }

    &:first-child{
        margin:0;
    }
`