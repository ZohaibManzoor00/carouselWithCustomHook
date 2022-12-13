import './App.css';
import Card from "./components/Card"
import Carousel from './components/Carousel';

const items = [
  {
    imgUrl: "https://cdn.shopify.com/s/files/1/0163/6227/4916/articles/WEB_LY2_0240_2048x.jpg?v=1624065212",
    title: "The Hoonicorn"
  },
  {
    imgUrl: "https://www.cnet.com/a/img/resize/14e0051ec7c4e3cf5a4eec3755347773493199f3/hub/2016/09/13/02677a7a-0070-4a9c-80f4-828acd50675b/gymkhana-9.jpg?auto=webp&fit=crop&height=675&width=1200",
    title: "The Gymkhana"
  },
  {
    imgUrl: "https://s.yimg.com/os/creatr-uploaded-images/2022-10/ca777390-547b-11ed-9be9-f8eae821052b",
    title: "The Electrikhana"
  },
  {
    imgUrl: "https://steamuserimages-a.akamaihd.net/ugc/777349793886804170/A763270FBFF27AA44EC9902626690D13DC791C6D/?imw=1024&imh=576&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
    title: "The Hoonigan"
  },
  {
    imgUrl: "https://themodifiedmonsters.com/wp-content/uploads/2021/01/Photo-shared-by-Shone-Poly-on.jpg",
    title: "The BMW 316i"
  },

]

function App() {
  return (
    <div className="App">
      <Carousel arrOfItems={items} component={Card} />
    </div>
  );
}

export default App;
