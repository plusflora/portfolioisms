import './App.css'
import MyTabs from './components/tabgroup'

const App = () => {
  return (
    <div className="container">
      <section className='m-12 rounded flex flex-col items-center justify-start text-center text-3xl p-12 md:p-14 lg:p-16 xl:p-20'>
        <section>
          <p className='text-right' style={{ marginBottom: '0px', fontSize: '1.5rem' }}>Vince Bouquet</p>
          <MyTabs className=""/>
        </section>
      </section>
    </div>
  );
};

export default App