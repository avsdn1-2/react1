import logo from './logo.svg';
import './App.css';

import data from './news.js';


function App() {
    require('./dateFormat.js');
    let news = require('./news.json');
    const ar = ['1','2','3'];
    const isShow = true;
    const color = 'yellow';
    //console.log(news[0]);

  return (
    <div className="App">
        <div>
        {
            data.map((el,key) =>
                <div key={el.id} style={{width:'1000px',border:'1px solid green', margin:'0 auto 5px auto'}}>
                    <div style={{width:'43%',border:'1px solid blue',float:'left'}}>
                        {el.isSpecial == true? <div style={{color: 'red'}}>Special</div> :<div></div>}
                        {el.link == null? <div>Заголовок: {el.title}</div> : <div>Заголовок: <a href={el.link}>{el.title}</a></div>}
                        <div>Краткое содержание</div>
                        <div dangerouslySetInnerHTML={{__html: el.content}} />
                        <div>Дата: {el.dateCreated.substr(0,10)}</div>
                        <div>Автор: {el.author}</div>

                        { el.categories.length > 0 && <div>Категории</div> }
                        {
                            el.categories.length > 0 &&  el.categories.map((category,i) =>
                            <p>{category.name}</p>)
                        }

                    </div>

                    { el.photo !== null && <div style={{width:'55%',float:'right'}}><img src={el.photo}/></div>}
                    <div style={{clear:'both'}}></div>
                </div>
            )
        }
        </div>
    </div>
  );
}

export default App;
