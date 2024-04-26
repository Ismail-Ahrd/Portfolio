import { motion } from "framer-motion";
import "./card.css";

export default function Card({ item }) {
  const truncateDescription = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  };
  return (
    <motion.article
        layout
        initial={{ transform: "scale(0.4)" }}
        animate={{ transform: "scale(1)" }}
        transition={{ type: "spring", damping: 8, stiffness: 50 }}
        key={item.imgPath}
        className="  card"
        >
        <img width={266} src={item.imgPath} alt="" />

        <div style={{ width: "266px" }} className="box">
            <h1 className="title">{item.projectTitle}</h1>
            <p className="sub-title">
            {truncateDescription(
              item.description ||
                "Lorem ipsum dolor sit amet consectetur elit adipisicing . Extempore dolor in, accusantium laudantium accusamus.",
              120 // Maximum length for description before truncation
            )}
            </p>

            <div className="flex icons">
              <div style={{ gap: "11px" }} className="flex">
                  <a className="icon-link" href={item.link} target="_blank" />
                  <a className="icon-github" href={item.github} target="_blank"/>
              </div>

              <a className="link flex" href="">
                  more
                  <span
                  style={{ alignSelf: "end" }}
                  className="icon-arrow-right"
                  ></span>
              </a>
            </div>
        </div>
    </motion.article>
  )
}
