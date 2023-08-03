// Types
import { useState } from 'react';
type CustomGeolocationPosition = {
  coords: {
    latitude: number;
    longitude: number;
    altitude: number | null;
    accuracy: number;
    altitudeAccuracy: number | null;
    heading: number | null;
    speed: number | null;
  };
  timestamp: number;
};

interface PostType {
  lat: number;
  long: number;
}

const useGeoLocation = () => {
  // States
  const [load, setLoad] = useState(false);
  const [post, setPost] = useState<PostType>({} as PostType);
  const [error, setError] = useState('');
  const [countClick, setCountClick] = useState(0);
  // Handle Get Position
  const handleGetPosition = (): void => {
    setCountClick((prev) => prev + 1);
    setLoad(true);
    // Set geolocation
    navigator.geolocation.getCurrentPosition(
      (pos: CustomGeolocationPosition) => {
        setLoad(false);
        setError('');
        setPost({ lat: pos.coords.latitude, long: pos.coords.longitude });
      },
      (error: any) => {
        setLoad(false);
        setError(error.message);
      }
    );
  };
  return { load, error, post, countClick, handleGetPosition };
};

export default useGeoLocation;
