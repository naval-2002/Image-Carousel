import { useState } from "react";
import "./App.css";

function App() {
  const [current, setCurrent] = useState(0);

  const images = [
    "https://www.shutterstock.com/image-photo/white-sands-sandtrap-rolling-greens-600w-2162092203.jpg",
    "https://www.shutterstock.com/image-photo/st-andrews-scotland-united-kingdom-600w-1804576861.jpg",
    "https://www.shutterstock.com/image-photo/businessman-holding-global-network-data-600w-2021718353.jpg",
    "https://www.shutterstock.com/image-photo/woman-hands-holding-earth-circle-600w-1787885105.jpg",
    "https://www.shutterstock.com/image-photo/beautiful-higan-cherry-tree-blossom-600w-402970669.jpg",
    "https://www.shutterstock.com/image-photo/spring-cherry-blossoms-bloom-argyle-600w-1022689897.jpg",
  ];

  const previous = () => {
    if (current === 0) {
      setCurrent(images.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };
  const forward = () => {
    if (current === images.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    <div className="App">
      <h2 className="heading">Image Carousel</h2>
      <div>
        <div className="left" onClick={() => previous()}>
          ⬅️
        </div>
        <div className="right" onClick={() => forward()}>
          ➡️
        </div>

        <div className="image-cont">
          {images.map((val, idx) => {
            if (idx === current) {
              return <img className="image" key={idx} src={val}></img>;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
