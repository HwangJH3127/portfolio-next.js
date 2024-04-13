import React from "react";
import { portTitle, portText } from "@/constants";
import Image from "next/image";

const Port = () => {
  return (
    <section id="port">
      <div className="port__inner">
        <h2 className="port__title">
          {portTitle.title[0]} <em>{portTitle.title[1]}</em>
        </h2>
        <div className="port__wrap">
          {portText.map((port, key) => (
            <article className={`port__item p${key + 1}`} key={key}>
              <span className="num">{port.num}</span>
              <a href={port.code} target="_blank" className="img">
                <Image
                  src={port.img}
                  alt={port.name}
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                />
              </a>
              <h3 className="title">{port.title}</h3>
              <p className="desc">{port.desc}</p>
              <a href={port.view} target="_blank" className="site">
                사이트 보기
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Port;
