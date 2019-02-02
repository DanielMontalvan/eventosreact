import React, { Component } from "react";
import PropTypes from "prop-types";
const Evento = props => {
  const { name } = props.informacion;
  if (!name) return null;
  let desc = props.informacion.description.text
    ? props.informacion.description.text
    : "";
  if (desc.length > 250) {
    desc = desc.substr(0, 250);
  }
  return (
    <div className="uk-card uk-card-default">
      <div className="uk-card-media-top">
        {props.informacion.logo !== null ? (
          <img
            src={props.informacion.logo.url}
            alt={props.informacion.name.text}
          />
        ) : (
          ""
        )}
      </div>

      <div className="uk-card-body">
        <h3 className="uk-card-title">{props.informacion.name.text}</h3>
        <p>{desc}</p>
      </div>
      <div className="uk-card-footer">
        <a
          className="uk-button uk-button-secondary"
          href={props.informacion.url}
          target="_blank"
        >
          Más información
        </a>
      </div>
    </div>
  );
};
Evento.propTypes = {
    informacion:PropTypes.object.isRequired
};

export default Evento;
