import React from "react";
import PropTypes from "prop-types";
import { modeOptionType } from "@opentripplanner/core-utils/lib/types";

import { SubmodeRow, InlineSubmodeRow } from "./styled";
import ModeButton from "../ModeButton";
import {
  FloatingSettingLabel,
  SettingLabel,
  SettingsSection
} from "../SettingsComponents";

/**
 * SubmodeSelector is the control container where the OTP user selects
 * the submodes (e.g. train, bus) for transit, or the providers for TNC and rental companies.
 */
const SubmodeSelector = props => {
  const { className, inline, label, modes, onChange, style } = props;
  const LabelType = inline ? FloatingSettingLabel : SettingLabel;
  const RowType = inline ? InlineSubmodeRow : SubmodeRow;

  return (
    <SettingsSection className={className} style={style}>
      {label && <LabelType>{label}</LabelType>}
      <RowType>
        {modes &&
          modes.map(option => (
            <ModeButton
              /* If key is missing, a warning in React Dev Tools is triggered. */
              key={option.id}
              selected={option.selected}
              showTitle={false}
              title={option.title}
              onClick={() => onChange(option.id)}
            >
              {option.text}
            </ModeButton>
          ))}
      </RowType>
    </SettingsSection>
  );
};

SubmodeSelector.propTypes = {
  /**
   * The CSS class name to apply to this element.
   */
  className: PropTypes.string,
  /**
   * Determines how the label and mode buttons are displayed.
   */
  inline: PropTypes.bool,
  /**
   * The optional text to display before the submodes.
   */
  label: PropTypes.string,
  /**
   * An array of submodes for the trip query, i.e. transit modes, TNC, or rental companies.
   */
  modes: PropTypes.arrayOf(modeOptionType),
  /**
   * Triggered when the user toggles a submode.
   * @param id The id of the option clicked.
   */
  onChange: PropTypes.func
};

SubmodeSelector.defaultProps = {
  className: null,
  inline: false,
  label: null,
  modes: null,
  onChange: null
};

export default SubmodeSelector;
