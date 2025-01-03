import { CardsType, CardType } from './card';
import { CityType } from './city';
import { ReviewsType } from './review';
import { store } from '../store/index';
import { AuthorizationStatus } from '../utils/constants';

type StateType = {
  city: CityType;
  offers: CardsType;
  offersNearby: CardsType;
  reviews: ReviewsType;
  offer: CardType | null;
  authorizationStatus: AuthorizationStatus;
  isLoading: boolean;
  error: string | null;
}

type State = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export type { StateType, State, AppDispatch };
