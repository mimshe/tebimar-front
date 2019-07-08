import React from "react";
// reactstrap components
import {
    Row,
    Col,
    Button
} from "reactstrap";

import 'ol/ol.css';
import {Map, View} from 'ol';
import OSM from 'ol/source/OSM';

import marker from '../../../../assets/img/marker.png'


import Feature from 'ol/Feature.js';
import {LineString, Point, Polygon} from 'ol/geom.js';
import {defaults as defaultInteractions, Pointer as PointerInteraction} from 'ol/interaction.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import {TileJSON, Vector as VectorSource} from 'ol/source.js';
import {Fill, Icon, Stroke, Style} from 'ol/style.js';
import {transform,fromLonLat} from 'ol/proj.js';

class PlaceInMap extends React.Component {

    componentDidMount(){
        var pointFeature = new Feature(new Point(transform([this.props.lng, this.props.lat], 'EPSG:4326','EPSG:3857')));

        const map = new Map({
            target: 'map',
            controls: [],
            layers: [
              new TileLayer({
                source: new OSM()
              }),
              new VectorLayer({
                source: new VectorSource({
                  features: [pointFeature]
                }),
                style: new Style({
                  image: new Icon(/** @type {module:ol/style/Icon~Options} */ ({
                    anchor: [0.5, 46],
                    anchorXUnits: 'fraction',
                    anchorYUnits: 'pixels',
                    opacity: 0.95,
                    src: marker
                  })),
                  stroke: new Stroke({
                    width: 3,
                    color: [255, 0, 0, 1]
                  }),
                  fill: new Fill({
                    color: [0, 0, 255, 0.6]
                  })
                })
              })
            ],
            view: new View({
              center: fromLonLat([this.props.lng, this.props.lat]),
              zoom: 14
            })
          });
    }

    render() {
        return (
            <>
            <div>
            <div id="map"></div>
            </div>
            </>
        );
    }
}

export default PlaceInMap;
