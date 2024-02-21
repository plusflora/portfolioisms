import './App.css'
import MyTabs from './components/tabgroup'

const App = () => {
  return (
    <div className="container">
      <section className='m-12 rounded flex flex-col items-center justify-start bg-green-400 text-center text-3xl p-12 md:p-14 lg:p-16 xl:p-20'>
        <p className='text-justify' style={{ marginBottom: '10px' }}>Vince Bouquet</p>
        <MyTabs className='p-0'/>
      </section>
    </div>
  );
};

export default App