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
    margin-top: 10vh;

    display: grid;
    grid-gap: 30px;
    grid-template-columns: 80px auto;
    grid-template-rows: auto;
    grid-template-areas: 'sidebar main';
  }

  .col {
    position: relative;
    padding: 23px 0;
    overflow: hidden;
  }

  .show__map-filter {
    position: fixed;
    top: 130px;
    right: 280px;
    z-index: 450;

    padding: 10px 15px;
    font-size: 2rem;
    cursor: pointer;

    background: #f4faff;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
      rgba(90, 125, 188, 0.05) 0px 0.25em 1em;

    display: flex;
    align-items: center;

    span {
      margin-left: 5px;
    }
  }
`;
