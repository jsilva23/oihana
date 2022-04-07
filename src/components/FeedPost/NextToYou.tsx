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
  height: 115px;
  padding: 5px;
  margin-bottom: 15px;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  background: #f4faff;

  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  .image {
    width: 115px;
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
    padding: 5px 10px;

    .price {
      font-weight: bold;
      margin-bottom: -4px;
    }

    .address {
      margin-bottom: 14px;
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
