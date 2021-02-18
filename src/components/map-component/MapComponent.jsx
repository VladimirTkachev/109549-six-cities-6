import React, {useEffect, useRef} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

import {OfferCardTypes} from "Project/prop-types/offer-card";

const MapComponent = (props) => {
  const {items, activeItem} = props;
  const mapRef = useRef(null);
  const [firstItem = {}] = items;

  useEffect(() => {
    const city = firstItem.city;

    mapRef.current = leaflet.map(mapRef.current, {
      center: {
        lat: city.location.latitude,
        lng: city.location.longitude
      },
      zoom: city.location.zoom
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    return () => {
      mapRef.current.remove();
    };
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      items.forEach((item) => {
        const isActive = activeItem ? item.id === activeItem.id : false;
        const city = item.city;
        const customIcon = leaflet.icon({
          iconUrl: isActive ? `img/pin-active.svg` : `img/pin.svg`,
          iconSize: [27, 39]
        });

        leaflet.marker({
          lat: city.location.latitude,
          lng: city.location.longitude
        },
        {
          icon: customIcon
        })
        .addTo(mapRef.current)
        .bindPopup(city.name);
      });
    }
  }, [items, activeItem]);

  return (
    <div id="map" style={{height: `100%`}} ref={mapRef}/>
  );
};

MapComponent.propTypes = {
  /** Список карточек предложений */
  items: PropTypes.arrayOf(OfferCardTypes),
  /** Данные выбранной карточки */
  activeItem: OfferCardTypes,
};

export default MapComponent;
