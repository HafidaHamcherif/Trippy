//Test//
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 10px 0;
`;

const Title = styled.h3`
    font-size: 40px;
    color: cyan;
`;

const Text = styled.p`
    color: blue;
`;


class Header extends React.Component {
    render() {
        return (
            <Container>
                <Title>Title of my component</Title>
                
            </Container>
        );
    }
}

export default Header;