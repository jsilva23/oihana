import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 576px) {
    width: 540px;
  }

  @media screen and (min-width: 768px) {
    width: 720px;
  }

  @media screen and (min-width: 992px) {
    width: 960px;
  }

  @media screen and (min-width: 1200px) {
    width: 1140px;
  }

  @media screen and (min-width: 1400px) {
    width: 1320px;
  }

  .row {
    width: 100%;
    height: 85vh;

    display: grid;
    grid-gap: 30px;
    grid-template-columns: 80px auto 450px;
    grid-template-rows: auto;
    grid-template-areas: 'sidebar main right-side';
  }

  .row-map {
    width: 100%;
    height: 85vh;

    display: grid;
    grid-gap: 30px;
    grid-template-columns: 80px auto;
    grid-template-rows: auto;
    grid-template-areas: 'sidebar main';
  }
`;
