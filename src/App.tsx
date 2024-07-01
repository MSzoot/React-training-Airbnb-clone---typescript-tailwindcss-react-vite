import Navbar from './navbar';
import Hero from './hero';
import Card from './card';
import data from './data';

const App = () => {
  const cards = data.map((exp) => {
    return <Card key={exp.id} item={exp} />;
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
