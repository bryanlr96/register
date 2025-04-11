import styled from 'styled-components'

export const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;

export const StyledTable = styled.table`
  width: 90%;
  max-width: 800px;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  background-color: #f5f5f5;
  font-family: 'Segoe UI', sans-serif;
`;

export const Thead = styled.thead`
  background-color: #e0e0e0;
`;

export const Th = styled.th`
  padding: 16px;
  text-align: center;
  font-weight: 600;
  color: #444;
  border-bottom: 1px solid #ccc;
`;

export const AddButton = styled.button`
  background-color: #444;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 20px;

  &:hover {
    background-color: #45a049;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #388e3c;
  }
  
  &:focus {
    outline: none;
  }
`;