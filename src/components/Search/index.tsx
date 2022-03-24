import styled from 'styled-components';
import { BiChevronDown } from 'react-icons/bi';
import { useState } from 'react';

const Search = () => {
  const [firstField, setFirstField] = useState<boolean>(false);
  const [secondField, setSecondField] = useState<boolean>(false);

  const [businessType, setBusinessType] = useState<string>('');
  const [imovelType, setImovelType] = useState<string>('');
  const [location, setLocation] = useState<string>('');

  const blurHandle = () => {
    setTimeout(() => {
      setFirstField(false);
      setSecondField(false);
    }, 250);
  };

  return (
    <SearchWrapper>
      <form>
        <div className={firstField ? 'wrapper active' : 'wrapper'}>
          <div className='field-container'>
            <input
              className='field-input'
              id='inputid'
              name='inputName'
              type='text'
              placeholder=' '
              value={businessType}
              onFocus={() => setFirstField(true)}
              onBlur={() => blurHandle()}
            />
            <label className='field-placeholder'>Imóvel</label>
          </div>
          <div className='content'>
            <ul className='options'>
              <li
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  setBusinessType((event.target as any).textContent);
                }}
              >
                A venda
              </li>
              <li
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  setBusinessType((event.target as any).textContent);
                }}
              >
                Em aluguel
              </li>
            </ul>
          </div>
        </div>

        <div className={secondField ? 'wrapper active' : 'wrapper'}>
          <div className='field-container'>
            <input
              className='field-input'
              id='inputid'
              name='inputName'
              type='text'
              placeholder=' '
              value={imovelType}
              onFocus={() => setSecondField(true)}
              onBlur={() => blurHandle()}
            />
            <label className='field-placeholder'>Tipo</label>
          </div>
          <div className='content'>
            <ul className='options'>
              <li
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  setImovelType((event.target as any).textContent);
                }}
              >
                Casas
              </li>
              <li
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  setImovelType((event.target as any).textContent);
                }}
              >
                Apartamentos
              </li>
              <li
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  setImovelType((event.target as any).textContent);
                }}
              >
                Espaços de negócio
              </li>
              <li
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  setImovelType((event.target as any).textContent);
                }}
              >
                Terrenos
              </li>
            </ul>
          </div>
        </div>

        <div className='wrapper'>
          <div className='field-container'>
            <input
              className='field-input'
              id='inputid'
              name='inputName'
              type='text'
              placeholder=''
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <label className='field-placeholder' htmlFor='inputName'>
              Localização
            </label>
          </div>
        </div>

        <button className='search-btn'>Procurar</button>
      </form>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  background: rgba(6, 70, 99, 0.6);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  border: 1px solid rgba(6, 70, 99, 0.01);

  padding: 32px 24px;
  border-radius: 10px;

  form {
    display: grid;
    grid-template-columns: 19.7% 25% 33.3% auto;

    column-gap: 10px;

    .field-container {
      position: relative;
      height: 50px;
      /* From https://css.glass */
      background: rgba(6, 70, 99, 0.6);
      border: 1px solid rgba(6, 70, 99, 0.01);
      border-radius: 5px;
      padding: 0 4px;

      color: #e5edf3;
    }

    .field-placeholder {
      position: absolute;

      top: 50%;
      transform: translate(5px, -50%);
      pointer-events: none;
      transition: all 0.14s ease-in-out;
      font-size: 18px;
    }

    .dropdown {
      position: absolute;
      right: 5px;
      top: 12px;
      cursor: pointer;
    }

    .wrapper {
      position: relative;
    }

    .active .content {
      display: block;
    }

    .content {
      position: absolute;
      display: none;
      width: 100%;
      padding: 20px;
      margin-top: 2px;
      background: #064663;
      color: #f4faff;
      border-radius: 5px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);

      .options {
        max-height: 250px;
        list-style: none;

        li {
          padding: 5px;
          font-size: 14px;
          cursor: pointer;

          &:hover,
          li.selected {
            border-radius: 2.5px;
            background: #f4faff;
            color: #041c32;
          }
        }
      }
    }

    input[type='text'].field-input {
      color: #e5edf3;
      border: none;
      padding: 5px;
      margin-top: 15px;
      font-size: 16px;
      display: block;
      box-sizing: border-box;
      width: 100%;
      bottom: 0px;
      background: none;
      &:focus {
        outline: none;
      }
      &.c-fix,
      &:focus,
      &:not(:placeholder-shown) {
        border-color: transparent;
        ~ label {
          font-size: 11px;
          //Come up with a calculation for this
          top: calc(25% - 0.5rem);
          transform: translate(5px, 0%);
        }
      }

      &::-webkit-input-placeholder {
        color: transparent;
      }
      &::-moz-placeholder {
        color: transparent;
      }
      &:-ms-input-placeholder {
        color: transparent;
      }
    }
  }

  .search-btn {
    display: inline-block;
    background: #d7a35c;
    color: #f4faff;
    font-size: 1.4rem;
    height: 50px;
    padding: 0 30px;
    border-radius: 5px;
    border: 0;
    font-weight: 600;
    box-shadow: none;
    transition: background 0.2s ease;

    cursor: pointer;
  }
`;

export default Search;
