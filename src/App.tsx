import Navbar from './navbar';
import Hero from './hero';
import Card from './Card';
import data from './data';

const App = () => {
  const cards = data.map((exp) => {
    return (
      <Card
        key={exp.id}
        img={exp.coverImg}
        rating={exp.stats.rating}
        comments={exp.stats.reviewCount}
        location={exp.location}
        discription={exp.description}
        price={exp.price}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="flex">{cards}</div>
    </div>
  );
};

export default App;
