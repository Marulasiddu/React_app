import styled from 'styled-components'

export const ButtonContainer = styled.button `
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid var(--lightBlue);
    border-color: var(--lightBlue);
    color: var(--lightBlue);
    bordr-radius: 0.5rem;
    padding: 0.2rem 0.5 rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transitition 0.5s ease-in-out;
    &:hover{
        background: var(--lightBlue);
        color: var(--mainBlue);
    }
    &:focus{
        outline:none
    }
    `;

