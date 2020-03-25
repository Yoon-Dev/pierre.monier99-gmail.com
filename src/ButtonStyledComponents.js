import styled from 'styled-components';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';


const communstyle = `
    border-radius: 10px;
    cursor: pointer;
    padding: 8px 16px;
    text-transform: uppercase;
`


export const PrimaryButtonComposition = styled.button`
    ${communstyle};
    background-color: ${blue[400]};
    `
export const SecondaryButtonComposition = styled.button`
    ${communstyle};
    background-color: ${red[400]};
    `
export const PrimaryButtonHeritage = styled.button`
${communstyle};
background-color: ${blue[400]};
    `
export const SecondaryButtonHeritage = styled(PrimaryButtonHeritage)`
    background-color: ${red[400]};
    `