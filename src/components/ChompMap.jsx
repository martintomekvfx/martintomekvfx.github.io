import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Art points from the actual ChompAR game
const ART_POINTS = [
    // Vysočany / Hloubětín cluster
    { id: 'art-01', name: 'Kolbenova 1', location: [50.110192, 14.503811], size: 'medium', area: 'Vysočany' },
    { id: 'art-02', name: 'Kolbenova 2', location: [50.110203, 14.503764], size: 'small', area: 'Vysočany' },
    { id: 'art-03', name: 'Kolbenova 3', location: [50.109847, 14.504250], size: 'medium', area: 'Vysočany' },
    { id: 'art-04', name: 'Kolbenova 4', location: [50.109981, 14.504933], size: 'sticker', area: 'Vysočany' },
    { id: 'art-05', name: 'Kolbenova 5', location: [50.109764, 14.505742], size: 'large', area: 'Vysočany' },
    { id: 'art-06', name: 'Kolbenova 6', location: [50.109672, 14.505847], size: 'medium', area: 'Vysočany' },
    { id: 'art-07', name: 'Hloubětín 1', location: [50.110383, 14.508192], size: 'medium', area: 'Hloubětín' },
    { id: 'art-08', name: 'Hloubětín 2', location: [50.110508, 14.509567], size: 'large', area: 'Hloubětín' },
    { id: 'art-09', name: 'Vysočany 1', location: [50.110817, 14.505475], size: 'medium', area: 'Vysočany' },
    { id: 'art-10', name: 'Vysočany 2', location: [50.110986, 14.504672], size: 'small', area: 'Vysočany' },
    { id: 'art-11', name: 'Vysočany 3', location: [50.110706, 14.504081], size: 'sticker', area: 'Vysočany' },
    { id: 'art-12', name: 'Vysočany 4', location: [50.110217, 14.503650], size: 'medium', area: 'Vysočany' },
    { id: 'art-13', name: 'Vysočany 5', location: [50.109600, 14.505878], size: 'small', area: 'Vysočany' },
    { id: 'art-14', name: 'Vysočany 6', location: [50.109736, 14.508125], size: 'large', area: 'Vysočany' },
    { id: 'art-15', name: 'Vysočany 7', location: [50.109908, 14.508189], size: 'medium', area: 'Vysočany' },
    { id: 'art-16', name: 'Vysočany 8', location: [50.109517, 14.509489], size: 'sticker', area: 'Vysočany' },
    { id: 'art-17', name: 'Hloubětín 3', location: [50.110383, 14.509569], size: 'medium', area: 'Hloubětín' },
    { id: 'art-18', name: 'Hloubětín 4', location: [50.110369, 14.509569], size: 'small', area: 'Hloubětín' },
    { id: 'art-19', name: 'Hloubětín 5', location: [50.110717, 14.509906], size: 'large', area: 'Hloubětín' },
    { id: 'art-20', name: 'Harfa', location: [50.109428, 14.498994], size: 'medium', area: 'Vysočany' },
    { id: 'art-21', name: 'Harfa 2', location: [50.110039, 14.504783], size: 'small', area: 'Vysočany' },
    // Karlín / Palmovka / Libeň
    { id: 'art-22', name: 'Karlín', location: [50.091603, 14.440019], size: 'large', area: 'Karlín' },
    { id: 'art-23', name: 'Palmovka 1', location: [50.103611, 14.464650], size: 'medium', area: 'Palmovka' },
    { id: 'art-24', name: 'Libeň 1', location: [50.110244, 14.477544], size: 'small', area: 'Libeň' },
    { id: 'art-25', name: 'Palmovka 2', location: [50.103378, 14.472653], size: 'medium', area: 'Palmovka' },
    { id: 'art-26', name: 'Palmovka 3', location: [50.103625, 14.470758], size: 'sticker', area: 'Palmovka' },
    { id: 'art-27', name: 'Palmovka 4', location: [50.103608, 14.470750], size: 'medium', area: 'Palmovka' },
    { id: 'art-28', name: 'Vysočany 9', location: [50.111042, 14.503097], size: 'large', area: 'Vysočany' },
    { id: 'art-29', name: 'Hloubětín 6', location: [50.108322, 14.507908], size: 'medium', area: 'Hloubětín' },
    { id: 'art-30', name: 'Prosek', location: [50.112683, 14.499019], size: 'medium', area: 'Prosek' },
    { id: 'art-31', name: 'Hloubětín 7', location: [50.108422, 14.507728], size: 'small', area: 'Hloubětín' },
    { id: 'art-32', name: 'Vysočany 10', location: [50.109811, 14.504333], size: 'sticker', area: 'Vysočany' },
    { id: 'art-33', name: 'Palmovka 5', location: [50.103458, 14.463819], size: 'medium', area: 'Palmovka' },
    // Poděbrady
    { id: 'art-34', name: 'Poděbrady 1', location: [50.145850, 15.117822], size: 'medium', area: 'Poděbrady' },
    { id: 'art-35', name: 'Poděbrady 2', location: [50.147622, 15.118736], size: 'medium', area: 'Poděbrady' },
    { id: 'art-36', name: 'Poděbrady 3', location: [50.148750, 15.121333], size: 'large', area: 'Poděbrady' },
    { id: 'art-37', name: 'Poděbrady 4', location: [50.148394, 15.123386], size: 'medium', area: 'Poděbrady' },
    { id: 'art-38', name: 'Poděbrady 5', location: [50.148381, 15.124169], size: 'small', area: 'Poděbrady' },
    { id: 'art-39', name: 'Poděbrady 6', location: [50.148353, 15.124464], size: 'large', area: 'Poděbrady' },
    { id: 'art-40', name: 'Poděbrady 7', location: [50.147914, 15.125636], size: 'medium', area: 'Poděbrady' },
    { id: 'art-41', name: 'Poděbrady 8', location: [50.148311, 15.125564], size: 'sticker', area: 'Poděbrady' },
    { id: 'art-42', name: 'Poděbrady 9', location: [50.147572, 15.125086], size: 'medium', area: 'Poděbrady' },
    { id: 'art-43', name: 'Poděbrady 10', location: [50.145967, 15.124406], size: 'large', area: 'Poděbrady' },
    { id: 'art-44', name: 'Poděbrady 11', location: [50.143106, 15.121906], size: 'medium', area: 'Poděbrady' },
    { id: 'art-45', name: 'Poděbrady 12', location: [50.143394, 15.116619], size: 'small', area: 'Poděbrady' },
    // Centrum
    { id: 'art-46', name: 'Centrum 1', location: [50.091525, 14.440142], size: 'medium', area: 'Florenc' },
    { id: 'art-47', name: 'Centrum 2', location: [50.089364, 14.437222], size: 'medium', area: 'Florenc' },
    { id: 'art-48', name: 'Centrum 3', location: [50.087811, 14.432578], size: 'large', area: 'Karlín' },
    { id: 'art-49', name: 'Centrum 4', location: [50.084514, 14.429217], size: 'medium', area: 'Karlín' },
    { id: 'art-50', name: 'Centrum 5', location: [50.083103, 14.426833], size: 'small', area: 'Karlín' },
    { id: 'art-51', name: 'Centrum 6', location: [50.080575, 14.423917], size: 'medium', area: 'Centrum' },
    { id: 'art-52', name: 'Centrum 7', location: [50.079044, 14.422033], size: 'medium', area: 'Centrum' },
    { id: 'art-53', name: 'Centrum 8', location: [50.082172, 14.418336], size: 'large', area: 'Centrum' },
    { id: 'art-54', name: 'Centrum 9', location: [50.081775, 14.416789], size: 'medium', area: 'Centrum' },
    { id: 'art-55', name: 'Centrum 10', location: [50.081547, 14.413769], size: 'medium', area: 'Centrum' },
    { id: 'art-56', name: 'Centrum 11', location: [50.092544, 14.444431], size: 'small', area: 'Florenc' },
    { id: 'art-57', name: 'Vysočany 11', location: [50.110867, 14.516553], size: 'medium', area: 'Vysočany' },
];

// Size to icon size mapping
const SIZES = {
    sticker: 20,
    small: 24,
    medium: 28,
    large: 36
};

// Create chumper icon
const createChomperIcon = (size) => {
    return L.icon({
        iconUrl: '/projects/chomps/chumper.png',
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
        popupAnchor: [0, -size / 2],
        className: 'chomper-marker'
    });
};

// Map center (Prague)
const MAP_CENTER = [50.105, 14.490];
const DEFAULT_ZOOM = 13;

function ChompMap() {
    return (
        <MapContainer
            center={MAP_CENTER}
            zoom={DEFAULT_ZOOM}
            style={{ height: '500px', width: '100%' }}
            scrollWheelZoom={false}
        >
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; OpenStreetMap &copy; CARTO'
            />
            {ART_POINTS.map((point) => (
                <Marker
                    key={point.id}
                    position={point.location}
                    icon={createChomperIcon(SIZES[point.size] || 28)}
                >
                    <Tooltip>
                        <strong>{point.name}</strong><br />
                        {point.area}
                    </Tooltip>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default ChompMap;
