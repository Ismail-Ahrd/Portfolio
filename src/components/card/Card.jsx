import { motion } from "framer-motion";
import "./card.css";

export default function Card({ item }) {
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
            Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
            tempore dolor in, accusantium laudantium accusamus.
            </p>

            <div className="flex icons">
            <div style={{ gap: "11px" }} className="flex">
                <div className="icon-link"></div>
                <div className="icon-github"></div>
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
