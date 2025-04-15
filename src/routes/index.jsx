import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Services from '../pages/Services';
import About from '../pages/About';
import Contact from '../pages/Contact';
import SmallCell from '../pages/Services/SmallCell';
import SitesConstruction from '../pages/Services/SitesConstruction';
import LocationAcquisition from '../pages/Services/LocationAcquisition';
import Licensing from '../pages/Services/Licensing';
import Maintenance from '../pages/Services/Maintenance';
import TechnicalConsulting from '../pages/Services/TechnicalConsulting';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'services/small-cell',
        element: <SmallCell />,
      },
      {
        path: 'services/sites-construction',
        element: <SitesConstruction />,
      },
      {
        path: 'services/location-acquisition',
        element: <LocationAcquisition />,
      },
      {
        path: 'services/licensing',
        element: <Licensing />,
      },
      {
        path: 'services/maintenance',
        element: <Maintenance />,
      },
      {
        path: 'services/technical-consulting',
        element: <TechnicalConsulting />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);