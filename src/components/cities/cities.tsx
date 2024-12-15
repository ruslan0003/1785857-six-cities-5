import { useState } from 'react';
import { CitiesType } from '../../types/city';
import City from '../city/city';

type CitiesProps = {
  cities: CitiesType;
};

function Cities(props: CitiesProps): JSX.Element {

  const { cities } = props;

  const [activeCityIndex, setActiveCityIndex] = useState(1);

  const arrayCityList = Object.values(cities).map((city) =>
    (
      <City key = {city.id} city = {city} onClick = {() => setActiveCityIndex(city.id)} active = {activeCityIndex === city.id} />)
  );
  return (
    <> {arrayCityList} </>);
}

export default Cities;