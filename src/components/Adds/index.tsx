import React from 'react';
import styled from 'styled-components';

const Adds: React.FC = () => {
  return (
    <AddCard>
      <h1 className='ad-title'>
        Alojamento web e registro de domínio com a Host-Brave
      </h1>

      <div className='images-box'>
        <div className='image'>
          <img src='img/foto-de-perfil-1.1.jpg' alt='Logotipo da host brave' />
        </div>

        <div className='image-two'>
          <img src='img/add-capa.jpg' alt='Logotipo da host brave' />
        </div>
      </div>
    </AddCard>
  );
};

const AddCard = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background-image: radial-gradient(
    circle,
    #e5edf3,
    #bbe8ec,
    #a5e1c4,
    #bdd18a,
    #ecb365
  );

  .images-box {
    width: 100%;
    height: 115px;

    display: flex;
    border-radius: 10px;
    overflow: hidden;
  }

  .image {
    width: 115px;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .image-two {
    flex: 1;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .ad-title {
    font-size: 2.4rem;
    line-height: 1.3;
    margin-bottom: 10px;
    font-family: 'Quicksand', sans-serif;
    color: #041c32;
  }
`;

export default Adds;
