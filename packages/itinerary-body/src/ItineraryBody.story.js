import { itineraryType } from "@opentripplanner/core-utils/lib/types";
import TriMetLegIcon from "@opentripplanner/icons/lib/trimet-leg-icon";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import styled from "styled-components";

import ItineraryBody from ".";
import * as ItineraryBodyClasses from "./styled";

const config = require("./__mocks__/config.json");

// import mock itinaries. These are all trip plan outputs from OTP.
const bikeOnlyItinerary = require("./__mocks__/itineraries/bike-only.json");
const bikeRentalItinerary = require("./__mocks__/itineraries/bike-rental.json");
const bikeRentalTransitBikeRentalItinerary = require("./__mocks__/itineraries/bike-rental-transit-bike-rental.json");
const bikeTransitBikeItinerary = require("./__mocks__/itineraries/bike-transit-bike.json");
const eScooterRentalItinerary = require("./__mocks__/itineraries/e-scooter-rental.json");
const eScooterRentalTransiteScooterRentalItinerary = require("./__mocks__/itineraries/e-scooter-transit-e-scooter.json");
const parkAndRideItinerary = require("./__mocks__/itineraries/park-and-ride.json");
const tncTransitTncItinerary = require("./__mocks__/itineraries/tnc-transit-tnc.json");
const walkInterlinedTransitItinerary = require("./__mocks__/itineraries/walk-interlined-transit-walk.json");
const walkOnlyItinerary = require("./__mocks__/itineraries/walk-only.json");
const walkTransitWalkItinerary = require("./__mocks__/itineraries/walk-transit-walk.json");
const walkTransitWalkTransitWalkItinerary = require("./__mocks__/itineraries/walk-transit-walk-transit-walk.json");

const StyledItineraryBody = styled(ItineraryBody)`
  ${ItineraryBodyClasses.LegBody} {
    background-color: pink;
  }
`;

class ItineraryBodyDefaultsWrapper extends Component {
  constructor() {
    super();
    this.state = {};
  }

  setLegDiagram = leg => {
    this.setState({ diagramVisible: leg });
  };

  render() {
    const { itinerary, showAgencyInfo, useStyled } = this.props;
    const { diagramVisible } = this.state;
    return useStyled ? (
      <StyledItineraryBody
        config={config}
        diagramVisible={diagramVisible}
        frameLeg={action("frameLeg")}
        itinerary={itinerary}
        LegIcon={TriMetLegIcon}
        routingType="ITINERARY"
        setActiveLeg={action("setActiveLeg")}
        setLegDiagram={this.setLegDiagram}
        setViewedTrip={action("setViewedTrip")}
        showAgencyInfo={showAgencyInfo}
        showElevationProfile
        toRouteAbbreviation={r => r.toString().substr(0, 2)}
      />
    ) : (
      <ItineraryBody
        config={config}
        diagramVisible={diagramVisible}
        frameLeg={action("frameLeg")}
        itinerary={itinerary}
        LegIcon={TriMetLegIcon}
        routingType="ITINERARY"
        setActiveLeg={action("setActiveLeg")}
        setLegDiagram={this.setLegDiagram}
        setViewedTrip={action("setViewedTrip")}
        showAgencyInfo={showAgencyInfo}
        showElevationProfile
        toRouteAbbreviation={r => r.toString().substr(0, 2)}
      />
    );
  }
}

ItineraryBodyDefaultsWrapper.propTypes = {
  itinerary: itineraryType.isRequired,
  showAgencyInfo: PropTypes.bool,
  useStyled: PropTypes.bool
};

ItineraryBodyDefaultsWrapper.defaultProps = {
  showAgencyInfo: false,
  useStyled: false
};

storiesOf("ItineraryBody", module)
  .addDecorator(withA11y)
  .addDecorator(withInfo)
  .add("ItineraryBody with walk-only itinerary", () => (
    <ItineraryBodyDefaultsWrapper itinerary={walkOnlyItinerary} />
  ))
  .add("ItineraryBody with bike-only itinerary", () => (
    <ItineraryBodyDefaultsWrapper itinerary={bikeOnlyItinerary} />
  ))
  .add("ItineraryBody with walk-transit-walk itinerary", () => (
    <ItineraryBodyDefaultsWrapper itinerary={walkTransitWalkItinerary} />
  ))
  .add("Styled ItineraryBody with walk-transit-walk itinerary", () => (
    <ItineraryBodyDefaultsWrapper
      itinerary={walkTransitWalkItinerary}
      useStyled
    />
  ))
  .add(
    "ItineraryBody with walk-transit-walk itinerary with agency information",
    () => (
      <ItineraryBodyDefaultsWrapper
        itinerary={walkTransitWalkItinerary}
        showAgencyInfo
      />
    )
  )
  .add("ItineraryBody with bike-transit-bike itinerary", () => (
    <ItineraryBodyDefaultsWrapper itinerary={bikeTransitBikeItinerary} />
  ))
  .add("ItineraryBody with walk-interlined-transit itinerary", () => (
    <ItineraryBodyDefaultsWrapper itinerary={walkInterlinedTransitItinerary} />
  ))
  .add("ItineraryBody with walk-transit-transfer itinerary", () => (
    <ItineraryBodyDefaultsWrapper
      itinerary={walkTransitWalkTransitWalkItinerary}
    />
  ))
  .add("ItineraryBody with bike-rental itinerary", () => (
    <ItineraryBodyDefaultsWrapper itinerary={bikeRentalItinerary} />
  ))
  .add("ItineraryBody with E-scooter-rental itinerary", () => (
    <ItineraryBodyDefaultsWrapper itinerary={eScooterRentalItinerary} />
  ))
  .add("ItineraryBody with park and ride itinerary", () => (
    <ItineraryBodyDefaultsWrapper itinerary={parkAndRideItinerary} />
  ))
  .add("ItineraryBody with bike rental + transit itinerary", () => (
    <ItineraryBodyDefaultsWrapper
      itinerary={bikeRentalTransitBikeRentalItinerary}
    />
  ))
  .add("ItineraryBody with E-scooter rental + transit itinerary", () => (
    <ItineraryBodyDefaultsWrapper
      itinerary={eScooterRentalTransiteScooterRentalItinerary}
    />
  ))
  .add("ItineraryBody with TNC + transit itinerary", () => (
    <ItineraryBodyDefaultsWrapper itinerary={tncTransitTncItinerary} />
  ));
