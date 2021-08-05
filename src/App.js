import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
  'id' :1,
  'image':'https://placeimg.com/64/64/1',
  'name' : 'kimseungmok',
  'birthday' : '19950823',
  'gender' : 'man',
  'job' : 'programmer'
},
{
  'id' :2,
  'image':'https://placeimg.com/64/64/2',
  'name' : 'yuna',
  'birthday' : '19970815',
  'gender' : 'woman',
  'job' : 'services'
},
{
  'id' :3,
  'image':'https://placeimg.com/64/64/3',
  'name' : 'mi-tan',
  'birthday' : '19970000',
  'gender' : 'woman',
  'job' : 'services'
},
]


function App() {
  return (
    <div>
        {
          customers.map(customerInfo => {
            return(
            <Customer
              key={customerInfo.id}

              id={customerInfo.id}
              image={customerInfo.image}
              name ={customerInfo.name}
              birthday ={customerInfo.birthday}
              gender ={customerInfo.gender}
              job ={customerInfo.job}
            />
            );
          })
        }
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
    </div>
  );
}

export default App;
