import { useCallback, useEffect, useState } from 'react';
import MinyakItem from '../../molecules/MinyakItem';
import { getFeaturedGame } from '../../../services/pelanggan';
import { MinyakItemTypes } from '../../../services/data-types';

export default function FeaturedGame() {
  const [kardusList, setKardusList] = useState([]);

  const getFeatureGameList = useCallback(async () => {
    const data = await getFeaturedGame();
    setKardusList(data);
  }, [getFeaturedGame]);

  useEffect(() => {
    getFeatureGameList();
  }, []);

  const API_IMG = process.env.NEXT_PUBLIC_IMG;

  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Layanan Kami
          <br />
          {' '}
          Minyak Beku
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-around gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {kardusList.map((item: MinyakItemTypes) => (
            <MinyakItem
              key={item._id}
              title={item.name}
              category={item.category.name}
              thumbnail={`${API_IMG}/${item.thumbnail}`}
              id={item._id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
