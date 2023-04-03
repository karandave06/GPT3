
import {  Blog, Header,Gpt,Feature,Possibility,Footer} from './containers/index'
import {Navbar,Brand,Cta} from './Coponents/index'
import './app.scss'

function App() {

  return (
    <div className='app'>

<div className='graident_bg'>
<Navbar />
<Header />

</div>

<Brand />
<Gpt/>
<Feature />
<Possibility />
<Cta />
<Blog />
<Footer />

  
    </div>
  )
}

export default App
