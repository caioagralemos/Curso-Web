
mapboxgl.accessToken = mapToken
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [lng, lat], // starting position [lng, lat]
    zoom: 13 // starting zoom
});

map.on('load', () => {
    // Load an image from an external URL.
    map.loadImage(
        'https://i.imgur.com/nN6n6DV.png',
        (error, image) => {
            if (error) throw error;

            // Add the image to the map style.
            map.addImage('pin', image);

            // Add a data source containing one point feature.
            map.addSource('point', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [lng, lat]
                            }
                        }
                    ]
                }
            });

            // Add a layer to use the image to represent the data.
            map.addLayer({
                'id': 'points',
                'type': 'symbol',
                'source': 'point', // reference the data source
                'layout': {
                    'icon-image': 'pin', // reference the image
                    'icon-size': 0.18
                }
            });
        }
    );
})
