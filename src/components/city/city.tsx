import { useAppDispatch } from '../../hooks';
import { getOffers, setCityAction } from '../../store/actions';
import { CityType } from '../../types/city';
import { cities } from '../../utils/constants';

type CityProps = {
  city: CityType;
  onClick: () => void;
  active: boolean;
};

function City(props: CityProps): JSX.Element {

  const { city, onClick, active } = props;

  const dispatch = useAppDispatch();

  const handleCityClick = (event: React.MouseEvent<Element>) => {
    event.preventDefault();
    const clickedCity = event.currentTarget.textContent;
    const element = cities.find((elem) => elem.title === clickedCity);
    if (element) {
      onClick();
      dispatch(setCityAction(element));
      dispatch(getOffers());
    }
  };

  return (
    <li className="locations__item"><a className={active ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'} onClick = {handleCityClick}><span>{city.title}</span></a></li>
  );
}

export default City;