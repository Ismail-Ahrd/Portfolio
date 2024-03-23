import { useEffect, useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { categories } from "./category";
import { AnimatePresence, motion } from "framer-motion";
import Card from "../card/Card";

const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  useEffect(() => {
    console.log(arr)
  }, [])

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    if (buttonCategory == "all") {
      setArr(myProjects)
    } else {
      const newArr = myProjects.filter((item) => {
        const ZZZ = item.category.find((myItem) => {
          return myItem === buttonCategory;
        });

        return ZZZ === buttonCategory;
      });

      setArr(newArr);
    }
    
  };

  return (
    <main id="projects" className="flex">
      <section className="flex  left-section">
        {categories.map((category) => (
          <button
            onClick={() => {
              handleClick(category.symbol);
            }}
            className={currentActive === category.symbol ? "active" : null}
            key={category.name}
          >
            {category.name}
          </button>
        ))}
      </section>

      <section className=" flex right-section">
        <AnimatePresence>
          {arr.map((item, i) => {
            return (
              <Card item={item} key={i}/>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
