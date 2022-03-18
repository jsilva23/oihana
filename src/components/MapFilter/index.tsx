import { FilterBox } from './styles';

const MapFilter = () => {
  return (
    <FilterBox>
      <div className='filter-buttons'>
        <a>Alle</a>
        <a>Automobil</a>
        <a>Medizin</a>
        <a>Werkzeugbau</a>
        <a>Industrie</a>
        <a>Textil</a>
      </div>
    </FilterBox>
  );
};

export default MapFilter;
