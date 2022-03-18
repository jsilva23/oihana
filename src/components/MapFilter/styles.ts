import styled from 'styled-components';

export const FilterBox = styled.div`
  height: 100%;

  .filter-buttons {
    padding: 15px 0;
    width: 100%;

    overflow-x: scroll;
    scrollbar-width: thin;
    scrollbar-color: #96e2d9;

    *::-webkit-scrollbar {
      width: 5px;
    }

    *::-webkit-scrollbar-track {
      background: none;
    }

    *::-webkit-scrollbar-thumb {
      background-color: #96e2d9;
      border-radius: 20px;
      border: none;
    }

    display: flex;
    align-items: center;

    a {
      display: inline-block;
      background: #011627;
      color: #fdfffc;
      font-size: 1.4rem;
      padding: 10px 20px;
      border-radius: 10px;
      font-weight: 600;
      margin: 5px;
      box-shadow: none;
      transition: background 0.2s ease;

      cursor: pointer;

      &.active,
      &:hover {
        background: #011220;
      }
    }
  }
`;
