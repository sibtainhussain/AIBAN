import EpisodeCard from './EpisodeCard';
import WaveLine from './WaveLine';
import classes from './styles.module.css';

const NumLines = 80;
const WidthFactorMap = [
  1, 0.2, 0.4, 0.8, 0.6, 0.2, 1, 0.7, 0.5, 0.65, 0.2, 0.4, 0.3, 1, 0.3, 0.3, 0.4, 0.8, 0.5, 0.85,
  0.8, 0.5, 0.8, 0.4, 1, 0.6, 0.3, 1, 0.5, 0.2, 0.3, 0.55, 0.3, 0.2, 0.7, 0.9, 0.4, 0.3, 0.25, 0.2,
  0.7, 0.3, 0.4, 0.8, 1, 0.9, 0.7, 0.2, 0.9, 0.35, 0.8, 0.95, 0.5, 0.5, 0.4, 0.8, 1, 0.4, 0.5, 0.6,
  0.8, 0.9, 0.6, 0.4, 0.8, 0.9, 0.5, 0.7, 0.8, 0.7, 0.2, 0.4, 0.6, 0.4, 0.8, 0.7, 0.8, 0.6, 0.4,
  0.3,
];

const EpisodesList = () => {
  return (
    <div className={classes.gridContainer}>
      <div className={classes.waveWrapperGrid}>
        {[...new Array(NumLines)].map((_, i) => {
          return <WaveLine key={i} widthFactor={WidthFactorMap[i % WidthFactorMap.length]} />;
        })}
      </div>
      <EpisodeCard
        style={{
          gridRow: '1 / 2',
        }}
      />
      <EpisodeCard
        flip
        style={{
          gridRow: '2 / 3',
        }}
      />
      <EpisodeCard
        style={{
          gridRow: '3 / 4',
        }}
      />
    </div>
  );
};

export default EpisodesList;
