import styled from 'styled-components';
const Search = () => {
  return (
    <SearchWrapper>
      <div className='search__header'>
        <h2>Pesquisar</h2>
      </div>

      <form>
        <div className='md-group'>
          <select className='md-input__text' required>
            <option>Yes</option>
            <option>No</option>
          </select>
          <span className='md-input__highlight'></span>
          <span className='md-input__bar'></span>
          <label className='md-input__label'>Select</label>
        </div>

        <div>
          <button className='search-btn'>Procurar</button>
        </div>
      </form>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  /* From https://css.glass */
  background: rgba(6, 70, 99, 0.16);
  border-radius: 16px;
  backdrop-filter: blur(2.1px);
  -webkit-backdrop-filter: blur(2.1px);
  padding: 32px 24px;

  .search__header {
    margin-bottom: 1rem;

    h2 {
      font-size: 18px;
    }
  }

  form {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .md-group {
      position: relative;
      margin: 35px 0;

      .md-input__text {
        background: transparent;
        font-size: 14px;
        padding: 5px 5px 2px 5px;
        width: 50%;
        border: none;
        border-bottom: 1px solid #757575;
        vertical-align: bottom;
      }
      .md-input__text:focus {
        outline: none;
      }

      option:active,
      option:hover,
      option:focus {
        background: rgba(0, 0, 0, 0.04);
      }
    }
  }

  .search-btn {
    display: inline-block;
    background: #ecb365;
    color: #fff;
    font-size: 1.4rem;
    padding: 20px 30px;
    border-radius: 10px;
    border: 0;
    font-weight: 600;
    box-shadow: none;
    transition: background 0.2s ease;

    cursor: pointer;
  }
`;

export default Search;
