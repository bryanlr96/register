import styled from "styled-components";

export const Wrapper = styled.div`
  display: ${({ visible }) => (visible ? "block" : "none")};
`;

export const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.4);
z-index: 999;
`;

export const Card = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: #f3f3f3;
border-radius: 20px;
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
padding: 2rem;
width: 400px;
z-index: 1000;
display: flex;
flex-direction: column;
gap: 1rem;
`;

export const Title = styled.h2`
color: #333;
text-align: center;
font-family: 'Segoe UI', sans-serif;
`;

export const InputWrapper = styled.div`
display: flex;
align-items: center;
border: 1px solid #ccc;
border-radius: 12px;
background-color: #fff;
padding: 0.75rem 1rem;
gap: 0.5rem;

&:focus-within {
    border-color: #888;
}
`;

export const StyledInput = styled.input`
border: none;
outline: none;
font-size: 1rem;
flex: 1;
background: transparent;
color: #333;

&::placeholder {
    color: #999;
    transition: opacity 0.3s ease;
}

&:focus::placeholder {
    opacity: 0;
}
`;

export const CloseButton = styled.button`
position: absolute;
top: 1rem;
right: 1rem;
background: transparent;
border: none;
cursor: pointer;
color: #555;
font-size: 1.5rem;

&:hover {
    color: #333;
}
`;

export const AddButton = styled.button`
align-self: flex-end;
padding: 0.75rem 1.5rem;
background-color: #555;
color: white;
border: none;
border-radius: 12px;
font-size: 1rem;
cursor: pointer;

&:hover {
    background-color: #444;
}
`;
