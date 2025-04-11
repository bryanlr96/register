import styled from 'styled-components'

export const Tr = styled.tr`
  &:hover {
    background-color: #ebebeb;
  }
`;

export const Td = styled.td`
  padding: 14px;
  text-align: center;
  border-bottom: 1px solid #dcdcdc;
  color: #555;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: #888;
  cursor: pointer;
  transition: color 0.2s ease;
  padding: 4px;

  &:hover {
    color: #333;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;