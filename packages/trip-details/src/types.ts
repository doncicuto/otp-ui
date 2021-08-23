import moment from "moment";
// HACK: Probably ok to import the file using a relative path as it is used during dev only.
// Also prettier does not recognize the import type syntax.
// eslint-disable-next-line prettier/prettier
import type { Itinerary } from "../../types/src";

export type CaloriesDetailsProps = {
  bikeSeconds: number;
  calories: number;
  walkSeconds: number;
};

export type DepartureDetailsProps = {
  departureDate: moment.Moment;
};

export type FareDetailsProps = {
  maxTNCFare: number;
  minTNCFare: number;
  transitFare: number;
};

export type TripDetailsProps = {
  /**
   * Slot for a custom component to render the expandable section for calories.
   */
  CaloriesDetails?: React.ElementType<CaloriesDetailsProps>;
  /**
   * Used for additional styling with styled components for example.
   */
  className?: string;
  /**
   * Slot for a custom component to render the expandable section for departure.
   */
  DepartureDetails?: React.ElementType<DepartureDetailsProps>;
  /**
   * Slot for a custom component to render the expandable section for fares.
   */
  FareDetails?: React.ElementType<FareDetailsProps>;
  /**
   * Itinerary that the user has selected to view, contains multiple legs.
   */
  itinerary: Itinerary;
};
