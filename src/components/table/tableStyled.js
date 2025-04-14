import styled from 'styled-components'
import Fondo from '../pic/books-2463779_1280.jpg'
import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`;


export const PageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-image: url('${Fondo}');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(255, 255, 255, 0.75);
    z-index: 0;
  }

  > * {
    position: relative; 
    z-index: 1;
  }
`;

export const HeaderTitle = styled.h1`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #ffffff;
  width: 100%;
  padding: 30px 0;
  margin: 0;
  text-align: center;
  font-size: 3rem;
  font-weight: 800;
  color: #222;
  font-family: 'Segoe UI', sans-serif;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  border-bottom: 2px solid #e0e0e0;
`;

export const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;

export const TableScrollArea = styled.div`
  max-height: calc(100vh - 250px);
  overflow-y: auto;
  width: 90%;
  max-width: 800px;
`;

export const StyledTable = styled.table`
  width: 100%;
  max-width: 800px;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  background-color: #f5f5f5;
  font-family: 'Segoe UI', sans-serif;
  table-layout: fixed;
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
  position: fixed;
  bottom: 20px;
  right: 20px;

  background-color: #444;
  color: white;
  border: none;
  padding: 14px 28px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 20;

  transition: background-color 0.3s ease, transform 0.2s ease;

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