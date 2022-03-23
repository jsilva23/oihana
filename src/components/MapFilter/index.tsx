import { MdClose } from 'react-icons/md';
import styled from 'styled-components';
type MenuProps = {
  mapFilterStatus: boolean;
  setMapFilterStatus: (value: boolean) => void;
};

const MapFilter = ({ mapFilterStatus, setMapFilterStatus }: MenuProps) => {
  return (
    <FilterBox>
      <form className={`filter ${mapFilterStatus ? 'active-filter' : ''}`}>
        <span
          className='close-filter__button'
          onClick={() => setMapFilterStatus(false)}
        >
          <MdClose size={25} />
        </span>

        <h2 className='title'>Filtrar no mapa</h2>
        <div className='form-grid'>
          <div className='input__group'>
            <div className='label-box'>
              <input className='custom' type='checkbox' id='for-rent' />
              <label htmlFor='for-rent'>
                <h5>Imóvel para alugar</h5>
              </label>
            </div>
          </div>
          <div className='input__group'>
            <div className='label-box'>
              <input className='custom' type='checkbox' id='for-sell' />
              <label htmlFor='for-sell'>
                <h5>Imóvel para comprar</h5>
              </label>
            </div>
          </div>
        </div>

        <hr />
        <h4>Tipos de imóveis</h4>

        <div className='form-grid'>
          <div className='input__group'>
            <div className='label-box dobble'>
              <input className='custom' type='checkbox' id='check1' />
              <label htmlFor='check1'>
                <h5>Casas</h5>
              </label>
            </div>
            <div className='label-box'>
              <input className='custom' type='checkbox' id='check2' />
              <label htmlFor='check2'>
                <h5>Apartamentos</h5>
              </label>
            </div>
          </div>
          <div className='input__group'>
            <div className='label-box dobble'>
              <input className='custom' type='checkbox' id='check3' />
              <label htmlFor='check3'>
                <h5>Espaços de negócios</h5>
              </label>
            </div>
            <div className='label-box'>
              <input className='custom' type='checkbox' id='check4' />
              <label htmlFor='check4'>
                <h5>Terrenos</h5>
              </label>
            </div>
          </div>
        </div>

        <hr />

        <h4>Compartimentos</h4>

        <div className='form-grid'>
          <div className='input__group'>
            <div className='label-box'>
              <label htmlFor='tcomprt'>
                <h5>T</h5>
              </label>
              <input className='compart' type='number' id='tcomprt' min={1} />
            </div>
          </div>

          <div className='input__group'>
            <div className='label-box bath'>
              <label htmlFor='bathrooms'>
                <h5>Banheiros:</h5>
              </label>
              <input className='compart' type='number' id='bathrooms' min={1} />
            </div>
          </div>
        </div>

        <hr />

        <h4>Localização</h4>

        <input
          className='location'
          type='text'
          placeholder='Digite uma cidade, país...'
        />

        <button className='search-btn'>Procurar</button>
      </form>
    </FilterBox>
  );
};

const FilterBox = styled.div`
  height: 100%;
  color: #041c32;
  .filter {
    font-size: 1.3rem;
    line-height: 1.846;
    padding: 3.6rem 3rem 3.6rem 3.6rem;
    height: 100%;
    width: 45rem;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 700;

    background: #fff;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
      rgba(90, 125, 188, 0.05) 0px 0.25em 1em;

    transform: translateX(100%);
    transition: all 0.5s ease;

    label {
      display: inline-block;
      font-size: 1.75rem;
    }
  }

  .close-filter__button {
    display: block;
    height: 30px;
    width: 30px;
    border-radius: 3px;
    position: absolute;
    top: 20px;
    right: 20px;
    text-shadow: none;
    z-index: 800;
    cursor: pointer;
  }

  .active-filter {
    transform: translateX(0%);
  }

  @media screen and (max-width: 768px) {
    .filter {
      width: 100%;
    }
  }

  .title {
    font-size: 2rem;
    margin-bottom: 1.5em;
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;

    padding: 10px;
  }

  .custom {
    opacity: 0;
    display: none;
    position: relative;
  }

  .custom + label {
    display: grid;
    grid-template-columns: 24px auto;
    grid-template-rows: auto auto;
    align-items: center;
    column-gap: 1em;
    position: relative;
    cursor: pointer;
  }

  .custom[type='checkbox'] + label::before {
    content: '';
    width: 24px;
    height: 24px;
    border-radius: 3px;
    border: 1px solid #8f94a1;
    background: transparent;
  }

  .custom[type='checkbox'] + label::after {
    content: '#';
    color: #f4faff;
    font-size: 1.8rem;
    position: absolute;
    top: -4px;
    left: 7px;
    transform: scale(0);
    transition: all 300ms ease-in-out;
  }

  .custom[type='checkbox']:checked + label::before {
    background-color: #041c32;
  }

  .custom[type='checkbox']:checked + label::after {
    transform: scale(1);
  }

  .compart {
    width: 54px;
    margin-left: 5px;
    margin-top: 5px;
    padding: 5px;
    border: 0;
    border-bottom: 1px solid #041c32;
    outline: none;
  }

  .location {
    display: block;
    height: 50px;
    width: 100%;
    background-color: rgb(4, 28, 50, 0.2);
    color: #041c32;
    padding: 0 10px;
    margin-top: 2rem;

    font-size: 16px;
    border: 0;
    outline: none;
  }

  .dobble {
    margin-bottom: 20px;
  }

  .search-btn {
    width: 100%;
    display: inline-block;
    background: #04293a;;
    color: #f4faff;
    font-size: 1.4rem;
    padding: 20px 30px;
    border: 0;
    font-weight: 600;
    box-shadow: none;
    transition: background 0.2s ease;
    
    cursor: pointer;
    
    margin-top: 4.5rem;
    
    &:hover {
      background: #041c32;
    }
  }

  h5 {
    font-size: 1.25rem;
    white-space: nowrap;
  }

  h4 {
    font-size: 1.6rem;
    margin-bottom: 10px;
  }

  p {
    grid-column: 2/ -2;
  }

  hr {
    margin: 30px 0;
  }
`;

export default MapFilter;
