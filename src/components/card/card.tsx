import { CardType } from '../../types/card';
import { Link } from 'react-router-dom';
import { MouseEvent } from 'react';
import Bookmark from '../bookmark/bookmark';
import { cssClass } from '../../utils/constants';

type CardProps = {
  offer: CardType;
  onListItemHover: (listItemName: string) => void;
};

function Card(props: CardProps): JSX.Element {

  const { offer, onListItemHover } = props;

  const { title, price, isPremium, previewImage, id, type, rating } = offer;

  const handleListItemHover = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    const offerId = event.currentTarget.id;
    onListItemHover(offerId);
  };

  const handleMouseLeave = () => {
    onListItemHover('');
  };

  return (
    <article className="cities__card place-card" onMouseEnter={handleListItemHover} onMouseLeave={handleMouseLeave} id={id}>
      {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt={title} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark offer={offer} sectionClass={cssClass.PlaceCard} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${Math.floor(rating + 0.5) * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
