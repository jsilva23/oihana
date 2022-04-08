import {
  MdBusiness,
  MdOutlineBathtub,
  MdOutlineBedroomParent,
} from 'react-icons/md';
import styled from 'styled-components';

const NextToYou = () => {
  return (
    <NextTo>
      <div className='image'>
        <img
          src='img/pexels-graphicgumcom-1115804.jpg'
          alt='Logotipo da host brave'
        />
      </div>

      <div className='image-two'>
        <p className='price'>22.000,00KZ</p>
        <p className='address'>Luanda, K. Kiaxi, Rua 22, Nº 10</p>
        <div className='details'>
          <span className='room'>
            <span>
              <MdOutlineBedroomParent />
            </span>
            <span>3</span>
          </span>

          <span className='bath'>
            <span>
              <MdOutlineBathtub />
            </span>
            <span>3</span>
          </span>

          <span className='busness'>
            <span>
              <MdBusiness />
            </span>
            <span>A venda</span>
          </span>
        </div>
      </div>
    </NextTo>
  );
};

const NextTo = styled.div`
  width: 100%;
  height: 135px;
  padding: 5px;
  margin-bottom: 25px;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  background: #f4faff;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;

  .image {
    width: 135px;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .image-two {
    flex: 1;
    height: 100%;
    padding: 10px 15px;

    .price {
      font-weight: bold;
    }

    .address {
      margin-bottom: 20px;
      font-size: 1.5rem;
      color: rgba(0, 0, 0, 0.5);
    }

    .details {
      font-size: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .room,
      .bath,
      .busness {
        display: flex;
        align-items: center;
      }

      .room span,
      .bath span,
      .busness span {
        &:last-child {
          margin-left: 5px;
          font-size: 1.5rem;
        }
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default NextToYou;
